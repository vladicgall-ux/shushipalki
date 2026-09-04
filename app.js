// ===== Данные меню =====
// Каталог сформирован из экспорта товаров сообщества «Вкусно едем» (VK Market YML,
// сгенерирован 04.09.2026): названия, цены, состав и фото — из фида, категории
// сверены и где нужно уточнены вручную (например, отдельные роллы и приборы/соусы,
// которые в исходном фиде числились в других разделах). Вес указан там, где он
// есть в описании товара у продавца — для остальных позиций вес не публиковался.
const CATEGORIES = [
  { key: 'pizza', title: 'Пицца' },
  { key: 'rolls', title: 'Роллы' },
  { key: 'sets', title: 'Сеты' },
  { key: 'burgers', title: 'Бургеры' },
  { key: 'shaurma', title: 'Шаурма и бурито' },
  { key: 'snacks', title: 'Закуски' },
  { key: 'drinks', title: 'Напитки и соусы' },
];

const PRODUCTS = [
  // Пицца
  { id: 1, cat: 'pizza', name: 'Пепперони с беконом', price: 550, emoji: '🍕',
    desc: 'Классическая пепперони с добавлением бекона',
    compo: 'Классическая пепперони с добавлением бекона. Маленькая - 350 рублей, большая - 550 рублей.',
    photo: 'https://sun9-60.vkuserphoto.ru/impg/I6tPQKdsA2YGVAO9bc-T1nuvlauzHqFaENy-5w/dBlpA1aMxsA.jpg?size=833x0&quality=95&background=ffffff&crop=0,0.071,1,0.857&sign=cf3dada61e7bc35485348a6502e7bac8&type=market_thumb' },
  { id: 2, cat: 'pizza', name: 'Новая', price: 550, emoji: '🍕',
    desc: 'Копченая куриная грудка, томаты, грибы, чесночный соус',
    compo: 'Копченая куриная грудка, томаты, грибы, чесночный соус. Маленькая - 350 рублей, большая - 550 рублей.',
    photo: 'https://sun9-50.vkuserphoto.ru/impg/c850436/v850436219/152046/XfK0ddQlTms.jpg?size=0x1000&quality=95&background=ffffff&crop=0.282,0,0.555,1&sign=003f95c5f7350e532bc377079ec5ffbd&type=market_thumb' },
  { id: 3, cat: 'pizza', name: 'Пепперони', price: 550, emoji: '🍕', hit: true,
    desc: 'Салями, сыр, томатный соус',
    compo: 'Салями, сыр, томатный соус. Маленькая - 350 рублей, большая - 550 рублей.',
    photo: 'https://sun9-74.vkuserphoto.ru/impg/hACe-fZGB-XVj5KoZ6a2n9WhBcDwlEic0VGu4w/SKpHbBQSSRA.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=cd44ba27e995440ab1947c066baf9f05&type=market_thumb' },
  { id: 4, cat: 'pizza', name: 'Гавайская', price: 550, emoji: '🍕',
    desc: 'Копченая куриная грудка, ананасы, репчатый лук',
    compo: 'Копченая куриная грудка, ананасы, репчатый лук. Маленькая - 350 рублей, большая - 550 рублей.',
    photo: 'https://sun9-46.vkuserphoto.ru/impg/c854424/v854424089/5983d/AEo6ZsbR1u4.jpg?size=0x1000&quality=95&background=ffffff&crop=0.255,0,0.555,1&sign=20fceb16a89463b10d14ec604254c46c&type=market_thumb' },
  { id: 5, cat: 'pizza', name: 'Охотничья', price: 550, emoji: '🍕',
    desc: 'Охотничьи колбаски, ветчина, маринованные огурчики, репчатый лук',
    compo: 'Охотничьи колбаски, ветчина, маринованные огурчики, репчатый лук. Маленькая - 350 рублей, большая - 550 рублей.',
    photo: 'https://sun9-27.vkuserphoto.ru/impg/c851016/v851016645/133bc2/Q3ReAttYYX4.jpg?size=0x1000&quality=95&background=ffffff&crop=0.169,0,0.555,1&sign=ccb83f15f1e4c93c6ad26a62238da1e7&type=market_thumb' },
  { id: 6, cat: 'pizza', name: 'Грибная', price: 550, emoji: '🍕',
    desc: 'Ветчина, бекон, шампиньоны, шиитаке, репчатый лук, чесночный соус',
    compo: 'Ветчина, бекон, шампиньоны, шиитаке, репчатый лук, чесночный соус. Маленькая - 350 рублей, большая - 550 рублей.',
    photo: 'https://sun9-68.vkuserphoto.ru/impg/BNu1lcABliJGqRxfF7iIszvYUsWnBjRg_G8mWw/nwfB4gjfhdc.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=79a542d2e7ac98a1958ee49779188e6f&type=market_thumb' },
  { id: 7, cat: 'pizza', name: 'Мясная', price: 550, emoji: '🍕',
    desc: 'Бекон, ветчина, салями, охотничьи колбаски, курочка копченая, томатный соус',
    compo: 'Бекон, ветчина, салями, охотничьи колбаски, курочка копченая, томатный соус. Маленькая - 350 рублей, большая - 550 рублей.',
    photo: 'https://sun9-32.vkuserphoto.ru/impg/C2CeOTvvDAO5oSJWKIJPZ-xwJPdeIZkfJw7nbg/0bQMa1cU6kc.jpg?size=833x0&quality=95&background=ffffff&crop=0,0.071,1,0.857&sign=95c73a1e34c5b6c5e730f0b8f8bf8d21&type=market_thumb' },
  { id: 8, cat: 'pizza', name: 'Сырная', price: 550, emoji: '🍕',
    desc: 'Моцарелла, фета, чеддер, дорблю',
    compo: 'Моцарелла, фета, чеддер, дорблю. Маленькая - 350 рублей, большая - 550 рублей.',
    photo: 'https://sun9-76.vkuserphoto.ru/impg/KDJAGU6qJ-3TXjniZQlf29AKHrD3p3s0Xlv2Og/as0blBNlerE.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=faca80f42796883fc412fbb1376cb593&type=market_thumb' },
  { id: 9, cat: 'pizza', name: 'Маргарита', price: 550, emoji: '🍕',
    desc: 'Томат, моцарелла, чеддер',
    compo: 'Томат, моцарелла, чеддер. Маленькая - 350 рублей, большая - 550 рублей.',
    photo: 'https://sun9-68.vkuserphoto.ru/impg/mwIj6yOGjVcUIVbxF5Ua5Md8Z2gFOihwEmzfvg/-VYWG_44HYI.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=d15010a745f2cbba3bfc7da26b031bf9&type=market_thumb' },
  // Роллы
  { id: 10, cat: 'rolls', name: '«Запечённый риф» с креветкой и крабом', price: 490, emoji: '🍣', hit: true,
    desc: 'Ролл - Креветка в кляре, моцарелла, чеддер, чеснок, майонез, соус унаги, рис, нори',
    compo: 'Ролл - Креветка в кляре, моцарелла, чеддер, чеснок, майонез, соус унаги, рис, нори. Ролл - Снежный краб, чеддер, чесноком, моцарелла, майонез, соус унаги, рис, нори.',
    photo: 'https://sun9-4.vkuserphoto.ru/impg/aGl-QDaWg8yL-RAWTIZmuzrmKoa55yALIrAgkA/_JP3LOwmnNM.jpg?size=833x0&quality=95&background=ffffff&crop=0,0.05,1,0.9&sign=c4825b3ecd8e89f1631f4eea74f8ad33&type=market_thumb' },
  { id: 11, cat: 'rolls', name: 'Сочный Мо', price: 390, weight: '240 г', emoji: '🍣',
    desc: 'Копченый бекон, творожный сыр, маринованный огурец, томат, кляр, сухари',
    compo: 'Копченый бекон, творожный сыр, маринованный огурец, томат, кляр, сухари. Вес: 240г.',
    photo: 'https://sun9-53.vkuserphoto.ru/impg/9QImBADr8Cmk0H543iH0B6iwn40HzBx20t_z8Q/rXIjVe6Scfg.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=3c12470f13f17acce9921ad6f127580e&type=market_thumb' },
  { id: 12, cat: 'rolls', name: 'Харумаки Сяке', price: 420, weight: '240 г', emoji: '🍣',
    desc: 'Лосось (1% соли), творожный сыр, свежий огурец, кляр, сухари',
    compo: 'Лосось (1% соли), творожный сыр, свежий огурец, кляр, сухари. Вес: 240г.',
    photo: 'https://sun9-45.vkuserphoto.ru/impg/IoCblW2TVyXaYZqP1wNZzyRMmEW0VBTG8L2C8Q/iJLjwxgVe2w.jpg?size=0x1000&quality=95&background=ffffff&crop=0.192,0,0.617,1&sign=17f56957a7d310c3b1228c7c900eb4ef&type=market_thumb' },
  { id: 13, cat: 'rolls', name: 'Харумаки Кани', price: 400, weight: '260 г', emoji: '🍣',
    desc: 'Снежный краб, креветка в кляре, творожный сыр, свежий огурец, икра, кляр, сухари',
    compo: 'Снежный краб, креветка в кляре, творожный сыр, свежий огурец, икра, кляр, сухари. Вес: 260г.',
    photo: 'https://sun9-43.vkuserphoto.ru/impg/hV1TKrnKCy519G7KDVfY1Bh-2yliFa-R8offtg/S-m4p5_WDRA.jpg?size=0x1000&quality=95&background=ffffff&crop=0.202,0,0.595,1&sign=6a030173ca72cda5d1d1a4c32a728c9b&type=market_thumb' },
  { id: 14, cat: 'rolls', name: 'Темпура мини', price: 900, weight: '60 г', emoji: '🍣',
    desc: 'Темпурный ролл: лосось жаренный, творожный сыр, кляр, сухари, ореховый соус',
    compo: 'Темпурный ролл: лосось жаренный, творожный сыр, кляр, сухари, ореховый соус. Темпурный ролл: снежный краб, творожный сыр, кляр, сухари, унаги соус. Темпурный ролл: тунец (1% соли), творожный сыр, кляр, сухари, острый соус. Вес: 60.',
    photo: 'https://sun9-38.vkuserphoto.ru/impg/LJUsT0EVhejVGGV59mpoBoQY1qhtbFFKvkTaPw/iZpfXM1Q-g4.jpg?size=0x1000&quality=95&background=ffffff&crop=0.202,0,0.595,1&sign=aac8a1a424320d1899cee991874b926d&type=market_thumb' },
  { id: 15, cat: 'rolls', name: 'Дасоку (темпура, запечённый)', price: 410, weight: '290 г', emoji: '🍣',
    desc: 'Копченый бекон, творожный сыр, томат, свежий огурец, лепешка сырная. Шапка: чеддер, моцарелла, чеснок, майонез, унаги соус',
    compo: 'Копченый бекон, творожный сыр, томат, свежий огурец, лепешка сырная. Шапка: чеддер, моцарелла, чеснок, майонез, унаги соус. Вес: 290г.',
    photo: 'https://sun9-28.vkuserphoto.ru/impg/cIXCq6ZZnTp4suWg-ZR1AHPIMynyXPt60Ljm_g/XBy7Z26JzFA.jpg?size=0x1000&quality=95&background=ffffff&crop=0.203,0,0.595,1&sign=6317ca398b6887714f7dc3877a0207a7&type=market_thumb' },
  { id: 16, cat: 'rolls', name: 'Техас (запечённый)', price: 395, weight: '260 г', emoji: '🍣',
    desc: 'Тунец (1% соли), творожный сыр, свежий огурец. Шапка: снежный краб, майонез, моцарелла, острый соус, стружка тунца',
    compo: 'Тунец (1% соли), творожный сыр, свежий огурец. Шапка: снежный краб, майонез, моцарелла, острый соус, стружка тунца. Вес: 260г.',
    photo: 'https://sun9-75.vkuserphoto.ru/impg/mA6LKwLU6WRCBPLlm1-cLEc-McaVMBqHEaO_zA/omko1GcxGeM.jpg?size=0x1000&quality=95&background=ffffff&crop=0.203,0,0.595,1&sign=2a9a781c9a2c4ab8186a871ed57867da&type=market_thumb' },
  { id: 17, cat: 'rolls', name: 'Куба (запечённый)', price: 395, weight: '240 г', emoji: '🍣',
    desc: 'Креветка в кляре, копченый бекон. Шапка: чеддер , моцарелла,чеснок, майонез, унаги соус , кунжут',
    compo: 'Креветка в кляре, копченый бекон. Шапка: чеддер , моцарелла,чеснок, майонез, унаги соус , кунжут. Вес: 240г.',
    photo: 'https://sun9-3.vkuserphoto.ru/impg/HvGsS-ijguGekqm-hY5T8rfu-4HyYrulK_UksQ/quyR0gzyHfs.jpg?size=0x1000&quality=95&background=ffffff&crop=0.199,0,0.601,1&sign=a33c7c984bef407776abe8b3c32cca29&type=market_thumb' },
  { id: 18, cat: 'rolls', name: 'Тайто (запечённый)', price: 430, weight: '250 г', emoji: '🍣',
    desc: 'Лосось (1% соли), творожный сыр, свежий огурец. Шапка: снежный краб, майонез, моцарелла',
    compo: 'Лосось (1% соли), творожный сыр, свежий огурец. Шапка: снежный краб, майонез, моцарелла. Вес: 250г.',
    photo: 'https://sun9-10.vkuserphoto.ru/impg/AR3HoqhyKsqtqpUA0FgK0VeBE3cOd_yRTJlU2Q/2Eb_tEmv7Mw.jpg?size=0x1000&quality=95&background=ffffff&crop=0.169,0,0.662,1&sign=c176589cccfc2b6770059ee2ba077f52&type=market_thumb' },
  { id: 19, cat: 'rolls', name: 'Сёгун (запеченный)', price: 400, weight: '240 г', emoji: '🍣',
    desc: 'Креветка в кляре, салат, томат',
    compo: 'Креветка в кляре, салат, томат. Шапка: снежный краб, майонез, моцарелла, унаги соус. Выход: 240г.',
    photo: 'https://sun9-78.vkuserphoto.ru/impg/Dx9xi0BKRfIZ33xC8AhMF__fRomofLM-jQcyjA/QAYthSVGZr8.jpg?size=0x1000&quality=95&background=ffffff&crop=0.173,0,0.555,1&sign=65aa01338f42f68783aecb6a66f60651&type=market_thumb' },
  { id: 20, cat: 'rolls', name: 'Крабик (запеченный)', price: 390, weight: '240 г', emoji: '🍣',
    desc: 'Снежный краб, салат',
    compo: 'Снежный краб, салат. Шапка: моцарелла, снежный краб, майонез, икра. Выход: 240г.',
    photo: 'https://sun9-16.vkuserphoto.ru/impg/bRc40YIi7empxZLbPvlegngln9YD5KWXdbuS_w/-V2PeJzbggc.jpg?size=0x1000&quality=95&background=ffffff&crop=0.173,0,0.555,1&sign=1d106607c6f1ed5856bf76f0cfe2ec40&type=market_thumb' },
  { id: 21, cat: 'rolls', name: 'Вулкан (запеченный)', price: 420, weight: '250 г', emoji: '🍣',
    desc: 'Жаренный лосось, снежный краб, салат',
    compo: 'Жаренный лосось, снежный краб, салат. Шапка: чеддер , моцарелла, чеснок, майонез, острый соус. Выход: 250г.',
    photo: 'https://sun9-38.vkuserphoto.ru/impg/7a4vgj6gL8qG_hgN0CVgZprXpre5e1kbM4phEQ/LVBhOlXLf3Y.jpg?size=0x1000&quality=95&background=ffffff&crop=0.173,0,0.555,1&sign=ab078f6cae3eea2894a8079c81db26d1&type=market_thumb' },
  { id: 22, cat: 'rolls', name: 'Краб темпура', price: 380, weight: '240 г', emoji: '🍣',
    desc: 'Снежный краб, творожный сыр, салат, темпурный кляр',
    compo: 'Снежный краб, творожный сыр, салат, темпурный кляр. Выход: 240г.',
    photo: 'https://sun9-21.vkuserphoto.ru/impg/lhDvv4GD_9hIOR9gyZMO7MOZi4StRMYH2ti7ng/QSRtGjo-hgo.jpg?size=0x1000&quality=95&background=ffffff&crop=0,0,0.555,1&sign=292e87ee9cd1425454e0ddb55398b2a4&type=market_thumb' },
  { id: 23, cat: 'rolls', name: 'Тори Темпура', price: 380, weight: '240 г', emoji: '🍣',
    desc: 'Копченный цыпленок, свежий огурец, творожный сыр, кляр',
    compo: 'Копченный цыпленок, свежий огурец, творожный сыр, кляр. Выход: 240г.',
    photo: 'https://sun9-57.vkuserphoto.ru/impg/Gdx8jweRqNdLRdWgc5wsql0JHVP3ZpC01oTK6Q/moK0XvDE-1o.jpg?size=0x1000&quality=95&background=ffffff&crop=0,0,0.555,1&sign=4cf2a905d3870871d5fa10211630e5f8&type=market_thumb' },
  { id: 24, cat: 'rolls', name: 'Чикен Ананас', price: 380, weight: '210 г', emoji: '🍣',
    desc: 'Копченный цыпленок, творожный сыр, маринованный ананас, икра',
    compo: 'Копченный цыпленок, творожный сыр, маринованный ананас, икра. Выход: 210г.',
    photo: 'https://sun9-55.vkuserphoto.ru/impg/JOTlqSDUlAQy3ZsUYfS5juRqzeBTCQs7uMCtuw/XMmGYzCcqC8.jpg?size=0x1000&quality=95&background=ffffff&crop=0.173,0,0.555,1&sign=4837e7d257f317262cedd2e146625517&type=market_thumb' },
  { id: 25, cat: 'rolls', name: 'Самурай', price: 400, weight: '210 г', emoji: '🍣',
    desc: 'Лосось (1% соли), креветка в кляре, салат, икра, острый соус, сладкий чили соус',
    compo: 'Лосось (1% соли), креветка в кляре, салат, икра, острый соус, сладкий чили соус. Вес: 210г.',
    photo: 'https://sun9-85.vkuserphoto.ru/impg/ZRlKUk4H7LQPOacVUhXujTwV3mxIjdm87MkpdA/G5vg_RopVUQ.jpg?size=0x1000&quality=95&background=ffffff&crop=0.153,0,0.555,1&sign=21687fd324b0a6dc84e69ca8920495e5&type=market_thumb' },
  { id: 26, cat: 'rolls', name: 'Лава', price: 400, weight: '210 г', emoji: '🍣',
    desc: 'Лосось (1% соли), тунец (1% соли), свежий огурец, икра, острый соус, сладкий чили соус',
    compo: 'Лосось (1% соли), тунец (1% соли), свежий огурец, икра, острый соус, сладкий чили соус. Вес: 210г.',
    photo: 'https://sun9-22.vkuserphoto.ru/impg/EgL1NuDWGcSkziON0r7hHMCB_VgBkTFDRYaJrA/76xLnqph9Bg.jpg?size=0x1000&quality=95&background=ffffff&crop=0.129,0,0.555,1&sign=15790775ca74110da4cdfee4bb925d39&type=market_thumb' },
  { id: 27, cat: 'rolls', name: 'Банзай', price: 390, weight: '210 г', emoji: '🍣',
    desc: 'Копченый угорь, снежный краб, икра, острый соус, сладкий чили соус, свежий огурец',
    compo: 'Копченый угорь, снежный краб, икра, острый соус, сладкий чили соус, свежий огурец. Вес: 210г.',
    photo: 'https://sun9-73.vkuserphoto.ru/impg/HfAexT8giTavYBTuNIOuxVohTws3Zz-i0JQwcQ/cjDIC779dhU.jpg?size=0x1000&quality=95&background=ffffff&crop=0.149,0,0.555,1&sign=73dd366dc51944678f8772748c83c4cd&type=market_thumb' },
  { id: 28, cat: 'rolls', name: 'Тори', price: 355, weight: '190 г', emoji: '🍣',
    desc: 'Копченный цыпленок, тыворожный сыр, свежий огурец, кунжут',
    compo: 'Копченный цыпленок, тыворожный сыр, свежий огурец, кунжут. Выход: 190г.',
    photo: 'https://sun9-70.vkuserphoto.ru/impg/itYLtucXzA76spIvbWQBgCVQ_s-uSrRrvm9YRg/ElPcne4mUgE.jpg?size=0x1000&quality=95&background=ffffff&crop=0.071,0,0.555,1&sign=59192da9e426cf00ef8336911ec9bf64&type=market_thumb' },
  { id: 29, cat: 'rolls', name: 'Бонито', price: 420, weight: '200 г', emoji: '🍣',
    desc: 'Лосось (1% соли), творожный сыр, свежий огурец, стружка тунца',
    compo: 'Лосось (1% соли), творожный сыр, свежий огурец, стружка тунца. Вес: 200гр.',
    photo: 'https://sun9-51.vkuserphoto.ru/impg/8RpyMVmP5_DgLwCU5-avu9BGa3kyN_42hQjeUQ/Ns_2ymYiVV4.jpg?size=0x1000&quality=95&background=ffffff&crop=0.189,0,0.621,1&sign=5338d3cd2045fda9df85a8845ea6069b&type=market_thumb' },
  { id: 30, cat: 'rolls', name: 'Дракон', price: 400, weight: '200 г', emoji: '🍣',
    desc: 'Угорь копченный, творожный сыр, свежий огурец, икра',
    compo: 'Угорь копченный, творожный сыр, свежий огурец, икра. Вес: 200г.',
    photo: 'https://sun9-18.vkuserphoto.ru/impg/AeF9rZ3HJGXF_fJ_rjtTP2vUZG5oG5n9KrsC6A/QXFmfZXHdg8.jpg?size=0x1000&quality=95&background=ffffff&crop=0.202,0,0.595,1&sign=00222dbddabfc2aae0a61e0ee982580a&type=market_thumb' },
  { id: 31, cat: 'rolls', name: 'Унаги запеченный', price: 400, weight: '250 г', emoji: '🍣',
    desc: 'Копченый угорь, творожный сыр, кунжут, свежий огурец',
    compo: 'Копченый угорь, творожный сыр, кунжут, свежий огурец. Шапка: снежный краб, моцарелла, майонез, унаги соус. Вес: 250г.',
    photo: 'https://sun9-74.vkuserphoto.ru/impg/uvi2p7xD8hrkOjB7G8HX_73pCR6hLyrX0vzJ5w/uDYeZr8eh_A.jpg?size=0x401&quality=95&background=ffffff&crop=0,0,1,1&sign=a310c20525e66b0197291918139f07c6&type=market_thumb' },
  { id: 32, cat: 'rolls', name: 'Ночная Москва', price: 400, weight: '210 г', emoji: '🍣',
    desc: 'Копченный угорь, творожный сыр, свежий огурец, икра, кунжут',
    compo: 'Копченный угорь, творожный сыр, свежий огурец, икра, кунжут. Вес: 210гр.',
    photo: 'https://sun9-51.vkuserphoto.ru/impg/YDPQ7u8hAo8PwicdPVgvXrvn6twN_Tg179-E1Q/HlWbbJqpLqU.jpg?size=0x1000&quality=95&background=ffffff&crop=0.202,0,0.595,1&sign=467a96179aacbfd1ab52100ffcf7eb0e&type=market_thumb' },
  { id: 33, cat: 'rolls', name: 'Филка в кунжуте', price: 390, weight: '200 г', emoji: '🍣',
    desc: 'Лосось (1% соли), творожный сыр, свежий огурец, кунжут',
    compo: 'Лосось (1% соли), творожный сыр, свежий огурец, кунжут. Вес: 200гр.',
    photo: 'https://sun9-68.vkuserphoto.ru/impg/fLKp_ynnArs_8AowGBBFgCuvrWUBBXp1jCvsCQ/ewZ6N6UtdtA.jpg?size=0x1000&quality=95&background=ffffff&crop=0.202,0,0.595,1&sign=f1ce8c94ad884aa1e1bbc4a12ee5280c&type=market_thumb' },
  { id: 34, cat: 'rolls', name: 'Магура темпура', price: 385, weight: '240 г', emoji: '🍣',
    desc: 'Тунец (1% соли), творожный сыр, темпурный кляр, свежий огурец',
    compo: 'Тунец (1% соли), творожный сыр, темпурный кляр, свежий огурец. Вес: 240гр.',
    photo: 'https://sun9-45.vkuserphoto.ru/impg/TJCFkYKgFA9o0gmg1v2Q7kUpkLm1zXINAWMoWg/w2aV0TPnRYI.jpg?size=0x1000&quality=95&background=ffffff&crop=0.188,0,0.625,1&sign=85e42d2283122109077f179d8b5539c9&type=market_thumb' },
  { id: 35, cat: 'rolls', name: 'Креветка', price: 400, weight: '210 г', emoji: '🍣',
    desc: 'Креветка в кляре, творожный сыр, свежий огурец, икра',
    compo: 'Креветка в кляре, творожный сыр, свежий огурец, икра. Вес: 210г.',
    photo: 'https://sun9-17.vkuserphoto.ru/impg/OvjgeibgRBTA544NniEX7DT5fffbA-HP57hAag/AlRBO6OuyZw.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=c9d9db0b06ace37db9c59746eccdb7ff&type=market_thumb' },
  { id: 36, cat: 'rolls', name: 'Калифорния', price: 355, weight: '210 г', emoji: '🍣',
    desc: 'Снежный краб, творожный сыр, свежий огурец, икра',
    compo: 'Снежный краб, творожный сыр, свежий огурец, икра. Вес: 210гр.',
    photo: 'https://sun9-76.vkuserphoto.ru/impg/5feGrNF2qlWhdXAYVTzI1w5XZEs7p4O-dajG5w/RVASYvkaLYw.jpg?size=0x1000&quality=95&background=ffffff&crop=0.203,0,0.595,1&sign=994452270af4b1f5421b7a4a7fb38b05&type=market_thumb' },
  { id: 37, cat: 'rolls', name: 'Филадельфия лайт', price: 420, weight: '210 г', emoji: '🍣',
    desc: 'Лосось (1% соли), творожный сыр, свежий огурец',
    compo: 'Лосось (1% соли), творожный сыр, свежий огурец. Вес: 210гр.',
    photo: 'https://sun9-54.vkuserphoto.ru/impg/kqqUecdIOs6dfPVkLVktcNq4kVkhO6mT-wGQfA/7t1C9olqcUc.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=b8727454fe9380151064eafb288db298&type=market_thumb' },
  { id: 38, cat: 'rolls', name: 'Магуро', price: 385, weight: '210 г', emoji: '🍣',
    desc: 'Тунец (1% соли), творожный сыр, свежий огурец, икра',
    compo: 'Тунец (1% соли), творожный сыр, свежий огурец, икра. Вес: 210г.',
    photo: 'https://sun9-34.vkuserphoto.ru/impg/hU3lTwuYKHuueaLIBq5n8qVCmGVYw5gtrFGwuA/mzInVHJwX9E.jpg?size=0x1000&quality=95&background=ffffff&crop=0.188,0,0.625,1&sign=1b0e0aa56349f477eda0aba543d2aada&type=market_thumb' },
  { id: 39, cat: 'rolls', name: 'Премиум запеченый', price: 435, weight: '260 г', emoji: '🍣',
    desc: 'Креветка в кляре, тунец (1% соли), лосось (1% соли), огурец',
    compo: 'Креветка в кляре, тунец (1% соли), лосось (1% соли), огурец. Шапка: снежный краб, майонез, моцарелла. Вес: 260гр.',
    photo: 'https://sun9-82.vkuserphoto.ru/impg/hffTrjG8FvXluf9eT8J39T6CrmySHhdxAL9ZCw/eB_-RALqbLw.jpg?size=0x1000&quality=95&background=ffffff&crop=0.173,0,0.555,1&sign=24ea4c721d10b5a5cb60190232e49056&type=market_thumb' },
  { id: 40, cat: 'rolls', name: 'Чизролл запеченый', price: 380, weight: '260 г', emoji: '🍣',
    desc: 'Копченый цыпленок, творожный сыр, свежий томат, крошка темпура',
    compo: 'Копченый цыпленок, творожный сыр, свежий томат, крошка темпура. Шапка: снежный краб, майонез, моцарелла. Вес: 260гр.',
    photo: 'https://sun9-67.vkuserphoto.ru/impg/ukvymhPq-ZUntIoKbhIjzAx_RKMj7N67PTjpWA/cWcCS2Z9bOQ.jpg?size=0x1000&quality=95&background=ffffff&crop=0.188,0,0.625,1&sign=47ca59778b83361a22d49e3d8a063ca4&type=market_thumb' },
  { id: 41, cat: 'rolls', name: 'Окинава', price: 400, weight: '200 г', emoji: '🍣',
    desc: 'Лосось (1% соли), творожный сыр, свежий огурец, икра',
    compo: 'Лосось (1% соли), творожный сыр, свежий огурец, икра. Вес: 200г.',
    photo: 'https://sun9-10.vkuserphoto.ru/impg/YmA3qke78gChUBN3ba7ZpuujUkaGV1jtGEzJww/Fldm85cBGbk.jpg?size=0x1000&quality=95&background=ffffff&crop=0.202,0,0.595,1&sign=6e224a041c440dae866b94a6f91e4f48&type=market_thumb' },
  { id: 42, cat: 'rolls', name: 'Филадельфия', price: 455, weight: '220 г', emoji: '🍣',
    desc: 'Лосось (1% соли), творожный сыр, свежий огурец',
    compo: 'Лосось (1% соли), творожный сыр, свежий огурец. Вес: 220гр.',
    photo: 'https://sun9-72.vkuserphoto.ru/impg/e2PvLdAfYWyqyYaTlJ-m18cbd_MekwMoRWBbTA/9DrC437uwj4.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=2900bac9f69f864ea3f2481507e00e3a&type=market_thumb' },
  { id: 43, cat: 'rolls', name: 'Ролл с огурцом', price: 220, weight: '150 г', emoji: '🍣',
    desc: 'Ролл со свежим огурцом и кунжутом',
    compo: 'Ролл со свежим огурцом и кунжутом. Вес: 150гр.',
    photo: 'https://sun9-70.vkuserphoto.ru/impg/c850016/v850016467/c19b8/q19m0ACwoDQ.jpg?size=0x400&quality=95&background=ffffff&crop=0,0,1,1&sign=4c74717c4abfd06ec97d1073be7750c9&type=market_thumb' },
  { id: 44, cat: 'rolls', name: 'Сингл запеченный', price: 380, weight: '250 г', emoji: '🍣',
    desc: 'Снежный краб, свежий томат, салат, крошка темпура',
    compo: 'Снежный краб, свежий томат, салат, крошка темпура. Шапка: чеддер, моцарелла, чеснок, майонез, кунжут, унаги соус. Вес: 250гр.',
    photo: 'https://sun9-70.vkuserphoto.ru/impg/c845421/v845421467/138535/mKOa1iFVD_0.jpg?size=0x400&quality=95&background=ffffff&crop=0,0,1,1&sign=c3fb78d91199ec4449ada3bc99638f97&type=market_thumb' },
  { id: 45, cat: 'rolls', name: 'Унаги темпура', price: 400, weight: '240 г', emoji: '🍣',
    desc: 'Копченый угорь, творожный сыр, темпурный кляр, свежий огурец',
    compo: 'Копченый угорь, творожный сыр, темпурный кляр, свежий огурец. Вес: 240гр.',
    photo: 'https://sun9-59.vkuserphoto.ru/impg/l5ND4BanD8I4FOxWHAA57AA2dZwua-5vX_D2xQ/sa1Tk7B3Eoo.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=f870667536a83206aa11661763f9bf64&type=market_thumb' },
  { id: 46, cat: 'rolls', name: 'Хоку темпура', price: 470, weight: '240 г', emoji: '🍣',
    desc: 'Копченый угорь, лосось, свежий огурец, темпурный кляр',
    compo: 'Копченый угорь, лосось, свежий огурец, темпурный кляр. Вес: 240гр.',
    photo: 'https://sun9-29.vkuserphoto.ru/impg/en3WVsBVUH6A9-MFWV1uJy9P6JpmKMlQxzUMpQ/X_Rhy8JuaC0.jpg?size=0x1000&quality=95&background=ffffff&crop=0.188,0,0.625,1&sign=c626c5f0b00df80573431f25eda4b070&type=market_thumb' },
  { id: 47, cat: 'rolls', name: 'Эби темпура', price: 400, weight: '240 г', emoji: '🍣',
    desc: 'Креветка в кляре, творожный сыр, кляр, свежий огурец',
    compo: 'Креветка в кляре, творожный сыр, кляр, свежий огурец. Вес: 240гр.',
    photo: 'https://sun9-80.vkuserphoto.ru/impg/5n4bUcAFM5uw_kz4jpznFSryWtbX7-B7cYPCRQ/NfW-mpvxf6w.jpg?size=0x1000&quality=95&background=ffffff&crop=0.188,0,0.625,1&sign=5beee5b14679e1c1afee23030a5d71a5&type=market_thumb' },
  { id: 48, cat: 'rolls', name: 'Сяке темпура', price: 420, weight: '240 г', emoji: '🍣',
    desc: 'Лосось (1% соли), творожный сыр, темпурный кляр, свежий огурец',
    compo: 'Лосось (1% соли), творожный сыр, темпурный кляр, свежий огурец. Вес: 240гр.',
    photo: 'https://sun9-60.vkuserphoto.ru/impg/x_vfhOiOmzp1DCjwia0cwzA6DChe2i0G3blLmA/QMk_HkqPZZE.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=48dfe2c9d2d87976f8c64bf38d0a16cf&type=market_thumb' },
  { id: 49, cat: 'rolls', name: 'Санчос темпура', price: 390, weight: '240 г', emoji: '🍣',
    desc: 'Копченый цыпленок, лепешка тортилья, творожный сыр, томат, свежий огурец, кляр',
    compo: 'Копченый цыпленок, лепешка тортилья, творожный сыр, томат, свежий огурец, кляр. Вес: 240гр.',
    photo: 'https://sun9-2.vkuserphoto.ru/impg/eOo36T6u0ej7Tf_44TVg1NBeaWPUg-afz9TjNg/8SGqgC3RlaA.jpg?size=0x1000&quality=95&background=ffffff&crop=0.051,0,0.625,1&sign=988103b55e97ce91a2af8381ec14f256&type=market_thumb' },
  { id: 50, cat: 'rolls', name: 'Салмон', price: 420, weight: '210 г', emoji: '🍣',
    desc: 'Лосось (1% соли), творожный сыр, свежий огурец, икра',
    compo: 'Лосось (1% соли), творожный сыр, свежий огурец, икра. Вес: 210гр.',
    photo: 'https://sun9-56.vkuserphoto.ru/impg/sW1IQMSP9yv6hOLHerqLzqELgJGWph6KfWCO_Q/2sOOk_jLxls.jpg?size=0x1000&quality=95&background=ffffff&crop=0.188,0,0.624,1&sign=37ff11202eb381f0f9b36dddb0ccfdd4&type=market_thumb' },
  { id: 51, cat: 'rolls', name: 'Канада', price: 475, weight: '220 г', emoji: '🍣',
    desc: 'Копченный угорь ,лосось, свежий огурец, творожный сыр, унаги соус, кунжут',
    compo: 'Копченный угорь ,лосось, свежий огурец, творожный сыр, унаги соус, кунжут. Вес: 220г.',
    photo: 'https://sun9-36.vkuserphoto.ru/impg/c857428/v857428977/81c8e/jUAzjRQY520.jpg?size=0x400&quality=95&background=ffffff&crop=0,0,1,1&sign=a3ded7c7d400e2a758b4ff9dbc09170c&type=market_thumb' },
  // Сеты
  { id: 52, cat: 'sets', name: 'Вкусный сет', price: 3350, emoji: '🍱', hit: true,
    desc: 'Сборный сет из 5 роллов — полный состав ниже.',
    compo: 'Ролл: лосось, сыр, огурец. Ролл: копченый угорь, лосось, огурец, сыр, унаги соус, кунжут. Ролл: Креветка в кляре, лосось, огурец, сыр, икра. Ролл: лосось, копченый угорь, огурец, сыр, икра. Запеченный ролл: лосось жареный, томат, огурец.',
    photo: 'https://sun9-38.vkuserphoto.ru/impg/p6JGE9nBBcnow0qn6HWTs1DMcXrpf2ST4tXkUg/lHui33OWHIM.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=e36dae000235f44d2badc9371aba4937&type=market_thumb' },
  { id: 53, cat: 'sets', name: 'Супер сет', price: 3150, emoji: '🍱',
    desc: 'Сборный сет из 6 роллов — полный состав ниже.',
    compo: 'Ролл: лосось, сыр, ананас. Ролл: креветка в кляре, чука салат, сыр, огурец. Ролл: тунец, огурец, сыр, икра. Ролл: лосось, огурец, сыр, стружка тунца. Ролл: копченый угорь, снежный краб, огурец, сыр, унаги соус, кунжут. Ролл в лепешке.',
    photo: 'https://sun9-22.vkuserphoto.ru/impg/NL2mKW8ubmqzNYEbQ6_T34LMQuhOjSXQSHOq6Q/QmTKAao85jg.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=72148647d8c80a58b8dce3684823d364&type=market_thumb' },
  { id: 54, cat: 'sets', name: 'Компания сет', price: 2860, emoji: '🍱',
    desc: 'Сборный сет из 5 роллов — полный состав ниже.',
    compo: 'Ролл: снежный краб, сыр, огурец, икра. Ролл: копченый цыпленок, ананас, сыр, икра. Ролл: лосось, огурец, сыр, стружка тунца. Темпурный ролл: креветка в кляре, огурец, сыр. Запеченный ролл: копченый цыпленок, томат, моцарелла, майонез, сне.',
    photo: 'https://sun9-25.vkuserphoto.ru/impg/P6M3nDGq8NaJLADr6l_GhnYNLS7yE2r31SiJOw/xydcNjpDaHg.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=b85e794acc1c55791b5633d932fd2451&type=market_thumb' },
  { id: 55, cat: 'sets', name: 'Мега сет', price: 3700, emoji: '🍱',
    desc: 'Сборный сет из 6 роллов — полный состав ниже.',
    compo: 'Ролл: лосось, сыр, огурец. Ролл: копченый угорь, огурец, сыр, икра. Ролл: креветка в кляре, огурец, сыр, икра. Ролл: снежный краб, копченый угорь, огурец, сыр, унаги соус, кунжут. Темпурный ролл: лосось, огурец, сыр. Темпурный ролл: т.',
    photo: 'https://sun9-72.vkuserphoto.ru/impg/Bk5IUu7RdjsEdEe5_BNW0ouOq0m2EbA8-m5eSQ/jZTRFggwU2o.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=0615f15728a73c9ad42901a52fca4191&type=market_thumb' },
  { id: 56, cat: 'sets', name: 'Зур.', price: 2420, emoji: '🍱',
    desc: 'Сборный сет из 3 роллов — полный состав ниже.',
    compo: 'Ролл: Лосось, творожный сыр, свежий огурец, икра оранжевая. Ролл: тунец (1% соли), творожный сыр, свежий огурец, икра красная. Запечённый ролл: Снежный краб, творожный сыр, свежий томат. Шапка: снежный краб, моцарелла, майонез, ореховый.',
    photo: 'https://sun9-29.vkuserphoto.ru/impg/oZS9EeIR8m9I7iJ1zvfIho9OS76IstVa-xKrlw/0FKaeRT0X1Y.jpg?size=0x1000&quality=95&background=ffffff&crop=0.202,0,0.595,1&sign=178df8a9edd1ab0e5b9455f45885b15d&type=market_thumb' },
  { id: 57, cat: 'sets', name: 'Трио', price: 1220, emoji: '🍱',
    desc: 'Сборный сет из 3 роллов — полный состав ниже.',
    compo: 'Ролл: лосось (1% соли), творожный сыр, огурец свежий, кунжут. Запеченный ролл: креветка в кляре , томат, огурец свежий, стружка тунца. Шапка: майонез, снежный краб, моцарелла, соус сладкий чили. Темпурный ролл: лосось жаренный, творо.',
    photo: 'https://sun9-70.vkuserphoto.ru/impg/cgmjUiR-dZ5N_ofpKtHRs10QXwYKiNHtSI5XRg/BbuNnKPnJcA.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=3e86d4f9264ddd6773da994adacda646&type=market_thumb' },
  { id: 58, cat: 'sets', name: 'Жара', price: 980, emoji: '🍱',
    desc: 'Сборный сет из 2 роллов — полный состав ниже.',
    compo: 'Темпурный (запечённый) ролл: снежный краб, томат, салат. Шапка: майонез, снежный краб, моцарелла, соус сладкий чили. Темпурный ролл: тунец, свежий огурец, творожный сыр. Темпурный ролл: копчённый цыплёнок, творожный сыр, свежий огуре.',
    photo: 'https://sun9-49.vkuserphoto.ru/impg/B4KVRrUEV3fhe9CfVDNjI-PvwmpIaOXq3vZ81g/Vcu9aM4_oo0.jpg?size=0x1000&quality=95&background=ffffff&crop=0.166,0,0.667,1&sign=7b01c22822f39fa4a122abc05b94773a&type=market_thumb' },
  { id: 59, cat: 'sets', name: 'Запечённый мини', price: 670, emoji: '🍱',
    desc: 'Сборный сет из 3 роллов — полный состав ниже.',
    compo: 'Ролл: свежий огурец, творожный сыр. Шапка: майонез, снежный краб, моцарелла, унаги соус, кунжут. Ролл: копчёный цыплёнок, салат. Шапка: майонез, снежный краб, моцарелла, унаги соус, кунжут. Ролл: снежный краб, томат. Шапка: м.',
    photo: 'https://sun9-34.vkuserphoto.ru/impg/ls54eNv06waxIdxhZGJ9DVpBE5tTHvVuHW45Jg/3W2rA7S3v3o.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=afec6f524bc266da2b4c963241ca178c&type=market_thumb' },
  { id: 60, cat: 'sets', name: 'Матур', price: 1030, emoji: '🍱',
    desc: 'Сборный сет из 3 роллов — полный состав ниже.',
    compo: 'Темпурный ролл: креветка в кляре, томат, салат. Шапка: чеддер, моцарелла, майонез, чеснок. Темпурный ролл: снежный краб, творожный сыр, огурец свежий, соус унаги. Темпурный ролл: сырная лепёшка, копчёный цыплёнок , творожный сыр, марино.',
    photo: 'https://sun9-86.vkuserphoto.ru/impg/SyFVXpabSutDTeqTnV15rZsMGeMRbEiiMhBrNg/o0bbLFgEeKA.jpg?size=0x1000&quality=95&background=ffffff&crop=0.184,0,0.554,1&sign=f6d570bdb3d1d7eca2eb1ca58ab6ec1e&type=market_thumb' },
  // Бургеры
  { id: 61, cat: 'burgers', name: 'Гранд Мастер', price: 460, emoji: '🍔',
    desc: 'Булка, две котлеты, бекон, томат свежий, соленый огурчик, лук, салат, сыр',
    compo: 'Булка, две котлеты, бекон, томат свежий, соленый огурчик, лук, салат, сыр.',
    photo: 'https://sun9-55.vkuserphoto.ru/impg/c855320/v855320733/65cab/eX7VzOttDrk.jpg?size=0x1000&quality=95&background=ffffff&crop=0.09,0,0.713,1&sign=765d37761f72353a22b8118cf6a86ed6&type=market_thumb' },
  { id: 62, cat: 'burgers', name: 'Чизбургер', price: 330, emoji: '🍔', hit: true,
    desc: 'Булка, мясо, сыр, салат, томат, маринованный огурец, сырный соус, лук',
    compo: 'Булка, мясо, сыр, салат, томат, маринованный огурец, сырный соус, лук.',
    photo: 'https://sun9-24.vkuserphoto.ru/impg/c855328/v855328733/67f8e/YJDtWRNWK3w.jpg?size=0x1000&quality=95&background=ffffff&crop=0.102,0,0.656,1&sign=1adbfbb60812e081ab8811370de1ff79&type=market_thumb' },
  { id: 63, cat: 'burgers', name: 'Бургер Сладкая цыпочка', price: 330, emoji: '🍔',
    desc: 'Булка, мясо кур, ананас, лук, соус',
    compo: 'Булка, мясо кур, ананас, лук, соус.',
    photo: 'https://sun9-23.vkuserphoto.ru/impg/c853424/v853424733/69122/8Kx8kXdh2Hk.jpg?size=0x1000&quality=95&background=ffffff&crop=0.122,0,0.645,1&sign=3a595eda067f8171134702169dafc82f&type=market_thumb' },
  { id: 64, cat: 'burgers', name: 'Бургер Халапеньо', price: 330, emoji: '🍔',
    desc: 'Булка, мясо, перец острый, салат, огурцы консервированные, томат, лук, соус',
    compo: 'Булка, мясо, перец острый, салат, огурцы консервированные, томат, лук, соус.',
    photo: 'https://sun9-65.vkuserphoto.ru/impg/aCgw5--DlI1z0FWkF4BCJsUFchTHKx7VIN4A1w/eXtKpTpiLhQ.jpg?size=0x1000&quality=95&background=ffffff&crop=0.188,0,0.625,1&sign=27e35451bc748726985cc36219092cd3&type=market_thumb' },
  { id: 65, cat: 'burgers', name: 'Бургер классический', price: 330, emoji: '🍔',
    desc: 'Булка, мясо, соус, лук, салат, томат, огурец',
    compo: 'Булка, мясо, соус, лук, салат, томат, огурец.',
    photo: 'https://sun9-4.vkuserphoto.ru/impg/c855136/v855136733/6396d/XJDtgWBrfas.jpg?size=0x1000&quality=95&background=ffffff&crop=0.102,0,0.676,1&sign=a743d46b0fe33a98744cb75ed19ccb27&type=market_thumb' },
  // Шаурма и бурито
  { id: 66, cat: 'shaurma', name: 'Бурито с беконом', price: 360, weight: '180 г', emoji: '🌯',
    desc: 'Копченый бекон, творожный сыр, огурец маринованный, лепешка сырная, свежий томат',
    compo: 'Копченый бекон, творожный сыр, огурец маринованный, лепешка сырная, свежий томат. Вес: 180г.',
    photo: 'https://sun9-7.vkuserphoto.ru/impg/5gE3mbexeKJOOAYTEoXKHFcjdXY5xKn7IRwt-A/AHeA-mn2ybk.jpg?size=0x1000&quality=95&background=ffffff&crop=0.203,0,0.595,1&sign=663ebef80d57df91362c8226271dc985&type=market_thumb' },
  { id: 67, cat: 'shaurma', name: 'Бурито', price: 370, weight: '180 г', emoji: '🌯',
    desc: 'Копченный цыпленок, творожный сыр, огурец маринованный, свежий томат, лепешка сырная',
    compo: 'Копченный цыпленок, творожный сыр, огурец маринованный, свежий томат, лепешка сырная. Выход: 180г.',
    photo: 'https://sun9-30.vkuserphoto.ru/impg/PpXh4XkB9BapBrZeVKWUhLsJExQgAeHq9_EH-g/v468s84Op8s.jpg?size=0x1000&quality=95&background=ffffff&crop=0,0,0.652,1&sign=53b7a9cb66a0a4ce0b089dd818f62896&type=market_thumb' },
  { id: 68, cat: 'shaurma', name: 'Шаурдог', price: 240, emoji: '🌯',
    desc: 'Охотничья колбаска, лаваш, капуста, томат, репчатый лук, огурец, соус',
    compo: 'Охотничья колбаска, лаваш, капуста, томат, репчатый лук, огурец, соус.',
    photo: 'https://sun9-1.vkuserphoto.ru/impg/cbj0I5s073P7K9ofdHrHefbEi3IElsAP91rGTw/3qsnvN5qR9Q.jpg?size=833x0&quality=95&background=ffffff&crop=0,0.1,1,0.8&sign=adb8ba725516c02c0aa0d8800868cab7&type=market_thumb' },
  { id: 69, cat: 'shaurma', name: 'Шаурма грибная', price: 240, emoji: '🌯',
    desc: 'Шампиньоны, томат, лук репчатый, капуста, огурец, соус на выбор (кетчунез или чесночный)',
    compo: 'Шампиньоны, томат, лук репчатый, капуста, огурец, соус на выбор (кетчунез или чесночный).',
    photo: 'https://sun9-18.vkuserphoto.ru/impg/c844520/v844520523/58b8d/fZdzye1psfg.jpg?size=0x698&quality=95&background=ffffff&crop=0.184,0,0.841,1&sign=423c3e5b89ca9ee95b2ac231c139f4dc&type=market_thumb' },
  { id: 70, cat: 'shaurma', name: 'Шаурма острая', price: 240, emoji: '🌯',
    desc: 'Куриная грудка, томат, лук репчатый, капуста, огурец, острый перец, соус на выбор (кетчунез или чесночный)',
    compo: 'Куриная грудка, томат, лук репчатый, капуста, огурец, острый перец, соус на выбор (кетчунез или чесночный).',
    photo: 'https://sun9-10.vkuserphoto.ru/impg/c639622/v639622417/62fbf/ygNt2UNEnH8.jpg?size=0x736&quality=95&background=ffffff&crop=0.141,0,0.731,1&sign=9229e312530a7beff55819bf83965e1c&type=market_thumb' },
  { id: 71, cat: 'shaurma', name: 'Шаурма классическая', price: 240, emoji: '🌯', hit: true,
    desc: 'Куриная грудка, томат, лук репчатый, капуста, огурец, соус на выбор (кетчунез или чесночный)',
    compo: 'Куриная грудка, томат, лук репчатый, капуста, огурец, соус на выбор (кетчунез или чесночный).',
    photo: 'https://sun9-12.vkuserphoto.ru/impg/c841537/v841537417/3a2eb/KIbQS5zCR8w.jpg?size=833x1000&quality=95&background=ffffff&crop=0.063,0,0.675,1&sign=711251edbd66bf7afdc059bc78f3fea3&type=market_thumb' },
  // Закуски
  { id: 72, cat: 'snacks', name: 'Наггетсы', price: 210, emoji: '🍟',
    desc: 'Куриные наггетсы',
    compo: 'Куриные наггетсы. 7 штук.',
    photo: 'https://sun9-3.vkuserphoto.ru/impg/scoqFnWdXOdVIQ38ckHuAijvigYerj3dSvoWdA/uL8os5L36UM.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=81d14438fde898b93f8d06213c1dab2c&type=market_thumb' },
  { id: 73, cat: 'snacks', name: 'Картофельные дольки', price: 160, emoji: '🍟',
    desc: 'Аппетитные картофельные дольки',
    compo: 'Аппетитные картофельные дольки.',
    photo: 'https://sun9-85.vkuserphoto.ru/impg/ltRkvvI4MF-og-ubsMzegFQrNrQFQhnRbMjOTg/6yVTO3ks6yc.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=3b2373849850c296d51cc0cb5effa447&type=market_thumb' },
  { id: 74, cat: 'snacks', name: 'Луковые кольца фри', price: 210, emoji: '🍟',
    desc: 'Луковые кольца фри',
    compo: 'Луковые кольца фри.',
    photo: 'https://sun9-50.vkuserphoto.ru/impg/DaGzs7gqp1n4knmIwOBHlwFFJrD0mBvtmaj1uA/0J0sY1pb40s.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=1fcc06e839c6a8134421c0d78d0a46a4&type=market_thumb' },
  { id: 75, cat: 'snacks', name: 'Картошка фри', price: 160, emoji: '🍟',
    desc: 'Хрустящая картошечка фри',
    compo: 'Хрустящая картошечка фри.',
    photo: 'https://sun9-51.vkuserphoto.ru/impg/suANF6csCy2jMGtrHtR6Vq5egDzgqilrvyxONg/C_Dq7fAvz-c.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=d5a20c4353d34675a8f540f0ed985b44&type=market_thumb' },
  // Напитки и соусы
  { id: 76, cat: 'drinks', name: 'Чай авторский', price: 150, emoji: '🍵',
    desc: 'Авторский чай',
    compo: 'Авторский чай. Ассортимент уточняйте у администратора.',
    photo: 'https://sun9-5.vkuserphoto.ru/impg/a5UvlNrDjbn5017akyZMZY7L3TRBoV_7OgV8qA/Odql_d3TtDQ.jpg?size=833x0&quality=95&background=ffffff&crop=0,0.076,1,0.849&sign=3ad10375f32fb20d4275f90abd5c0b17&type=market_thumb' },
  { id: 77, cat: 'drinks', name: 'Васаби', price: 10, weight: '10 г', emoji: '🍵',
    desc: 'Выход: 10гр',
    compo: 'Выход: 10гр.',
    photo: 'https://sun9-22.vkuserphoto.ru/impg/2Y88VFQyzuGi0peH_TfleLwDliWed2rY2T8F_g/uhhNOA4GTr0.jpg?size=0x600&quality=95&background=ffffff&crop=0,0,1,1&sign=0d0c5fe3184c78997dc758bbb3c16333&type=market_thumb' },
  { id: 78, cat: 'drinks', name: 'Палочки для суши', price: 10, emoji: '🍵',
    desc: 'Одна пара - 10₽',
    compo: 'Одна пара - 10₽.',
    photo: 'https://sun9-77.vkuserphoto.ru/impg/c6Pp-xUzquvvFAsKCEZGy-cVv56YdbBCo5uqrQ/8T0qfUidhz4.jpg?size=0x1000&quality=95&background=ffffff&crop=0.084,0,0.833,1&sign=c29de68dda337433f68172f3c8c3ac40&type=market_thumb' },
  { id: 79, cat: 'drinks', name: 'Имбирь', price: 15, weight: '30 г', emoji: '🍵',
    desc: 'Имбирь',
    compo: 'Имбирь. Вес: 30гр.',
    photo: 'https://sun9-22.vkuserphoto.ru/impg/J4Jufov5_0WSeQys0qIZ7pUThSt6L9FB3VqLsw/NnkvxlScKVE.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=99f4f29594596c8af976e0f86cfea699&type=market_thumb' },
  { id: 80, cat: 'drinks', name: 'Соевый соус', price: 15, weight: '40 мл', emoji: '🍵',
    desc: 'Вес: 40 мл',
    compo: 'Вес: 40 мл.',
    photo: 'https://sun9-63.vkuserphoto.ru/impg/hO4hbP1E28jm4IcvR0O2Qjhv2cPZBe6hP6ixMA/sr1kSh98EUE.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=851aecb4dfde49a85a563d3228ebe829&type=market_thumb' },
  { id: 81, cat: 'drinks', name: 'Соус ореховый', price: 50, weight: '40 мл', emoji: '🍵',
    desc: 'Вес: 40 мл',
    compo: 'Вес: 40 мл.',
    photo: 'https://sun9-21.vkuserphoto.ru/impg/EyWG5yMR4QIpwGYQfk7i4KtZYMfIC2Bx26jZMg/PjFEq9moxWM.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=ca7892e808c0ff39748bbd94a5f6b4a9&type=market_thumb' },
  { id: 82, cat: 'drinks', name: 'Кола', price: 80, emoji: '🍵',
    desc: 'Кола 0,3 - 80 руб',
    compo: 'Кола 0,3 - 80 руб.',
    photo: 'https://sun9-35.vkuserphoto.ru/impg/c855028/v855028526/5a0db/ByvwzkvYSIE.jpg?size=833x0&quality=95&background=ffffff&crop=0,0.1,1,0.8&sign=8fdf81aab79ff46694b4157279d07df8&type=market_thumb' },
  { id: 83, cat: 'drinks', name: 'Морс ягодный, 0,5 л.', price: 100, emoji: '🍵',
    desc: 'Морс (клюква) собственного производства, 0,5 л',
    compo: 'Морс (клюква) собственного производства, 0,5 л.',
    photo: 'https://sun9-5.vkuserphoto.ru/impg/L04pS5HAOCPMZYZJpyQsFqK9QxfNBKea6DNK2w/mTd6XYNowDc.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=1207e13edb47386465d4018f38aa3e81&type=market_thumb' },
  { id: 84, cat: 'drinks', name: 'Соус', price: 50, emoji: '🍵',
    desc: 'В наличии: сырный, барбекю, кетчуп, майонез, чесночный',
    compo: 'В наличии: сырный, барбекю, кетчуп, майонез, чесночный.',
    photo: 'https://sun9-2.vkuserphoto.ru/impg/4C13JAFHUgIwYrfcBE0-DW_mg8iT3FG85WpHXA/syzblb5Jhqg.jpg?size=0x1000&quality=95&background=ffffff&crop=0.222,0,0.555,1&sign=da987788ab6563499e92dbca7ba19696&type=market_thumb' },
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
loadWeather();
setInterval(loadWeather, 15 * 60000);
