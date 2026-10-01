/* Park Avenue Hotel & Cafe — настройки заведения.
   Всё, что помечено TODO, нужно уточнить у заказчика. Пустые значения на сайте не показываются. */
window.APP_CONFIG = {
  name: 'Park Avenue Hotel & Cafe',
  city: 'Тараз',
  address: '',                       // TODO: точный адрес
  mapUrl: '',                        // TODO: ссылка на 2ГИС / Google Maps; пусто = ссылка «Карта» скрыта
  phones: ['+7 (700) 425-05-50'],
  instagram: 'https://www.instagram.com/parkavenue.coffee',
  instagramHandle: '@parkavenue.coffee',
  website: 'parkavenue.coffee',
  workHours: '08:00–01:00',
  wifi: { name: '', password: '' }, // TODO
  breakfastHours: '',                // TODO: время завтраков, например '07:00–10:00'
  checkIn: '',                       // TODO: время заезда в отель, например '14:00'
  checkOut: '',                      // TODO: время выезда из отеля, например '12:00'
  currency: '₸',
  serviceChargePercent: 15,
  waiters: [],                       // TODO: имена официантов; пусто = кнопка «Выбрать официанта» скрыта
  allergyNote: {
    ru: 'В случае аллергии на продукты просим вас предупредить наш персонал.',
    kk: 'Азық-түлікке аллергияңыз болған жағдайда біздің қызметкерлерге хабарлаңыз.',
    en: 'If you have any food allergies, please let our staff know.'
  },
  welcome: {
    ru: { title: 'Добро пожаловать в Park Avenue', text: 'Park Avenue — это место, где встречаются уютная атмосфера, безупречный сервис и блюда, приготовленные с любовью. Мы стремимся сделать каждый ваш визит особенным и наполнить его приятными впечатлениями. Желаем вам прекрасного отдыха и приятного аппетита!' },
    kk: { title: 'Park Avenue-ге қош келдіңіз!', text: 'Park Avenue — жайлы атмосфера, мінсіз қызмет көрсету және сүйіспеншілікпен дайындалған тағамдар тоғысқан ерекше орын. Біз әрбір келуіңізді ерекше етіп, сізге жайлы демалыс пен жағымды әсер сыйлауға ұмтыламыз. Сізге жайлы демалыс тілейміз! Асыңыз дәмді болсын!' },
    en: { title: 'Welcome to Park Avenue', text: 'Park Avenue is a place where a cosy atmosphere, impeccable service and dishes made with love come together. We strive to make every visit special and full of pleasant impressions. We wish you a wonderful time and bon appétit!' }
  },
  rules: {
    ru: {
      title: 'Уважаемые гости!',
      items: [
        'Вход с собственной едой и напитками строго запрещён.',
        'Администрация не несёт ответственности за утерю, кражу или оставленные без присмотра личные вещи.',
        'Благодарим за понимание и соблюдение правил нашего заведения.'
      ],
      note: 'Бой посуды — от 2 000 ₸. Точная сумма ущерба определяется администрацией.'
    },
    kk: {
      title: 'Құрметті қонақтар!',
      items: [
        'Өзіңізбен бірге әкелінген тағамдар мен сусындарды пайдалануға қатаң тыйым салынады.',
        'Әкімшілік жоғалған, ұрланған немесе қараусыз қалдырылған жеке заттар үшін өзіне жауапкершілік алмайды.',
        'Түсіністік танытып, мекемеміздің ережелерін сақтағандарыңыз үшін алғыс білдіреміз.'
      ],
      note: 'Ыдыс сындырғаны үшін төлем — 2 000 ₸ бастап. Нақты шығын сомасын әкімшілік белгілейді.'
    },
    en: {
      title: 'Dear guests!',
      items: [
        'Bringing your own food and drinks is strictly prohibited.',
        'The management is not responsible for lost, stolen or unattended personal belongings.',
        'Thank you for your understanding and for respecting the rules of our establishment.'
      ],
      note: 'Broken tableware — from 2,000 ₸. The exact amount of damage is determined by the management.'
    }
  }
};
