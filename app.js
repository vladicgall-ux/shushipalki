// ===== Данные меню =====
// Названия и цены — с открытой страницы сообщества «Вкусно едем» (vk.ru/vkusnoedem).
// Состав указан по общему описанию блюда; при заказе уточняйте точный состав в сообществе.
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
  { id: 1, cat: 'pizza', name: 'Пепперони', price: 550, emoji: '🍕', hit: true,
    desc: 'Салями, сыр, томатный соус. Маленькая — 350 ₽, большая — 550 ₽.',
    compo: 'Тесто, томатный соус, сыр моцарелла, салями пепперони',
    photo: 'https://sun9-57.vkuserphoto.ru/impg/c845523/v845523306/41333/HZsESgEa93Q.jpg?size=400x400&quality=95&background=ffffff&crop=0.066,0,0.869,1&sign=5c5b310347ac2f969ac02e0c5fca05cd&c_uniq_tag=f84WijBJf1CHt_H7xueB66tp4UspyHEXuOv91ESYgmc&type=market_thumb' },
  { id: 3, cat: 'pizza', name: 'Пепперони с беконом', price: 550, emoji: '🍕',
    desc: 'Пикантная пепперони, копчёный бекон и сыр моццарелла.',
    compo: 'Тесто, томатный соус, моцарелла, пепперони, копчёный бекон',
    photo: 'https://sun9-60.userapi.com/s/v1/ig2/1I0g3OBJIL6XrGNsdnYpcWb1XhVMbFCHx5E4jDj1L_xVW1WIMa2EmsVQWNLb4Ii8swygOp9KcKeUgBowSqCfiSKk.jpg?background=ffffff&crop=0.00000000,127.00000000,1280.00000000,1535.00000000&quality=90&size=300x360' },
  { id: 23, cat: 'pizza', name: 'Грибная', price: 550, emoji: '🍄',
    desc: 'Шампиньоны, сыр моццарелла и томатный соус.',
    compo: 'Тесто, томатный соус, моцарелла, шампиньоны' },

  // Роллы
  { id: 10, cat: 'rolls', name: '«Запечённый риф» с креветкой и крабом', price: 490, emoji: '🍤', hit: true,
    desc: 'Запечённый ролл с креветкой, крабом и соусом унаги.',
    compo: 'Рис, нори, крем-сыр, креветка, крабовое мясо, соус унаги, кунжут' },
  { id: 11, cat: 'rolls', name: 'Темпура мини', price: 900, emoji: '🍣',
    desc: 'Хрустящие роллы в темпурной панировке, порция мини.',
    compo: 'Рис, нори, начинка ролла, темпурная панировка, соус' },
  { id: 12, cat: 'rolls', name: 'Техас', price: 395, emoji: '🍣',
    desc: 'Запечённый ролл с сыром и пикантной начинкой.',
    compo: 'Рис, нори, сыр, начинка, соус — запечён под сыром' },
  { id: 16, cat: 'rolls', name: 'Харумаки Сяке', price: 420, emoji: '🍣',
    desc: 'Хрустящий ролл с лососем во фритюрной обёртке.',
    compo: 'Рис, нори, лосось, хрустящая фритюрная обёртка' },
  { id: 17, cat: 'rolls', name: 'Харумаки Кани', price: 400, emoji: '🍣',
    desc: 'Хрустящий ролл с крабом во фритюрной обёртке.',
    compo: 'Рис, нори, крабовое мясо, хрустящая фритюрная обёртка' },
  { id: 18, cat: 'rolls', name: 'Дасоку', price: 410, emoji: '🍣',
    desc: 'Запечённый ролл в темпурной панировке.',
    compo: 'Рис, нори, начинка, темпурная панировка, соус — запечён' },
  { id: 19, cat: 'rolls', name: 'Куба', price: 395, emoji: '🍣',
    desc: 'Запечённый ролл с нежной сливочной начинкой.',
    compo: 'Рис, нори, сливочная начинка, соус — запечён' },
  { id: 20, cat: 'rolls', name: 'Тайто', price: 430, emoji: '🍣',
    desc: 'Запечённый ролл с добавлением сыра унаги.',
    compo: 'Рис, нори, начинка, соус унаги, сыр — запечён' },
  { id: 22, cat: 'rolls', name: 'Лава', price: 400, emoji: '🌶️',
    desc: 'Острый ролл с соусом спайси и стружкой чили.',
    compo: 'Рис, нори, начинка, соус спайси, стружка чили' },
  { id: 24, cat: 'rolls', name: 'Тори Темпура', price: 380, emoji: '🍣',
    desc: 'Ролл с курицей темпура и сливочным соусом.',
    compo: 'Рис, нори, курица темпура, сливочный соус' },
  { id: 25, cat: 'rolls', name: 'Гранд Мастер', price: 460, emoji: '🍣',
    desc: 'Фирменный запечённый ролл с несколькими начинками.',
    compo: 'Рис, нори, несколько начинок, фирменный соус — запечён' },

  // Сеты
  { id: 2, cat: 'sets', name: 'Вкусный сет', price: 3350, emoji: '🍱', hit: true,
    desc: 'Сборный сет роллов — хватит на компанию из 3–4 человек.',
    compo: 'Сборный сет из нескольких видов роллов — точный состав уточняйте при заказе',
    photo: 'https://sun9-38.userapi.com/s/v1/ig2/OPvT8W_JFp9ZqSx3e1GDjLGaSZ-rI6ayKUISfK0krNsEsA1sjMuKQcsT5134p5h31JQoukOxjsKj2sga3nwPx0u0.jpg?background=ffffff&crop=426.00000000,0.00000000,1067.00000000,1280.00000000&quality=90&size=300x360' },
  { id: 4, cat: 'sets', name: 'Супер сет', price: 3150, emoji: '🍱',
    desc: 'Большой набор фирменных роллов на любой вкус.',
    compo: 'Набор фирменных роллов — точный состав уточняйте при заказе',
    photo: 'https://sun9-22.userapi.com/s/v1/ig2/KaZdkIwW_YF6fYLwKX0QagmvKUXwe0rF2G35VMmi3Hmdowe4HgpZ8vP1NJX2Y4RChR92L2aMWtUt_RO2Bnh2NJBo.jpg?background=ffffff&crop=426.00000000,0.00000000,1067.00000000,1280.00000000&quality=90&size=300x360' },
  { id: 6, cat: 'sets', name: 'Компания сет', price: 2860, emoji: '🍱',
    desc: 'Сет для дружеской компании - классика и запечённые роллы.з',
    compo: 'Классические и запечённые роллы — точный состав уточняйте при заказе',
    photo: 'https://sun9-25.userapi.com/s/v1/ig2/uNv7lgsi_aC0OJOxlgSxGBI7dTQt3wu1t4Ma2Z6nHv4JTVLmUSKk5BZkWsFkyMLvjxrbdj0TNFunPRIaCvLQdRep.jpg?background=ffffff&crop=426.00000000,0.00000000,1067.00000000,1280.00000000&quality=90&size=300x360' },
  { id: 8, cat: 'sets', name: 'Мега сет', price: 3700, emoji: '🍱',
    desc: 'Самый большой сет меню — максимум роллов в одной коробке.',
    compo: 'Максимальный набор роллов из меню — точный состав уточняйте при заказе',
    photo: 'https://sun9-72.userapi.com/s/v1/ig2/1V_-oDmRMtmGHWKAUPJGeod7Q6PxiF89j-UKJ_5vX3gs6VwIa0SqUT8a3AcGezDnhd83nVs5KrjgCym04DmzLmB7.jpg?background=ffffff&crop=426.00000000,0.00000000,1067.00000000,1280.00000000&quality=90&size=300x360' },

  // Бургеры
  { id: 5, cat: 'burgers', name: 'Чизбургер', price: 330, emoji: '🍔', hit: true,
    desc: 'Сочная котлета, сыр чеддер, свежие овощи, фирменный соус.',
    compo: 'Булочка, говяжья котлета, сыр чеддер, свежие овощи, фирменный соус',
    photo: 'https://sun9-24.vkuserphoto.ru/impg/c855328/v855328733/67f8e/YJDtWRNWK3w.jpg?size=0x360&quality=95&background=ffffff&crop=0.102,0,0.656,1&sign=67a44e275502e9f8a10b0c7892b9d2c5&c_uniq_tag=Ud0qtczuNDlIIk1_UoWUJATJkyM7aOyMfp6kAzbSOpA&type=market_thumb' },
  { id: 13, cat: 'burgers', name: 'Бургер Халапеньо', price: 330, emoji: '🌶️',
    desc: 'Котлета, перец халапеньо, сыр и острый соус.',
    compo: 'Булочка, котлета, перец халапеньо, сыр, острый соус',
    photo: 'https://sun9-65.userapi.com/s/v1/ig2/DUJ4M6q3Ol_St3lZzYK-UH5pSu3_5ov6441RC4UVM5tksi42n-kmGLFi5cbgLTKGsjhqVzMAvYDD53RqzApnXxzq.jpg?background=ffffff&crop=481.00000000,0.00000000,1600.00000000,1920.00000000&quality=90&size=300x360' },

  // Шаурма и бурито
  { id: 7, cat: 'shaurma', name: 'Классическая шаурма', price: 240, emoji: '🌯', hit: true,
    desc: 'Курица, свежие овощи и фирменный соус в мягком лаваше.',
    compo: 'Лаваш, курица, свежие овощи, фирменный соус',
    photo: 'https://sun9-12.vkuserphoto.ru/impg/c841537/v841537417/3a2eb/KIbQS5zCR8w.jpg?size=0x360&quality=95&background=ffffff&crop=0.063,0,0.577,1&sign=d0918d6b6de452ea8e5e706de02b80be&c_uniq_tag=L2jP8uOXrll-DtKD7JmgjiZEfgoNVwjnWLpeUzpC16Y&type=market_thumb' },
  { id: 14, cat: 'shaurma', name: 'Сочный Мо', price: 390, emoji: '🌯',
    desc: 'Плотная шаурма с двойной порцией начинки.',
    compo: 'Лаваш, двойная порция курицы и начинки, соус',
    photo: 'https://sun9-53.userapi.com/s/v1/ig2/Ur-cqODlYBDMiEg3qI1-rT3oM2dShAlsM6LTYI3HD1th30hkjsyuICpv21pn2ZK8f0SrfIouY8F1_wT2J1Jyk3r.jpg?background=ffffff&crop=426.00000000,0.00000000,1067.00000000,1280.00000000&quality=90&size=300x360' },
  { id: 21, cat: 'shaurma', name: 'Бурито с беконом', price: 360, emoji: '🌯',
    desc: 'Буррито с курицей, беконом, овощами и соусом.',
    compo: 'Тортилья, курица, бекон, овощи, соус' },

  // Напитки и соусы
  { id: 9, cat: 'drinks', name: 'Чай авторский', price: 150, emoji: '🍵',
    desc: 'Фирменный чай собственной заварки.',
    compo: 'Чайная смесь собственной заварки',
    photo: 'https://sun9-5.userapi.com/s/v1/ig2/HR2urgg5oKvhUl5lVIMvQ4G8-iWoB2hSxJAF-xzZUYSTg5-mDEt-q20RK3RWEz_2LXXTckoEudoIYdCccdc3-fUR.jpg?background=ffffff&crop=0.00000000,97.00000000,905.00000000,1085.00000000&quality=90&size=300x360' },
  { id: 15, cat: 'drinks', name: 'Васаби', price: 10, emoji: '🟢',
    desc: 'Порция васаби к роллам.',
    compo: 'Порция васаби',
    photo: 'https://sun9-22.userapi.com/s/v1/ig2/ANvBlGeHaRj1-hcN9Pv1JnqUmZR2NcQYX98TiqUdTCVc8gOCfDNl7zNUQQ2TnQUfzblKsOfQHUKHr7VTb7e6yn2N.jpg?background=ffffff&crop=49.00000000,0.00000000,499.00000000,600.00000000&quality=90&size=300x360' },
];

