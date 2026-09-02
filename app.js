// ===== Данные меню =====
// Названия и цены — с открытой страницы сообщества «Вкусно едем» (vk.ru/vkusnoedem).
const CATEGORIES = [
  { key: 'pizza',   title: 'Пицца' },
  { key: 'rolls',   title: 'Роллы' },
  { key: 'sets',    title: 'Сеты' },
  { key: 'burgers', title: 'Бургеры' },
  { key: 'shaurma', title: 'Шаурма и бурито' },
  { key: 'drinks',  title: 'Напитки и соусы' },
];

const PRODUCTS = [
  // Пицца
  { id: 1, cat: 'pizza', name: 'Пепперони', price: 550, emoji: '🍕',
    desc: 'Салями, сыр, томатный соус. Маленькая — 350 ₽, большая — 550 ₽.',
    photo: 'https://sun9-57.vkuserphoto.ru/impg/c845523/v845523306/41333/HZsESgEa93Q.jpg?size=400x400&quality=95&background=ffffff&crop=0.066,0,0.869,1&sign=5c5b310347ac2f969ac02e0c5fca05cd&c_uniq_tag=f84WijBJf1CHt_H7xueB66tp4UspyHEXuOv91ESYgmc&type=market_thumb' },
  { id: 3, cat: 'pizza', name: 'Пепперони с беконом', price: 550, emoji: '🍕',
    desc: 'Пикантная пепперони, копчёный бекон и сыр моццарелла.' },
  { id: 23, cat: 'pizza', name: 'Грибная', price: 550, emoji: '🍄',
    desc: 'Шампиньоны, сыр моццарелла и томатный соус.' },

  // Роллы
  { id: 10, cat: 'rolls', name: '«Запечённый риф» с креветкой и крабом', price: 490, emoji: '🍤',
    desc: 'Запечённый ролл с креветкой, крабом и соусом унаги.' },
  { id: 11, cat: 'rolls', name: 'Темпура мини', price: 900, emoji: '🍣',
    desc: 'Хрустящие роллы в темпурной панировке, порция мини.' },
  { id: 12, cat: 'rolls', name: 'Техас', price: 395, emoji: '🍣',
    desc: 'Запечённый ролл с сыром и пикантной начинкой.' },
  { id: 16, cat: 'rolls', name: 'Харумаки Сяке', price: 420, emoji: '🍣',
    desc: 'Хрустящий ролл с лососем во фритюрной обёртке.' },
  { id: 17, cat: 'rolls', name: 'Харумаки Кани', price: 400, emoji: '🍣',
    desc: 'Хрустящий ролл с крабом во фритюрной обёртке.' },
  { id: 18, cat: 'rolls', name: 'Дасоку', price: 410, emoji: '🍣',
    desc: 'Запечённый ролл в темпурной панировке.' },
  { id: 19, cat: 'rolls', name: 'Куба', price: 395, emoji: '🍣',
    desc: 'Запечённый ролл с нежной сливочной начинкой.' },
  { id: 20, cat: 'rolls', name: 'Тайто', price: 430, emoji: '🍣',
    desc: 'Запечённый ролл с добавлением сыра унаги.' },
  { id: 22, cat: 'rolls', name: 'Лава', price: 400, emoji: '🌶️',
    desc: 'Острый ролл с соусом спайси и стружкой чили.' },
  { id: 24, cat: 'rolls', name: 'Тори Темпура', price: 380, emoji: '🍣',
    desc: 'Ролл с курицей темпура и сливочным соусом.' },
  { id: 25, cat: 'rolls', name: 'Гранд Мастер', price: 460, emoji: '🍣',
    desc: 'Фирменный запечённый ролл с несколькими начинками.' },

  // Сеты
  { id: 2, cat: 'sets', name: 'Вкусный сет', price: 3350, emoji: '🍱',
    desc: 'Сборный сет роллов — хватит на компанию из 3–4 человек.' },
  { id: 4, cat: 'sets', name: 'Супер сет', price: 3150, emoji: '🍱',
    desc: 'Большой набор фирменных роллов на любой вкус.' },
  { id: 6, cat: 'sets', name: 'Компания сет', price: 2860, emoji: '🍱',
    desc: 'Сет для дружеской компании — классика и запечённые роллы.' },
  { id: 8, cat: 'sets', name: 'Мега сет', price: 3700, emoji: '🍱',
    desc: 'Самый большой сет меню — максимум роллов в одной коробке.' },

  // Бургеры
  { id: 5, cat: 'burgers', name: 'Чизбургер', price: 330, emoji: '🍔',
    desc: 'Сочная котлета, сыр чеддер, свежие овощи, фирменный соус.' },
  { id: 13, cat: 'burgers', name: 'Бургер Халапеньо', price: 330, emoji: '🌶️',
    desc: 'Котлета, перец халапеньо, сыр и острый соус.' },

  // Шаурма и бурито
  { id: 7, cat: 'shaurma', name: 'Шаурма классическая', price: 240, emoji: '🌯',
    desc: 'Курица, свежие овощи и фирменный соус в мягком лаваше.' },
  { id: 14, cat: 'shaurma', name: 'Сочный Мо', price: 390, emoji: '🌯',
    desc: 'Плотная шаурма с двойной порцией начинки.' },
  { id: 21, cat: 'shaurma', name: 'Бурито с беконом', price: 360, emoji: '🌯',
    desc: 'Буррито с курицей, беконом, овощами и соусом.' },

  // Напитки и соусы
  { id: 9, cat: 'drinks', name: 'Чай авторский', price: 150, emoji: '🍵',
    desc: 'Фирменный чай собственной заварки.' },
  { id: 15, cat: 'drinks', name: 'Васаби', price: 10, emoji: '🟢',
    desc: 'Порция васаби к роллам.' },
];

