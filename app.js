// ===== Данные меню =====
// Каталог сформирован из экспорта товаров сообщества «Суши Палки» (VK Market YML,
// сгенерирован 05.09.2026): названия, цены, состав и фото — из фида. Категории
// сверены вручную (2 позиции — морс и чизкейк — были без категории в исходном фиде,
// вынесены в «Напитки и десерты»). Веса в исходных описаниях товаров нет ни у одной
// позиции — поле weight не заполняется.
const CATEGORIES = [
  { key: 'pizza', title: 'Пицца' },
  { key: 'cold_rolls', title: 'Холодные роллы' },
  { key: 'hot_rolls', title: 'Горячие роллы' },
  { key: 'baked_rolls', title: 'Запечённые роллы' },
  { key: 'sets', title: 'Наборы' },
  { key: 'salads', title: 'Салаты' },
  { key: 'snacks', title: 'Снэки' },
  { key: 'sauces', title: 'Соусы' },
  { key: 'drinks', title: 'Напитки и десерты' },
];

const PRODUCTS = [
  // Пицца
  { id: 1, cat: 'pizza', name: 'Сырная', price: 550, emoji: '🍕',
    desc: 'Моцарелла, Чеддер, Дор блю.',
    compo: 'Моцарелла, Чеддер, Дор блю.',
    photo: 'https://sun9-35.vkuserphoto.ru/impg/wcA03dNpvnFbxSczvgz1-nnTeHzm6zKoS_EUfQ/SmA9nwbrxb8.jpg?size=0x1000&quality=95&background=ffffff&crop=0.084,0,0.833,1&sign=ddb814ada25de9c9b085c44bbdce0cd9&type=market_thumb' },
  { id: 2, cat: 'pizza', name: 'Охотничья', price: 530, emoji: '🍕',
    desc: 'Белый соус, охотничьи колбаски, курица, соленый огурец, моцарелла.',
    compo: 'Белый соус, охотничьи колбаски, курица, соленый огурец, моцарелла.',
    photo: 'https://sun9-26.vkuserphoto.ru/impg/43Dhctz4R2oRiZnsUlU_eR0g05LG69p4UUtKlQ/QXv2L8s2FkI.jpg?size=0x1000&quality=95&background=ffffff&crop=0.084,0,0.833,1&sign=8623aa7c69ca53e24b5d3d24a8fc7177&type=market_thumb' },
  { id: 3, cat: 'pizza', name: 'Барбекю', price: 570, emoji: '🍕',
    desc: 'Белый соус, курица, жареный лук, барбекю соус, моцарелла.',
    compo: 'Белый соус, курица, жареный лук, барбекю соус, моцарелла.',
    photo: 'https://sun9-69.vkuserphoto.ru/impg/hxDQJKrF5oCSbnddzAWJTGeZj2gQr1o7EJIuKA/NaleCtl_7tI.jpg?size=0x1000&quality=95&background=ffffff&crop=0.084,0,0.833,1&sign=6ba8a339f5593b1c4b5864beadc61341&type=market_thumb' },
  { id: 4, cat: 'pizza', name: '4 сезона', price: 610, emoji: '🍕',
    desc: 'Белый соус, помидоры, пепперони, шампиньоны, ветчина, бекон, жареный лук, моцарелла.',
    compo: 'Белый соус, помидоры, пепперони, шампиньоны, ветчина, бекон, жареный лук, моцарелла.',
    photo: 'https://sun9-77.vkuserphoto.ru/impg/UBoqz4m_IRXtfxzjTs8EDjSibcTyhHbfsWupuA/I8tEcyz1QC0.jpg?size=0x1000&quality=95&background=ffffff&crop=0.084,0,0.833,1&sign=fb7a1215f925aeb1762e3623f6c033fc&type=market_thumb' },
  { id: 5, cat: 'pizza', name: 'Гавайская', price: 570, emoji: '🍕',
    desc: 'Белый соус, ананасы, сыр моцарелла, ветчина, курица.',
    compo: 'Белый соус, ананасы, сыр моцарелла, ветчина, курица.',
    photo: 'https://sun9-45.vkuserphoto.ru/impg/dzl5_Akr6CLK3Tobj8P3KWPMZpwcnxIb0UdFfw/12lngfBBQUs.jpg?size=0x1000&quality=95&background=ffffff&crop=0.084,0,0.833,1&sign=58041e79f915872e76fb0278a5b6a5b5&type=market_thumb' },
  { id: 6, cat: 'pizza', name: 'Маргарита', price: 470, emoji: '🍕',
    desc: 'Белый соус, помидоры, сыр моцарелла.',
    compo: 'Белый соус, помидоры, сыр моцарелла.',
    photo: 'https://sun9-34.vkuserphoto.ru/impg/g6HxaDf6iGlEiqZLvcC33LwV-Gt2KPGgTns0dg/85Wu0Bp3xsI.jpg?size=0x1000&quality=95&background=ffffff&crop=0.084,0,0.833,1&sign=07f7c422d5951f455e9f61580d721f99&type=market_thumb' },
  { id: 7, cat: 'pizza', name: 'Карбонара', price: 550, emoji: '🍕',
    desc: 'Бекон, жаренный лук, яйцо, белый соус, сыр моцарелла.',
    compo: 'Бекон, жаренный лук, яйцо, белый соус, сыр моцарелла.',
    photo: 'https://sun9-53.vkuserphoto.ru/impg/kI1FdDOH46wJBpFBC7Uy9dC3Sqtj6OW18dC3Ew/J2kw2oRF2wk.jpg?size=0x1000&quality=95&background=ffffff&crop=0.084,0,0.833,1&sign=c5109adb191cb04a6567efe09e173735&type=market_thumb' },
  { id: 8, cat: 'pizza', name: 'Пепперони', price: 520, emoji: '🍕', hit: true,
    desc: 'Колбаса пепперони, белый соус, сыр моцарелла.',
    compo: 'Колбаса пепперони, белый соус, сыр моцарелла.',
    photo: 'https://sun9-27.vkuserphoto.ru/impg/rd1oM9Bf7LecrH5T7ioA_N-cBVYQD7hGLms1Zg/B9OtUQa1VI0.jpg?size=0x1000&quality=95&background=ffffff&crop=0.084,0,0.833,1&sign=48ef935adfbb2ca17fdd781aba25e387&type=market_thumb' },
  { id: 9, cat: 'pizza', name: 'Мясная', price: 590, emoji: '🍕',
    desc: 'Курица, ветчина, бекон, охотничьи колбаски, белый соус, сыр моцарелла.',
    compo: 'Курица, ветчина, бекон, охотничьи колбаски, белый соус, сыр моцарелла.',
    photo: 'https://sun9-84.vkuserphoto.ru/impg/MUxKuoqadGYMZvZGu6Gp23MMwQif_wvJjSO6Lw/CZ3F4KnvKUM.jpg?size=0x1000&quality=95&background=ffffff&crop=0.084,0,0.833,1&sign=66c06c0e2d78f13e9a5c931e322aaaee&type=market_thumb' },
  { id: 10, cat: 'pizza', name: 'Деревенская', price: 600, emoji: '🍕',
    desc: 'Шампиньоны, курица, помидор, картофель фри, белый соус, сыр моцарелла.',
    compo: 'Шампиньоны, курица, помидор, картофель фри, белый соус, сыр моцарелла.',
    photo: 'https://sun9-41.vkuserphoto.ru/impg/0N14Rz6aICmVZiQZD-MZcMFuwDPjHY8WPVBLYw/cLA6WIZycx4.jpg?size=0x1000&quality=95&background=ffffff&crop=0.084,0,0.833,1&sign=c6659a156c2c23b95c75c738fb524dd9&type=market_thumb' },
  { id: 11, cat: 'pizza', name: 'Фридей', price: 550, emoji: '🍕',
    desc: 'Шампиньоны, курица, помидоры, сыр моцарелла, белый соус.',
    compo: 'Шампиньоны, курица, помидоры, сыр моцарелла, белый соус.',
    photo: 'https://sun9-19.vkuserphoto.ru/impg/CmSRQtE7T_OP1qaYQ8gX416LJgUeRQ0TgKuL2Q/WjCxNql_At0.jpg?size=0x1000&quality=95&background=ffffff&crop=0.084,0,0.833,1&sign=91af2cd0636718ae863c09e25c853010&type=market_thumb' },
  { id: 12, cat: 'pizza', name: 'Грибная', price: 510, emoji: '🍕',
    desc: 'Шампиньоны, курица, белый соус, сыр моцарелла.',
    compo: 'Шампиньоны, курица, белый соус, сыр моцарелла.',
    photo: 'https://sun9-65.vkuserphoto.ru/impg/Be5tWvTQAd2YqCM2K5fl1bJsHdXCpRhEiISDjQ/ERyl0ZAQhXI.jpg?size=0x1000&quality=95&background=ffffff&crop=0.084,0,0.833,1&sign=be8b4d7e565c6bb7e94513cfc39d2992&type=market_thumb' },
  // Холодные роллы
  { id: 13, cat: 'cold_rolls', name: 'Спайси Чеддер', price: 400, emoji: '🍣',
    desc: 'Нори, рис, творожный сыр, курица, огурец, сыр Чеддер, соус Спайси.',
    compo: 'Нори, рис, творожный сыр, курица, огурец, сыр Чеддер, соус Спайси.',
    photo: 'https://sun9-75.vkuserphoto.ru/impg/PA9p9ks7PBCKOx9AQX_Uog-z9hTBa_Yx1YHBcw/REzxdSLnWoU.jpg?size=0x896&quality=95&background=ffffff&crop=0.153,0,0.694,1&sign=046d1f70d1d04f1b90dde88c6a2860fc&type=market_thumb' },
  { id: 14, cat: 'cold_rolls', name: 'Спайси', price: 350, emoji: '🍣',
    desc: 'Рис, нори, лосось, огурец, спайси соус.',
    compo: 'Рис, нори, лосось, огурец, спайси соус.',
    photo: 'https://sun9-80.vkuserphoto.ru/impg/eMnCSatBL348CKDwic5ndjz-GjOM7n2IeG2APA/Gdf-KJ56bMc.jpg?size=0x802&quality=95&background=ffffff&crop=0.211,0,0.579,1&sign=9374f207cd053f345ca842db3c38368d&type=market_thumb' },
  { id: 15, cat: 'cold_rolls', name: 'Миндаль Эби', price: 400, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, огурец, креветка в кляре, кунжут, унаги соус, лепестки миндаля.',
    compo: 'Рис, нори, творожный сыр, огурец, креветка в кляре, кунжут, унаги соус, лепестки миндаля.',
    photo: 'https://sun9-16.vkuserphoto.ru/impg/k-_OMkDyciN8MTthMcoiqONXS5POTcOAM8OQCQ/rctjU0zrtOE.jpg?size=0x896&quality=95&background=ffffff&crop=0.153,0,0.694,1&sign=9d6b2b7a630980397693ea5cc8c5cb2d&type=market_thumb' },
  { id: 16, cat: 'cold_rolls', name: 'Инь Янь', price: 350, emoji: '🍣',
    desc: 'Рис, нори, огурец, лосось.',
    compo: 'Рис, нори, огурец, лосось.',
    photo: 'https://sun9-44.vkuserphoto.ru/impg/5hukVgQk0YxlXN5HLy9ABzJ1EGA8JhzwP4WNdw/9WfgpD-qIRo.jpg?size=0x896&quality=95&background=ffffff&crop=0.153,0,0.694,1&sign=691b1a4bb452d629b39d94628e0f8d88&type=market_thumb' },
  { id: 17, cat: 'cold_rolls', name: 'Филадельфия Унаги', price: 440, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, огурец, унаги соус, угорь, кунжут.',
    compo: 'Рис, нори, творожный сыр, огурец, унаги соус, угорь, кунжут.',
    photo: 'https://sun9-83.vkuserphoto.ru/impg/WZocBohMCxwjmmYHwuOr6371siMjQFOZa6SWeQ/RBxvoaG6A-4.jpg?size=0x869&quality=95&background=ffffff&crop=0.211,0,0.579,1&sign=a84e82c5cc172328790e833efdecb448&type=market_thumb' },
  { id: 18, cat: 'cold_rolls', name: 'Хасамаки с угрем', price: 200, emoji: '🍣',
    desc: 'Рис, нори, угорь, унаги.',
    compo: 'Рис, нори, угорь, унаги.',
    photo: 'https://sun9-8.vkuserphoto.ru/impg/xCYuR2HO0i2BLHwSQ2SmDfU2jmfgkm24THkkNw/2v-6UmJA3so.jpg?size=0x600&quality=95&background=ffffff&crop=0,0,1,1&sign=3176f19e09185b120c0b3309ba5588f9&type=market_thumb' },
  { id: 19, cat: 'cold_rolls', name: 'Хасамаки с лососем', price: 200, emoji: '🍣',
    desc: 'Рис, нори, лосось.',
    compo: 'Рис, нори, лосось.',
    photo: 'https://sun9-7.vkuserphoto.ru/impg/B_qRhJc3j0a-4w3CBivZEKsp48U1DEgFSbO1RQ/895cM26W0eY.jpg?size=0x600&quality=95&background=ffffff&crop=0,0,1,1&sign=46afa3334419b9d35fa1621611a7f146&type=market_thumb' },
  { id: 20, cat: 'cold_rolls', name: 'Кани Маки', price: 370, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, краб, огурец, тортилья сырная.',
    compo: 'Рис, нори, творожный сыр, краб, огурец, тортилья сырная.',
    photo: 'https://sun9-2.vkuserphoto.ru/impg/aze6OnfcBFrEKaho3rjy7J3uti8BVl9fQOFTQw/6eYGJG-NMX8.jpg?size=0x1000&quality=95&background=ffffff&crop=0.129,0,0.742,1&sign=57f07dbac9d5975abffeee6bb752de3b&type=market_thumb' },
  { id: 21, cat: 'cold_rolls', name: 'Цезарь ролл', price: 350, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, курица, огурец, помидоры, сыр моцарелла, сухари панко.',
    compo: 'Рис, нори, творожный сыр, курица, огурец, помидоры, сыр моцарелла, сухари панко.',
    photo: 'https://sun9-56.vkuserphoto.ru/impg/3no_8kqZM7N7T6GYP-PsRkHS2lVCPxEaIgxjIA/kC7KMvtsjlg.jpg?size=0x1000&quality=95&background=ffffff&crop=0.12,0,0.76,1&sign=96e5a13b2908823c786dce0ae897d19a&type=market_thumb' },
  { id: 22, cat: 'cold_rolls', name: 'Чизмэри', price: 370, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, лосось в кляре, черный кунжут, огурец.',
    compo: 'Рис, нори, творожный сыр, лосось в кляре, черный кунжут, огурец.',
    photo: 'https://sun9-6.vkuserphoto.ru/impg/p5mZmphzebc7XRZRtOP3k9q00j_0KNJNhL60nw/WOc4oJ0M-uE.jpg?size=0x848&quality=95&background=ffffff&crop=0.144,0,0.712,1&sign=70c974192d270128e302747407ff2709&type=market_thumb' },
  { id: 23, cat: 'cold_rolls', name: 'Филадельфия в кунжуте', price: 350, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, огурец, кунжут черный.',
    compo: 'Рис, нори, творожный сыр, огурец, кунжут черный.',
    photo: 'https://sun9-79.vkuserphoto.ru/impg/rZYcnOxLHiBZJ1z9_jO6pv8O3nSY3Pwwgn3iiA/AbtqOHAUUxU.jpg?size=0x619&quality=95&background=ffffff&crop=0.144,0,0.712,1&sign=093c56a0e8c2444420ece4fa20c83678&type=market_thumb' },
  { id: 24, cat: 'cold_rolls', name: 'Соломон', price: 350, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, огурец, лосось.',
    compo: 'Рис, нори, творожный сыр, огурец, лосось.',
    photo: 'https://sun9-37.vkuserphoto.ru/impg/OPr6X5Q-MEkKM4Td746WD6zcGYpaNML9p5jhaA/E6DUMKTIS_g.jpg?size=0x1000&quality=95&background=ffffff&crop=0.119,0,0.761,1&sign=68e0a40b3a6e9641e43cf8d71250d573&type=market_thumb' },
  { id: 25, cat: 'cold_rolls', name: 'Бурито', price: 350, emoji: '🍣',
    desc: 'Тортилья сырная, творожный сыр, маринованный огурец, курица.',
    compo: 'Тортилья сырная, творожный сыр, маринованный огурец, курица.',
    photo: 'https://sun9-68.vkuserphoto.ru/impg/kxe0PJQ82tYhrVvlR-T46ZHhh6cO-M9FtQtTlQ/sa6SUzyGuLA.jpg?size=0x1000&quality=95&background=ffffff&crop=0.104,0,0.792,1&sign=0a335cb67d64f3edb8670d7aa325f010&type=market_thumb' },
  { id: 26, cat: 'cold_rolls', name: 'Москва', price: 500, emoji: '🍣',
    desc: 'Рис, нори, огурец, творожный сыр, лосось.',
    compo: 'Рис, нори, огурец, творожный сыр, лосось.',
    photo: 'https://sun9-78.vkuserphoto.ru/impg/j1BaqzEt7U9zgVLdN_yCYq1qtSqIiJUDSX9jyg/ZHbgO8-Cth8.jpg?size=0x1000&quality=95&background=ffffff&crop=0.105,0,0.791,1&sign=a3847006222bcd594aba8550a0fa8f88&type=market_thumb' },
  { id: 27, cat: 'cold_rolls', name: 'Хасамаки Икура', price: 200, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, икра лососевая.',
    compo: 'Рис, нори, творожный сыр, икра лососевая.',
    photo: 'https://sun9-2.vkuserphoto.ru/impg/UwR5R3kqSMRPvjLFdCJ5aMZqk6R193hxYkWLRA/xclOMSclnOY.jpg?size=0x1000&quality=95&background=ffffff&crop=0.111,0,0.778,1&sign=5ede67ac0ff846786f31ffc446ca85bc&type=market_thumb' },
  { id: 28, cat: 'cold_rolls', name: 'Филадельфия', price: 490, emoji: '🍣', hit: true,
    desc: 'Рис, нори, творожный сыр, огурец, лосось.',
    compo: 'Рис, нори, творожный сыр, огурец, лосось.',
    photo: 'https://sun9-86.vkuserphoto.ru/impg/Sic5R-otxztbSD8hJwElDBz91kxvhRZTcEjS7w/K0PYqikrGLo.jpg?size=0x1000&quality=95&background=ffffff&crop=0.114,0,0.772,1&sign=ec71a282105ee63a15282c4ca0d4196e&type=market_thumb' },
  { id: 29, cat: 'cold_rolls', name: 'Канада', price: 460, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, огурец, лосось, угорь, унаги соус, кунжут.',
    compo: 'Рис, нори, творожный сыр, огурец, лосось, угорь, унаги соус, кунжут.',
    photo: 'https://sun9-80.vkuserphoto.ru/impg/V4JlbmWLBTYPMp8cNb7GDUn4ORt9cXXPzCfh9w/HaOrummfJEo.jpg?size=0x1000&quality=95&background=ffffff&crop=0.093,0,0.815,1&sign=b5b684006f61165ad091e9d646d23f83&type=market_thumb' },
  { id: 30, cat: 'cold_rolls', name: 'Ночная Москва', price: 370, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, омлет томаго, икра масаго, огурец, угорь.',
    compo: 'Рис, нори, творожный сыр, омлет томаго, икра масаго, огурец, угорь.',
    photo: 'https://sun9-36.vkuserphoto.ru/impg/imEmlADhwc41HBe8SYjqRUB8NoBiD-l32258Pg/rl5ykn6PiFA.jpg?size=0x1000&quality=95&background=ffffff&crop=0.117,0,0.767,1&sign=c01ea67e337ee0579f4af75f1c67d19c&type=market_thumb' },
  { id: 31, cat: 'cold_rolls', name: 'Сезам Эби', price: 370, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, креветка в кляре, кунжут белый.',
    compo: 'Рис, нори, творожный сыр, креветка в кляре, кунжут белый.',
    photo: 'https://sun9-70.vkuserphoto.ru/impg/V7YZm20er5msvzMsqR2IcIzLWAM2Z2ka7DpcjQ/XDDLA01nsq8.jpg?size=0x1000&quality=95&background=ffffff&crop=0.099,0,0.802,1&sign=7bb6ba1b3993a061977b7f1f33556c45&type=market_thumb' },
  { id: 32, cat: 'cold_rolls', name: 'Калифорния', price: 360, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, огурец, мясо краба, икра масаго.',
    compo: 'Рис, нори, творожный сыр, огурец, мясо краба, икра масаго.',
    photo: 'https://sun9-6.vkuserphoto.ru/impg/awKCZj9S7JDgQBpKQ8PHHyUCs_d_-ukqaa1ASg/2gZ-mxw3Xsk.jpg?size=0x886&quality=95&background=ffffff&crop=0.144,0,0.712,1&sign=2318590e6a5adddb608b3b9b9ebc6cd6&type=market_thumb' },
  { id: 33, cat: 'cold_rolls', name: 'Филадельфия Эби', price: 490, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, креветка в кляре, лосось.',
    compo: 'Рис, нори, творожный сыр, креветка в кляре, лосось.',
    photo: 'https://sun9-1.vkuserphoto.ru/impg/cnv3oGM7zYn_eZvCVtiShSAJF6tAGiUIVH4aRw/jrUTGVlk4Z0.jpg?size=0x614&quality=95&background=ffffff&crop=0.144,0,0.712,1&sign=7637faa3cef3c4c71122f7a1cfc25734&type=market_thumb' },
  { id: 34, cat: 'cold_rolls', name: 'Ямайка', price: 450, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, огурец, креветки, унаги соус.',
    compo: 'Рис, нори, творожный сыр, огурец, креветки, унаги соус.',
    photo: 'https://sun9-81.vkuserphoto.ru/impg/Qs7otbhwKh6pbNS5XaoTnfvuYzRxgAylsFSNxw/jLPL2pvB-Eg.jpg?size=0x985&quality=95&background=ffffff&crop=0.089,0,0.822,1&sign=2df9a511b0d6ee9c58a161951247e5cd&type=market_thumb' },
  { id: 35, cat: 'cold_rolls', name: 'Дракон', price: 370, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, маринованный огурец, курица, жаренный лук, соус шрирачи.',
    compo: 'Рис, нори, творожный сыр, маринованный огурец, курица, жаренный лук, соус шрирачи.',
    photo: 'https://sun9-32.vkuserphoto.ru/impg/q73fiqr0NSCepUlp5T1t4umq14K9EqUMIGK0WA/p64pvyFaUcc.jpg?size=0x1000&quality=95&background=ffffff&crop=0.076,0,0.847,1&sign=bdc90ef8ebc8d1d5c0ced2926dd7f73a&type=market_thumb' },
  { id: 36, cat: 'cold_rolls', name: 'Хасамаки с огурцом', price: 200, emoji: '🍣',
    desc: 'Рис, нори, огурец, кунжут белый.',
    compo: 'Рис, нори, огурец, кунжут белый.',
    photo: 'https://sun9-52.vkuserphoto.ru/impg/QOUM_cn2kVcYEETij67uwWF9iOlJmVf9yq7YIA/sjUxXVuOPRA.jpg?size=0x777&quality=95&background=ffffff&crop=0.128,0,0.743,1&sign=b2d291dc7bef4b8addc2216b57d3a2b9&type=market_thumb' },
  { id: 37, cat: 'cold_rolls', name: 'Филадельфия Вип', price: 630, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, огурец, лосось, икра лососевая.',
    compo: 'Рис, нори, творожный сыр, огурец, лосось, икра лососевая.',
    photo: 'https://sun9-83.vkuserphoto.ru/impg/eGS57qF-3XiKk_EGup1deLYrYl5xvliLFVrP1A/-u1OJpArPhY.jpg?size=0x764&quality=95&background=ffffff&crop=0.093,0,0.813,1&sign=b14b24f11ea437d892e833cd091a98a3&type=market_thumb' },
  { id: 38, cat: 'cold_rolls', name: 'Капелька', price: 330, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, омлет томаго, икра масага.',
    compo: 'Рис, нори, творожный сыр, омлет томаго, икра масага.',
    photo: 'https://sun9-63.vkuserphoto.ru/impg/98yMWslgM3KhZpwDB-DPEfI965TTSbt-Gn32og/sfQsIP-L1tk.jpg?size=0x1000&quality=95&background=ffffff&crop=0.084,0,0.833,1&sign=a0ae657aa7b82d070a38f10e504c05fb&type=market_thumb' },
  { id: 39, cat: 'cold_rolls', name: 'Филадельфия Лайт', price: 410, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, огурец, лосось.',
    compo: 'Рис, нори, творожный сыр, огурец, лосось.',
    photo: 'https://sun9-71.vkuserphoto.ru/impg/wSlj4zn54w16o3b6mr4woqVpVxGd5E0EDWEEkw/xrzJWFfxGL0.jpg?size=0x1000&quality=95&background=ffffff&crop=0.188,0,0.625,1&sign=ec0633cacb79f936a3789f222463def4&type=market_thumb' },
  { id: 40, cat: 'cold_rolls', name: 'Сяки Маки', price: 350, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, огурец, лосось, кунжут белый.',
    compo: 'Рис, нори, творожный сыр, огурец, лосось, кунжут белый.',
    photo: 'https://sun9-86.vkuserphoto.ru/impg/VAafGhpjoJZVRN2b6kjUvhqh_hgRHPgkMhTzRw/r8dmqf-SKtw.jpg?size=0x800&quality=95&background=ffffff&crop=0,0,1,1&sign=a30b3e4a7819f11873ae6dc919c7fd8b&type=market_thumb' },
  { id: 41, cat: 'cold_rolls', name: 'Чикен Хруст', price: 350, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, курица, огурец, сухари панко, жареный лук, сырный соус, кунжут.',
    compo: 'Рис, нори, творожный сыр, курица, огурец, сухари панко, жареный лук, сырный соус, кунжут.',
    photo: 'https://sun9-72.vkuserphoto.ru/impg/eVuNEEhYXt4RkBDOwtPrmhMg3NaVS5u1n9J-1w/DfOwNMgS2pk.jpg?size=0x1000&quality=95&background=ffffff&crop=0.192,0,0.617,1&sign=840b81f89dddc79cd9938aa4b33291ed&type=market_thumb' },
  { id: 42, cat: 'cold_rolls', name: 'Бонито', price: 350, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, огурец, лосось терияки, стружка тунца.',
    compo: 'Рис, нори, творожный сыр, огурец, лосось терияки, стружка тунца.',
    photo: 'https://sun9-63.vkuserphoto.ru/impg/tvSzTfa2ZfzNEHXInq5PTbPa_ISKoHJHNyyHVg/KDO_OXgDApI.jpg?size=0x830&quality=95&background=ffffff&crop=0.144,0,0.712,1&sign=9060bdfa87e2da0300c318a5f538201f&type=market_thumb' },
  { id: 43, cat: 'cold_rolls', name: 'Ролл с лепестками миндаля', price: 390, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, огурец, курица, унаги соус, ореховый соус, лепестки миндаля.',
    compo: 'Рис, нори, творожный сыр, огурец, курица, унаги соус, ореховый соус, лепестки миндаля.',
    photo: 'https://sun9-71.vkuserphoto.ru/impg/wBZpz5GbGGegvCgjL-kk6MGPZq7j2aPxhDV8Gg/Za5oHuiJKHk.jpg?size=0x1000&quality=95&background=ffffff&crop=0.188,0,0.625,1&sign=74cc386093741e5d0da76b386bed899a&type=market_thumb' },
  { id: 44, cat: 'cold_rolls', name: 'Шахматный', price: 360, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, огурец, лосось, кунжут белый/черный.',
    compo: 'Рис, нори, творожный сыр, огурец, лосось, кунжут белый/черный.',
    photo: 'https://sun9-49.vkuserphoto.ru/impg/zPKFJ3ga2IWhiABbYPInLQSp1OlTIMPOFAEE3w/vKWmecAPpa4.jpg?size=0x1000&quality=95&background=ffffff&crop=0.13,0,0.74,1&sign=87ce107d8781035a31a9069cc0505a20&type=market_thumb' },
  { id: 45, cat: 'cold_rolls', name: 'Филадельфия Микс', price: 450, emoji: '🍣',
    desc: 'Рис, нори, творожный сыр, угорь, лосось, огурец, унаги соус, кунжут.',
    compo: 'Рис, нори, творожный сыр, угорь, лосось, огурец, унаги соус, кунжут.',
    photo: 'https://sun9-31.vkuserphoto.ru/impg/k9sO6oVmv3er5R7pnwuOg1pvGqNes9tWtdvztg/g_WdCEN_hc4.jpg?size=0x1000&quality=95&background=ffffff&crop=0.143,0,0.715,1&sign=b721344a9d764774c809fe8d09a1d65f&type=market_thumb' },
  // Горячие роллы
  { id: 46, cat: 'hot_rolls', name: 'Калифорния Темпура', price: 390, emoji: '🔥',
    desc: 'Рис, нори, творожный сыр, икра масаго, краб, огурец.',
    compo: 'Рис, нори, творожный сыр, икра масаго, краб, огурец.',
    photo: 'https://sun9-32.vkuserphoto.ru/impg/rXwq5IVD85S212v8vR2Z4Kql6MI5EYMTJY5HHA/St2lCms-f60.jpg?size=0x896&quality=95&background=ffffff&crop=0.153,0,0.694,1&sign=08c694a879aef2fc7b006ee936955f8b&type=market_thumb' },
  { id: 47, cat: 'hot_rolls', name: 'Унаги темпура', price: 390, emoji: '🔥',
    desc: 'Рис, нори, творожный сыр, угорь, помидор, кляр панко.',
    compo: 'Рис, нори, творожный сыр, угорь, помидор, кляр панко.',
    photo: 'https://sun9-84.vkuserphoto.ru/impg/ljt7kJUcm2o2XmfJKoBT5WSC1gaRuQFASPuUNg/RdYg2hedoJA.jpg?size=0x896&quality=95&background=ffffff&crop=0.153,0,0.694,1&sign=6ecd1c89001b41f16f58025171957d36&type=market_thumb' },
  { id: 48, cat: 'hot_rolls', name: 'Горячий Эби Сяки', price: 440, emoji: '🔥',
    desc: 'Нори, рис, творожный сыр, масаго, креветка в кляре, лосось, кляр, унаги соус.',
    compo: 'Нори, рис, творожный сыр, масаго, креветка в кляре, лосось, кляр, унаги соус.',
    photo: 'https://sun9-48.vkuserphoto.ru/impg/A66a4TvZwACKd3AtJRCrUT8L9kqoLaV1XPAE1A/zD7E9zPR07o.jpg?size=0x896&quality=95&background=ffffff&crop=0.153,0,0.694,1&sign=05d814f5a75061f69bebfbe735ec099a&type=market_thumb' },
  { id: 49, cat: 'hot_rolls', name: 'Ролл Фридей', price: 350, emoji: '🔥',
    desc: 'Курица, помидор, сыр творожный, сыр моцарелла, соус сырный, соус чесночный, лук-тортилья сырная.',
    compo: 'Курица, помидор, сыр творожный, сыр моцарелла, соус сырный, соус чесночный, лук-тортилья сырная.',
    photo: 'https://sun9-65.vkuserphoto.ru/impg/DsaRPShxGLtZ_h30i4ovGNCPSNq7mTGDGhFYBw/3_7CAxgWotE.jpg?size=0x1000&quality=95&background=ffffff&crop=0.084,0,0.833,1&sign=21ca21bf8628a78c276cd76228852504&type=market_thumb' },
  { id: 50, cat: 'hot_rolls', name: 'Темпура лосось', price: 390, emoji: '🔥', hit: true,
    desc: 'Рис, нори, творожный сыр, лосось, кляр.',
    compo: 'Рис, нори, творожный сыр, лосось, кляр.',
    photo: 'https://sun9-62.vkuserphoto.ru/impg/VKWYUrcbPw8U2JHAWHM3rGQZyiIZnPGMXMk4TA/8FGCCj6UlT8.jpg?size=0x960&quality=95&background=ffffff&crop=0.083,0,0.835,1&sign=046574334c84c9bf14a5dde009944c6a&type=market_thumb' },
  { id: 51, cat: 'hot_rolls', name: 'Азума', price: 400, emoji: '🔥',
    desc: 'Рис, нори, творожный сыр, креветка, кляр, сырно/чесночная шапочка.',
    compo: 'Рис, нори, творожный сыр, креветка, кляр, сырно/чесночная шапочка.',
    photo: 'https://sun9-65.vkuserphoto.ru/impg/gARV0c1TeyDE1Cy7ECw1fn1ifJ-Qub3ktHHOGQ/ZMWA66CAr2A.jpg?size=0x1000&quality=95&background=ffffff&crop=0.084,0,0.833,1&sign=6dec0f7cbac9c5cfdbf18a6091360b3a&type=market_thumb' },
  { id: 52, cat: 'hot_rolls', name: 'Якитори', price: 420, emoji: '🔥',
    desc: 'Рис, нори, творожный сыр, угорь, лосось, кляр, унаги, кунжут.',
    compo: 'Рис, нори, творожный сыр, угорь, лосось, кляр, унаги, кунжут.',
    photo: 'https://sun9-20.vkuserphoto.ru/impg/33JXJyYc26lpnt7MxIRf6cTMvbAgCUORqQyHMQ/ZEj8IPpTobo.jpg?size=0x608&quality=95&background=ffffff&crop=0,0,1,1&sign=6e3d49d6555b22f5f893e6f3f197c766&type=market_thumb' },
  { id: 53, cat: 'hot_rolls', name: 'Дон Пеппер', price: 370, emoji: '🔥',
    desc: 'Рис, нори, творожный сыр, курица, кляр.',
    compo: 'Рис, нори, творожный сыр, курица, кляр.',
    photo: 'https://sun9-59.vkuserphoto.ru/impg/V-W72d0Ez4u7cLcilp8n6jS8G2L6fV7Bu7RQLg/NQPhk0XLDTE.jpg?size=0x634&quality=95&background=ffffff&crop=0,0,1,1&sign=586d6fc82fd331b8b4b94f3aba124df2&type=market_thumb' },
  { id: 54, cat: 'hot_rolls', name: 'Фудзияма', price: 400, emoji: '🔥',
    desc: 'Рис, нори, творожный сыр, лосось, тортилья сырная, кляр.',
    compo: 'Рис, нори, творожный сыр, лосось, тортилья сырная, кляр.',
    photo: 'https://sun9-7.vkuserphoto.ru/impg/etOf6PPOMRRO7rPRoVXhC_foBy87Pgzjc9GDYw/MvzfszPmZ2I.jpg?size=0x676&quality=95&background=ffffff&crop=0,0,1,1&sign=ea26992084b0bc965806ea9e2cd4b14b&type=market_thumb' },
  { id: 55, cat: 'hot_rolls', name: 'Острый Чили Эби', price: 400, emoji: '🔥',
    desc: 'Рис, нори, творожный сыр, креветка, лосось, кляр, ореховый соус, шрирачи соус.',
    compo: 'Рис, нори, творожный сыр, креветка, лосось, кляр, ореховый соус, шрирачи соус.',
    photo: 'https://sun9-85.vkuserphoto.ru/impg/aIlEbROpVoF0RCIwqj2c9XiUroIQJ6iEcP71jQ/uoxSs_V2iVk.jpg?size=0x896&quality=95&background=ffffff&crop=0.153,0,0.694,1&sign=2a36647be3a247b865643128b521ca61&type=market_thumb' },
  // Запечённые роллы
  { id: 56, cat: 'baked_rolls', name: 'Запеченный Чеддер', price: 420, emoji: '🧀',
    desc: 'Нори, творожный сыр, рис, курица, огурец, сыр Чеддер, Унаги соус, жаренный лук.',
    compo: 'Нори, творожный сыр, рис, курица, огурец, сыр Чеддер, Унаги соус, жаренный лук.',
    photo: 'https://sun9-53.vkuserphoto.ru/impg/GB5LJ9kGKCciJd9ggGO_qi0qAxuW6Ok9YTI86g/mkQOKvnu3zA.jpg?size=0x896&quality=95&background=ffffff&crop=0.153,0,0.694,1&sign=437f8f13f8ffdc781a0901d3092b2afa&type=market_thumb' },
  { id: 57, cat: 'baked_rolls', name: 'Запеченный Сяке', price: 390, emoji: '🧀',
    desc: 'Рис, нори, творожный сыр, лосось, сырная шапочка, Унаги соус.',
    compo: 'Рис, нори, творожный сыр, лосось, сырная шапочка, Унаги соус.',
    photo: 'https://sun9-23.vkuserphoto.ru/impg/GKVaKy5odZdGUC3b9fwD3cMN7FGcqXpCm-0nfA/Q3P54j7p-TE.jpg?size=0x896&quality=95&background=ffffff&crop=0.153,0,0.694,1&sign=03b77d139c2e71704e317159dd503533&type=market_thumb' },
  { id: 58, cat: 'baked_rolls', name: 'Запеченная Азума', price: 390, emoji: '🧀',
    desc: 'Рис, нори, творожный сыр, креветка, сухари панко, чесночная шапочка.',
    compo: 'Рис, нори, творожный сыр, креветка, сухари панко, чесночная шапочка.',
    photo: 'https://sun9-70.vkuserphoto.ru/impg/6KoJ8nCDMbaSZAvIPjdrJWs2N8ebWlXJqfAByA/q8H6wU4175Q.jpg?size=0x896&quality=95&background=ffffff&crop=0.153,0,0.694,1&sign=c212cde16bbd87d6ae5e2888bf03ab3b&type=market_thumb' },
  { id: 59, cat: 'baked_rolls', name: 'Запеченная Филадельфия', price: 440, emoji: '🧀', hit: true,
    desc: 'Нори, творожный сыр, лосось, Огурец, рис, Унаги соус.',
    compo: 'Нори, творожный сыр, лосось, Огурец, рис, Унаги соус.',
    photo: 'https://sun9-84.vkuserphoto.ru/impg/hT5xb9--ilu6gKColMN7U2wlPG40P6Vmpanfkw/6AvXa6c66Kk.jpg?size=0x896&quality=95&background=ffffff&crop=0.153,0,0.694,1&sign=4390a734b692346d4746828adacccec3&type=market_thumb' },
  { id: 60, cat: 'baked_rolls', name: 'Запеченный Эби Сурими', price: 450, emoji: '🧀',
    desc: 'Рис, нори, творожный сыр, креветка, мясо краба, стружка тунца, сырная шапочка, унаги соус, чесночный соус, кунжут.',
    compo: 'Рис, нори, творожный сыр, креветка, мясо краба, стружка тунца, сырная шапочка, унаги соус, чесночный соус, кунжут.',
    photo: 'https://sun9-7.vkuserphoto.ru/impg/95LZRyVz_7BHGMdrhSU4M08ZZpVc2nl3mWMURA/p10qolAWUB4.jpg?size=0x896&quality=95&background=ffffff&crop=0.153,0,0.694,1&sign=318f93c1f0ca4dcd59fa1df7f8046a64&type=market_thumb' },
  { id: 61, cat: 'baked_rolls', name: 'Румяный', price: 370, emoji: '🧀',
    desc: 'Рис, нори, творожный сыр, омлет томага, сырная шапочка, унаги соус, кунжут.',
    compo: 'Рис, нори, творожный сыр, омлет томага, сырная шапочка, унаги соус, кунжут.',
    photo: 'https://sun9-60.vkuserphoto.ru/impg/h6FstmVvi3gObajM1qXUjmFaCW8JfYRSHrqXHg/Zz7HKo2_bW4.jpg?size=0x896&quality=95&background=ffffff&crop=0.153,0,0.694,1&sign=bdeb0f6a25f5551690b6aa771cefbb4d&type=market_thumb' },
  { id: 62, cat: 'baked_rolls', name: 'Запеченный Кайф', price: 350, emoji: '🧀',
    desc: 'Рис, нори, творожный сыр, мясо краба, сырная шапочка, икра масаго, кунжут черный.',
    compo: 'Рис, нори, творожный сыр, мясо краба, сырная шапочка, икра масаго, кунжут черный.',
    photo: 'https://sun9-28.vkuserphoto.ru/impg/_3vLY1jJq-Al5OTjXXBtYIx0NbzWxAWT0p-PqQ/38AO9pmX2I8.jpg?size=0x896&quality=95&background=ffffff&crop=0.153,0,0.694,1&sign=a4b04cfb797bcaf6b8c365d800c11434&type=market_thumb' },
  { id: 63, cat: 'baked_rolls', name: 'Запеченный цезарь', price: 370, emoji: '🧀',
    desc: 'Рис, нори, творожный сыр, курица, сухари панко, сырная шапочка, чесночный соус, унаги соус.',
    compo: 'Рис, нори, творожный сыр, курица, сухари панко, сырная шапочка, чесночный соус, унаги соус.',
    photo: 'https://sun9-32.vkuserphoto.ru/impg/XPt_gwcJyW2MOL9qR9v5b8GbiQXGKiePapPizg/bf9gh8lpIrA.jpg?size=0x896&quality=95&background=ffffff&crop=0.153,0,0.694,1&sign=7c352fc54b13103a10bf1b28b944150d&type=market_thumb' },
  { id: 64, cat: 'baked_rolls', name: 'Техас', price: 380, emoji: '🧀',
    desc: 'Рис, нори, творожный сыр, курица, черный кунжут, сырная шапочка, жаренный лук, унаги соус, белый кунжут.',
    compo: 'Рис, нори, творожный сыр, курица, черный кунжут, сырная шапочка, жаренный лук, унаги соус, белый кунжут.',
    photo: 'https://sun9-66.vkuserphoto.ru/impg/A8ZRUZQNfy2cGM32oLudSb607xTebdnpSxRgXQ/VheVu9HveeA.jpg?size=0x896&quality=95&background=ffffff&crop=0.153,0,0.694,1&sign=aeb0cc6d9816cff142581bf73c696b07&type=market_thumb' },
  // Наборы
  { id: 65, cat: 'sets', name: 'Мега', price: 4950, emoji: '🍱', hit: true,
    desc: 'Сборный набор из 13 позиций — полный состав ниже.',
    compo: 'Филадельфия Лайт, Инь Янь, Калифорния, Бурито, Якитори, Калифорния Темпура, Филадельфия Унаги, Хасамаки икура, Запеченный цезарь, Запеченный Эби Сурими, Хасамаки с огурцом, Дон Пеппер, Азума.',
    photo: 'https://sun9-60.vkuserphoto.ru/impg/0fZ-sE91COLhv7bVXKDSi6Dm0wwoBStxFELBQw/8SMMC6MJla4.jpg?size=768x0&quality=95&background=ffffff&crop=0,0.012,1,0.977&sign=8d6ca77b0cd87d09b4a3be9efbab148d&type=market_thumb' },
  { id: 66, cat: 'sets', name: 'Классический', price: 1100, emoji: '🍱',
    desc: 'Сборный набор из 4 позиций — полный состав ниже.',
    compo: 'Соломон, Филадельфия в кунжуте, Хасамаки с огурцом, Хасамаки с лососем.',
    photo: 'https://sun9-15.vkuserphoto.ru/impg/hmULjdQ543dd-6DV5-DRUrbKqOcSGu28k-1sYA/lAmGY1P9nGk.jpg?size=0x780&quality=95&background=ffffff&crop=0.144,0,0.712,1&sign=0292dcccbf91d99bd519830e76b05d37&type=market_thumb' },
  { id: 67, cat: 'sets', name: 'Набор №3', price: 1350, emoji: '🍱',
    desc: 'Сборный набор из 4 позиций — полный состав ниже.',
    compo: 'Темпура лосось, Дон Пеппер, Фудзияма, Ролл Болл 6 шт.',
    photo: 'https://sun9-15.vkuserphoto.ru/impg/CUCIulp5Xqhk6tKeh5EfURfTBFPo4tN9fPIHDQ/yZ-SQloEHfE.jpg?size=0x454&quality=95&background=ffffff&crop=0,0,1,1&sign=01a6505c9da2fb19ca3a13449c058211&type=market_thumb' },
  { id: 68, cat: 'sets', name: 'Набор №2', price: 2450, emoji: '🍱',
    desc: 'Сборный набор из 6 позиций — полный состав ниже.',
    compo: 'Филадельфия Лайт, Москва, Канада, Калифорния, Румыный, Азума.',
    photo: 'https://sun9-26.vkuserphoto.ru/impg/StT0uMLfAK4LXPAjxSOh9pOnkOkgT4OB_EK2Zw/pNBirfMU8wQ.jpg?size=0x1000&quality=95&background=ffffff&crop=0.084,0,0.833,1&sign=6b2d285d95cfc5943e6a5bfd8a3b2655&type=market_thumb' },
  { id: 69, cat: 'sets', name: 'Филка', price: 2000, emoji: '🍱',
    desc: 'Сборный набор из 4 позиций — полный состав ниже.',
    compo: 'Филадельфия Лайт, Москва, Филадельфия, Филадельфия Вип.',
    photo: 'https://sun9-44.vkuserphoto.ru/impg/irLtP2OXwz1Gg5POqc7XUx_4vrYWUlgtT4o8LQ/8f2J8yz1wxs.jpg?size=0x1000&quality=95&background=ffffff&crop=0.084,0,0.833,1&sign=90f3beeb2e863ecae7e83eb1bb36a638&type=market_thumb' },
  { id: 70, cat: 'sets', name: 'Набор №1', price: 1800, emoji: '🍱',
    desc: 'Сборный набор из 5 позиций — полный состав ниже.',
    compo: 'Филадельфия Лайт, Москва, Ика Маки, Бурито, Хасамаки икура.',
    photo: 'https://sun9-2.vkuserphoto.ru/impg/Oy0UaMfErQI1bVu5g0J6-yW5LQ543Wr4gbfY0w/dvEPUmJLKDk.jpg?size=0x1000&quality=95&background=ffffff&crop=0.087,0,0.826,1&sign=d5543c4e37e26b76366bef6462e1420d&type=market_thumb' },
  { id: 71, cat: 'sets', name: 'Запеченный Сет', price: 1050, emoji: '🍱',
    desc: 'Сборный набор из 3 позиций — полный состав ниже.',
    compo: 'Запеченный Кайф, Запеченный Цезарь, Румяный.',
    photo: 'https://sun9-22.vkuserphoto.ru/impg/wEoxoEU-bpeDR2J1wc2f_oyBvMrMW664XOqm-Q/nvSqq4uIILA.jpg?size=0x719&quality=95&background=ffffff&crop=0,0,1,1&sign=571f4c47a7cd9984e302845da94f31a9&type=market_thumb' },
  { id: 72, cat: 'sets', name: 'Халяль', price: 1250, emoji: '🍱',
    desc: 'Сборный набор из 3 позиций — полный состав ниже.',
    compo: 'Филадельфия микс, Запеченный эби сурими, Шахматный.',
    photo: 'https://sun9-79.vkuserphoto.ru/impg/b7r20hpDqNCnNglBYumQ5jlYyE-O7yLwD9a-mg/Vn5qiO8YlgA.jpg?size=0x838&quality=95&background=ffffff&crop=0.114,0,0.772,1&sign=d7e2d9ca412d844577d5f2c6c3f409f2&type=market_thumb' },
  // Салаты
  { id: 73, cat: 'salads', name: 'Салат чука с угрем', price: 310, emoji: '🥗',
    desc: 'Чука салат, ореховый соус, угорь, кунжут.',
    compo: 'Чука салат, ореховый соус, угорь, кунжут.',
    photo: 'https://sun9-21.vkuserphoto.ru/impg/rVxm_7N9XrBc0oSRhn69inl1YN92uk54m5FiMA/rAV8BPY_4sY.jpg?size=0x1000&quality=95&background=ffffff&crop=0.105,0,0.79,1&sign=e4578a0814fd14bc7869b13380d25d43&type=market_thumb' },
  { id: 74, cat: 'salads', name: 'Салат Чука', price: 250, emoji: '🥗',
    desc: 'Салат чука, ореховый соус, кунжут.',
    compo: 'Салат чука, ореховый соус, кунжут.',
    photo: 'https://sun9-37.vkuserphoto.ru/impg/yldacOu6DJrHSto8IXnjQTaxicm_SAIpnNMyBA/ANwYFxQav0c.jpg?size=0x1000&quality=95&background=ffffff&crop=0.084,0,0.833,1&sign=7c9ba7526c2bdf2dfbea41712230ab40&type=market_thumb' },
  // Снэки
  { id: 75, cat: 'snacks', name: 'Куриные стрипсы', price: 280, emoji: '🍟',
    desc: 'Курица в панировке, 5шт.',
    compo: 'Курица в панировке, 5шт.',
    photo: 'https://sun9-54.vkuserphoto.ru/impg/IylLc2Lpawxf2O2P8GAyB3FfAULrqwZVMJnjSg/GZZXg1BAdEM.jpg?size=0x1000&quality=95&background=ffffff&crop=0.089,0,0.822,1&sign=51d3fcfefe3869caec26125022851e3a&type=market_thumb' },
  { id: 76, cat: 'snacks', name: 'Сырные палочки', price: 250, emoji: '🍟',
    desc: 'Сырные палочки- 5шт',
    compo: 'Сырные палочки- 5шт.',
    photo: 'https://sun9-71.vkuserphoto.ru/impg/vC99Xdgu4a9iAcotSuTGbdNnTItiPg4Y0WMxfQ/v6eR0g8uVls.jpg?size=0x848&quality=95&background=ffffff&crop=0.17,0,0.659,1&sign=4c6fa0440312db887d39da08f44a029d&type=market_thumb' },
  { id: 77, cat: 'snacks', name: 'Картофельные дольки', price: 150, emoji: '🍟',
    desc: 'Картофель жареный во фритюре',
    compo: 'Картофель жареный во фритюре.',
    photo: 'https://sun9-62.vkuserphoto.ru/impg/WgfhmiAFHEXqHhs0I4NTwtSWRhvDJUy7PCIibA/E-oeUFDBCZQ.jpg?size=833x0&quality=95&background=ffffff&crop=0,0.016,1,0.967&sign=eb6306bcf21c0060c51a83ba597daf18&type=market_thumb' },
  { id: 78, cat: 'snacks', name: 'Креветки в кляре', price: 350, emoji: '🍟',
    desc: 'Креветки в кляре политые унаги соусом, 5шт.',
    compo: 'Креветки в кляре политые унаги соусом, 5шт.',
    photo: 'https://sun9-29.vkuserphoto.ru/impg/_T8lPi8KY6zLhkR2R52NzRxw_pNKao_Svbi-WQ/Fvk3PZf7VyU.jpg?size=833x0&quality=95&background=ffffff&crop=0,0.016,1,0.967&sign=d1e15b4a75cd91a99013476e2acd31b4&type=market_thumb' },
  { id: 79, cat: 'snacks', name: 'Луковые кольца', price: 180, emoji: '🍟',
    desc: 'Лук жаренный во фритюре',
    compo: 'Лук жаренный во фритюре.',
    photo: 'https://sun9-52.vkuserphoto.ru/impg/k_bZkLWUEGZrfl8FdzzW0mRJjtkV3C9fgOCH8w/99XttUz6IVQ.jpg?size=833x0&quality=95&background=ffffff&crop=0,0.016,1,0.967&sign=9bb2c149f6751a53514abc32b1074825&type=market_thumb' },
  { id: 80, cat: 'snacks', name: 'Нагетсы', price: 200, emoji: '🍟',
    desc: 'Куриное филе в панировке жаренное во фритюре',
    compo: 'Куриное филе в панировке жаренное во фритюре.',
    photo: 'https://sun9-1.vkuserphoto.ru/impg/NMHNnKmk3xRZeG_DHOtlCR_q6ZSQqB5KD4y5zQ/Hv7-zeM5NJ0.jpg?size=833x0&quality=95&background=ffffff&crop=0,0.016,1,0.967&sign=8bb29a525ab569595292ce1bf7ad9713&type=market_thumb' },
  { id: 81, cat: 'snacks', name: 'Картофель фри', price: 150, emoji: '🍟',
    desc: 'Картофель жаренный во фритюре',
    compo: 'Картофель жаренный во фритюре.',
    photo: 'https://sun9-29.vkuserphoto.ru/impg/Z3zl7haJppHiypbq2og8Ws5AYhANpuOgzM2Mrg/kA_dGKJIYK4.jpg?size=833x0&quality=95&background=ffffff&crop=0,0.016,1,0.967&sign=68e21430ac92a4d8bc51764222253628&type=market_thumb' },
  { id: 82, cat: 'snacks', name: 'Ролл Болл', price: 35, emoji: '🍟',
    desc: 'Лосось, рис, творожный сыр, угорь.',
    compo: 'Лосось, рис, творожный сыр, угорь.',
    photo: 'https://sun9-52.vkuserphoto.ru/impg/WuL51RDK2xmtSSZnlUJJXx0jlVffJAYEEMKqkA/VgGq_YpvzOw.jpg?size=0x848&quality=95&background=ffffff&crop=0.17,0,0.659,1&sign=5e1f7625ad9e5eeb1f42c3d8aee34990&type=market_thumb' },
  { id: 83, cat: 'snacks', name: 'Запеченные мидии', price: 370, emoji: '🍟',
    desc: 'Мидии, сырная шапочка, унаги соус, кунжут.',
    compo: 'Мидии, сырная шапочка, унаги соус, кунжут.',
    photo: 'https://sun9-60.vkuserphoto.ru/impg/f2-AtPxrZVASErQBZzy3ZofKRdlI6M5Mhn2vjQ/5hVG5aemxsE.jpg?size=0x848&quality=95&background=ffffff&crop=0.17,0,0.659,1&sign=9e9726632fcaead6a58148255a6ffd27&type=market_thumb' },
  // Соусы
  { id: 84, cat: 'sauces', name: 'Ореховый соус', price: 35, emoji: '🥫',
    desc: 'Цена за 1 шт',
    compo: 'Цена за 1 шт.',
    photo: 'https://sun9-83.vkuserphoto.ru/impg/fFumsbTgU88JBAeq1MgoWJeAQejW8GN5_KH6pw/gu0XU20nt5U.jpg?size=0x1000&quality=95&background=ffffff&crop=0.094,0,0.812,1&sign=8c8a0da4ba02a0de4ba76485b0d1f709&type=market_thumb' },
  { id: 85, cat: 'sauces', name: 'Унаги соус', price: 35, emoji: '🥫',
    desc: 'Цена за 1 шт',
    compo: 'Цена за 1 шт.',
    photo: 'https://sun9-32.vkuserphoto.ru/impg/y_1lqWDc4EC6w_yBjkz_APvjjtgOnDLsOtvUJA/q4ynuaUcsLU.jpg?size=0x1000&quality=95&background=ffffff&crop=0.099,0,0.802,1&sign=486e26f386190c52ddab4627b87a71e0&type=market_thumb' },
  { id: 86, cat: 'sauces', name: 'Шрирачи соус', price: 35, emoji: '🥫',
    desc: 'Цена за 1 шт',
    compo: 'Цена за 1 шт.',
    photo: 'https://sun9-62.vkuserphoto.ru/impg/wlqz8EMuujsTaqbqWAoXFHbZFJrF4-vISW6WFA/x9Fhmf-_bVg.jpg?size=0x1000&quality=95&background=ffffff&crop=0.098,0,0.805,1&sign=4bc21c46a98b26a6f77f858350573cf4&type=market_thumb' },
  { id: 87, cat: 'sauces', name: 'Спайси соус', price: 35, emoji: '🥫',
    desc: 'Цена за 1 шт',
    compo: 'Цена за 1 шт.',
    photo: 'https://sun9-35.vkuserphoto.ru/impg/r52pRpb_SMgTsGkUz5w-SUT9RWzriEx-oX7fSg/pUxj2Dy_WKk.jpg?size=0x1000&quality=95&background=ffffff&crop=0.1,0,0.8,1&sign=28dc741e07bc23058084d149174509b7&type=market_thumb' },
  { id: 88, cat: 'sauces', name: 'Томатный соус', price: 35, emoji: '🥫',
    desc: 'Цена за 1 шт',
    compo: 'Цена за 1 шт.',
    photo: 'https://sun9-10.vkuserphoto.ru/impg/c0GKLhGzVdKldvTYUDyj00OJ7aiA4SID-i6lRA/CZkbzazEumc.jpg?size=0x1000&quality=95&background=ffffff&crop=0.101,0,0.797,1&sign=cfb2acd04db9b9c5c6b1cfd71afcee49&type=market_thumb' },
  { id: 89, cat: 'sauces', name: 'Чесночный соус', price: 35, emoji: '🥫',
    desc: 'Цена за 1 шт',
    compo: 'Цена за 1 шт.',
    photo: 'https://sun9-40.vkuserphoto.ru/impg/k7PAHg485HcchZs3hKbvqGcO8JWVJvKL1JPX7Q/F03kR-sSCqA.jpg?size=0x1000&quality=95&background=ffffff&crop=0.092,0,0.817,1&sign=07739b9933aac28b0b276a66d8bcdf60&type=market_thumb' },
  { id: 90, cat: 'sauces', name: 'Барбекю соус', price: 35, emoji: '🥫',
    desc: 'Цена за 1 шт',
    compo: 'Цена за 1 шт.',
    photo: 'https://sun9-54.vkuserphoto.ru/impg/angzk-wgKci6b_STg6Ynt-BMEfRa22-ahPHumw/G2D6ohJ3kZo.jpg?size=0x1000&quality=95&background=ffffff&crop=0.097,0,0.807,1&sign=880787a0ce9bed4ef0055729248f1c65&type=market_thumb' },
  { id: 91, cat: 'sauces', name: 'Сырный соус', price: 35, emoji: '🥫',
    desc: 'Цена за 1 шт',
    compo: 'Цена за 1 шт.',
    photo: 'https://sun9-57.vkuserphoto.ru/impg/kzZRGLWBDkIrxHUDJGwCTmk-mefPOHTr2CkFFQ/yyNV6pYdLAM.jpg?size=0x1000&quality=95&background=ffffff&crop=0.084,0,0.833,1&sign=cd1fd63f4a99f9c656fcd4dd87b19607&type=market_thumb' },
  { id: 92, cat: 'sauces', name: 'Васаби', price: 30, emoji: '🥫',
    desc: 'Цена за 1 шт',
    compo: 'Цена за 1 шт.',
    photo: 'https://sun9-19.vkuserphoto.ru/impg/FLFK-H2867rNGsGE6erHSS-qNo21ZHxyAU_kGQ/WHC7krEuj8M.jpg?size=0x1000&quality=95&background=ffffff&crop=0.088,0,0.824,1&sign=5c1a4400a370c898fd88ef061ce9e492&type=market_thumb' },
  { id: 93, cat: 'sauces', name: 'Соевый соус', price: 40, emoji: '🥫',
    desc: 'Цена за 1шт',
    compo: 'Цена за 1шт.',
    photo: 'https://sun9-45.vkuserphoto.ru/impg/apL7e4bg_hrQPttd8k_zx4erbCNBvDDZthzOyQ/5YjnTk385qQ.jpg?size=0x1000&quality=95&background=ffffff&crop=0.084,0,0.833,1&sign=6f9a90ce9ec7a4a55b95f603798b102b&type=market_thumb' },
  { id: 94, cat: 'sauces', name: 'Имбирь белый', price: 40, emoji: '🥫',
    desc: 'Цена за 1 шт',
    compo: 'Цена за 1 шт.',
    photo: 'https://sun9-50.vkuserphoto.ru/impg/7TrH2msLnY0mAAACUcaFhnsejxmobVXaZ0451Q/MQV6Yv-kvms.jpg?size=0x1000&quality=95&background=ffffff&crop=0.084,0,0.833,1&sign=2a1b14b4991ee3c25814cf2cb7b79ee2&type=market_thumb' },
  // Напитки и десерты
  { id: 95, cat: 'drinks', name: 'Морс клюквенный', price: 120, emoji: '🍵',
    desc: 'Морс клюква',
    compo: 'Морс клюква.',
    photo: 'https://sun9-57.vkuserphoto.ru/impg/-WxQ2TG9WmCaQRPnDIzG8xp3_jdPj4rTaFutXQ/5ofPx6wn7EE.jpg?size=0x1000&quality=95&background=ffffff&crop=0.084,0,0.833,1&sign=ac6db206bba4ca01d0609b956f0d65f1&type=market_thumb' },
  { id: 96, cat: 'drinks', name: 'Чизкейк', price: 190, emoji: '🍵',
    desc: 'Карамель с арахисом',
    compo: 'Карамель с арахисом.',
    photo: 'https://sun9-69.vkuserphoto.ru/impg/N4k20YR2BZw10fbfOKESPUiVz-mUOhybnVvtfQ/cxJV5fEd4HM.jpg?size=0x400&quality=95&background=ffffff&crop=0,0,1,1&sign=ff73b47b4c176a26cdcdb308aa93e50a&type=market_thumb' },
];