// ===== Telegram WebApp =====
const tg = window.Telegram ? window.Telegram.WebApp : null;
if (tg) {
  tg.ready();
  tg.expand();
  try { tg.setHeaderColor('#2E1F1B'); } catch (e) {}
  try { tg.setBackgroundColor('#2E1F1B'); } catch (e) {}
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

// ===== Статус работы (динамически по расписанию Пн–Сб 10:00–22:00) =====
const statusDotEl = document.getElementById('statusDot');
const statusTextEl = document.getElementById('statusText');

function renderOpenStatus() {
  if (!statusDotEl || !statusTextEl) return;
  const now = new Date();
  const day = now.getDay(); // 0 = вс
  const hour = now.getHours();
  const isSunday = day === 0;
  const isOpen = !isSunday && hour >= 10 && hour < 22;

  statusDotEl.classList.toggle('fact__dot--live', isOpen);
  statusDotEl.classList.toggle('fact__dot--off', !isOpen);

  if (isOpen) {
    statusTextEl.textContent = 'Открыто сейчас · Пн–Сб 10:00–22:00';
  } else if (isSunday) {
    statusTextEl.textContent = 'Сегодня выходной · работаем Пн–Сб 10:00–22:00';
  } else {
    statusTextEl.textContent = 'Сейчас закрыто · Пн–Сб 10:00–22:00';
  }
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
        <div class="cards-grid">${items.map(renderCard).join('')}</div>
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
    const card = e.target.closest('.card');

    if (addBtn) { addItem(Number(addBtn.dataset.add)); return; }
    if (plusBtn) { addItem(Number(plusBtn.dataset.plus)); return; }
    if (minusBtn) { removeItem(Number(minusBtn.dataset.minus)); return; }
    if (card) { openProductModal(Number(card.dataset.id)); }
  });

  setupScrollSpy();
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
  const hitBadge = p.hit ? `<span class="card__badge">Хит</span>` : '';

  return `
    <article class="card" data-id="${p.id}">
      <div class="card__media" style="background:${mediaBg(p)}">${hitBadge}${media}</div>
      <div class="card__body">
        <p class="card__name">${p.name}</p>
        <div class="card__footer">
          <span class="card__price">${fmt(p.price)}</span>
          ${control}
        </div>
      </div>
    </article>`;
}