// ===== Telegram WebApp =====
const tg = window.Telegram ? window.Telegram.WebApp : null;
if (tg) {
  tg.ready();
  tg.expand();
  try { tg.setHeaderColor('#16110D'); } catch (e) {}
  try { tg.setBackgroundColor('#16110D'); } catch (e) {}
}

// ===== Состояние корзины =====
let cart = {}; // { productId: qty }

function loadCart() {
  try {
    const raw = localStorage.getItem('vkusnoedem_cart');
    if (raw) cart = JSON.parse(raw);
  } catch (e) { cart = {}; }
}
function saveCart() {
  try { localStorage.setItem('vkusnoedem_cart', JSON.stringify(cart)); } catch (e) {}
}

function cartQty(id) { return cart[id] || 0; }
function cartCount() { return Object.values(cart).reduce((a, b) => a + b, 0); }
function cartTotal() {
  return Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = PRODUCTS.find(p => p.id === Number(id));
    return sum + (p ? p.price * qty : 0);
  }, 0);
}

function addItem(id) {
  cart[id] = cartQty(id) + 1;
  saveCart();
  renderAll();
}
function removeItem(id) {
  if (!cart[id]) return;
  cart[id] -= 1;
  if (cart[id] <= 0) delete cart[id];
  saveCart();
  renderAll();
}

// ===== Рендер каталога =====
const menuEl = document.getElementById('menu');
const catnavEl = document.getElementById('catnav');

function fmt(n) { return n.toLocaleString('ru-RU') + ' ₽'; }

function buildCatalog() {
  catnavEl.innerHTML = CATEGORIES.map(c =>
    `<button class="catchip" data-cat="${c.key}">${c.title}</button>`
  ).join('');

  menuEl.innerHTML = CATEGORIES.map(cat => {
    const items = PRODUCTS.filter(p => p.cat === cat.key);
    if (!items.length) return '';
    return `
      <section class="section" id="cat-${cat.key}">
        <h2 class="section__title">${cat.title}</h2>
        ${items.map(renderCard).join('')}
      </section>`;
  }).join('');

  catnavEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.catchip');
    if (!btn) return;
    const target = document.getElementById('cat-' + btn.dataset.cat);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  menuEl.addEventListener('click', (e) => {
    const addBtn = e.target.closest('[data-add]');
    const plusBtn = e.target.closest('[data-plus]');
    const minusBtn = e.target.closest('[data-minus]');
    if (addBtn) addItem(Number(addBtn.dataset.add));
    if (plusBtn) addItem(Number(plusBtn.dataset.plus));
    if (minusBtn) removeItem(Number(minusBtn.dataset.minus));
  });
}

function renderCard(p) {
  const qty = cartQty(p.id);
  const media = p.photo
    ? `<img src="${p.photo}" alt="${p.name}" loading="lazy" />`
    : `${p.emoji}`;
  const control = qty > 0
    ? `<div class="card__stepper">
         <button data-minus="${p.id}" aria-label="Убрать">−</button>
         <span>${qty}</span>
         <button data-plus="${p.id}" aria-label="Добавить">+</button>
       </div>`
    : `<button class="card__add" data-add="${p.id}" aria-label="Добавить">+</button>`;

  return `
    <article class="card">
      <div class="card__media" style="background:${mediaBg(p)}">${media}</div>
      <div class="card__body">
        <p class="card__name">${p.name}</p>
        <p class="card__desc">${p.desc}</p>
        <p class="card__price">${fmt(p.price)}</p>
      </div>
      ${control}
    </article>`;
}

