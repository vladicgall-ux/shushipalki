// /api/bot — вебхук Telegram-бота.
// На /start просит поделиться контактом (если ещё не делился) и только
// после этого показывает кнопку запуска Mini App — без контакта приложение
// не предлагается.
// Требует переменные окружения: BOT_TOKEN, APP_URL (полный https-адрес деплоя,
// например https://shushipalki.vercel.app). Для запоминания, кто уже
// авторизован (чтобы не спрашивать контакт повторно), нужны также
// CF_ACCOUNT_ID, CF_D1_DATABASE_ID, CF_API_TOKEN — без них бот просто
// спрашивает контакт при каждом /start.

const { d1Query } = require('./_lib');

const TELEGRAM_API = (token) => `https://api.telegram.org/bot${token}`;
const BANNER_URL = 'https://shushipalki.vercel.app/assets/hero-banner.jpg';

function sendMessage(token, payload) {
  return fetch(`${TELEGRAM_API(token)}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

function sendPhoto(token, payload) {
  return fetch(`${TELEGRAM_API(token)}/sendPhoto`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

async function isAuthorized(userId) {
  try {
    const rows = await d1Query('SELECT 1 FROM bot_users WHERE telegram_user_id = ?', [String(userId)]);
    return rows.length > 0;
  } catch (e) {
    return false; // D1 не настроен или недоступен — считаем неавторизованным
  }
}

async function saveAuthorized(userId, phone, firstName) {
  try {
    await d1Query(
      `INSERT INTO bot_users (telegram_user_id, phone, first_name, authorized_at)
       VALUES (?, ?, ?, ?)
       ON CONFLICT(telegram_user_id) DO UPDATE SET phone = excluded.phone, first_name = excluded.first_name`,
      [String(userId), phone || '', firstName || '', new Date().toISOString()]
    );
  } catch (e) {
    console.error('D1 bot_users insert failed:', e.message);
  }
}

function askForContact(token, chatId) {
  return sendPhoto(token, {
    chat_id: chatId,
    photo: BANNER_URL,
    caption:
      '👋 Добро пожаловать в «Суши Палки»!\n\n' +
      'Чтобы открыть меню и оформлять заказы, поделитесь, пожалуйста, своим контактом — это нужно для связи по заказу.',
    reply_markup: {
      keyboard: [[{ text: '📱 Поделиться контактом', request_contact: true }]],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
}

function sendMenuButton(token, chatId, appUrl) {
  return sendPhoto(token, {
    chat_id: chatId,
    photo: BANNER_URL,
    caption:
      '✅ Спасибо! Теперь вам доступно меню «Суши Палки».\n\n' +
      'Роллы, пицца и снэки с доставкой по Кунашаку и району.\n\n' +
      'Откройте меню и оформите заказ прямо здесь, в Telegram 👇',
    reply_markup: {
      inline_keyboard: [[
        { text: '🍣 Открыть меню', web_app: { url: appUrl } },
      ]],
    },
  });
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(200).send('ok');
    return;
  }

  const BOT_TOKEN = process.env.BOT_TOKEN;
  const APP_URL = process.env.APP_URL || 'https://shushipalki.vercel.app';

  if (!BOT_TOKEN) {
    res.status(200).send('ok');
    return;
  }

  let update = req.body;
  if (typeof update === 'string') {
    try { update = JSON.parse(update); } catch (e) { update = {}; }
  }

  const message = update && update.message;

  if (message && message.contact) {
    // Пользователь поделился контактом — принимаем только свой собственный (не чужую визитку).
    const fromId = message.from && message.from.id;
    const contact = message.contact;
    if (contact.user_id && String(contact.user_id) === String(fromId)) {
      await saveAuthorized(fromId, contact.phone_number, message.from.first_name);
      await sendMenuButton(BOT_TOKEN, message.chat.id, APP_URL);
    } else {
      await sendMessage(BOT_TOKEN, {
        chat_id: message.chat.id,
        text: 'Нужен именно ваш контакт — нажмите кнопку «Поделиться контактом».',
      });
    }
    res.status(200).send('ok');
    return;
  }

  if (message && message.text) {
    const chatId = message.chat.id;
    const userId = message.from && message.from.id;
    const text = message.text.trim();

    if (text === '/start' || text.startsWith('/start ')) {
      const authorized = userId && await isAuthorized(userId);
      if (authorized) {
        await sendMenuButton(BOT_TOKEN, chatId, APP_URL);
      } else {
        await askForContact(BOT_TOKEN, chatId);
      }
    }
  }

  res.status(200).send('ok');
};
