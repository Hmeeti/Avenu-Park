/* Park Avenue Hotel & Cafe — данные меню. Источник: PDF-макет меню А4 (30 стр.).
   Поля: srcPage — номер страницы PDF (для сопоставления фото); check — вопросы к заказчику;
   name/description.en заполняет разработчик (перевод). price — число в тенге; variants — если несколько объёмов. */
window.MENU_DATA = {
 "categories": [
  {
   "id": "porridge",
   "group": "kitchen",
   "order": 1,
   "name": {
    "ru": "Каши",
    "kk": "Ботқалар",
    "en": "Porridges"
   }
  },
  {
   "id": "breakfast",
   "group": "kitchen",
   "order": 2,
   "name": {
    "ru": "Завтраки",
    "kk": "Таңғы астар",
    "en": "Breakfasts"
   }
  },
  {
   "id": "syrniki",
   "group": "kitchen",
   "order": 3,
   "name": {
    "ru": "Сырники",
    "kk": "Сүзбелі құймақтар",
    "en": "Syrniki"
   }
  },
  {
   "id": "blini",
   "group": "kitchen",
   "order": 4,
   "name": {
    "ru": "Блины",
    "kk": "Құймақтар",
    "en": "Blini"
   }
  },
  {
   "id": "salads",
   "group": "kitchen",
   "order": 5,
   "name": {
    "ru": "Салаты",
    "kk": "Салаттар",
    "en": "Salads"
   }
  },
  {
   "id": "soups",
   "group": "kitchen",
   "order": 6,
   "name": {
    "ru": "Первые блюда",
    "kk": "Бірінші тағамдар",
    "en": "First courses"
   }
  },
  {
   "id": "hot",
   "group": "kitchen",
   "order": 7,
   "name": {
    "ru": "Горячие блюда",
    "kk": "Ыстық тағамдар",
    "en": "Main courses"
   }
  },
  {
   "id": "bread",
   "group": "kitchen",
   "order": 8,
   "name": {
    "ru": "Хлебные изделия",
    "kk": "Нан-тоқаш өнімдері",
    "en": "Bread"
   }
  },
  {
   "id": "pasta",
   "group": "kitchen",
   "order": 9,
   "name": {
    "ru": "Паста",
    "kk": "Паста",
    "en": "Pasta"
   }
  },
  {
   "id": "pizza",
   "group": "kitchen",
   "order": 10,
   "name": {
    "ru": "Пицца",
    "kk": "Пицца",
    "en": "Pizza"
   }
  },
  {
   "id": "sushi",
   "group": "kitchen",
   "order": 11,
   "name": {
    "ru": "Суши и роллы",
    "kk": "Суши & Роллдар",
    "en": "Sushi & rolls"
   }
  },
  {
   "id": "streetfood",
   "group": "kitchen",
   "order": 12,
   "name": {
    "ru": "Стрит фуд",
    "kk": "Стрит фуд",
    "en": "Street food"
   }
  },
  {
   "id": "sides",
   "group": "kitchen",
   "order": 13,
   "name": {
    "ru": "Гарниры",
    "kk": "Гарнирлер",
    "en": "Sides"
   }
  },
  {
   "id": "sauces",
   "group": "kitchen",
   "order": 14,
   "name": {
    "ru": "Соусы",
    "kk": "Тұздықтар",
    "en": "Sauces"
   }
  },
  {
   "id": "coffee",
   "group": "bar",
   "order": 15,
   "name": {
    "ru": "Кофе",
    "kk": "Кофе",
    "en": "Coffee"
   }
  },
  {
   "id": "raf",
   "group": "bar",
   "order": 16,
   "name": {
    "ru": "Раф",
    "kk": "Раф",
    "en": "Raf"
   }
  },
  {
   "id": "extras",
   "group": "bar",
   "order": 17,
   "name": {
    "ru": "Дополнительно",
    "kk": "Қосымша",
    "en": "Extras"
   }
  },
  {
   "id": "icedcoffee",
   "group": "bar",
   "order": 18,
   "name": {
    "ru": "Холодный кофе",
    "kk": "Салқын кофе",
    "en": "Iced coffee"
   }
  },
  {
   "id": "mokko",
   "group": "bar",
   "order": 19,
   "name": {
    "ru": "Мокко",
    "kk": "Мокко",
    "en": "Mocha"
   }
  },
  {
   "id": "matcha",
   "group": "bar",
   "order": 20,
   "name": {
    "ru": "Матча",
    "kk": "Матча",
    "en": "Matcha"
   }
  },
  {
   "id": "tea",
   "group": "bar",
   "order": 21,
   "name": {
    "ru": "Чайная карта",
    "kk": "Шай картасы",
    "en": "Tea"
   }
  },
  {
   "id": "hotdrinks",
   "group": "bar",
   "order": 22,
   "name": {
    "ru": "Горячие напитки",
    "kk": "Ыстық сусындар",
    "en": "Hot drinks"
   }
  },
  {
   "id": "crafttea",
   "group": "bar",
   "order": 23,
   "name": {
    "ru": "Крафтовые чайные смеси",
    "kk": "Крафт шай қоспалары",
    "en": "Craft tea blends"
   }
  },
  {
   "id": "icedtea",
   "group": "bar",
   "order": 24,
   "name": {
    "ru": "Холодный чай",
    "kk": "Салқын шайлар",
    "en": "Iced tea"
   }
  },
  {
   "id": "milkshakes",
   "group": "bar",
   "order": 25,
   "name": {
    "ru": "Молочные коктейли",
    "kk": "Сүтті коктейльдер",
    "en": "Milkshakes"
   }
  },
  {
   "id": "smoothies",
   "group": "bar",
   "order": 26,
   "name": {
    "ru": "Смузи",
    "kk": "Смузи",
    "en": "Smoothies"
   }
  },
  {
   "id": "lemonades",
   "group": "bar",
   "order": 27,
   "name": {
    "ru": "Лимонады",
    "kk": "Лимонадтар",
    "en": "Lemonades"
   }
  },
  {
   "id": "morsy",
   "group": "bar",
   "order": 28,
   "name": {
    "ru": "Морсы",
    "kk": "Морстар",
    "en": "Fruit drinks (mors)"
   }
  },
  {
   "id": "mocktails",
   "group": "bar",
   "order": 29,
   "name": {
    "ru": "Безалкогольные коктейли",
    "kk": "Алкогольсіз коктейльдер",
    "en": "Mocktails"
   }
  },
  {
   "id": "fresh",
   "group": "bar",
   "order": 30,
   "name": {
    "ru": "Фреши",
    "kk": "Жаңа сығылған шырындар",
    "en": "Fresh juices"
   }
  },
  {
   "id": "softdrinks",
   "group": "bar",
   "order": 31,
   "name": {
    "ru": "Прохладительные напитки",
    "kk": "Салқын сусындар",
    "en": "Soft drinks"
   }
  }
 ],
 "items": [
  {
   "id": "porridge-rice",
   "category": "porridge",
   "name": {
    "ru": "Рисовая каша",
    "kk": "Күріш боткасы",
    "en": "Rice porridge"
   },
   "description": {
    "ru": "рис, молоко, сахар, сливочное масло",
    "kk": "күріш, сүт, қант, сары май",
    "en": "rice, milk, sugar, butter"
   },
   "volume": null,
   "price": 1290,
   "variants": null,
   "photo": "porridge-rice",
   "gallery": ["porridge-rice-2", "porridge-rice-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 2
  },
  {
   "id": "porridge-oat",
   "category": "porridge",
   "name": {
    "ru": "Овсяная каша",
    "kk": "Сұлы боткасы",
    "en": "Oatmeal"
   },
   "description": {
    "ru": "овсяная крупа, молоко, сахар, сливочное масло",
    "kk": "сұлы жармасы, сүт, қант, сары май",
    "en": "rolled oats, milk, sugar, butter"
   },
   "volume": null,
   "price": 1290,
   "variants": null,
   "photo": "porridge-oat",
   "gallery": ["porridge-oat-2", "porridge-oat-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 2
  },
  {
   "id": "porridge-semolina",
   "category": "porridge",
   "name": {
    "ru": "Манная каша",
    "kk": "Жарма боткасы",
    "en": "Semolina porridge"
   },
   "description": {
    "ru": "манная крупа, молоко, сахар, сливочное масло",
    "kk": "жарма, сүт, қант, сары май",
    "en": "semolina, milk, sugar, butter"
   },
   "volume": null,
   "price": 1290,
   "variants": null,
   "photo": "porridge-semolina",
   "gallery": ["porridge-semolina-2", "porridge-semolina-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 2
  },
  {
   "id": "bf-english",
   "category": "breakfast",
   "name": {
    "ru": "Английский завтрак",
    "kk": "Ағылшын таңғы асы",
    "en": "English breakfast"
   },
   "description": {
    "ru": "яйцо, охотничьи сосиски, микс салата, тостовый хлеб, сливочное масло, соус барбекю, черри томаты",
    "kk": "жұмыртқа, аңшылық шұжықтар, салат миксі, сары май, барбекю тұздығы, черри қызанақтары, тост наны",
    "en": "egg, hunter's sausages, mixed greens, toast, butter, BBQ sauce, cherry tomatoes"
   },
   "volume": null,
   "price": 2190,
   "variants": null,
   "photo": "bf-english",
   "gallery": ["bf-english-2"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 3
  },
  {
   "id": "bf-french",
   "category": "breakfast",
   "name": {
    "ru": "Французский завтрак",
    "kk": "Француз таңғы асы",
    "en": "French breakfast"
   },
   "description": {
    "ru": "круассан, яйцо, молоко, сыр, микс салата, лосось",
    "kk": "круассан, жұмыртқа, сүт, ірімшік, салат миксі, албырт",
    "en": "croissant, egg, milk, cheese, mixed greens, salmon"
   },
   "volume": null,
   "price": 2590,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 3
  },
  {
   "id": "bf-turkish",
   "category": "breakfast",
   "name": {
    "ru": "Турецкий завтрак",
    "kk": "Түрікше таңғы ас",
    "en": "Turkish breakfast"
   },
   "description": {
    "ru": "яйцо, колбаса салями, помидор, огурцы, мед, пита, брынза, оливки, маслины",
    "kk": "жұмыртқа, шұжық салями, қызанақ, қияр, бал, пита, ірімшік, зәйтүн, қара зәйтүн",
    "en": "egg, salami, tomato, cucumbers, honey, pita, brynza cheese, green olives, black olives"
   },
   "volume": null,
   "price": 2490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 3
  },
  {
   "id": "bf-turkish-2",
   "category": "breakfast",
   "name": {
    "ru": "Турецкий завтрак для двоих",
    "kk": "Түрік таңғы асы екі адамға",
    "en": "Turkish breakfast for two"
   },
   "description": {
    "ru": "яйцо, помидор, нутелла, оливки, маслины, огурцы, пита, черри томаты, аджапсандал, мед, маасдам сыр, брынза, колбаса салями",
    "kk": "жұмыртқа, қызанақ, нутелла, зәйтүн, қара зәйтүн, қияр, пита, черри қызанақтары, аджапсандал, бал, маасдам ірімшігі, тұзсүзбе, салями шұжығы",
    "en": "egg, tomato, Nutella, green olives, black olives, cucumbers, pita, cherry tomatoes, ajapsandali, honey, Maasdam cheese, brynza cheese, salami"
   },
   "volume": null,
   "price": 6290,
   "variants": null,
   "photo": "bf-turkish-2",
   "gallery": ["bf-turkish-2-2", "bf-turkish-2-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 3
  },
  {
   "id": "bf-croissant-salmon",
   "category": "breakfast",
   "name": {
    "ru": "Круассан с лососем",
    "kk": "Албыртпен круассан",
    "en": "Croissant with salmon"
   },
   "description": {
    "ru": "круассан, малосольный лосось, рукола, соус голландез, черри томаты, яйцо пашот, креметте",
    "kk": "круассан, аздап тұздалған албырт, рукола, голландез тұздығы, черри қызанақтары, пашот жұмыртқасы, креметте",
    "en": "croissant, lightly salted salmon, arugula, hollandaise sauce, cherry tomatoes, poached egg, cream cheese"
   },
   "volume": null,
   "price": 2490,
   "variants": null,
   "photo": "bf-croissant-salmon",
   "gallery": ["bf-croissant-salmon-2"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 4
  },
  {
   "id": "bf-scramble-salmon",
   "category": "breakfast",
   "name": {
    "ru": "Скрэмбл с лососем и страчателла",
    "kk": "Албырт және страчателламен скрэмбл",
    "en": "Scrambled eggs with salmon and stracciatella"
   },
   "description": {
    "ru": "яйцо, молоко, малосольный лосось, страчателла, тостовый хлеб",
    "kk": "жұмыртқа, сүт, аздап тұздалған албырт, страчателла, тост наны",
    "en": "egg, milk, lightly salted salmon, stracciatella, toast"
   },
   "volume": null,
   "price": 2590,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 4
  },
  {
   "id": "bf-scramble-beef",
   "category": "breakfast",
   "name": {
    "ru": "Скрембл с копчёной говядиной",
    "kk": "Ысталған сиыр еті қосылған скремблі",
    "en": "Scrambled eggs with smoked beef"
   },
   "description": {
    "ru": "яйцо, молоко, копчёная говядина, тостовый хлеб, микс салата, помидоры черри, оливково-лимонный соус",
    "kk": "жұмыртқа, сүт, ысталған сиыр еті, тост наны, салат миксі, черри қызанақтары, зәйтүн мен лимон тұздығы",
    "en": "egg, milk, smoked beef, toast, mixed greens, cherry tomatoes, olive-lemon dressing"
   },
   "volume": null,
   "price": 2590,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 4
  },
  {
   "id": "bf-croissant-tuna",
   "category": "breakfast",
   "name": {
    "ru": "Круассан с тунцом",
    "kk": "Тунецпен круассан",
    "en": "Croissant with tuna"
   },
   "description": {
    "ru": "круассан, тунец, скрэмбл, креметте, черри томаты",
    "kk": "круассан, тунец, скрэмбл, креметте, черри қызанақтары",
    "en": "croissant, tuna, scrambled eggs, cream cheese, cherry tomatoes"
   },
   "volume": null,
   "price": 2490,
   "variants": null,
   "photo": "bf-croissant-tuna",
   "gallery": ["bf-croissant-tuna-2", "bf-croissant-tuna-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 4
  },
  {
   "id": "bf-omelet-spinach",
   "category": "breakfast",
   "name": {
    "ru": "Омлет со шпинатом",
    "kk": "Асжапырақпен омлет",
    "en": "Spinach omelette"
   },
   "description": {
    "ru": "яйцо, шпинат, курица, тостовый хлеб, микс салата, черри томаты, авокадо, молоко",
    "kk": "жұмыртқа, асжапырақ, тауық еті, тост наны, салат миксі, черри қызанақтары, авокадо, сүт",
    "en": "egg, spinach, chicken, toast, mixed greens, cherry tomatoes, avocado, milk"
   },
   "volume": null,
   "price": 2490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 4
  },
  {
   "id": "bf-shakshuka",
   "category": "breakfast",
   "name": {
    "ru": "Шакшука в томатном соусе",
    "kk": "Қызанақ тұздығындағы шакшука",
    "en": "Shakshuka in tomato sauce"
   },
   "description": {
    "ru": "светофор перец, охотничьи сосиски, томатный соус, яйцо, красная фасоль, тостовый хлеб",
    "kk": "үш түсті болгар бұрышы, аңшылық шұжықшалар, қызанақ тұздығы, жұмыртқа, қызыл үрме бұршақ, тост наны",
    "en": "tricolour bell peppers, hunter's sausages, tomato sauce, egg, red beans, toast"
   },
   "volume": null,
   "price": 2290,
   "variants": null,
   "photo": "bf-shakshuka",
   "gallery": ["bf-shakshuka-2", "bf-shakshuka-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 4
  },
  {
   "id": "syrniki-classic",
   "category": "syrniki",
   "name": {
    "ru": "Сырники классик",
    "kk": "Классик сүзбелі құймақтары",
    "en": "Classic syrniki"
   },
   "description": {
    "ru": "сырники, творожный мусс, клубника, голубика",
    "kk": "сүзбелі құймақтар, сүзбе муссы, құлпынай, көкжидек",
    "en": "cottage cheese pancakes, cottage cheese mousse, strawberries, blueberries"
   },
   "volume": null,
   "price": 2090,
   "variants": null,
   "photo": "syrniki-classic",
   "gallery": ["syrniki-classic-2", "syrniki-classic-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 5
  },
  {
   "id": "syrniki-strawberry",
   "category": "syrniki",
   "name": {
    "ru": "Сырники с клубничным джемом",
    "kk": "Құлпынай джемімен сүзбелі құймақтар",
    "en": "Syrniki with strawberry jam"
   },
   "description": {
    "ru": "сырники, творожный мусс, голубика, клубничный джем, клубника",
    "kk": "сүзбелі құймақтар, сүзбе муссы, құлпынай джемі, құлпынай, көкжидек",
    "en": "cottage cheese pancakes, cottage cheese mousse, blueberries, strawberry jam, strawberries"
   },
   "volume": null,
   "price": 2190,
   "variants": null,
   "photo": "syrniki-strawberry",
   "gallery": ["syrniki-strawberry-2", "syrniki-strawberry-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 5
  },
  {
   "id": "syrniki-peach",
   "category": "syrniki",
   "name": {
    "ru": "Сырники с персиковым джемом",
    "kk": "Шабдалы джемімен сүзбелі құймақтар",
    "en": "Syrniki with peach jam"
   },
   "description": {
    "ru": "сырники, творожный мусс, персиковый джем, клубника, голубика",
    "kk": "сүзбелі құймақтар, сүзбе муссы, шабдалы джемі, құлпынай, көкжидек",
    "en": "cottage cheese pancakes, cottage cheese mousse, peach jam, strawberries, blueberries"
   },
   "volume": null,
   "price": 2190,
   "variants": null,
   "photo": "syrniki-peach",
   "gallery": ["syrniki-peach-2", "syrniki-peach-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 5
  },
  {
   "id": "syrniki-raspberry",
   "category": "syrniki",
   "name": {
    "ru": "Сырники с малиновым джемом",
    "kk": "Таңқурай джемімен сүзбелі құймақтар",
    "en": "Syrniki with raspberry jam"
   },
   "description": {
    "ru": "сырники, творожный мусс, малиновый джем, клубника, голубика",
    "kk": "сүзбелі құймақтар, сүзбе муссы, таңқурай джемі, құлпынай, көкжидек",
    "en": "cottage cheese pancakes, cottage cheese mousse, raspberry jam, strawberries, blueberries"
   },
   "volume": null,
   "price": 2190,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 5
  },
  {
   "id": "blini-peach",
   "category": "blini",
   "name": {
    "ru": "Блины с персиковым джемом",
    "kk": "Шабдалы джемімен құймақтар",
    "en": "Blini with peach jam"
   },
   "description": {
    "ru": "блины, персиковый джем, творожный мусс, клубника, голубика",
    "kk": "құймақтар, шабдалы джемі, сүзбелі мусс, құлпынай, көкжидек",
    "en": "blini, peach jam, cottage cheese mousse, strawberries, blueberries"
   },
   "volume": null,
   "price": 1890,
   "variants": null,
   "photo": "blini-peach",
   "gallery": ["blini-peach-2", "blini-peach-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 6
  },
  {
   "id": "blini-raspberry",
   "category": "blini",
   "name": {
    "ru": "Блины с малиновым джемом",
    "kk": "Таңқурай джемімен құймақтар",
    "en": "Blini with raspberry jam"
   },
   "description": {
    "ru": "блины, малиновый джем, творожный мусс, клубника, голубика",
    "kk": "құймақтар, таңқурай джемі, сүзбелі мусс, құлпынай, көкжидек",
    "en": "blini, raspberry jam, cottage cheese mousse, strawberries, blueberries"
   },
   "volume": null,
   "price": 1890,
   "variants": null,
   "photo": "blini-raspberry",
   "gallery": ["blini-raspberry-2", "blini-raspberry-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 6
  },
  {
   "id": "blini-strawberry",
   "category": "blini",
   "name": {
    "ru": "Блины с клубничным джемом",
    "kk": "Құлпынай джемімен құймақтар",
    "en": "Blini with strawberry jam"
   },
   "description": {
    "ru": "блины, клубничный джем, творожный мусс, клубника, голубика",
    "kk": "құймақтар, құлпынай джемі, сүзбелі мусс, құлпынай, көкжидек",
    "en": "blini, strawberry jam, cottage cheese mousse, strawberries, blueberries"
   },
   "volume": null,
   "price": 1890,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 6
  },
  {
   "id": "blini-cottage",
   "category": "blini",
   "name": {
    "ru": "Блины с творогом",
    "kk": "Сүзбемен құймақтар",
    "en": "Blini with cottage cheese"
   },
   "description": {
    "ru": "блины, творожная масса, клубника, голубика",
    "kk": "құймақтар, сүзбе массасы, құлпынай, көкжидек",
    "en": "blini, sweet cottage cheese, strawberries, blueberries"
   },
   "volume": null,
   "price": 1790,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 6
  },
  {
   "id": "blini-sourcream",
   "category": "blini",
   "name": {
    "ru": "Блины со сметаной",
    "kk": "Қаймақпен құймақтар",
    "en": "Blini with sour cream"
   },
   "description": {
    "ru": "блины, сметана",
    "kk": "құймақтар, қаймақ",
    "en": "blini, sour cream"
   },
   "volume": null,
   "price": 1690,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 6
  },
  {
   "id": "salad-caesar-salmon",
   "category": "salads",
   "name": {
    "ru": "Салат Цезарь с лососем",
    "kk": "Албырт қосылған Цезарь салаты",
    "en": "Caesar salad with salmon"
   },
   "description": {
    "ru": "айсберг, малосольный лосось, цезарь соус, черри томаты, яйцо перепелиное, сухарики, пармезан",
    "kk": "айсберг, аздап тұздалған албырт, цезарь тұздығы, черри қызанақтары, бөдене жұмыртқасы, кепкен нан, пармезан",
    "en": "iceberg lettuce, lightly salted salmon, Caesar dressing, cherry tomatoes, quail egg, croutons, Parmesan"
   },
   "volume": null,
   "price": 3190,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 7
  },
  {
   "id": "salad-greek",
   "category": "salads",
   "name": {
    "ru": "Салат Греческий",
    "kk": "Грек салаты",
    "en": "Greek salad"
   },
   "description": {
    "ru": "листья салата, фетакса, красный лук, помидор, огурцы, светофор перец, оливково-лимонный соус, орегано, лимон",
    "kk": "салат жапырақтары, фетакса, қызыл пияз, қызанақтар, қияр, үш түсті болгар бұрышы, лимон-зәйтүн тұздығы, орегано, лимон",
    "en": "lettuce, fetaxa cheese, red onion, tomato, cucumbers, tricolour bell peppers, olive-lemon dressing, oregano, lemon"
   },
   "volume": null,
   "price": 2290,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 7
  },
  {
   "id": "salad-caesar-chicken",
   "category": "salads",
   "name": {
    "ru": "Салат Цезарь с курицей",
    "kk": "Тауық қосылған Цезарь салаты",
    "en": "Caesar salad with chicken"
   },
   "description": {
    "ru": "айсберг, курица, цезарь соус, черри томаты, яйцо перепелиное, пармезан, сухарики",
    "kk": "айсберг, тауық еті, цезарь тұздығы, черри қызанақтары, бөдене жұмыртқасы, пармезан, кепкен нан",
    "en": "iceberg lettuce, chicken, Caesar dressing, cherry tomatoes, quail egg, Parmesan, croutons"
   },
   "volume": null,
   "price": 2590,
   "variants": null,
   "photo": "salad-caesar-chicken",
   "gallery": ["salad-caesar-chicken-2", "salad-caesar-chicken-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 7
  },
  {
   "id": "salad-caesar-shrimp",
   "category": "salads",
   "name": {
    "ru": "Салат Цезарь с креветками",
    "kk": "Асшаян қосылған Цезарь салаты",
    "en": "Caesar salad with shrimp"
   },
   "description": {
    "ru": "айсберг, креветки, цезарь соус, черри томаты, перепелиные яйца, пармезан, сухарики",
    "kk": "айсберг, асшаяндар, цезарь тұздығы, черри қызанақтары, бөдене жұмыртқасы, пармезан, кепкен нан",
    "en": "iceberg lettuce, shrimp, Caesar dressing, cherry tomatoes, quail eggs, Parmesan, croutons"
   },
   "volume": null,
   "price": 2890,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 7
  },
  {
   "id": "salad-burrata",
   "category": "salads",
   "name": {
    "ru": "Буррата на фокачче",
    "kk": "Фокаччадағы буррата",
    "en": "Burrata on focaccia"
   },
   "description": {
    "ru": "фокачча, буррата, розовые помидоры, черри томаты, песто соус, руккола, кедровые орехи, бальзамический карандаш",
    "kk": "фокачча, буррата, қызғыл қызанақтар, черри қызанақтары, песто тұздығы, рукола, қарағай жаңғағы, бальзамдық тұздық",
    "en": "focaccia, burrata, pink tomatoes, cherry tomatoes, pesto, arugula, pine nuts, balsamic glaze"
   },
   "volume": null,
   "price": 3190,
   "variants": null,
   "photo": "salad-burrata",
   "gallery": ["salad-burrata-2", "salad-burrata-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 7
  },
  {
   "id": "salad-halloumi",
   "category": "salads",
   "name": {
    "ru": "Салат с халуми",
    "kk": "Халуми салаты",
    "en": "Halloumi salad"
   },
   "description": {
    "ru": "микс салата, бонфиле, сыр халуми, черри томаты, пармезан, бальзамический соус",
    "kk": "салат миксі, бон сүбе, халуми ірімшігі, черри қызанақтары, пармезан, бальзамдық тұздық",
    "en": "mixed greens, beef tenderloin, halloumi cheese, cherry tomatoes, Parmesan, balsamic dressing"
   },
   "volume": null,
   "price": 2990,
   "variants": null,
   "photo": "salad-halloumi",
   "gallery": ["salad-halloumi-2", "salad-halloumi-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 8
  },
  {
   "id": "salad-beet-goat",
   "category": "salads",
   "name": {
    "ru": "Салат со свеклой и козьим сыром",
    "kk": "Қызылша мен ешкі ірімшігі қосылған салат",
    "en": "Beetroot and goat cheese salad"
   },
   "description": {
    "ru": "микс салата, свекла, козий сыр, кедровые орехи, бальзамический соус, черри томаты, пармезан",
    "kk": "салат миксі, қызылша, ешкінің ірімшігі, қарағай жаңғағы, бальзамдық тұздық, черри қызанақтары, пармезан",
    "en": "mixed greens, beetroot, goat cheese, pine nuts, balsamic dressing, cherry tomatoes, Parmesan"
   },
   "volume": null,
   "price": 3190,
   "variants": null,
   "photo": "salad-beet-goat",
   "gallery": ["salad-beet-goat-2", "salad-beet-goat-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 8
  },
  {
   "id": "salad-thai",
   "category": "salads",
   "name": {
    "ru": "Тайский салат",
    "kk": "Тай салаты",
    "en": "Thai salad"
   },
   "description": {
    "ru": "светофор перец, помидор, огурцы, кинза, чеснок, кунжут, соя, соус бульгоги, чили перец, бон филе",
    "kk": "үш түсті болгар бұрышы, қызанақ, қияр, күнзе, сарымсақ, күнжіт, соя, бульгоги тұздығы, чили бұрышы, бон сүбе",
    "en": "tricolour bell peppers, tomato, cucumbers, coriander, garlic, sesame, soy sauce, bulgogi sauce, chili pepper, beef tenderloin"
   },
   "volume": null,
   "price": 2690,
   "variants": null,
   "photo": "salad-thai",
   "gallery": ["salad-thai-2", "salad-thai-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 8
  },
  {
   "id": "salad-eggplant",
   "category": "salads",
   "name": {
    "ru": "Салат с хрустящими баклажанами",
    "kk": "Қытырлақ баялды қосылған салат",
    "en": "Crispy aubergine salad"
   },
   "description": {
    "ru": "баклажан, кинза, кисло-сладкий соус, креметте, кунжут, кляр",
    "kk": "баялды, кинза, тәтті-қышқыл тұздық, креметте, күнжіт, кляр",
    "en": "aubergine, coriander, sweet and sour sauce, cream cheese, sesame, batter"
   },
   "volume": null,
   "price": 2390,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 8
  },
  {
   "id": "salad-mix-salmon-avocado",
   "category": "salads",
   "name": {
    "ru": "Микс салат с лососем и авокадо",
    "kk": "Албырт пен авокадо қосылған аралас салат",
    "en": "Mixed salad with salmon and avocado"
   },
   "description": {
    "ru": "микс салата, малосольный лосось, авокадо, черри томаты, кедровые орехи, пармезан, бальзамический соус",
    "kk": "салат миксі, аздап тұздалған албырт, авокадо, черри қызанақтары, қарағай жаңғағы, пармезан, бальзамдық тұздық",
    "en": "mixed greens, lightly salted salmon, avocado, cherry tomatoes, pine nuts, Parmesan, balsamic dressing"
   },
   "volume": null,
   "price": 3090,
   "variants": null,
   "photo": "salad-mix-salmon-avocado",
   "gallery": ["salad-mix-salmon-avocado-2", "salad-mix-salmon-avocado-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 9
  },
  {
   "id": "salad-summer",
   "category": "salads",
   "name": {
    "ru": "Летний салат с клубникой и страчателлой",
    "kk": "Құлпынай мен страчателла қосылған жазғы салат",
    "en": "Summer salad with strawberries and stracciatella"
   },
   "description": {
    "ru": "розовый помидор, черри томаты, страчателла, руккола, тыквенные семечки, клубника, медово-горчичный соус",
    "kk": "қызғылт қызанақ, черри қызанақтары, страчателла, руккола, асқабақ дәндері, құлпынай, бал-қыша тұздығы",
    "en": "pink tomato, cherry tomatoes, stracciatella, arugula, pumpkin seeds, strawberries, honey-mustard dressing"
   },
   "volume": null,
   "price": 3290,
   "variants": null,
   "photo": "salad-summer",
   "gallery": ["salad-summer-2", "salad-summer-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 9
  },
  {
   "id": "salad-nicoise",
   "category": "salads",
   "name": {
    "ru": "Нисуаз с тунцом",
    "kk": "Тунец қосылған нисуаз салаты",
    "en": "Tuna Niçoise"
   },
   "description": {
    "ru": "айсберг, шпинат, медово-горчичный соус, тунец, отварной картофель, красный лук, яйцо, фасоль, черри томаты",
    "kk": "айсберг, асжапырақ, бал-қыша тұздығы, піскен картоп, қызыл пияз, жұмыртқа, бұршақ, черри қызанақтары",
    "en": "iceberg lettuce, spinach, honey-mustard dressing, tuna, boiled potatoes, red onion, egg, beans, cherry tomatoes"
   },
   "volume": null,
   "price": 2890,
   "variants": null,
   "photo": "salad-nicoise",
   "gallery": ["salad-nicoise-2", "salad-nicoise-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 9
  },
  {
   "id": "soup-ramen-chicken",
   "category": "soups",
   "name": {
    "ru": "Рамен с курицей",
    "kk": "Рамен тауық етімен",
    "en": "Chicken ramen"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 3090,
   "variants": null,
   "photo": "soup-ramen-chicken",
   "gallery": ["soup-ramen-chicken-2", "soup-ramen-chicken-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 10
  },
  {
   "id": "soup-tomyam-seafood",
   "category": "soups",
   "name": {
    "ru": "Том ям с морепродуктами",
    "kk": "Том ям теңіз өнімдерімен",
    "en": "Tom Yam with seafood"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 3590,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 10
  },
  {
   "id": "soup-tomyam-shrimp",
   "category": "soups",
   "name": {
    "ru": "Том ям с креветками",
    "kk": "Том ям асшаяндармен",
    "en": "Tom Yam with shrimp"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 3590,
   "variants": null,
   "photo": "soup-tomyam-shrimp",
   "gallery": ["soup-tomyam-shrimp-2", "soup-tomyam-shrimp-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 10
  },
  {
   "id": "soup-solyanka",
   "category": "soups",
   "name": {
    "ru": "Солянка",
    "kk": "Солянка",
    "en": "Solyanka"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2090,
   "variants": null,
   "photo": "soup-solyanka",
   "gallery": ["soup-solyanka-2", "soup-solyanka-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 11
  },
  {
   "id": "soup-lentil",
   "category": "soups",
   "name": {
    "ru": "Чечевичный крем-суп",
    "kk": "Жасымық крем-сорпасы",
    "en": "Lentil cream soup"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1890,
   "variants": null,
   "photo": "soup-lentil",
   "gallery": ["soup-lentil-2", "soup-lentil-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 11
  },
  {
   "id": "soup-vareniki",
   "category": "soups",
   "name": {
    "ru": "Вареники",
    "kk": "Варениктер",
    "en": "Vareniki (dumplings)"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1690,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 11
  },
  {
   "id": "soup-pelmeni-beef",
   "category": "soups",
   "name": {
    "ru": "Пельмени с говядиной",
    "kk": "Тұшпаралар сиыр етімен",
    "en": "Beef pelmeni"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1790,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 11
  },
  {
   "id": "soup-pelmeni-tsar",
   "category": "soups",
   "name": {
    "ru": "Царские пельмени с лососем",
    "kk": "Патшалық тұшпаралар албырт етімен",
    "en": "Royal pelmeni with salmon"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2890,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 11
  },
  {
   "id": "soup-lapsha",
   "category": "soups",
   "name": {
    "ru": "Домашняя лапша с курицей",
    "kk": "Құс етімен кеспе",
    "en": "Homemade chicken noodle soup"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1890,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 11
  },
  {
   "id": "soup-mushroom",
   "category": "soups",
   "name": {
    "ru": "Грибной крем-суп",
    "kk": "Санырауқұлақ крем-сорпасы",
    "en": "Mushroom cream soup"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1890,
   "variants": null,
   "photo": "soup-mushroom",
   "gallery": ["soup-mushroom-2", "soup-mushroom-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 11
  },
  {
   "id": "soup-okroshka",
   "category": "soups",
   "name": {
    "ru": "Окрошка по-домашнему",
    "kk": "Үйдегідей окрошка",
    "en": "Homemade okroshka"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1890,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 11
  },
  {
   "id": "soup-ramen-beef",
   "category": "soups",
   "name": {
    "ru": "Рамен с говядиной",
    "kk": "Рамен сиыр етімен",
    "en": "Beef ramen"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 3290,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 11
  },
  {
   "id": "soup-ramen-seafood",
   "category": "soups",
   "name": {
    "ru": "Рамен с морепродуктами",
    "kk": "Рамен теңіз өнімдерімен",
    "en": "Seafood ramen"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 3490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 11
  },
  {
   "id": "hot-beefstroganoff",
   "category": "hot",
   "name": {
    "ru": "Бефстроганов с картофельным пюре",
    "kk": "Бефстроганов картоп езбесімен",
    "en": "Beef Stroganoff with mashed potatoes"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 3590,
   "variants": null,
   "photo": "hot-beefstroganoff",
   "gallery": ["hot-beefstroganoff-2", "hot-beefstroganoff-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 12
  },
  {
   "id": "hot-beef-cutlets",
   "category": "hot",
   "name": {
    "ru": "Говяжьи котлеты в томатном соусе с пюре",
    "kk": "Қызанақ тұздығындағы сиыр етінің котлеттері картоп езбесімен",
    "en": "Beef patties in tomato sauce with mashed potatoes"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2790,
   "variants": null,
   "photo": "hot-beef-cutlets",
   "gallery": ["hot-beef-cutlets-2", "hot-beef-cutlets-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 12
  },
  {
   "id": "hot-meat-veg-rice",
   "category": "hot",
   "name": {
    "ru": "Мясо с овощами и рисом",
    "kk": "Көкөністер және күрішпен ет",
    "en": "Meat with vegetables and rice"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 3590,
   "variants": null,
   "photo": "hot-meat-veg-rice",
   "gallery": ["hot-meat-veg-rice-2", "hot-meat-veg-rice-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 12
  },
  {
   "id": "hot-chicken-veg-rice",
   "category": "hot",
   "name": {
    "ru": "Курица с овощами и рисом",
    "kk": "Көкөністер және күрішпен тауық еті",
    "en": "Chicken with vegetables and rice"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2890,
   "variants": null,
   "photo": "hot-chicken-veg-rice",
   "gallery": ["hot-chicken-veg-rice-2", "hot-chicken-veg-rice-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 12
  },
  {
   "id": "hot-potato-veal",
   "category": "hot",
   "name": {
    "ru": "Картофель по-домашнему с телятиной",
    "kk": "Бұзау етімен үйдегідей картоп",
    "en": "Home-style potatoes with veal"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2890,
   "variants": null,
   "photo": "hot-potato-veal",
   "gallery": ["hot-potato-veal-2"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 13
  },
  {
   "id": "hot-chicken-fricadelles",
   "category": "hot",
   "name": {
    "ru": "Куриные фрикадельки с гречкой",
    "kk": "Қарақұмықпен тауық фрикаделькалары",
    "en": "Chicken meatballs with buckwheat"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2690,
   "variants": null,
   "photo": "hot-chicken-fricadelles",
   "gallery": ["hot-chicken-fricadelles-2", "hot-chicken-fricadelles-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 13
  },
  {
   "id": "hot-julienne",
   "category": "hot",
   "name": {
    "ru": "Жульен с курицей",
    "kk": "Тауық етімен жульен",
    "en": "Chicken julienne"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2690,
   "variants": null,
   "photo": "hot-julienne",
   "gallery": ["hot-julienne-2", "hot-julienne-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 13
  },
  {
   "id": "hot-salmon-steak",
   "category": "hot",
   "name": {
    "ru": "Стейк из лосося с картофельным пюре и шпинатом",
    "kk": "Картоп езбесі мен шпинат қосылған албырт стейкі",
    "en": "Salmon steak with mashed potatoes and spinach"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 5590,
   "variants": null,
   "photo": "hot-salmon-steak",
   "gallery": ["hot-salmon-steak-2", "hot-salmon-steak-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 14
  },
  {
   "id": "hot-tbone",
   "category": "hot",
   "name": {
    "ru": "Стейк тибон с овощами гриль",
    "kk": "Гриль көкөністерімен Тибон стейкі",
    "en": "T-bone steak with grilled vegetables"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 6290,
   "variants": null,
   "photo": "hot-tbone",
   "gallery": ["hot-tbone-2"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 14
  },
  {
   "id": "hot-striploin",
   "category": "hot",
   "name": {
    "ru": "Стейк Стриплойн с запечённым картофелем и аджапсандали",
    "kk": "Пеште пісірілген картоп пен аджапсандали қосылған Стриплойн стейкі",
    "en": "Striploin steak with baked potatoes and ajapsandali"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 6490,
   "variants": null,
   "photo": "hot-striploin",
   "gallery": ["hot-striploin-2", "hot-striploin-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 14
  },
  {
   "id": "hot-ribeye",
   "category": "hot",
   "name": {
    "ru": "Стейк Рибай с овощами гриль",
    "kk": "Грильде пісірілген көкөністер қосылған Рибай стейкі",
    "en": "Ribeye steak with grilled vegetables"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 6290,
   "variants": null,
   "photo": "hot-ribeye",
   "gallery": ["hot-ribeye-2"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 15
  },
  {
   "id": "hot-medallions",
   "category": "hot",
   "name": {
    "ru": "Медальоны с грибами",
    "kk": "Медальондар санырауқұлақтармен",
    "en": "Medallions with mushrooms"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 5590,
   "variants": null,
   "photo": "hot-medallions",
   "gallery": ["hot-medallions-2", "hot-medallions-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 15
  },
  {
   "id": "hot-chicken-steak",
   "category": "hot",
   "name": {
    "ru": "Стейк из курицы с рисом в сливочном соусе",
    "kk": "Күріш пен кілегейлі тұздық қосылған тауық стейкі",
    "en": "Chicken steak with rice in cream sauce"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 3190,
   "variants": null,
   "photo": "hot-chicken-steak",
   "gallery": ["hot-chicken-steak-2", "hot-chicken-steak-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 15
  },
  {
   "id": "bread-bun",
   "category": "bread",
   "name": {
    "ru": "Булочка (1 шт)",
    "kk": "Тоқаш (1 дана)",
    "en": "Bread roll (1 pc)"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 200,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 15
  },
  {
   "id": "bread-basket",
   "category": "bread",
   "name": {
    "ru": "Хлебная корзина",
    "kk": "Нан себеті",
    "en": "Bread basket"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 990,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 15
  },
  {
   "id": "pasta-alfredo",
   "category": "pasta",
   "name": {
    "ru": "Фетучини Альфредо с курицей",
    "kk": "Фетучини Альфредо тауық етімен",
    "en": "Fettuccine Alfredo with chicken"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 3190,
   "variants": null,
   "photo": "pasta-alfredo",
   "gallery": ["pasta-alfredo-2", "pasta-alfredo-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 16
  },
  {
   "id": "pasta-fettuccine-salmon",
   "category": "pasta",
   "name": {
    "ru": "Фетучини с лососем",
    "kk": "Албырт пен фетучини",
    "en": "Fettuccine with salmon"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 3690,
   "variants": null,
   "photo": "pasta-fettuccine-salmon",
   "gallery": ["pasta-fettuccine-salmon-2", "pasta-fettuccine-salmon-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 16
  },
  {
   "id": "pasta-mac-chicken",
   "category": "pasta",
   "name": {
    "ru": "Мак энд чиз с курицей",
    "kk": "Тауық етімен мак-энд-чиз",
    "en": "Mac and cheese with chicken"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 3290,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 16
  },
  {
   "id": "pasta-arrabbiata",
   "category": "pasta",
   "name": {
    "ru": "Аль арабьята с копчёной говядиной",
    "kk": "Аль Арабьята ысталған сиыр етімен",
    "en": "Arrabbiata with smoked beef"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 3190,
   "variants": null,
   "photo": "pasta-arrabbiata",
   "gallery": ["pasta-arrabbiata-2", "pasta-arrabbiata-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 16
  },
  {
   "id": "pasta-bolognese",
   "category": "pasta",
   "name": {
    "ru": "Спагетти болоньезе",
    "kk": "Болоньезе спагеттиі",
    "en": "Spaghetti Bolognese"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 3190,
   "variants": null,
   "photo": "pasta-bolognese",
   "gallery": ["pasta-bolognese-2", "pasta-bolognese-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 17
  },
  {
   "id": "pasta-flotski",
   "category": "pasta",
   "name": {
    "ru": "Паста по-флотски",
    "kk": "Тартылған етпен паста",
    "en": "Navy-style pasta with minced meat"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2990,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 17
  },
  {
   "id": "pasta-carbonara",
   "category": "pasta",
   "name": {
    "ru": "Спагетти карбонара",
    "kk": "Карбонара спагеттиі",
    "en": "Spaghetti Carbonara"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 3299,
   "variants": null,
   "photo": "pasta-carbonara",
   "gallery": ["pasta-carbonara-2", "pasta-carbonara-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 17,
   "check": "В макете цена 3 299 (у остальных пастах шаг 10 ₸). Возможно опечатка вместо 3 290 — уточнить у заказчика."
  },
  {
   "id": "pasta-mac-beef",
   "category": "pasta",
   "name": {
    "ru": "Мак энд чиз с копчёной говядиной",
    "kk": "Ысталған сиыр етімен мак-энд-чиз",
    "en": "Mac and cheese with smoked beef"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 3290,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 17
  },
  {
   "id": "pasta-shrimp",
   "category": "pasta",
   "name": {
    "ru": "Спагетти с креветками",
    "kk": "Асшаянмен спагеттиі",
    "en": "Spaghetti with shrimp"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 3490,
   "variants": null,
   "photo": "pasta-shrimp",
   "gallery": ["pasta-shrimp-2", "pasta-shrimp-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 17
  },
  {
   "id": "pizza-philadelphia",
   "category": "pizza",
   "name": {
    "ru": "Пицца Филадельфия",
    "kk": "Филадельфия",
    "en": "Philadelphia pizza"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 3290,
   "variants": null,
   "photo": "pizza-philadelphia",
   "gallery": ["pizza-philadelphia-2", "pizza-philadelphia-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 18
  },
  {
   "id": "pizza-margherita",
   "category": "pizza",
   "name": {
    "ru": "Пицца Маргарита",
    "kk": "Маргарита",
    "en": "Margherita pizza"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2690,
   "variants": null,
   "photo": "pizza-margherita",
   "gallery": ["pizza-margherita-2", "pizza-margherita-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 18
  },
  {
   "id": "pizza-chicken-mushroom",
   "category": "pizza",
   "name": {
    "ru": "Пицца с курицей и грибами",
    "kk": "Тауық еті және санырауқұлақтармен",
    "en": "Chicken and mushroom pizza"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 3290,
   "variants": null,
   "photo": "pizza-chicken-mushroom",
   "gallery": ["pizza-chicken-mushroom-2", "pizza-chicken-mushroom-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 18
  },
  {
   "id": "pizza-4cheese",
   "category": "pizza",
   "name": {
    "ru": "Пицца 4 сыра",
    "kk": "4 ірімшік",
    "en": "Four cheese pizza"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 3290,
   "variants": null,
   "photo": "pizza-4cheese",
   "gallery": ["pizza-4cheese-2", "pizza-4cheese-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 19
  },
  {
   "id": "pizza-caesar",
   "category": "pizza",
   "name": {
    "ru": "Пицца Цезарь",
    "kk": "Цезарь",
    "en": "Caesar pizza"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 3390,
   "variants": null,
   "photo": "pizza-caesar",
   "gallery": ["pizza-caesar-2", "pizza-caesar-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 19
  },
  {
   "id": "pizza-pepperoni",
   "category": "pizza",
   "name": {
    "ru": "Пицца Пепперони",
    "kk": "Пепперони",
    "en": "Pepperoni pizza"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2990,
   "variants": null,
   "photo": "pizza-pepperoni",
   "gallery": ["pizza-pepperoni-2"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 19
  },
  {
   "id": "pizza-bbq",
   "category": "pizza",
   "name": {
    "ru": "Пицца Барбекю",
    "kk": "Барбекю",
    "en": "BBQ pizza"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 3190,
   "variants": null,
   "photo": "pizza-bbq",
   "gallery": ["pizza-bbq-2", "pizza-bbq-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 19
  },
  {
   "id": "khachapuri-adjar",
   "category": "pizza",
   "name": {
    "ru": "Хачапури по-аджарски",
    "kk": "Аджар хачапуриі",
    "en": "Adjarian khachapuri"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2590,
   "variants": null,
   "photo": "khachapuri-adjar",
   "gallery": ["khachapuri-adjar-2", "khachapuri-adjar-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 19
  },
  {
   "id": "khachapuri-megrel",
   "category": "pizza",
   "name": {
    "ru": "Хачапури по-мегрельски",
    "kk": "Мегрель хачапуриі",
    "en": "Megrelian khachapuri"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 19
  },
  {
   "id": "sushi-california",
   "category": "sushi",
   "name": {
    "ru": "Калифорния",
    "kk": "Калифорния",
    "en": "California"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2490,
   "variants": null,
   "photo": "sushi-california",
   "gallery": ["sushi-california-2", "sushi-california-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 20
  },
  {
   "id": "sushi-philadelphia",
   "category": "sushi",
   "name": {
    "ru": "Филадельфия",
    "kk": "Филадельфия",
    "en": "Philadelphia"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2890,
   "variants": null,
   "photo": "sushi-philadelphia",
   "gallery": ["sushi-philadelphia-2", "sushi-philadelphia-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 20
  },
  {
   "id": "sushi-lasvegas",
   "category": "sushi",
   "name": {
    "ru": "Лас Вегас темпура",
    "kk": "Лас Вегас темпура",
    "en": "Las Vegas tempura"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2790,
   "variants": null,
   "photo": "sushi-lasvegas",
   "gallery": ["sushi-lasvegas-2", "sushi-lasvegas-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 20
  },
  {
   "id": "sushi-americano",
   "category": "sushi",
   "name": {
    "ru": "Американо темпура",
    "kk": "Американо темпура",
    "en": "Americano tempura"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2590,
   "variants": null,
   "photo": "sushi-americano",
   "gallery": ["sushi-americano-2", "sushi-americano-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 20
  },
  {
   "id": "sushi-sake-tempura-maki",
   "category": "sushi",
   "name": {
    "ru": "Сяке темпура маки",
    "kk": "Сяке темпура маки",
    "en": "Sake tempura maki"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2690,
   "variants": null,
   "photo": "sushi-sake-tempura-maki",
   "gallery": ["sushi-sake-tempura-maki-2", "sushi-sake-tempura-maki-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 21
  },
  {
   "id": "sushi-caesar-tempura",
   "category": "sushi",
   "name": {
    "ru": "Цезарь темпура",
    "kk": "Цезарь темпура",
    "en": "Caesar tempura"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2590,
   "variants": null,
   "photo": "sushi-caesar-tempura",
   "gallery": ["sushi-caesar-tempura-2", "sushi-caesar-tempura-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 21
  },
  {
   "id": "sushi-canada",
   "category": "sushi",
   "name": {
    "ru": "Канада",
    "kk": "Канада",
    "en": "Canada"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2990,
   "variants": null,
   "photo": "sushi-canada",
   "gallery": ["sushi-canada-2", "sushi-canada-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 21
  },
  {
   "id": "sushi-kimbap-salmon",
   "category": "sushi",
   "name": {
    "ru": "Кимбап с семгой",
    "kk": "Аксеркемен кимпаб",
    "en": "Salmon kimbap"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2290,
   "variants": null,
   "photo": "sushi-kimbap-salmon",
   "gallery": ["sushi-kimbap-salmon-2", "sushi-kimbap-salmon-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 21
  },
  {
   "id": "sushi-kimbap-tuna",
   "category": "sushi",
   "name": {
    "ru": "Кимбап с тунцом",
    "kk": "Тунецпен кимпаб",
    "en": "Tuna kimbap"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2290,
   "variants": null,
   "photo": "sushi-kimbap-tuna",
   "gallery": ["sushi-kimbap-tuna-2"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 21
  },
  {
   "id": "street-beef-burger",
   "category": "streetfood",
   "name": {
    "ru": "Биф чизбургер",
    "kk": "Сиыр еті чизбургер",
    "en": "Beef cheeseburger"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2590,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 22
  },
  {
   "id": "street-chicken-burger",
   "category": "streetfood",
   "name": {
    "ru": "Чикен чизбургер",
    "kk": "Тауық еті чизбургер",
    "en": "Chicken cheeseburger"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 22
  },
  {
   "id": "street-cheese-sticks",
   "category": "streetfood",
   "name": {
    "ru": "Сырные палочки",
    "kk": "Ірімшік таяқшалары",
    "en": "Cheese sticks"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1990,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 22
  },
  {
   "id": "street-club-sandwich",
   "category": "streetfood",
   "name": {
    "ru": "Клаб сэндвич",
    "kk": "Клаб сэндвич",
    "en": "Club sandwich"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 2390,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 22
  },
  {
   "id": "street-nuggets",
   "category": "streetfood",
   "name": {
    "ru": "Наггетсы",
    "kk": "Наггетстер",
    "en": "Chicken nuggets"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1890,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 22
  },
  {
   "id": "side-grilled-veg",
   "category": "sides",
   "name": {
    "ru": "Овощи на гриле",
    "kk": "Грильде пісірілген көкөністер",
    "en": "Grilled vegetables"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1290,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 22
  },
  {
   "id": "side-rice",
   "category": "sides",
   "name": {
    "ru": "Рис",
    "kk": "Күріш",
    "en": "Rice"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 690,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 22
  },
  {
   "id": "side-mashed",
   "category": "sides",
   "name": {
    "ru": "Картофельное пюре",
    "kk": "Картоп езбесі",
    "en": "Mashed potatoes"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 790,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 22
  },
  {
   "id": "side-buckwheat",
   "category": "sides",
   "name": {
    "ru": "Гречотта",
    "kk": "Қарақұмық",
    "en": "Buckwheat"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 790,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 22,
   "check": "В макете написано «Гречотта» (казахский вариант — «Қарақұмық» = гречка). Уточнить, не опечатка ли."
  },
  {
   "id": "side-cheese-borders",
   "category": "sides",
   "name": {
    "ru": "Сырные бортики",
    "kk": "Ірімшік жиектері",
    "en": "Cheese-stuffed crust"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 790,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 22
  },
  {
   "id": "side-fries",
   "category": "sides",
   "name": {
    "ru": "Картофель фри",
    "kk": "Фри картобы",
    "en": "French fries"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 890,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 22
  },
  {
   "id": "sauce-bbq",
   "category": "sauces",
   "name": {
    "ru": "BBQ",
    "kk": "BBQ",
    "en": "BBQ"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 690,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 22
  },
  {
   "id": "sauce-cheese",
   "category": "sauces",
   "name": {
    "ru": "Сырный",
    "kk": "Сырный",
    "en": "Cheese sauce"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 690,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 22
  },
  {
   "id": "sauce-tartar",
   "category": "sauces",
   "name": {
    "ru": "Тар-Тар",
    "kk": "Тар-Тар",
    "en": "Tartar"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 690,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 22
  },
  {
   "id": "sauce-ketchup",
   "category": "sauces",
   "name": {
    "ru": "Кетчуп",
    "kk": "Кетчуп",
    "en": "Ketchup"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 690,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 22
  },
  {
   "id": "sauce-sriracha",
   "category": "sauces",
   "name": {
    "ru": "Шрирача-острый",
    "kk": "Шрирача-острый",
    "en": "Sriracha (hot)"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 690,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 22
  },
  {
   "id": "coffee-espresso",
   "category": "coffee",
   "name": {
    "ru": "Эспрессо",
    "kk": "Эспрессо",
    "en": "Espresso"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 790,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 24
  },
  {
   "id": "coffee-double-espresso",
   "category": "coffee",
   "name": {
    "ru": "Дабл Эспрессо",
    "kk": "Қос Эспрессо",
    "en": "Double espresso"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 890,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 24
  },
  {
   "id": "coffee-americano",
   "category": "coffee",
   "name": {
    "ru": "Американо",
    "kk": "Американо",
    "en": "Americano"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1090,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 24
  },
  {
   "id": "coffee-double-americano",
   "category": "coffee",
   "name": {
    "ru": "Дабл Американо",
    "kk": "Қос Американо",
    "en": "Double Americano"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1190,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 24
  },
  {
   "id": "coffee-cappuccino",
   "category": "coffee",
   "name": {
    "ru": "Капучино",
    "kk": "Капучино",
    "en": "Cappuccino"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1290,
   "variants": null,
   "photo": "coffee-cappuccino",
   "gallery": ["coffee-cappuccino-2", "coffee-cappuccino-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 24
  },
  {
   "id": "coffee-double-cappuccino",
   "category": "coffee",
   "name": {
    "ru": "Дабл Капучино",
    "kk": "Қос Капучино",
    "en": "Double cappuccino"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1390,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 24
  },
  {
   "id": "coffee-flat-white",
   "category": "coffee",
   "name": {
    "ru": "Флэт уайт",
    "kk": "Флэт уайт",
    "en": "Flat white"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1390,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 24
  },
  {
   "id": "coffee-latte",
   "category": "coffee",
   "name": {
    "ru": "Латте",
    "kk": "Латте",
    "en": "Latte"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1290,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 24
  },
  {
   "id": "coffee-double-latte",
   "category": "coffee",
   "name": {
    "ru": "Дабл Латте",
    "kk": "Қос Латте",
    "en": "Double latte"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1390,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 24
  },
  {
   "id": "coffee-latte-macchiato",
   "category": "coffee",
   "name": {
    "ru": "Латте Макиато",
    "kk": "Латте Макиато",
    "en": "Latte macchiato"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 24
  },
  {
   "id": "coffee-double-latte-macchiato",
   "category": "coffee",
   "name": {
    "ru": "Дабл Латте Макиато",
    "kk": "Қос Латте Макиато",
    "en": "Double latte macchiato"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1590,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 24
  },
  {
   "id": "raf-vanilla",
   "category": "raf",
   "name": {
    "ru": "Раф Ваниль",
    "kk": "Раф Ваниль",
    "en": "Vanilla raf"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 24
  },
  {
   "id": "raf-caramel",
   "category": "raf",
   "name": {
    "ru": "Раф Карамель",
    "kk": "Раф Карамель",
    "en": "Caramel raf"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 24
  },
  {
   "id": "raf-salted-caramel",
   "category": "raf",
   "name": {
    "ru": "Раф Соленая карамель",
    "kk": "Раф Тұзды карамель",
    "en": "Salted caramel raf"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 24
  },
  {
   "id": "raf-chocolate",
   "category": "raf",
   "name": {
    "ru": "Раф Шоколад",
    "kk": "Раф Шоколад",
    "en": "Chocolate raf"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 24
  },
  {
   "id": "raf-hazelnut",
   "category": "raf",
   "name": {
    "ru": "Раф Лесной орех",
    "kk": "Раф Орман жаңғағы",
    "en": "Hazelnut raf"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 24
  },
  {
   "id": "extra-syrup",
   "category": "extras",
   "name": {
    "ru": "Сироп",
    "kk": "Шәрбат",
    "en": "Syrup"
   },
   "description": {
    "ru": "лесной орех, карамель, соленая карамель, фисташка, кокос, шоколад, ваниль",
    "kk": "орман жаңғағы, карамель, тұзды карамель, фисташка, кокос, шоколад, ваниль",
    "en": "hazelnut, caramel, salted caramel, pistachio, coconut, chocolate, vanilla"
   },
   "volume": null,
   "price": 200,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 24
  },
  {
   "id": "extra-cream",
   "category": "extras",
   "name": {
    "ru": "Сливки",
    "kk": "Кілегей",
    "en": "Cream"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 390,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 24
  },
  {
   "id": "extra-milk",
   "category": "extras",
   "name": {
    "ru": "Молоко",
    "kk": "Сүт",
    "en": "Milk"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 200,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 24
  },
  {
   "id": "extra-alt-milk",
   "category": "extras",
   "name": {
    "ru": "Молоко альтернативное",
    "kk": "Баламалы сүт",
    "en": "Plant-based milk"
   },
   "description": {
    "ru": "кокос, миндаль, овсянка",
    "kk": "кокос, бадам, сұлы",
    "en": "coconut, almond, oat"
   },
   "volume": null,
   "price": 590,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 24,
   "check": "Казахский перевод «кокос, бадам, сұлы» сделан вручную — в макете под казахским названием состав дан только по-русски."
  },
  {
   "id": "extra-lemon",
   "category": "extras",
   "name": {
    "ru": "Лимон",
    "kk": "Лимон",
    "en": "Lemon"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 390,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 24
  },
  {
   "id": "extra-honey",
   "category": "extras",
   "name": {
    "ru": "Мёд",
    "kk": "Бал",
    "en": "Honey"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 390,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 24
  },
  {
   "id": "icedcoffee-americano",
   "category": "icedcoffee",
   "name": {
    "ru": "Айс Американо",
    "kk": "Мұзды Американо",
    "en": "Iced Americano"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1290,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 25
  },
  {
   "id": "icedcoffee-cappuccino",
   "category": "icedcoffee",
   "name": {
    "ru": "Айс Капучино",
    "kk": "Мұзды Капучино",
    "en": "Iced cappuccino"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 25
  },
  {
   "id": "icedcoffee-latte",
   "category": "icedcoffee",
   "name": {
    "ru": "Айс Латте",
    "kk": "Мұзды Латте",
    "en": "Iced latte"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1490,
   "variants": null,
   "photo": "icedcoffee-latte",
   "gallery": ["icedcoffee-latte-2", "icedcoffee-latte-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 25
  },
  {
   "id": "icedcoffee-espresso-tonic",
   "category": "icedcoffee",
   "name": {
    "ru": "Эспрессо-тоник",
    "kk": "Эспрессо-тоник",
    "en": "Espresso tonic"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1390,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 25
  },
  {
   "id": "icedcoffee-bumble",
   "category": "icedcoffee",
   "name": {
    "ru": "Айс Бамбл",
    "kk": "Мұзды Бамбл",
    "en": "Iced Bumble"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1590,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 25
  },
  {
   "id": "icedcoffee-glace",
   "category": "icedcoffee",
   "name": {
    "ru": "Гляссе",
    "kk": "Гляссе",
    "en": "Coffee glacé"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1590,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 25
  },
  {
   "id": "icedcoffee-frappuccino",
   "category": "icedcoffee",
   "name": {
    "ru": "Фраппучино",
    "kk": "Фраппучино",
    "en": "Frappuccino"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1590,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 25
  },
  {
   "id": "mokko",
   "category": "mokko",
   "name": {
    "ru": "Мокко",
    "kk": "Мокко",
    "en": "Mocha"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1390,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 25
  },
  {
   "id": "mokko-double",
   "category": "mokko",
   "name": {
    "ru": "Дабл Мокко",
    "kk": "Дабл Мокко",
    "en": "Double mocha"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 25
  },
  {
   "id": "matcha-latte",
   "category": "matcha",
   "name": {
    "ru": "Матча Латте",
    "kk": "Матча Латте",
    "en": "Matcha latte"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 25
  },
  {
   "id": "matcha-iced",
   "category": "matcha",
   "name": {
    "ru": "Айс Матча",
    "kk": "Мұзды матча",
    "en": "Iced matcha"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 25
  },
  {
   "id": "matcha-iced-strawberry",
   "category": "matcha",
   "name": {
    "ru": "Айс Матча Клубника",
    "kk": "Мұзды Матча Құлпынай",
    "en": "Iced strawberry matcha"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1590,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 25
  },
  {
   "id": "matcha-iced-mango",
   "category": "matcha",
   "name": {
    "ru": "Айс Матча манго",
    "kk": "Мұзды Матча Манго",
    "en": "Iced mango matcha"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1590,
   "variants": null,
   "photo": "matcha-iced-mango",
   "gallery": ["matcha-iced-mango-2", "matcha-iced-mango-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 25
  },
  {
   "id": "tea-black",
   "category": "tea",
   "name": {
    "ru": "Чай чёрный",
    "kk": "Кара шай",
    "en": "Black tea"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": null,
   "variants": [
    {
     "label": "0,4 л",
     "price": 790
    },
    {
     "label": "1 л",
     "price": 1390
    }
   ],
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 26
  },
  {
   "id": "tea-green",
   "category": "tea",
   "name": {
    "ru": "Чай зелёный",
    "kk": "Көк шай",
    "en": "Green tea"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": null,
   "variants": [
    {
     "label": "0,4 л",
     "price": 790
    },
    {
     "label": "1 л",
     "price": 1390
    }
   ],
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 26
  },
  {
   "id": "tea-earl-grey",
   "category": "tea",
   "name": {
    "ru": "Эрл Грей",
    "kk": "Эрл Грей",
    "en": "Earl Grey"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "1 л",
   "price": 1690,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 26,
   "check": "Единственная цена 1 690 ₸ — по расположению в макете, вероятно объём 1 л. Уточнить."
  },
  {
   "id": "tea-fruit-caprice",
   "category": "tea",
   "name": {
    "ru": "Фруктовый каприз",
    "kk": "Жемісті наз",
    "en": "Fruit Caprice"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "1 л",
   "price": 1690,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 26,
   "check": "Единственная цена 1 690 ₸ — вероятно объём 1 л. Уточнить."
  },
  {
   "id": "tea-oriental-treasure",
   "category": "tea",
   "name": {
    "ru": "Сокровище востока",
    "kk": "Шығыс қазынасы",
    "en": "Treasure of the East"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "1 л",
   "price": 1690,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 26
  },
  {
   "id": "tea-milk-oolong",
   "category": "tea",
   "name": {
    "ru": "Молочный Улун",
    "kk": "Сүтті улун",
    "en": "Milk oolong"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "1 л",
   "price": 1690,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 26
  },
  {
   "id": "tea-puer",
   "category": "tea",
   "name": {
    "ru": "Пуэр",
    "kk": "Пуэр",
    "en": "Pu-erh"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "1 л",
   "price": 1690,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 26
  },
  {
   "id": "hot-shoko",
   "category": "hotdrinks",
   "name": {
    "ru": "Шоко",
    "kk": "Шоко",
    "en": "Choco"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1290,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 26
  },
  {
   "id": "hot-chocolate",
   "category": "hotdrinks",
   "name": {
    "ru": "Горячий шоколад",
    "kk": "Ыстық шоколад",
    "en": "Hot chocolate"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1290,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 26
  },
  {
   "id": "hot-cocoa-marshmallow",
   "category": "hotdrinks",
   "name": {
    "ru": "Какао с маршмеллоу",
    "kk": "Маршмеллоумен какао",
    "en": "Cocoa with marshmallows"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1390,
   "variants": null,
   "photo": "hot-cocoa-marshmallow",
   "gallery": ["hot-cocoa-marshmallow-2", "hot-cocoa-marshmallow-3"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 26
  },
  {
   "id": "craft-taiga",
   "category": "crafttea",
   "name": {
    "ru": "Чай таёжные ягоды",
    "kk": "Тайга жидектері шайы",
    "en": "Taiga berry tea"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": null,
   "variants": [
    {
     "label": "0,4 л",
     "price": 890
    },
    {
     "label": "1 л",
     "price": 1690
    }
   ],
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 27
  },
  {
   "id": "craft-orange-seabuckthorn",
   "category": "crafttea",
   "name": {
    "ru": "Апельсин-облепиха-мёд",
    "kk": "Апельсин-шырғанақ-бал",
    "en": "Orange, sea buckthorn & honey"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": null,
   "variants": [
    {
     "label": "0,4 л",
     "price": 890
    },
    {
     "label": "1 л",
     "price": 1690
    }
   ],
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 27
  },
  {
   "id": "craft-currant-pomegranate",
   "category": "crafttea",
   "name": {
    "ru": "Смородина-гранат-каффир",
    "kk": "Қарақат-анар-каффир",
    "en": "Blackcurrant, pomegranate & kaffir lime"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": null,
   "variants": [
    {
     "label": "0,4 л",
     "price": 890
    },
    {
     "label": "1 л",
     "price": 1690
    }
   ],
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 27
  },
  {
   "id": "craft-raspberry-lemon",
   "category": "crafttea",
   "name": {
    "ru": "Малина-лимон",
    "kk": "Таңқурай-лимон",
    "en": "Raspberry & lemon"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": null,
   "variants": [
    {
     "label": "0,4 л",
     "price": 890
    },
    {
     "label": "1 л",
     "price": 1690
    }
   ],
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 27
  },
  {
   "id": "craft-ginger-lemon",
   "category": "crafttea",
   "name": {
    "ru": "Имбирь-лимон",
    "kk": "Зімбір-лимон",
    "en": "Ginger & lemon"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": null,
   "variants": [
    {
     "label": "0,4 л",
     "price": 890
    },
    {
     "label": "1 л",
     "price": 1690
    }
   ],
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 27
  },
  {
   "id": "craft-strawberry-rooibos",
   "category": "crafttea",
   "name": {
    "ru": "Клубника-ройбуш",
    "kk": "Құлпынай-ройбуш",
    "en": "Strawberry & rooibos"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": null,
   "variants": [
    {
     "label": "0,4 л",
     "price": 890
    },
    {
     "label": "1 л",
     "price": 1690
    }
   ],
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 27
  },
  {
   "id": "craft-tashkent",
   "category": "crafttea",
   "name": {
    "ru": "Ташкентский",
    "kk": "Ташкент шайы",
    "en": "Tashkent tea"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "1 л",
   "price": 1690,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 27
  },
  {
   "id": "craft-moroccan",
   "category": "crafttea",
   "name": {
    "ru": "Марокканский",
    "kk": "Марокко шайы",
    "en": "Moroccan tea"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "1 л",
   "price": 1690,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 27
  },
  {
   "id": "icedtea-pomegranate",
   "category": "icedtea",
   "name": {
    "ru": "Iced tea Гранат",
    "kk": "Iced tea Анар",
    "en": "Iced tea Pomegranate"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,5 л",
   "price": 1490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 27
  },
  {
   "id": "icedtea-strawberry",
   "category": "icedtea",
   "name": {
    "ru": "Iced tea Клубника",
    "kk": "Iced tea Құлпынай",
    "en": "Iced tea Strawberry"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,5 л",
   "price": 1490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 27
  },
  {
   "id": "icedtea-orange",
   "category": "icedtea",
   "name": {
    "ru": "Iced tea Апельсин",
    "kk": "Iced tea Апельсин",
    "en": "Iced tea Orange"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,5 л",
   "price": 1490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 27
  },
  {
   "id": "icedtea-raspberry",
   "category": "icedtea",
   "name": {
    "ru": "Iced tea Малина",
    "kk": "Iced tea Таңқурай",
    "en": "Iced tea Raspberry"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,5 л",
   "price": 1490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 27
  },
  {
   "id": "icedtea-pineapple",
   "category": "icedtea",
   "name": {
    "ru": "Iced tea Ананас",
    "kk": "Iced tea Ананас",
    "en": "Iced tea Pineapple"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,5 л",
   "price": 1490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 27
  },
  {
   "id": "icedtea-mango",
   "category": "icedtea",
   "name": {
    "ru": "Iced tea Манго",
    "kk": "Iced tea Манго",
    "en": "Iced tea Mango"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,5 л",
   "price": 1490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 27
  },
  {
   "id": "icedtea-cherry",
   "category": "icedtea",
   "name": {
    "ru": "Iced tea Вишня",
    "kk": "Iced tea Шие",
    "en": "Iced tea Cherry"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,5 л",
   "price": 1490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 27
  },
  {
   "id": "icedtea-cranberry",
   "category": "icedtea",
   "name": {
    "ru": "Iced tea Клюква",
    "kk": "Iced tea Мүкжидек",
    "en": "Iced tea Cranberry"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,5 л",
   "price": 1490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 27
  },
  {
   "id": "icedtea-peach",
   "category": "icedtea",
   "name": {
    "ru": "Iced tea Персик",
    "kk": "Iced tea Шабдалы",
    "en": "Iced tea Peach"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,5 л",
   "price": 1490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 27
  },
  {
   "id": "icedtea-watermelon",
   "category": "icedtea",
   "name": {
    "ru": "Iced tea Арбуз",
    "kk": "Iced tea Қарбыз",
    "en": "Iced tea Watermelon"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,5 л",
   "price": 1490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 27
  },
  {
   "id": "icedtea-kiwi",
   "category": "icedtea",
   "name": {
    "ru": "Iced tea Киви",
    "kk": "Iced tea Киви",
    "en": "Iced tea Kiwi"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,5 л",
   "price": 1490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 27
  },
  {
   "id": "icedtea-passionfruit",
   "category": "icedtea",
   "name": {
    "ru": "Iced tea Маракуйя",
    "kk": "Iced tea Маракуйя",
    "en": "Iced tea Passion fruit"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,5 л",
   "price": 1490,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 27
  },
  {
   "id": "shake-vanilla",
   "category": "milkshakes",
   "name": {
    "ru": "Ванильный",
    "kk": "Ваниль",
    "en": "Vanilla"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,4 л",
   "price": 1690,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 28
  },
  {
   "id": "shake-chocolate",
   "category": "milkshakes",
   "name": {
    "ru": "Шоколадный",
    "kk": "Шоколад",
    "en": "Chocolate"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,4 л",
   "price": 1690,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 28
  },
  {
   "id": "shake-banana",
   "category": "milkshakes",
   "name": {
    "ru": "Банановый",
    "kk": "Банан",
    "en": "Banana"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,4 л",
   "price": 1690,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 28
  },
  {
   "id": "shake-strawberry",
   "category": "milkshakes",
   "name": {
    "ru": "Клубничный",
    "kk": "Құлпынай",
    "en": "Strawberry"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,4 л",
   "price": 1690,
   "variants": null,
   "photo": "shake-strawberry",
   "gallery": ["shake-strawberry-2"],
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 28
  },
  {
   "id": "smoothie-berry",
   "category": "smoothies",
   "name": {
    "ru": "Ягодный",
    "kk": "Жидекті",
    "en": "Berry"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,4 л",
   "price": 1590,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 28
  },
  {
   "id": "smoothie-apple-kiwi",
   "category": "smoothies",
   "name": {
    "ru": "Яблоко-киви",
    "kk": "Алма-киви",
    "en": "Apple & kiwi"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,4 л",
   "price": 1590,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 28
  },
  {
   "id": "smoothie-strawberry-banana",
   "category": "smoothies",
   "name": {
    "ru": "Клубника-банан",
    "kk": "Құлпынай-банан",
    "en": "Strawberry & banana"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,4 л",
   "price": 1590,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 28
  },
  {
   "id": "lemonade-cherry-vanilla",
   "category": "lemonades",
   "name": {
    "ru": "Вишня-ваниль",
    "kk": "Шие-ваниль",
    "en": "Cherry & vanilla"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": null,
   "variants": [
    {
     "label": "0,5 л",
     "price": 1590
    },
    {
     "label": "1 л",
     "price": 2790
    }
   ],
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 29
  },
  {
   "id": "lemonade-raspberry-basil",
   "category": "lemonades",
   "name": {
    "ru": "Малина-базилик-шиповник",
    "kk": "Таңқурай-райхан-итмұрын",
    "en": "Raspberry, basil & rosehip"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": null,
   "variants": [
    {
     "label": "0,5 л",
     "price": 1590
    },
    {
     "label": "1 л",
     "price": 2790
    }
   ],
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 29
  },
  {
   "id": "lemonade-strawberry-pineapple",
   "category": "lemonades",
   "name": {
    "ru": "Клубника-ананас",
    "kk": "Құлпынай-ананас",
    "en": "Strawberry & pineapple"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": null,
   "variants": [
    {
     "label": "0,5 л",
     "price": 1590
    },
    {
     "label": "1 л",
     "price": 2790
    }
   ],
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 29
  },
  {
   "id": "lemonade-berry",
   "category": "lemonades",
   "name": {
    "ru": "Ягодный",
    "kk": "Жидекті",
    "en": "Berry"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": null,
   "variants": [
    {
     "label": "0,5 л",
     "price": 1590
    },
    {
     "label": "1 л",
     "price": 2790
    }
   ],
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 29
  },
  {
   "id": "lemonade-mango-orange",
   "category": "lemonades",
   "name": {
    "ru": "Манго-апельсин",
    "kk": "Манго-апельсин",
    "en": "Mango & orange"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": null,
   "variants": [
    {
     "label": "0,5 л",
     "price": 1590
    },
    {
     "label": "1 л",
     "price": 2790
    }
   ],
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 29
  },
  {
   "id": "lemonade-citrus-ginger",
   "category": "lemonades",
   "name": {
    "ru": "Цитрус-имбирь",
    "kk": "Цитрус-зімбір",
    "en": "Citrus & ginger"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": null,
   "variants": [
    {
     "label": "0,5 л",
     "price": 1590
    },
    {
     "label": "1 л",
     "price": 2790
    }
   ],
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 29
  },
  {
   "id": "lemonade-kiwi-lime",
   "category": "lemonades",
   "name": {
    "ru": "Киви-лайм",
    "kk": "Киви-лайм",
    "en": "Kiwi & lime"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": null,
   "variants": [
    {
     "label": "0,5 л",
     "price": 1590
    },
    {
     "label": "1 л",
     "price": 2790
    }
   ],
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 29
  },
  {
   "id": "lemonade-mango-passion",
   "category": "lemonades",
   "name": {
    "ru": "Манго-маракуйя",
    "kk": "Манго-маракуйя",
    "en": "Mango & passion fruit"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": null,
   "variants": [
    {
     "label": "0,5 л",
     "price": 1590
    },
    {
     "label": "1 л",
     "price": 2790
    }
   ],
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 29
  },
  {
   "id": "mors-cranberry",
   "category": "morsy",
   "name": {
    "ru": "Клюквенный",
    "kk": "Мүкжидек",
    "en": "Cranberry"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "1 л",
   "price": 2200,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 29
  },
  {
   "id": "mors-currant",
   "category": "morsy",
   "name": {
    "ru": "Смородина",
    "kk": "Қарақат",
    "en": "Blackcurrant"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "1 л",
   "price": 2200,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 29
  },
  {
   "id": "mors-cherry",
   "category": "morsy",
   "name": {
    "ru": "Вишнёвый",
    "kk": "Шие",
    "en": "Cherry"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "1 л",
   "price": 2200,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 29
  },
  {
   "id": "mocktail-classic",
   "category": "mocktails",
   "name": {
    "ru": "Мохито классический",
    "kk": "Мохито классикалық",
    "en": "Classic Mojito"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1590,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 30
  },
  {
   "id": "mocktail-watermelon",
   "category": "mocktails",
   "name": {
    "ru": "Мохито арбузный",
    "kk": "Мохито қарбызбен",
    "en": "Watermelon Mojito"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1590,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 30
  },
  {
   "id": "mocktail-strawberry",
   "category": "mocktails",
   "name": {
    "ru": "Мохито клубничный",
    "kk": "Мохито құлпынаймен",
    "en": "Strawberry Mojito"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1590,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 30
  },
  {
   "id": "mocktail-orange-sling",
   "category": "mocktails",
   "name": {
    "ru": "Апельсиновый слинг",
    "kk": "Апельсинді слинг",
    "en": "Orange sling"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1590,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 30
  },
  {
   "id": "mocktail-aperol",
   "category": "mocktails",
   "name": {
    "ru": "Апероль шприц",
    "kk": "Апероль шприц",
    "en": "Aperol Spritz"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1590,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 30
  },
  {
   "id": "fresh-orange",
   "category": "fresh",
   "name": {
    "ru": "Апельсиновый",
    "kk": "Апельсин",
    "en": "Orange"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,4 л",
   "price": 2290,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 30
  },
  {
   "id": "fresh-apple",
   "category": "fresh",
   "name": {
    "ru": "Яблочный",
    "kk": "Алма",
    "en": "Apple"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,4 л",
   "price": 2090,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 30
  },
  {
   "id": "fresh-carrot",
   "category": "fresh",
   "name": {
    "ru": "Морковный",
    "kk": "Сәбіз",
    "en": "Carrot"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,4 л",
   "price": 2090,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 30
  },
  {
   "id": "fresh-grapefruit",
   "category": "fresh",
   "name": {
    "ru": "Грейпфрутовый",
    "kk": "Грейпфрут",
    "en": "Grapefruit"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,4 л",
   "price": 2290,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 30
  },
  {
   "id": "fresh-apple-carrot",
   "category": "fresh",
   "name": {
    "ru": "Яблоко-морковь",
    "kk": "Алма-сәбіз",
    "en": "Apple & carrot"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,4 л",
   "price": 2290,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 30
  },
  {
   "id": "fresh-orange-grapefruit",
   "category": "fresh",
   "name": {
    "ru": "Апельсин-грейпфрут",
    "kk": "Апельсин-грейпфрут",
    "en": "Orange & grapefruit"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,4 л",
   "price": 2290,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 30
  },
  {
   "id": "soft-water",
   "category": "softdrinks",
   "name": {
    "ru": "Вода без газа / с газом",
    "kk": "Су газдалған / газдалмаған",
    "en": "Still / sparkling water"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,5 л",
   "price": 880,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 30
  },
  {
   "id": "soft-borjomi",
   "category": "softdrinks",
   "name": {
    "ru": "Боржоми",
    "kk": "Боржоми",
    "en": "Borjomi"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,5 л",
   "price": 1190,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 30
  },
  {
   "id": "soft-cola",
   "category": "softdrinks",
   "name": {
    "ru": "Coca-Cola / Fanta / Sprite",
    "kk": "Coca-Cola / Fanta / Sprite",
    "en": "Coca-Cola / Fanta / Sprite"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,25 л",
   "price": 890,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 30
  },
  {
   "id": "soft-redbull",
   "category": "softdrinks",
   "name": {
    "ru": "Ред бул",
    "kk": "Ред бул",
    "en": "Red Bull"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,25 л",
   "price": 1790,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 30
  },
  {
   "id": "soft-rich",
   "category": "softdrinks",
   "name": {
    "ru": "Сок Rich в ассортименте",
    "kk": "Rich шырыны сұрыптамада",
    "en": "Rich juice, assorted"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 790,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 30,
   "check": "Объём сока Rich в макете не указан."
  },
  {
   "id": "soft-schweppes",
   "category": "softdrinks",
   "name": {
    "ru": "Швепс",
    "kk": "Швепс",
    "en": "Schweppes"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 890,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 30
  },
  {
   "id": "soft-cold-brew",
   "category": "softdrinks",
   "name": {
    "ru": "Cold brew в ассортименте",
    "kk": "Cold brew сұрыптамада",
    "en": "Cold brew, assorted"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": "0,25 л",
   "price": 2500,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 30
  },
  {
   "id": "soft-nonalc-beer",
   "category": "softdrinks",
   "name": {
    "ru": "Безалкогольное пиво",
    "kk": "Алкогольсіз сыра",
    "en": "Non-alcoholic beer"
   },
   "description": {
    "ru": "",
    "kk": "",
    "en": ""
   },
   "volume": null,
   "price": 1500,
   "variants": null,
   "photo": null,
   "tags": [],
   "nutrition": null,
   "allergens": [],
   "available": true,
   "srcPage": 30
  }
 ]
};
