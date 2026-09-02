// /api/bot — вебхук Telegram-бота.
// Обрабатывает /start и показывает кнопку запуска Mini App.
// Требует переменные окружения: BOT_TOKEN, APP_URL (полный https-адрес деплоя, например https://vkusnoedem.vercel.app)

const TELEGRAM_API = (token) => `https://api.telegram.org/bot${token}`;

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(200).send('ok');
    return;
  }

  const BOT_TOKEN = process.env.BOT_TOKEN;
  const APP_URL = process.env.APP_URL;

  if (!BOT_TOKEN) {
    res.status(200).send('ok');
    return;
  }

  let update = req.body;
  if (typeof update === 'string') {
    try { update = JSON.parse(update); } catch (e) { update = {}; }
  }

  const message = update && update.message;
  if (message && message.text) {
    const chatId = message.chat.id;
    const text = message.text.trim();

    if (text === '/start' || text.startsWith('/start ')) {
      await fetch(`${TELEGRAM_API(BOT_TOKEN)}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text:
            '👋 Добро пожаловать в «Вкусно едем»!\n\n' +
            'Пицца · Суши · Шаурма · Бургеры � доставкой по Кунашаку и району

Ймоя во Telegram 👇',
          reply_markup: {
            inline_keyboard: [[
              { text: '🍕 Открыть меню', web_app: { url: APP_URL || 'https://vkusnoedem.vercel.app' } },
            ]],
          },
        }),
      });
    }
  }

  res.status(200).send('ok');
};
