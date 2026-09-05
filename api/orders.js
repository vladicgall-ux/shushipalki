// /api/orders — отдаёт историю заказов текущего Telegram-пользователя.
// Ожидает POST JSON: { initData }
// Требует переменные окружения: BOT_TOKEN (для проверки initData),
// CF_ACCOUNT_ID, CF_D1_DATABASE_ID, CF_API_TOKEN (для чтения из истории)

const { verifyInitData, d1Query } = require('./_lib');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  const BOT_TOKEN = process.env.BOT_TOKEN;
  if (!BOT_TOKEN) {
    res.status(500).json({ ok: false, error: 'BOT_TOKEN не настроен на сервере' });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }

  const { ok: verified, userId } = verifyInitData(body && body.initData, BOT_TOKEN);
  if (!verified || !userId) {
    res.status(401).json({ ok: false, error: 'Откройте приложение из Telegram, чтобы видеть историю заказов' });
    return;
  }

  try {
    const rows = await d1Query(
      `SELECT id, created_at, customer_address, pickup, comment, items_json, total
       FROM orders WHERE telegram_user_id = ? ORDER BY created_at DESC LIMIT 50`,
      [String(userId)]
    );
    const orders = rows.map(r => ({
      id: r.id,
      createdAt: r.created_at,
      address: r.customer_address,
      pickup: !!r.pickup,
      comment: r.comment,
      items: JSON.parse(r.items_json),
      total: r.total,
    }));
    res.status(200).json({ ok: true, orders });
  } catch (e) {
    res.status(500).json({ ok: false, error: 'Не удалось загрузить историю заказов' });
  }
};
