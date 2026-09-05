// /api/order — принимает заказ из Mini App, сохраняет его в историю (Cloudflare D1)
// и рассылает уведомления в Telegram.
// Ожидает POST JSON: { initData, customer: { name, phone, address, pickup, comment }, items: [{name, qty, price}], total }
// Требует переменные окружения: BOT_TOKEN, ADMIN_CHAT_ID
// Для истории заказов (необязательно, но без этого «Мои заказы» не работают):
// CF_ACCOUNT_ID, CF_D1_DATABASE_ID, CF_API_TOKEN

const { verifyInitData, d1Query } = require('./_lib');

const TELEGRAM_API = (token) => `https://api.telegram.org/bot${token}`;

async function sendTelegramMessage(token, chatId, text) {
  const res = await fetch(`${TELEGRAM_API(token)}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
  });
  return res.json();
}

function fmt(n) {
  return Number(n).toLocaleString('ru-RU') + ' ₽';
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  const BOT_TOKEN = process.env.BOT_TOKEN;
  const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID;

  if (!BOT_TOKEN || !ADMIN_CHAT_ID) {
    res.status(500).json({ ok: false, error: 'BOT_TOKEN / ADMIN_CHAT_ID не настроены на сервере' });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }

  const { initData, customer, items, total } = body || {};

  if (!items || !items.length || !customer || !customer.name || !customer.phone) {
    res.status(400).json({ ok: false, error: 'Не хватает данных заказа (имя, телефон, товары обязательны)' });
    return;
  }

  const { ok: verified, userId } = verifyInitData(initData, BOT_TOKEN);

  const itemsLines = items.map(i => `• ${i.name} × ${i.qty} — ${fmt(i.price * i.qty)}`).join('\n');
  const deliveryLine = customer.pickup
    ? 'Самовывоз'
    : `Доставка: ${customer.address || 'адрес не указан'}`;

  const adminText =
    `🆕 <b>Новый заказ — Суши Палки</b>${verified ? '' : ' ⚠️ (initData не подтверждён)'}\n\n` +
    `👤 ${customer.name}\n` +
    `📞 ${customer.phone}\n` +
    `🚗 ${deliveryLine}\n` +
    (customer.comment ? `💬 ${customer.comment}\n` : '') +
    (userId ? `🆔 Telegram ID: ${userId}\n` : '') +
    `\n${itemsLines}\n\n` +
    `<b>Итого: ${fmt(total)}</b>`;

  const customerText =
    `✅ <b>Заказ принят!</b>\n\n${itemsLines}\n\n<b>Итого: ${fmt(total)}</b>\n\n` +
    `${deliveryLine}\n\nМы свяжемся с вами для подтверждения. Спасибо, что заказали в «Суши Палки»!`;

  // Сохраняем заказ в историю (для экрана «Мои заказы»), только если Telegram-пользователь
  // подтверждён подписью initData — иначе id можно подделать. Сбой записи в БД не должен
  // мешать оформлению заказа: уведомления в Telegram — обязательная часть, история — нет.
  if (verified && userId) {
    try {
      await d1Query(
        `INSERT INTO orders (telegram_user_id, created_at, customer_name, customer_phone, customer_address, pickup, comment, items_json, total)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          String(userId),
          new Date().toISOString(),
          customer.name,
          customer.phone,
          customer.address || '',
          customer.pickup ? 1 : 0,
          customer.comment || '',
          JSON.stringify(items),
          total,
        ]
      );
    } catch (e) {
      console.error('D1 insert failed:', e.message);
    }
  }

  try {
    await sendTelegramMessage(BOT_TOKEN, ADMIN_CHAT_ID, adminText);
    if (userId) {
      await sendTelegramMessage(BOT_TOKEN, userId, customerText);
    }
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, error: 'Не удалось отправить уведомление в Telegram' });
  }
};
