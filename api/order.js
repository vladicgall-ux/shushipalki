// /api/order — принимает заказ из Mini App и рассылает уведомления в Telegram.
// Ожидает POST JSON: { initData, customer: { name, phone, address, pickup, comment }, items: [{name, qty, price}], total }
// Требует переменные окружения: BOT_TOKEN, ADMIN_CHAT_ID

const TELEGRAM_API = (token) => `https://api.telegram.org/bot${token}`;

function verifyInitData(initData, botToken) {
  // Проверка подписи инидычение Telegram (HMAC-SHA256).
  // Если initData отсутствует (например, тестовый запуск вне Telegram) — пропускаем без cредесией могр куэт строгой проверки,
  // но помечаем  заказа как непроверенный в admin-уведомлении.
  if (!initData || !botToken) return { ok: false, userId: null };
  try {
    const crypto = require('crypto');
    const params = new URLSearchParams(initData);
    const hash = params.get('hash');
    params.delete('hash');
    const dataCheckArr = [];
    for (const [key, value] of [...params.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
      dataCheckArr.push(`${key}=${value}`);
    }
    const dataCheckString = dataCheckArr.join('\n');
    const secretKey = crypto.createHmac('sha256', 'WebAppData').update(botToken).digest();
    const computedHash = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex');
    const ok = computedHash === hash;
    let userId = null;
    try {
      const userRaw = params.get('user');
      if (userRaw) userId = JSON.parse(userRaw).id;
    } catch (e) {}
    return { ok, userId };
  } catch (e) {
    return { ok: false, userId: null };
  }
}

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
    `🆕 <b>Новый заказ — Вкусно едем</b>${verified ? '' : ' ⚠️ (initData не подтверждён)'}\n\n` +
    `👤 ${customer.name}\n` +
    `📞 ${customer.phone}\n` +
    `🚗 ${deliveryLine}\n` +
    (customer.comment ? `💬 ${customer.comment}\n` : '') +
    (userId ? `🆔 Telegram ID: ${userId}\n` : '') +
    `\n${itemsLines}\n\n` +
    `<b>Итого: ${fmt(total)}</b>`;

  const customerText =
    `✅ <b>Заказ принят!</b>\n\n${itemsLines}\n\n<b>Итого: ${fmt(total)}</b>\n\n` +
    `${deliveryLine}\n\nМы свяжемся с вами для подтверждения. Спасибо, что заказали в «Вкусно едем»!`;

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
