/**
 * i18n.js
 * ------------------------------------------------------------------
 * All site copy lives here, keyed by language. Adding a new language
 * later is a two-step job:
 *   1. Add a new block below (copy the "en" block as a starting point
 *      and translate every value).
 *   2. Add a <button> to the language switcher in index.html with the
 *      matching data-lang code.
 * Nothing else in the codebase needs to change — main.js reads the
 * page's text purely from the `key` attributes below.
 * ------------------------------------------------------------------
 */

const SITE_CONTENT = {
  fa: {
    dir: "rtl",
    htmlLang: "fa",
    meta: {
      title: "کانون شیر و خورشید | خانه فرهنگ، زبان، تاریخ و هویت ایران",
      description:
        "کانون شیر و خورشید در وین، خانه فرهنگ، زبان، تاریخ و هویت ایران. کلاس‌های زبان، کتابخانه، شب‌های ادبی، نمایشگاه‌های هنری و رویدادهای فرهنگی."
    },
    nav: {
      home: "خانه",
      about: "درباره ما",
      activities: "فعالیت‌ها",
      gallery: "گالری",
      contact: "تماس با ما"
    },
    hero: {
      eyebrow: "انجمن پادشاهی شیلد",
      title: "کانون شیر و خورشید",
      subtitle: "خانه فرهنگ، زبان، تاریخ و هویت ایران",
      cta: "با ما در ارتباط باشید"
    },
    welcome: {
      quote:
        "به همه شما، با هر دین و باور و گویشی که هستید، پاکدلانه خوشامد می‌گوییم."
    },
    intro: {
      lead:
        "جایی آرام و دنج برای گردهمایی، گفتمان، خوانش، پژوهش و ایجاد پیوستگی میان انسان‌ها با فرهنگ‌ها و پیشینه‌های گوناگون.",
      heading: "در خانه شیر و خورشید می‌توانید:"
    },
    activities: [
      {
        icon: "fa-mug-saucer",
        text: "در محیط آرام از قهوه، چای، نوشیدنی‌ها، کیک و میان‌وعده‌های سبک لذت ببرید."
      },
      {
        icon: "fa-book-open",
        text: "در کتابخانه دنج انجمن مطالعه کنید و به نسخه‌های گران‌سنگ ادبیات پارسی دست یابید."
      },
      {
        icon: "fa-people-group",
        text: "در نشست‌های فرهنگی، سمینارها و برنامه‌های آموزشی شرکت کنید."
      },
      {
        icon: "fa-champagne-glasses",
        text: "جلسات، دورهمی‌ها، جشن‌های کوچک، تولد و مناسبت‌های خصوصی خود را در فضایی زیبا برگزار کنید."
      },
      {
        icon: "fa-handshake",
        text: "با افراد جدید آشنا شوید و دوستی‌ها و پیوندهای تازه‌ای شکل دهید."
      },
      {
        icon: "fa-language",
        text: "در کلاس‌های آموزش زبان فارسی و آلمانی، در فضایی صمیمی و دوستانه شرکت کنید."
      },
      {
        icon: "fa-microphone",
        text: "در شب‌های ادبی، شعرخوانی، شاهنامه‌خوانی، موسیقی و برنامه‌های هنری حضور یابید."
      },
      {
        icon: "fa-images",
        text: "از نمایشگاه‌های نقاشی، عکس و هنرهای تجسمی بازدید کنید و هنرمندان را حمایت کنید."
      },
      {
        icon: "fa-flag",
        text: "در جشن‌های ملی و فرهنگی ایران، آیین‌ها و مراسم سنتی همراه ما باشید."
      },
      {
        icon: "fa-child-reaching",
        text: "برنامه‌های فرهنگی و آموزشی ویژه کودکان و نوجوانان برگزار می‌شود."
      }
    ],
    mission: {
      paragraph:
        "خانه شیر و خورشید محلی برای پاسداری از فرهنگ، زبان و تاریخ ایران است. ما باور داریم که فرهنگ و تاریخ ایران، میراث گران‌بهای هزاران‌ ساله این سرزمین است که باید آن را شناخت، حفظ کرد و به نسل‌های آینده منتقل ساخت. این خانه پلی است برای گفت‌وگوی فرهنگی، تبادل اندیشه، احترام متقابل و ایجاد پیوندی میان جامعه ایرانی، جامعه اتریش و همه علاقه‌مندان به فرهنگ و همزیستی. فعالیت‌های این کانون با پشتیبانی و کمک‌های داوطلبانه (Donation / Spende) از انجمن شیلد انجام می‌گیرد."
    },
    gallery: {
      heading: "درهای ما به روی همه باز است.",
      captions: [
        "فضای گرم و دنج کافه",
        "کتاب و قهوه، همراه همیشگی",
        "شب‌های فرهنگی و برنامه‌های هنری",
        "نمایشگاه نقاشی و هنرهای تجسمی",
        "میزبانی مراسم و مناسبت‌های ویژه"
      ]
    },
    footer: {
      addressLabel: "نشانی",
      address: "Scherffenberggasse 5/1/R02, 1180 Wien (Waldeckgasse), Austria",
      emailLabel: "ایمیل",
      instagramLabel: "اینستاگرام",
      whatsappLabel: "واتس‌اپ",
      phoneLabel: "تلفن",
      orgName: "انجمن پادشاهی شیلد",
      orgWebsite: "www.lionandsuncenter.org",
      qrCaption: "اسکن برای عضویت و اطلاعات بیشتر"
    },
    banner: {
      text: "فرهنگ، ریشه یک ملت است؛ زبان، جان آن؛ و تاریخ، حافظه آن. خانه شیر و خورشید، پاسدار این میراث جاودان است."
    }
  },

  en: {
    dir: "ltr",
    htmlLang: "en",
    meta: {
      title: "Lion and Sun Center | House of Iranian Culture, Language, History & Identity",
      description:
        "Lion and Sun Center in Vienna — a house for Iranian culture, language, history and identity. Language classes, a library, literary evenings, art exhibitions and cultural events."
    },
    nav: {
      home: "Home",
      about: "About Us",
      activities: "Activities",
      gallery: "Gallery",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Schild Royalist Association",
      title: "Lion and Sun Center",
      subtitle: "House of Iranian Culture, Language, History and Identity",
      cta: "Get in touch"
    },
    welcome: {
      quote:
        "To all of you — whatever your faith, belief, or background — we offer our warmest and most sincere welcome."
    },
    intro: {
      lead:
        "A calm, cozy place for gathering, conversation, reading and research — bringing people of different cultures and backgrounds closer together.",
      heading: "At the House of Lion and Sun, you can:"
    },
    activities: [
      {
        icon: "fa-mug-saucer",
        text: "Enjoy coffee, tea, drinks, cakes and light snacks in a relaxed setting."
      },
      {
        icon: "fa-book-open",
        text: "Read in our cozy library and access precious volumes of Persian literature."
      },
      {
        icon: "fa-people-group",
        text: "Join cultural gatherings, seminars and educational programs."
      },
      {
        icon: "fa-champagne-glasses",
        text: "Host meetings, get-togethers, small celebrations, birthdays and private occasions in a beautiful setting."
      },
      {
        icon: "fa-handshake",
        text: "Meet new people and build new friendships and connections."
      },
      {
        icon: "fa-language",
        text: "Join Persian and German language classes in a warm, friendly atmosphere."
      },
      {
        icon: "fa-microphone",
        text: "Attend literary evenings, poetry readings, Shahnameh readings, music and art performances."
      },
      {
        icon: "fa-images",
        text: "Visit exhibitions of painting, photography and visual art, and support the artists."
      },
      {
        icon: "fa-flag",
        text: "Join us for Iran's national and cultural celebrations, rituals and traditional ceremonies."
      },
      {
        icon: "fa-child-reaching",
        text: "Cultural and educational programs are held especially for children and teenagers."
      }
    ],
    mission: {
      paragraph:
        "The House of Lion and Sun is a place dedicated to preserving Iran's culture, language and history. We believe that Iran's culture and history are a precious, thousand-year heritage that must be understood, protected and passed on to future generations. This house is a bridge for cultural dialogue, exchange of ideas, mutual respect, and connection between the Iranian community, Austrian society, and everyone who values culture and coexistence. The Center's activities are made possible through the voluntary support and donations (Donation / Spende) of the Schild Association."
    },
    gallery: {
      heading: "Our doors are open to everyone.",
      captions: [
        "The warm, cozy café space",
        "Books and coffee, a timeless pairing",
        "Cultural evenings and art programs",
        "Painting and visual art exhibitions",
        "Hosting events and special occasions"
      ]
    },
    footer: {
      addressLabel: "Address",
      address: "Scherffenberggasse 5/1/R02, 1180 Vienna (Waldeckgasse), Austria",
      emailLabel: "Email",
      instagramLabel: "Instagram",
      whatsappLabel: "WhatsApp",
      phoneLabel: "Phone",
      orgName: "Schild Royalist Association",
      orgWebsite: "www.lionandsuncenter.org",
      qrCaption: "Scan to join and learn more"
    },
    banner: {
      text: "Culture is a nation's root; language, its soul; and history, its memory. The House of Lion and Sun is the guardian of this timeless heritage."
    }
  },

  de: {
    dir: "ltr",
    htmlLang: "de",
    meta: {
      title: "Löwe-und-Sonne-Zentrum | Haus der iranischen Kultur, Sprache, Geschichte & Identität",
      description:
        "Löwe-und-Sonne-Zentrum in Wien — ein Haus für iranische Kultur, Sprache, Geschichte und Identität. Sprachkurse, Bibliothek, literarische Abende, Kunstausstellungen und Kulturveranstaltungen."
    },
    nav: {
      home: "Startseite",
      about: "Über uns",
      activities: "Aktivitäten",
      gallery: "Galerie",
      contact: "Kontakt"
    },
    hero: {
      eyebrow: "Patriotischer Verein Schild",
      title: "Löwe-und-Sonne-Zentrum",
      subtitle: "Haus der iranischen Kultur, Sprache, Geschichte und Identität",
      cta: "Kontaktieren Sie uns"
    },
    welcome: {
      quote:
        "Wir heißen Sie alle von Herzen willkommen – unabhängig von Glauben, Überzeugung oder Herkunft."
    },
    intro: {
      lead:
        "Ein ruhiger, gemütlicher Ort für Begegnung, Gespräch, Lesung und Forschung – der Menschen verschiedener Kulturen und Hintergründe einander näherbringt.",
      heading: "Im Haus von Löwe und Sonne können Sie:"
    },
    activities: [
      {
        icon: "fa-mug-saucer",
        text: "Genießen Sie Kaffee, Tee, Getränke, Kuchen und kleine Snacks in entspannter Atmosphäre."
      },
      {
        icon: "fa-book-open",
        text: "Lesen Sie in unserer gemütlichen Bibliothek und entdecken Sie wertvolle Werke der persischen Literatur."
      },
      {
        icon: "fa-people-group",
        text: "Nehmen Sie an kulturellen Treffen, Seminaren und Bildungsprogrammen teil."
      },
      {
        icon: "fa-champagne-glasses",
        text: "Veranstalten Sie Treffen, Feiern, kleine Feste, Geburtstage und private Anlässe in stilvollem Ambiente."
      },
      {
        icon: "fa-handshake",
        text: "Lernen Sie neue Menschen kennen und knüpfen Sie neue Freundschaften."
      },
      {
        icon: "fa-language",
        text: "Besuchen Sie unsere Farsi- und Deutschkurse in freundlicher, herzlicher Atmosphäre."
      },
      {
        icon: "fa-microphone",
        text: "Erleben Sie literarische Abende, Lesungen, Shahnameh-Vorträge, Musik und Kunstprogramme."
      },
      {
        icon: "fa-images",
        text: "Besuchen Sie Ausstellungen von Malerei, Fotografie und bildender Kunst und unterstützen Sie die Künstler."
      },
      {
        icon: "fa-flag",
        text: "Feiern Sie mit uns nationale und kulturelle Feste, Bräuche und traditionelle Zeremonien des Iran."
      },
      {
        icon: "fa-child-reaching",
        text: "Kultur- und Bildungsprogramme speziell für Kinder und Jugendliche."
      }
    ],
    mission: {
      paragraph:
        "Das Haus von Löwe und Sonne ist ein Ort zur Bewahrung der iranischen Kultur, Sprache und Geschichte. Wir glauben, dass die Kultur und Geschichte Irans ein wertvolles, jahrtausendealtes Erbe sind, das verstanden, bewahrt und an künftige Generationen weitergegeben werden muss. Dieses Haus ist eine Brücke für kulturellen Dialog, Gedankenaustausch, gegenseitigen Respekt und Verbindung zwischen der iranischen Gemeinschaft, der österreichischen Gesellschaft und allen, die Kultur und Miteinander schätzen. Die Aktivitäten des Zentrums werden durch freiwillige Unterstützung und Spenden (Donation / Spende) des Vereins Schild ermöglicht."
    },
    gallery: {
      heading: "Unsere Türen stehen allen offen.",
      captions: [
        "Der warme, gemütliche Café-Bereich",
        "Bücher und Kaffee, eine zeitlose Kombination",
        "Kulturelle Abende und Kunstprogramme",
        "Ausstellungen für Malerei und bildende Kunst",
        "Gastgeber für Veranstaltungen und besondere Anlässe"
      ]
    },
    footer: {
      addressLabel: "Adresse",
      address: "Scherffenberggasse 5/1/R02, 1180 Wien (Waldeckgasse), Österreich",
      emailLabel: "E-Mail",
      instagramLabel: "Instagram",
      whatsappLabel: "WhatsApp",
      phoneLabel: "Telefon",
      orgName: "Patriotischer Verein Schild",
      orgWebsite: "www.lionandsuncenter.org",
      qrCaption: "Scannen für Mitgliedschaft und mehr Infos"
    },
    banner: {
      text: "Kultur ist die Wurzel eines Volkes, Sprache seine Seele und Geschichte sein Gedächtnis. Das Haus von Löwe und Sonne bewahrt dieses zeitlose Erbe."
    }
  }
};

// Contact details that never change between languages.
const SITE_CONSTANTS = {
  email: "info.lionandsun@gmail.com",
  instagramHandle: "lionandsuncenter",
  instagramUrl: "https://instagram.com/lionandsuncenter",
  whatsapp: "+43 681 103 20 389",
  whatsappUrl: "https://wa.me/436811032039",
  phone: "+43 690 104 23 511",
  phoneUrl: "tel:+436901042311",
  website: "https://www.lionandsuncenter.org"
};

if (typeof module !== "undefined") {
  module.exports = { SITE_CONTENT, SITE_CONSTANTS };
}
