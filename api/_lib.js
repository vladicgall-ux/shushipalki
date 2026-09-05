// Общие хелперы для serverless-функций: проверка Telegram initData и запросы к Cloudflare D1.

function verifyInitData(initData, botToken) {
  // Проверка подписи initData (HMAC-SHA256) по алгоритму Telegram.
  // Без initData или без BOT_TOKEN проверить нечего — считаем неподтверждённым.
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

async function d1Query(sql, params = []) {
  const accountId = process.env.CF_ACCOUNT_ID;
  const databaseId = process.env.CF_D1_DATABASE_ID;
  const token = process.env.CF_API_TOKEN;
  if (!accountId || !databaseId || !token) {
    throw new Error('D1 не настроен: нужны CF_ACCOUNT_ID, CF_D1_DATABASE_ID, CF_API_TOKEN');
  }
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database/${databaseId}/query`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sql, params }),
    }
  );
  const data = await res.json();
  if (!data.success) {
    const msg = (data.errors && data.errors[0] && data.errors[0].message) || 'D1 query failed';
    throw new Error(msg);
  }
  return data.result[0].results;
}

module.exports = { verifyInitData, d1Query };