function mediaBg(p) {
  if (p.photo) return 'transparent';
  return 'linear-gradient(135deg, #E4572E 0%, #F3B531 100%)';
}

// Перерисовать только те карточки, у которых изменилось состояние (через полный ререндер каталога — проще и надёжно для этого размера меню)
function renderAll() {
  const activeSection = catnavEl.querySelector('.is-active')?.dataset.cat;
  buildCatalog();
  markActiveChip(activeSection);
  renderCartBar();
  renderSheet();
}

function markActiveChip(key) {
  if (!key) return;
  const chip = catnavEl.querySelector(`[data-cat="${key}"]`);
  if (chip) chip.classList.add('is-active');
}

// ===== Корзина: нижняя плашка =====
const cartbarEl = document.getElementById('cartbar');
const cartCountEl = document.getElementById('cartCount');
const cartSumEl = document.getElementById('cartSum');

function renderCartBar() {
  const count = cartCount();
  if (count === 0) {
    cartbarEl.hidden = true;
    return;
  }
  cartbarEl.hidden = false;
  cartCountEl.textContent = count;
  cartSumEl.textContent = fmt(cartTotal());
}

cartbarEl.addEventListener('click', () => openSheet());

// ===== Корзина: шторка =====
const sheetEl = document.getElementById('sheet');
const sheetBackdropEl = document.getElementById('sheetBackdrop');
const sheetItemsEl = document.getElementById('sheetItems');
const sheetTotalEl = document.getElementById('sheetTotal').querySelector('strong');
const sheetCloseEl = document.getElementById('sheetClose');
const checkoutBtn = document.getElementById('checkoutBtn');

function openSheet() {
  renderSheet();
  sheetEl.hidden = false;
  sheetBackdropEl.hidden = false;
}
function closeSheet() {
  sheetEl.hidden = true;
  sheetBackdropEl.hidden = true;
}
sheetCloseEl.addEventListener('click', closeSheet);
sheetBackdropEl.addEventListener('click', closeSheet);

function renderSheet() {
  const entries = Object.entries(cart);
  if (!entries.length) {
    sheetItemsEl.innerHTML = `<p class="empty-cart">Корзина пуста — добавьте что-нибудь вкусное</p>`;
    sheetTotalEl.textContent = fmt(0);
    return;
  }
  sheetItemsEl.innerHTML = entries.map(([id, qty]) => {
    const p = PRODUCTS.find(p => p.id === Number(id));
    if (!p) return '';
    return `
      <div class="sheet-row">
        <div class="card__stepper">
          <button data-minus="${p.id}" aria-label="Убрать">−</button>
          <span>${qty}</span>
          <button data-plus="${p.id}" aria-label="Добавить">+</button>
        </div>
        <span class="sheet-row__name">${p.name}</span>
        <span class="sheet-row__price">${fmt(p.price * qty)}</span>
      </div>`;
  }).join('');
  sheetTotalEl.textContent = fmt(cartTotal());
}

sheetItemsEl.addEventListener('click', (e) => {
  const plusBtn = e.target.closest('[data-plus]');
  const minusBtn = e.target.closest('[data-minus]');
  if (plusBtn) addItem(Number(plusBtn.dataset.plus));
  if (minusBtn) removeItem(Number(minusBtn.dataset.minus));
});

// ===== Оформление заказа =====
checkoutBtn.addEventListener('click', () => {
  if (cartCount() === 0) return;
  const order = Object.entries(cart).map(([id, qty]) => {
    const p = PRODUCTS.find(p => p.id === Number(id));
    return { name: p.name, qty, price: p.price };
  });
  const payload = JSON.stringify({ items: order, total: cartTotal() });

  if (tg && tg.sendData) {
    tg.sendData(payload);
    tg.close();
  } else {
    const lines = order.map(o => `• ${o.name} × ${o.qty} — ${fmt(o.price * o.qty)}`).join('\n');
    alert(
      `Заказ сформирован:\n\n${lines}\n\nИтого: ${fmt(cartTotal())}\n\n` +
      `Откройте приложение через кнопку в Telegram-боте, чтобы отправить заказ напрямую, ` +
      `или напишите в сообщество: vk.ru/vkusnoedem`
    );
  }
});

// ===== Запуск =====
loadCart();
buildCatalog();
renderCartBar();