function mediaBg(p) {
  if (p.photo) return 'transparent';
  return 'linear-gradient(135deg, #E5372E 0%, #F0A93B 100%)';
}

// Перерисовать только те карточки, у которых изменилось состояние (через полный ререндер каталога — проще и надёжно для этого размера меню)
function renderAll() {
  const activeSection = catnavEl.querySelector('.is-active')?.dataset.cat;
  buildCatalog();
  markActiveChip(activeSection);
  renderCartBar();
  renderSheet();
  if (currentModalId !== null) renderProductModal(currentModalId);
}

function markActiveChip(key) {
  if (!key) return;
  catnavEl.querySelectorAll('.catchip').forEach(c => c.classList.remove('is-active'));
  const chip = catnavEl.querySelector(`[data-cat="${key}"]`);
  if (chip) chip.classList.add('is-active');
}

// ===== Подсветка активной категории при скролле =====
let scrollSpyObserver = null;
function setupScrollSpy() {
  if (scrollSpyObserver) scrollSpyObserver.disconnect();
  const sections = CATEGORIES
    .map(c => document.getElementById('cat-' + c.key))
    .filter(Boolean);
  if (!sections.length) return;

  scrollSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const key = entry.target.id.replace('cat-', '');
        markActiveChip(key);
      }
    });
  }, { rootMargin: '-96px 0px -70% 0px', threshold: 0 });

  sections.forEach(s => scrollSpyObserver.observe(s));
  markActiveChip(CATEGORIES[0].key);
}