// ===== Telegram WebApp =====
const tg = window.Telegram ? window.Telegram.WebApp : null;
if (tg) {
  tg.ready();
  tg.expand();
  try { tg.setHeaderColor('#10140F'); } catch (e) {}
  try { tg.setBackgroundColor('#10140F'); } catch (e) {}
}

// ===== Состояние корзины =====
let cart = {}; // { productId: qty }

// Корзина не сохраняется между визитами — при каждом открытии приложения она пустая.
function loadCart() {
  cart = {};
  try { localStorage.removeItem('vkusnoedem_cart'); } catch (e) {}
}
function saveCart() {}

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
function deleteItem(id) {
  delete cart[id];
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

// ===== Погода в Кунашаке (живые данные, Open-Meteo, без ключа) =====
// Координаты с. Кунашак, Челябинская обл.: 55.70155, 61.54932
const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast?latitude=55.70155&longitude=61.54932&current_weather=true&timezone=Asia%2FYekaterinburg';
const weatherFactEl = document.getElementById('weatherFact');
const weatherIconEl = document.getElementById('weatherIcon');
const weatherTextEl = document.getElementById('weatherText');

function weatherEmoji(code, isDay) {
  if (code === 0) return isDay ? '☀️' : '🌙';
  if (code === 1 || code === 2) return isDay ? '🌤️' : '☁️';
  if (code === 3) return '☁️';
  if (code === 45 || code === 48) return '🌫️';
  if (code >= 51 && code <= 67) return '🌧️';
  if (code >= 71 && code <= 77) return '❄️';
  if (code >= 80 && code <= 82) return '🌦️';
  if (code >= 95) return '⛈️';
  return '🌡️';
}

async function loadWeather() {
  if (!weatherFactEl) return;
  try {
    const res = await fetch(WEATHER_URL);
    if (!res.ok) throw new Error('weather http ' + res.status);
    const data = await res.json();
    const cw = data.current_weather;
    if (!cw) throw new Error('no current_weather');
    const temp = Math.round(cw.temperature);
    const windMs = (cw.windspeed / 3.6).toFixed(1);
    weatherIconEl.textContent = weatherEmoji(cw.weathercode, cw.is_day === 1);
    weatherTextEl.textContent = `В Кунашаке ${temp > 0 ? '+' : ''}${temp}°C, ветер ${windMs} м/с`;
    weatherFactEl.hidden = false;
  } catch (e) {
    weatherFactEl.hidden = true;
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
  const weight = p.weight ? `<p class="card__weight">${p.weight}</p>` : '';

  return `
    <article class="card" data-id="${p.id}">
      <div class="card__media" style="background:${mediaBg(p)}">${hitBadge}${media}</div>
      <div class="card__body">
        <p class="card__name">${p.name}</p>
        ${weight}
        <div class="card__footer">
          <span class="card__price">${fmt(p.price)}</span>
          ${control}
        </div>
      </div>
    </article>`;
}

function mediaBg(p) {
  if (p.photo) return 'transparent';
  return 'linear-gradient(135deg, #1B6E32 0%, #4FCB3A 100%)';
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
  document.body.classList.toggle('has-cartbar', count > 0);
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
        <button class="sheet-row__remove" data-delete="${p.id}" aria-label="Удалить">✕</button>
      </div>`;
  }).join('');
  sheetTotalEl.textContent = fmt(cartTotal());
}

sheetItemsEl.addEventListener('click', (e) => {
  const plusBtn = e.target.closest('[data-plus]');
  const minusBtn = e.target.closest('[data-minus]');
  const deleteBtn = e.target.closest('[data-delete]');
  if (plusBtn) addItem(Number(plusBtn.dataset.plus));
  if (minusBtn) removeItem(Number(minusBtn.dataset.minus));
  if (deleteBtn) deleteItem(Number(deleteBtn.dataset.delete));
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
      <p class="product-modal__price">${fmt(p.price)}${p.weight ? ` · ${p.weight}` : ''}</p>
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
  checkoutBtn.textContent = 'Отправляем…';

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
    showOrderError('Не удалось отправить заказ. Попробуйте ещё раз или позвоните: +7 963 080-89-89');
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
loadWeather();
setInterval(loadWeather, 15 * 60000);
