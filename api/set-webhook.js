// /api/set-webhook — одноразовый эндпоинт для регистрации вебхука бота.
// Открыть один раз в браузере после деплоя: https://<ваш-домен>/api/set-webhook
// Требует переменные окружения: BOT_TOKEN, APP_URL
//
// Кнопка меню намеренно НЕ ставится на web_app: она открывала бы приложение
// напрямую, в обход запроса контакта в /start. Меню оставлено стандартным
// (список команд) — доступ в приложение идёт только через кнопку в /start,
// которая появляется лишь после того, как пользователь поделился контактом.

const TELEGRAM_API = (token) => `https://api.telegram.org/bot${token}`;

module.exports = async (req, res) => {
  const BOT_TOKEN = process.env.BOT_TOKEN;
  const APP_URL = process.env.APP_URL;

  if (!BOT_TOKEN || !APP_URL) {
    res.status(500).json({ ok: false, error: 'Задайте BOT_TOKEN и APP_URL в переменных окружения Vercel' });
    return;
  }

  try {
    const webhookRes = await fetch(`${TELEGRAM_API(BOT_TOKEN)}/setWebhook`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: `${APP_URL}/api/bot` }),
    });
    const webhookData = await webhookRes.json();

    const menuRes = await fetch(`${TELEGRAM_API(BOT_TOKEN)}/setChatMenuButton`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ menu_button: { type: 'commands' } }),
    });
    const menuData = await menuRes.json();

    res.status(200).json({ ok: true, webhook: webhookData, menuButton: menuData });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e) });
  }
};