// ===== Корзина: нижняя плашка =====
const cartbarEl = document.getElementById('cartbar');
const cartCountEl = document.getElementById('cartCount');
const cartSumEl = document.getElementById('cartSum');

function renderCartBar() {
  const count = cartCount();
  if (count === 0) {
    cartbarEl.hidden = true;
    syncMainButton();
    return;
  }
  cartbarEl.hidden = false;
  cartCountEl.textContent = count;
  cartSumEl.textContent = fmt(cartTotal());
  syncMainButton();
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
  closeProductModal();
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

// ===== Карточка товара (детальный просмотр) =====
const modalEl = document.getElementById('productModal');
const modalBackdropEl = document.getElementById('productModalBackdrop');
const modalBodyEl = document.getElementById('productModalBody');
const modalCloseEl = document.getElementById('productModalClose');
let currentModalId = null;

function openProductModal(id) {
  currentModalId = id;
  renderProductModal(id);
  modalEl.hidden = false;
  modalBackdropEl.hidden = false;
}
function closeProductModal() {
  currentModalId = null;
  modalEl.hidden = true;
  modalBackdropEl.hidden = true;
}
modalCloseEl.addEventListener('click', closeProductModal);
modalBackdropEl.addEventListener('click', closeProductModal);

function renderProductModal(id) {
  const p = PRODUCTS.find(p => p.id === id);
  if (!p) return;
  const qty = cartQty(p.id);
  const media = p.photo
    ? `<img src="${p.photo}" alt="${p.name}" />`
    : `<span class="product-modal__emoji">${p.emoji}</span>`;
  const control = qty > 0
    ? `<div class="card__stepper card__stepper--lg">
         <button data-minus="${p.id}" aria-label="Убрать">−</button>
         <span>${qty}</span>
         <button data-plus="${p.id}" aria-label="Добавить">+</button>
       </div>`
    : `<button class="product-modal__add" data-add="${p.id}">Добавить в корзину</button>`;

  modalBodyEl.innerHTML = `
    <div class="product-modal__media" style="background:${mediaBg(p)}">${media}</div>
    <div class="product-modal__info">
      ${p.hit ? '<span class="card__badge card__badge--static">Хит</span>' : ''}
      <h2 class="product-modal__name">${p.name}</h2>
      <p class="product-modal__price">${fmt(p.price)}</p>
      <p class="product-modal__desc">${p.desc}</p>
      <div class="product-modal__compo">
        <span class="product-modal__compo-label">Состав</span>
        <p>${p.compo || 'Состав уточняйте при заказе'}</p>
      </div>
      <div class="product-modal__footer">${control}</div>
    </div>`;
}

modalBodyEl.addEventListener('click', (e) => {
  const addBtn = e.target.closest('[data-add]');
  const plusBtn = e.target.closest('[data-plus]');
  const minusBtn = e.target.closest('[data-minus]');
  if (addBtn) addItem(Number(addBtn.dataset.add));
  if (plusBtn) addItem(Number(plusBtn.dataset.plus));
  if (minusBtn) removeItem(Number(minusBtn.dataset.minus));
});

// ===== Оформление заказа =====
const custNameEl = document.getElementById('custName');
const custPhoneEl = document.getElementById('custPhone');
const custAddressEl = document.getElementById('custAddress');
const custCommentEl = document.getElementById('custComment');
const orderErrorEl = document.getElementById('orderError');
const deliveryToggleEl = document.querySelector('.order-form__toggle');
let deliveryMode = 'courier'; // 'courier' | 'pickup'

if (deliveryToggleEl) {
  deliveryToggleEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.order-form__toggle-btn');
    if (!btn) return;
    deliveryMode = btn.dataset.delivery;
    deliveryToggleEl.querySelectorAll('.order-form__toggle-btn').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    custAddressEl.hidden = deliveryMode === 'pickup';
    custAddressEl.required = deliveryMode === 'courier';
  });
}

function showOrderError(msg) {
  orderErrorEl.textContent = msg;
  orderErrorEl.hidden = false;
}
function clearOrderError() {
  orderErrorEl.hidden = true;
}

async function submitOrder() {
  if (cartCount() === 0) return;
  clearOrderError();

  const name = custNameEl.value.trim();
  const phone = custPhoneEl.value.trim();
  const address = custAddressEl.value.trim();
  const comment = custCommentEl.value.trim();

  if (!name) return showOrderError('Укажите имя');
  if (!phone) return showOrderError('Укажите телефон');
  if (deliveryMode === 'courier' && !address) return showOrderError('Укажите адрес доставки');

  const order = Object.entries(cart).map(([id, qty]) => {
    const p = PRODUCTS.find(p => p.id === Number(id));
    return { name: p.name, qty, price: p.price };
  });

  const payload = {
    initData: tg ? tg.initData : '',
    customer: { name, phone, address, pickup: deliveryMode === 'pickup', comment },
    items: order,
    total: cartTotal(),
  };

  checkoutBtn.disabled = true;
  checkoutBtn.textContent = 'ОтправляемҦ';

  try {
    const res = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || 'Ошибка отправки заказа');

    cart = {};
    saveCart();
    closeSheet();
    renderAll();

    if (tg) {
      tg.showAlert ? tg.showAlert('Заказ отправлен! Мы свяжемся с вами для подтверждения.') : alert('Заказ отправлен!');
      if (tg.HapticFeedback) tg.HapticFeedback.notificationOccurred('success');
    } else {
      alert('Заказ отправлен! Мы свяжемся с вами для подтверждения.');
    }
  } catch (e) {
    showOrderError('Не удалось отправить заказ. Попробуйте ещё раз или напишите в сообщество: vk.ru/vkusnoedem');
  } finally {
    checkoutBtn.disabled = false;
    checkoutBtn.textContent = 'Оформить заказ';
  }
}

checkoutBtn.addEventListener('click', submitOrder);

// ===== Telegram MainButton (дублирует кнопку оформления заказа) =====
function syncMainButton() {
  if (!tg || !tg.MainButton) return;
  const count = cartCount();
  if (count > 0) {
    tg.MainButton.setText(`Оформить заказ на ${fmt(cartTotal())}`);
    tg.MainButton.show();
  } else {
    tg.MainButton.hide();
  }
}
if (tg && tg.MainButton) {
  tg.MainButton.onClick(() => {
    if (sheetEl.hidden) openSheet();
    else submitOrder();
  });
}

// ===== Запуск =====
loadCart();
buildCatalog();
renderCartBar();
renderOpenStatus();
setInterval(renderOpenStatus, 60000);
