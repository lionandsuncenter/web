/**
 * i18n.js
 * ------------------------------------------------------------------
 * All site copy lives here, keyed by language.
 * Nothing else in the codebase needs to change — main.js reads the
 * page's text purely from the `key` attributes below.
 * ------------------------------------------------------------------
 */

const SITE_CONTENT = {
  fa: {
    dir: "rtl",
    htmlLang: "fa",
    meta: {
      title: "خانه شیر و خورشید | خانه فرهنگ، دیدار، آموزش و همبستگی",
      description: "خانه شیر و خورشید در وین، محلی باز برای دیدار، فرهنگ، آموزش و فعالیت‌های اجتماعی داوطلبانه."
    },
    nav: {
      home: "صفحه اصلی",
      about: "معرفی مرکز",
      activities: "فعالیت‌ها و خدمات",
      schedule: "برنامه هفتگی",
      events: "رویدادها",
      contact: "تماس با ما"
    },
    headings: {
      spaces: "فضاهای مرکز",
      culture: "جامعه و تعاملات فرهنگی",
      sampleEvents: "نمونه رویدادها:"
    },
    placeholders: {
      label: "طرح و راهنمای بصری تصویر",
      hero: "تصویری عریض، باکیفیت و با نور طبیعی از نمای ورودی یا فضای داخلی روشن و صمیمی مرکز که در آن افرادی از سنین مختلف (کودک، جوان، سالمند) در حال گفتگو، نوشیدن قهوه و لبخند زدن هستند.",
      about: "یک عکس ترکیبی یا کلاژ مدرن از دورهمیهای چندنسلی، کارگاههای آموزشی و جلسات گفتگو در محیط مرکز.",
      cafe: "نمای نزدیک از پیشخوان کافه با فنجانهای قهوه/چای، شیرینیهای تازه و افرادی که پشت میزهای چوبی در حال گفتگو و خنده هستند.",
      library: "قفسههای چوبی پر از کتابهای فارسی، آلمانی و انگلیسی همراه با یک صندلی راحت برای مطالعه و نورپردازی گرم.",
      language: "گروهی کوچک از افراد دایرهوار دور یک میز نشستهاند و با تختهسیاه یا یادداشتهای روی میز در حال مکالمه و تمرین زبان هستند.",
      children: "کودکان در حال نقاشی، بازیهای گروهی یا گوش دادن به کتابخوانی با لبخند و شور و شوق.",
      intergenerational: "یک فرد سالمند و یک جوان در حال بازی شطرنج یا گفتگو روی یک صندلی در حال خندیدن.",
      music: "فردی در حال نواختن یک ساز سنتی یا مدرن در یک محفل کوچک و صمیمی یا تابلوی نقاشی در حال تکمیل.",
      health: "یک جلسه اطلاعرسانی صمیمی که در آن یک متخصص در حال صحبت با حاضرین درباره سلامت عمومی است.",
      social: "دو نفر در حال بررسی فرمها یا یک لپتاپ پشت میز مشاوره.",
      austria: "گروهی از اعضای مرکز در حال بازدید از یک مکان تاریخی یا موزه در شهر وین.",
      persian: "سفره یلدا یا نوروز آراسته شده با عناصر سنتی یا اجرای موسیقی اصیل ایرانی.",
      intercultural: "پرچمها یا المانهای چندفرهنگی همراه با افرادی با پوششها یا پسزمینههای گوناگون در حال گفتگو.",
      volunteering: "عکس دستهجمعی از داوطلبان مرکز با لبخند و نشان دادن حس همکاری و دوستی.",
      humanrights: "نمادی از صلح، آزادی و دستهای گرهخورده به نشانه همبستگی انسانی.",
      weekly: "یک اینفوگرافیک زیبا و خوانا از برنامه هفتگی.",
      eventsImg: "کارتهای نمایش رویدادها دارای عکس، پوستر، تاریخ و دکمه ثبتنام.",
      hours: "آیکون ساعت یا گرافیک زیبای نمایشدهنده زمان کاری روی شیشه ورودی مرکز.",
      contactImg: "تصویر کد QR اینستاگرام جهت اسکن سریع + نقشه گوگل مپ از موقعیت دقیق مرکز."
    },
    sections: {
      s1: {
        title: "خانه شیر و خورشید",
        subtitle: "فرهنگ · دیدار · آموزش · همبستگی",
        intro1: "مکانی باز برای انسانهایی با پیشینهها و نسلهای گوناگون.",
        intro2: "خانه شیر و خورشید یک فضای باز برای دیدار، فرهنگ و فعالیت اجتماعی در وین است؛ جایی که کافه، کتابخانه، آموزش، فرهنگ، ارتباط اجتماعی و فعالیت داوطلبانه در کنار یکدیگر قرار گرفتهاند.",
        intro3: "درهای ما به روی همه باز است."
      },
      s2: {
        title: "خانه شیر و خورشید چیست؟",
        text: "خانه شیر و خورشید یک فضای فرهنگی و اجتماعی و یک محل دیدار در وین است. هدف این مرکز ایجاد محیطی آرام، در دسترس و بیننسلی است که در آن انسانها بتوانند با یکدیگر آشنا شوند، گفتگو کنند، از یکدیگر بیاموزند و در فعالیتهای مشترک شرکت کنند.",
        focusTitle: "تمرکز اصلی مرکز بر این موارد است:",
        focus1: "مشارکت اجتماعی",
        focus2: "ادغام و همزیستی",
        focus3: "تقویت زبان",
        focus4: "چندزبانگی",
        focus5: "آموزش فرهنگی",
        focus6: "ارتباط میان نسلها",
        focus7: "فعالیت داوطلبانه",
        note: "(این موارد مستقیماً در پروژه حمایت مالی تعریف شدهاند.)"
      },
      s3: {
        title: "کافه و محل گردهمایی",
        intro: "در کافه میتوان از موارد زیر لذت برد:",
        item1: "قهوه",
        item2: "چای",
        item3: "نوشیدنیهای مختلف",
        item4: "کیک و شیرینی",
        item5: "میانوعدههای سبک",
        outro: "اما کافه فقط برای خوردن و نوشیدن نیست؛ هدف آن ایجاد یک فضای دوستانه برای گفتگو، آشنایی و ارتباط میان افراد است."
      },
      s4: {
        title: "کتابخانه و مطالعه",
        intro: "یک فضای آرام برای:",
        item1: "مطالعه",
        item2: "خواندن کتاب",
        item3: "یادگیری",
        item4: "ادبیات",
        item5: "تاریخ",
        item6: "فرهنگ ایران",
        outro: "کتابخانه میتواند محلی برای آشنایی با ادبیات و فرهنگ ایرانی و همچنین گفتگو و تبادل نظر باشد."
      },
      s5: {
        title: "زبان و آموزش",
        intro1: "یکی از برنامههای اصلی مرکز، ایجاد فرصت برای تمرین زبان آلمانی در زندگی روزمره است.",
        intro2: "این برنامه جایگزین کلاس رسمی و مدرکدار زبان نیست، بلکه مکمل آن است.",
        topicsTitle: "موضوعات میتواند شامل موارد زیر باشد:",
        t1: "معرفی و آشنایی",
        t2: "خرید",
        t3: "مراجعه به پزشک",
        t4: "استفاده از حملونقل عمومی",
        t5: "همسایگی",
        t6: "مدرسه و مهدکودک",
        t7: "محیط کار",
        t8: "ادارات",
        t9: "موقعیتهای روزمره"
      },
      s6: {
        title: "کودکان و چندزبانگی",
        intro: "ما چندزبانگی را یک فرصت و سرمایه برای آموزش، هویت و ارتباط میان فرهنگها میدانیم.",
        programsTitle: "برنامههای پیشنهادی:",
        p1: "آموزش زبان به شکل بازی",
        p2: "خواندن و نوشتن",
        p3: "داستانگویی",
        p4: "شعر",
        p5: "موسیقی",
        p6: "فعالیتهای خلاقانه",
        p7: "ادبیات",
        p8: "آشنایی با سنتهای فرهنگی",
        p9: "پروژههای مشترک"
      },
      s7: {
        title: "جوان و سالمند – با هم، نه تنها",
        intro: "یکی از اهداف مهم مرکز، کاهش تنهایی و ایجاد ارتباط میان نسلهاست. برنامهها میتواند شامل موارد زیر باشد:",
        item1: "دورهمی و گفتگو",
        item2: "پیادهروی",
        item3: "شطرنج و بازیهای فکری",
        item4: "مطالعه",
        item5: "موسیقی و آواز",
        item6: "گفتوگو درباره خاطرات و تجربههای زندگی",
        item7: "فعالیتهای خلاقانه",
        item8: "جشنهای کوچک",
        item9: "برنامههای فرهنگی",
        item10: "برنامههای مشترک میان نسلها"
      },
      s8: {
        title: "موسیقی، هنر و خلاقیت",
        intro: "مرکز میتواند میزبان موارد زیر باشد:",
        item1: "کارگاههای موسیقی",
        item2: "آواز",
        item3: "ساز و موسیقی گروهی",
        item4: "برنامههای موسیقی برای کودکان",
        item5: "شبهای فرهنگی",
        item6: "شعر و ادبیات",
        item7: "نقاشی",
        item8: "عکاسی"
      },
      s9: {
        title: "سلامت و راهنمایی اجتماعی",
        intro: "در این بخش هدف ارائه اطلاعات و ایجاد مسیر دسترسی به خدمات موجود است، نه جایگزین شدن با پزشک یا مراکز تخصصی.",
        activitiesTitle: "فعالیت‌ها:",
        a1: "اطلاعرسانی درباره پیشگیری و سلامت",
        a2: "اطلاعات درباره سیستم بهداشت و درمان اتریش",
        a3: "راهنمایی در امور مربوط به مراقبت و زندگی روزمره",
        a4: "معرفی افراد به مراکز تخصصی و حرفهای",
        a5: "برنامهها و نشستهای اطلاعرسانی",
        outro: "پروژه برای این بخش، وجود افرادی با تجربه در پزشکی، پرستاری و مشاوره را نیز پیشبینی کرده است."
      },
      s10: {
        title: "راهنمایی و همراهی اجتماعی",
        intro: "کمک و راهنمایی در زمینه:",
        item1: "آموزش",
        item2: "تحصیل و مهارتآموزی",
        item3: "کار",
        item4: "ادارات",
        item5: "سلامت",
        item6: "مراقبت از کودکان",
        item7: "مراکز و خدمات اجتماعی",
        item8: "مراکز مشاوره موجود",
        outro1: "اصل مهم این است:",
        outro2: "ما جایگزین مراکز تخصصی نیستیم؛ بلکه پلی برای دسترسی آسانتر به خدمات موجود هستیم.",
        outro3: "در صورت نیاز، افراد به مراکز تخصصی مربوط معرفی میشوند."
      },
      s11: {
        title: "اتریش را بشناسیم",
        intro: "ادغام فقط یادگیری زبان نیست؛ شناخت جامعه و فرهنگ محل زندگی نیز اهمیت دارد.",
        programsTitle: "برنامههای پیشنهادی:",
        p1: "پیادهرویهای گروهی",
        p2: "موزهها",
        p3: "کتابخانهها",
        p4: "مکانهای تاریخی",
        p5: "پارکها",
        p6: "مراکز عمومی",
        p7: "برنامههای فرهنگی",
        p8: "فعالیتهای مشترک",
        outro: "همچنین هدف این است که اتریشیها نیز فرصت آشنایی با افراد و فرهنگهای دیگر را داشته باشند."
      },
      s12: {
        title: "فرهنگ، تاریخ و میراث ایران",
        intro1: "یکی از بخشهای ویژه خانه شیر و خورشید، معرفی و زنده نگه داشتن زبان فارسی، ادبیات، تاریخ ایران، موسیقی، هنر، سنتها، جشنهای ایرانی و میراث فرهنگی ایران است.",
        intro2: "برنامههایی مانند شب ایرانی، مهرگان، نوروز، شب یلدا، شبهای موسیقی و ادبیات، سخنرانیها و نشستهای فرهنگی میتوانند در این بخش معرفی شوند."
      },
      s13: {
        title: "فرهنگها در کنار یکدیگر",
        intro1: "خانه شیر و خورشید قرار نیست یک فضای بسته برای یک جامعه خاص باشد. هدف آن ایجاد ارتباط میان ایرانیان، اتریشیها و انسانهایی با پیشینههای مختلف است.",
        intro2: "دو برنامهای که در پروژه نیز پیشبینی شدهاند:",
        p1: "«اتریش با جهان دیدار میکند»",
        p2: "«شب فرهنگی – موسیقی، ادبیات و دیدار»"
      },
      s14: {
        title: "فعالیت داوطلبانه",
        text1: "خانه شیر و خورشید بر پایه فعالیت داوطلبانه شکل گرفته است. هدف این است که تواناییها و تخصصهای افراد داوطلب در زمینههایی مانند فرهنگ، زبان، موسیقی، آموزش، عکاسی، سلامت و مراقبت به شکلی سازمانیافته و پایدار مورد استفاده قرار گیرد. با هم میتوانیم این فضا را زنده نگه داریم.",
        text2: "پروژه نیز تأکید دارد که حمایت مالی قرار نیست جایگزین فعالیت داوطلبانه شود، بلکه قرار است آن را سازماندهی و پایدارتر کند."
      },
      s15: {
        title: "آزادی، گفتوگو و حقوق بشر",
        text1: "خانه شیر و خورشید فضایی برای گفتگو درباره آزادی، حقوق بشر و مسائل اجتماعی نیز فراهم میکند.",
        text2: "این قسمت بهتر است در سایت خانه شیر و خورشید کوتاه باشد، چون سایت اصلی فعالیتهای حقوقبشری، سایت جداگانه Schild است.",
        cta: "اطلاعات بیشتر درباره فعالیتهای شیلد ←"
      },
      s16: {
        title: "برنامه هفتگی",
        note: "(این ساختار مستقیماً از برنامه پیشنهادی پروژه گرفته شده است.)",
        d1: "دوشنبه",
        d1_t: "زبان آلمانی در زندگی روزمره / کافه زبان",
        d2: "سهشنبه",
        d2_t: "جوان و سالمند / قهوه، گفتگو، بازی و پیادهروی",
        d3: "چهارشنبه",
        d3_t: "کودکان / زبان، فرهنگ و فعالیتهای خلاقانه",
        d4: "پنجشنبه",
        d4_t: "راهنمایی و همراهی اجتماعی",
        d5: "جمعه",
        d5_t: "موسیقی، هنر، عکاسی یا برنامه فرهنگی",
        d6: "آخر هفته",
        d6_t: "برنامههای فرهنگی، گردش و فعالیتهای بیننسلی"
      },
      s17: {
        title: "رویدادهای پیش رو",
        text1: "در این قسمت رویدادها با عکس، تاریخ و توضیح کوتاه نمایش داده شوند.",
        text2: "(پروژه هدفگذاری کرده که حداقل ماهانه یک برنامه فرهنگی یا موسیقی برگزار شود.)",
        e1: "شب ایرانی",
        e2: "جشن مهرگان",
        e3: "شب موسیقی",
        e4: "شب فرهنگی",
        e5: "سخنرانی‌ها و کارگاه‌ها"
      },
      s18: {
        title: "ساعت کاری",
        d1: "دوشنبه تا جمعه:",
        d1_t: "09:00 – 20:00",
        d2: "شنبه:",
        d2_t: "09:00 – 16:00",
        d3: "یکشنبه:",
        d3_t: "بر اساس برنامه و رویدادهای ویژه"
      },
      s19: {
        title: "با ما در ارتباط باشید",
        nameLabel: "نام:",
        nameValue: "Haus des Löwen und der Sonne / Vereinslokal",
        addrLabel: "آدرس:",
        addrValue: "Scherffenberggasse 5/1/R02, 1180 Wien (Waldeckgasse), Austria",
        phoneLabel: "تلفن:",
        phoneValue: "0690 104 23 511 / 0681 103 20 389",
        emailLabel: "ایمیل:",
        emailValue: "contact@lionandsuncenter.org",
        instaLabel: "اینستاگرام:",
        instaValue: "@lionandsuncenter"
      },
      s20: {
        text1: "با هم، نه تنها.",
        text2: "با یکدیگر، نه در کنار یکدیگر.",
        text3: "مشارکت به جای انزوا.",
        text4: "دیدار، پایهای برای همزیستی و ادغام."
      }
    }
  },

  de: {
    dir: "ltr",
    htmlLang: "de",
    meta: {
      title: "Haus des Löwen und der Sonne | Haus für Kultur, Begegnung, Bildung & Solidarität",
      description: "Haus des Löwen und der Sonne in Wien - ein offener Raum für Begegnung, Kultur, Bildung und soziales ehrenamtliches Engagement."
    },
    nav: {
      home: "Startseite",
      about: "Über uns",
      activities: "Aktivitäten & Angebote",
      schedule: "Wochenprogramm",
      events: "Veranstaltungen",
      contact: "Kontakt"
    },
    headings: {
      spaces: "Unsere Räume",
      culture: "Gemeinschaft und kultureller Austausch",
      sampleEvents: "Beispielhafte Veranstaltungen:"
    },
    placeholders: {
      label: "Visueller Bildentwurf und Anleitung",
      hero: "Ein breites, qualitativ hochwertiges und natürlich beleuchtetes Bild des Eingangsbereichs oder des hellen und einladenden Innenraums des Zentrums, auf dem Menschen unterschiedlichen Alters (Kinder, Jugendliche, Senioren) miteinander plaudern, Kaffee trinken und lächeln.",
      about: "Ein modernes Kombinationsfoto oder eine Collage von generationenübergreifenden Treffen, Workshops und Gesprächsrunden in den Räumlichkeiten des Zentrums.",
      cafe: "Eine Nahaufnahme der Kaffeebar mit Kaffee-/Teetassen, frischem Gebäck und Menschen, die an Holztischen sitzen, miteinander sprechen und lachen.",
      library: "Holzregale voller persischer, deutscher und englischer Bücher, dazu ein bequemer Lesesessel und warme Beleuchtung.",
      language: "Eine kleine Gruppe von Menschen sitzt im Kreis um einen Tisch und unterhält sich/übt die Sprache mit einer Tafel oder Notizen auf dem Tisch.",
      children: "Kinder beim Malen, bei Gruppenspielen oder beim aufmerksamen Zuhören einer Vorlesung mit einem Lächeln und Begeisterung.",
      intergenerational: "Ein älterer Mensch und ein jüngerer Mensch beim Schachspielen oder beim gemeinsamen Lachen und Plaudern auf Stühlen.",
      music: "Eine Person, die ein traditionelles oder modernes Instrument in einer kleinen und intimen Runde spielt, oder ein Gemälde, das gerade fertiggestellt wird.",
      health: "Eine vertraute Informationsrunde, in der ein Experte mit den Teilnehmern über allgemeine Gesundheit spricht.",
      social: "Zwei Personen besprechen Formulare oder arbeiten an einem Laptop an einem Beratungstisch.",
      austria: "Eine Gruppe von Mitgliedern des Zentrums besucht eine historische Stätte oder ein Museum in Wien.",
      persian: "Ein mit traditionellen Elementen geschmückter Yalda- oder Nowruz-Tisch oder eine Darbietung traditioneller persischer Musik.",
      intercultural: "Flaggen oder multikulturelle Elemente zusammen mit Menschen unterschiedlicher Kleidung oder Herkunft im Gespräch.",
      volunteering: "Ein Gruppenfoto der Freiwilligen des Zentrums mit einem Lächeln, das das Gefühl von Zusammenarbeit und Freundschaft vermittelt.",
      humanrights: "Ein Symbol für Frieden, Freiheit und ineinandergreifende Hände als Zeichen menschlicher Solidarität.",
      weekly: "Eine ansprechende und leicht lesbare Infografik des Wochenprogramms.",
      eventsImg: "Event-Karten mit Foto, Poster, Datum und Anmeldeschaltfläche.",
      hours: "Ein Uhrensymbol oder eine schöne Grafik, die die Öffnungszeiten an der Glasscheibe des Haupteingangs anzeigt.",
      contactImg: "Bild eines Instagram-QR-Codes für schnelles Scannen + Google Maps-Karte des genauen Standorts des Zentrums."
    },
    sections: {
      s1: {
        title: "Haus des Löwen und der Sonne",
        subtitle: "Kultur · Begegnung · Bildung · Solidarität",
        intro1: "Ein offener Ort für Menschen unterschiedlicher Herkunft und Generationen.",
        intro2: "Das Haus des Löwen und der Sonne ist ein offener Raum für Begegnung, Kultur und soziales Engagement in Wien; ein Ort, an dem Café, Bibliothek, Bildung, Kultur, soziale Kontakte und ehrenamtliche Arbeit zusammenkommen.",
        intro3: "Unsere Türen stehen allen offen."
      },
      s2: {
        title: "Was ist das Haus des Löwen und der Sonne?",
        text: "Das Haus des Löwen und der Sonne ist ein kultureller, sozialer Raum und ein Ort der Begegnung in Wien. Das Ziel dieses Zentrums ist es, eine friedliche, zugängliche und generationenübergreifende Umgebung zu schaffen, in der sich Menschen kennenlernen, austauschen, voneinander lernen und an gemeinsamen Aktivitäten teilnehmen können.",
        focusTitle: "Der Schwerpunkt des Zentrums liegt auf folgenden Bereichen:",
        focus1: "Soziale Teilhabe",
        focus2: "Integration und Zusammenleben",
        focus3: "Sprachförderung",
        focus4: "Mehrsprachigkeit",
        focus5: "Kulturelle Bildung",
        focus6: "Generationenverbindung",
        focus7: "Ehrenamtliche Tätigkeit",
        note: "(Diese Punkte sind direkt im geförderten Projekt definiert.)"
      },
      s3: {
        title: "Café und Begegnungsort",
        intro: "Im Café kann man genießen:",
        item1: "Kaffee",
        item2: "Tee",
        item3: "Verschiedene Getränke",
        item4: "Kuchen und Gebäck",
        item5: "Leichte Snacks",
        outro: "Aber das Café dient nicht nur dem Essen und Trinken; sein Ziel ist es, eine freundliche Atmosphäre für Gespräche, Kennenlernen und Verbindungen zwischen Menschen zu schaffen."
      },
      s4: {
        title: "Bibliothek und Lesen",
        intro: "Ein ruhiger Ort für:",
        item1: "Studium",
        item2: "Bücherlesen",
        item3: "Lernen",
        item4: "Literatur",
        item5: "Geschichte",
        item6: "Iranische Kultur",
        outro: "Die Bibliothek kann ein Ort sein, um die iranische Literatur und Kultur kennenzulernen sowie für Gespräche und den Austausch von Meinungen."
      },
      s5: {
        title: "Sprache und Bildung",
        intro1: "Eines der Hauptprogramme des Zentrums besteht darin, Gelegenheiten zum Üben der deutschen Sprache im Alltag zu schaffen.",
        intro2: "Dieses Programm ersetzt keinen offiziellen Sprachkurs mit Zertifikat, sondern ist eine Ergänzung dazu.",
        topicsTitle: "Themen können unter anderem sein:",
        t1: "Vorstellung und Kennenlernen",
        t2: "Einkaufen",
        t3: "Arztbesuche",
        t4: "Nutzung öffentlicher Verkehrsmittel",
        t5: "Nachbarschaft",
        t6: "Schule und Kindergarten",
        t7: "Arbeitsplatz",
        t8: "Ämter und Behörden",
        t9: "Alltagssituationen"
      },
      s6: {
        title: "Kinder und Mehrsprachigkeit",
        intro: "Wir betrachten Mehrsprachigkeit als Chance und Bereicherung für Bildung, Identität und den Austausch zwischen Kulturen.",
        programsTitle: "Vorgeschlagene Aktivitäten:",
        p1: "Spielerisches Erlernen der Sprache",
        p2: "Lesen und Schreiben",
        p3: "Geschichtenerzählen",
        p4: "Gedichte",
        p5: "Musik",
        p6: "Kreative Aktivitäten",
        p7: "Literatur",
        p8: "Kennenlernen kultureller Traditionen",
        p9: "Gemeinsame Projekte"
      },
      s7: {
        title: "Jung und Alt – Gemeinsam statt einsam",
        intro: "Ein wichtiges Ziel des Zentrums ist es, Einsamkeit abzubauen und Verbindungen zwischen den Generationen herzustellen. Die Programme können Folgendes umfassen:",
        item1: "Treffen und Gespräche",
        item2: "Spaziergänge",
        item3: "Schach und Denkspiele",
        item4: "Lesen",
        item5: "Musik und Gesang",
        item6: "Austausch über Lebenserinnerungen und -erfahrungen",
        item7: "Kreative Aktivitäten",
        item8: "Kleine Feiern",
        item9: "Kulturelle Veranstaltungen",
        item10: "Gemeinsame generationenübergreifende Programme"
      },
      s8: {
        title: "Musik, Kunst und Kreativität",
        intro: "Das Zentrum kann Gastgeber sein für:",
        item1: "Musikworkshops",
        item2: "Gesang",
        item3: "Instrumente und Ensemblemusik",
        item4: "Musikprogramme für Kinder",
        item5: "Kulturelle Abende",
        item6: "Poesie und Literatur",
        item7: "Malerei",
        item8: "Fotografie"
      },
      s9: {
        title: "Gesundheit und soziale Orientierung",
        intro: "In diesem Bereich ist das Ziel, Informationen bereitzustellen und Zugangswege zu bestehenden Diensten zu schaffen, nicht den Arzt oder spezialisierte Zentren zu ersetzen.",
        activitiesTitle: "Aktivitäten:",
        a1: "Information über Prävention und Gesundheit",
        a2: "Informationen über das österreichische Gesundheitssystem",
        a3: "Orientierungshilfe in Pflegefragen und Alltagsangelegenheiten",
        a4: "Vermittlung an spezialisierte und professionelle Zentren",
        a5: "Informationsprogramme und -treffen",
        outro: "Das Projekt sieht für diesen Bereich auch die Beteiligung von Personen mit Erfahrung in Medizin, Pflege und Beratung vor."
      },
      s10: {
        title: "Soziale Begleitung und Beratung",
        intro: "Hilfe und Orientierung in den Bereichen:",
        item1: "Bildung",
        item2: "Studium und Ausbildung",
        item3: "Arbeit",
        item4: "Behörden und Ämter",
        item5: "Gesundheit",
        item6: "Kinderbetreuung",
        item7: "Soziale Einrichtungen und Dienste",
        item8: "Bestehende Beratungsstellen",
        outro1: "Der wichtigste Grundsatz lautet:",
        outro2: "Wir sind kein Ersatz für Fachstellen; sondern eine Brücke für einen leichteren Zugang zu bestehenden Diensten.",
        outro3: "Bei Bedarf werden die Personen an die entsprechenden Fachstellen vermittelt."
      },
      s11: {
        title: "Österreich kennenlernen",
        intro: "Integration ist nicht nur das Erlernen der Sprache; ebenso wichtig ist das Kennenlernen der Gesellschaft und der Kultur des Wohnortes.",
        programsTitle: "Vorgeschlagene Aktivitäten:",
        p1: "Gemeinsame Spaziergänge und Wanderungen",
        p2: "Museumsbesuche",
        p3: "Bibliotheken",
        p4: "Historische Orte",
        p5: "Parks",
        p6: "Öffentliche Einrichtungen",
        p7: "Kulturelle Programme",
        p8: "Gemeinsame Aktivitäten",
        outro: "Zudem ist es das Ziel, dass auch Österreicherinnen und Österreicher die Gelegenheit erhalten, andere Menschen und Kulturen kennenzulernen."
      },
      s12: {
        title: "Kultur, Geschichte und Erbe des Iran",
        intro1: "Einer der besonderen Bereiche des Hauses des Löwen und der Sonne ist die Vorstellung und Lebendigerhaltung von persischer Sprache, Literatur, iranischer Geschichte, Musik, Kunst, Traditionen, iranischen Festen und dem kulturellen Erbe des Iran.",
        intro2: "Veranstaltungen wie der Iranische Abend, das Mehregan-Fest, Nowruz-Fest (Neujahr), die Yalda-Nacht, Musik- und Literaturabende sowie kulturelle Vorträge und Seminare können in diesem Bereich präsentiert werden."
      },
      s13: {
        title: "Kulturen beieinander",
        intro1: "Das Haus des Löwen und der Sonne soll kein geschlossener Raum für eine bestimmte Gemeinschaft sein. Sein Ziel ist es, Verbindungen zwischen Iranern, Österreichern und Menschen mit unterschiedlichen Hintergründen herzustellen.",
        intro2: "Zwei Programme, die im Projekt vorgesehen sind:",
        p1: "„Österreich trifft die Welt“",
        p2: "„Kulturabend – Musik, Literatur und Begegnung“"
      },
      s14: {
        title: "Ehrenamtliches Engagement",
        text1: "Das Haus des Löwen und der Sonne basiert auf ehrenamtlicher Tätigkeit. Das Ziel ist es, die Fähigkeiten und das Fachwissen von Freiwilligen in Bereichen wie Kultur, Sprache, Musik, Bildung, Fotografie, Gesundheit und Pflege organisiert und nachhaltig zu nutzen. Gemeinsam können wir diesen Raum lebendig erhalten.",
        text2: "Das Projekt betont auch, dass die finanzielle Unterstützung die ehrenamtliche Arbeit nicht ersetzen, sondern strukturieren und nachhaltiger gestalten soll."
      },
      s15: {
        title: "Freiheit, Dialog und Menschenrechte",
        text1: "Das Haus des Löwen und der Sonne bietet auch Raum für Diskussionen über Freiheit, Menschenrechte und soziale Fragen.",
        text2: "Dieser Abschnitt sollte auf der Website des Löwe-und-Sonne-Zentrums kurz gehalten werden, da die Hauptseite für Menschenrechtsaktivitäten die separate Website des Vereins Schild ist.",
        cta: "Mehr Informationen über die Aktivitäten des Vereins Schild ←"
      },
      s16: {
        title: "Wochenprogramm",
        note: "(Diese Struktur stammt direkt aus dem vorgeschlagenen Projektplan.)",
        d1: "Montag",
        d1_t: "Deutsch im Alltag / Sprachencafé",
        d2: "Dienstag",
        d2_t: "Jung und Alt / Kaffee, Gespräch, Spiele und Spaziergänge",
        d3: "Mittwoch",
        d3_t: "Kinder / Sprache, Kultur und kreative Aktivitäten",
        d4: "Donnerstag",
        d4_t: "Soziale Begleitung und Orientierungshilfe",
        d5: "Freitag",
        d5_t: "Musik, Kunst, Fotografie oder Kulturprogramm",
        d6: "Wochenende",
        d6_t: "Kulturelle Programme, Ausflüge und generationenübergreifende Aktivitäten"
      },
      s17: {
        title: "Kommende Veranstaltungen",
        text1: "In diesem Bereich werden Veranstaltungen mit Bild, Datum und einer kurzen Beschreibung angezeigt.",
        text2: "(Das Projekt zielt darauf ab, mindestens einmal im Monat ein Kultur- oder Musikprogramm zu organisieren.)",
        e1: "Iranischer Abend",
        e2: "Mehregan-Fest",
        e3: "Musikabend",
        e4: "Kulturabend",
        e5: "Vorträge & Workshops"
      },
      s18: {
        title: "Öffnungszeiten",
        d1: "Montag bis Freitag:",
        d1_t: "09:00 – 20:00 Uhr",
        d2: "Samstag:",
        d2_t: "09:00 – 16:00 Uhr",
        d3: "Sonntag:",
        d3_t: "Je nach Programm und Sonderveranstaltungen"
      },
      s19: {
        title: "Kontaktieren Sie uns",
        nameLabel: "Name:",
        nameValue: "Haus des Löwen und der Sonne / Vereinslokal",
        addrLabel: "Adresse:",
        addrValue: "Scherffenberggasse 5/1/R02, 1180 Wien (Waldeckgasse), Österreich",
        phoneLabel: "Telefon:",
        phoneValue: "0690 104 23 511 / 0681 103 20 389",
        emailLabel: "E-Mail:",
        emailValue: "contact@lionandsuncenter.org",
        instaLabel: "Instagram:",
        instaValue: "@lionandsuncenter"
      },
      s20: {
        text1: "Gemeinsam statt einsam.",
        text2: "Miteinander statt nebeneinander.",
        text3: "Teilhabe statt Isolation.",
        text4: "Begegnung als Fundament für Zusammenleben und Integration."
      }
    }
  },

  en: {
    dir: "ltr",
    htmlLang: "en",
    meta: {
      title: "House of the Lion and the Sun | Center for Culture, Gathering, Education & Solidarity",
      description: "House of the Lion and the Sun in Vienna - an open community space for gathering, culture, education, and volunteering."
    },
    nav: {
      home: "Home",
      about: "About Us",
      activities: "Activities & Services",
      schedule: "Weekly Schedule",
      events: "Events",
      contact: "Contact"
    },
    headings: {
      spaces: "Our Spaces",
      culture: "Community and Cultural Exchange",
      sampleEvents: "Sample Events:"
    },
    placeholders: {
      label: "Visual Image Placeholder & Guidance",
      hero: "A wide, high-quality, and naturally lit image of the entrance or the bright, welcoming interior of the center, showing people of different ages (children, youth, seniors) chatting, drinking coffee, and smiling.",
      about: "A modern composite photo or collage of intergenerational gatherings, educational workshops, and discussion sessions within the center's environment.",
      cafe: "A close-up view of the café counter with coffee/tea cups, fresh pastries, and people sitting at wooden tables conversing and laughing.",
      library: "Wooden shelves filled with Persian, German, and English books, along with a comfortable reading chair and warm lighting.",
      language: "A small group of people sitting in a circle around a table, conversing and practicing language with a blackboard or notes on the table.",
      children: "Children painting, playing group games, or listening to storytelling with smiles and enthusiasm.",
      intergenerational: "An elderly person and a youth playing chess or conversing on chairs while laughing.",
      music: "A person playing a traditional or modern instrument in a small and intimate circle, or a painting being completed.",
      health: "An intimate information session where a specialist is speaking with attendees about general health.",
      social: "Two people reviewing forms or looking at a laptop at a counseling desk.",
      austria: "A group of center members visiting a historical site or museum in the city of Vienna.",
      persian: "A Yalda or Nowruz table decorated with traditional elements or a performance of traditional Iranian music.",
      intercultural: "Flags or multicultural elements alongside people of various attire or backgrounds conversing.",
      volunteering: "A group photo of the center's volunteers smiling, showing a sense of cooperation and friendship.",
      humanrights: "A symbol of peace, freedom, and clasped hands representing human solidarity.",
      weekly: "A beautiful and readable infographic of the weekly schedule.",
      eventsImg: "Event showcase cards featuring a photo, poster, date, and registration button.",
      hours: "A clock icon or beautiful graphic showing opening hours on the glass entrance door of the center.",
      contactImg: "Image of the Instagram QR code for quick scanning + a Google Maps layout showing the exact location of the center."
    },
    sections: {
      s1: {
        title: "House of the Lion and the Sun",
        subtitle: "Culture · Gathering · Education · Solidarity",
        intro1: "An open space for people of various backgrounds and generations.",
        intro2: "The House of the Lion and the Sun is an open space for gathering, culture, and social activity in Vienna; a place where a café, library, education, culture, social connection, and volunteering come together.",
        intro3: "Our doors are open to everyone."
      },
      s2: {
        title: "What is the House of the Lion and the Sun?",
        text: "The House of the Lion and the Sun is a cultural, social space and a gathering place in Vienna. The goal of this center is to create a peaceful, accessible, and intergenerational environment where people can meet, converse, learn from one another, and participate in joint activities.",
        focusTitle: "The primary focus of the center is on the following areas:",
        focus1: "Social Participation",
        focus2: "Integration and Coexistence",
        focus3: "Language Reinforcement",
        focus4: "Multilingualism",
        focus5: "Cultural Education",
        focus6: "Intergenerational Connection",
        focus7: "Volunteering",
        note: "(These items are directly defined in the financial support project.)"
      },
      s3: {
        title: "Café and Gathering Space",
        intro: "In the café, you can enjoy:",
        item1: "Coffee",
        item2: "Tea",
        item3: "Various drinks",
        item4: "Cakes and pastries",
        item5: "Light snacks",
        outro: "But the café is not just for eating and drinking; its goal is to create a friendly space for conversation, getting to know one another, and connecting people."
      },
      s4: {
        title: "Library and Reading Room",
        intro: "A quiet space for:",
        item1: "Studying",
        item2: "Reading books",
        item3: "Learning",
        item4: "Literature",
        item5: "History",
        item6: "Iranian culture",
        outro: "The library can serve as a place to become acquainted with Persian literature and culture, as well as for dialogue and exchange of ideas."
      },
      s5: {
        title: "Language and Education",
        intro1: "One of the core programs of the center is to create opportunities for practicing the German language in daily life.",
        intro2: "This program does not replace formal certified language classes, but rather complements them.",
        topicsTitle: "Topics can include:",
        t1: "Introductions and getting acquainted",
        t2: "Shopping",
        t3: "Going to the doctor",
        t4: "Using public transport",
        t5: "Neighborhood life",
        t6: "School and kindergarten",
        t7: "The workplace",
        t8: "Offices and authorities",
        t9: "Everyday situations"
      },
      s6: {
        title: "Children and Multilingualism",
        intro: "We view multilingualism as an opportunity and an asset for education, identity, and connecting cultures.",
        programsTitle: "Proposed programs:",
        p1: "Playful language learning",
        p2: "Reading and writing",
        p3: "Storytelling",
        p4: "Poetry",
        p5: "Music",
        p6: "Creative activities",
        p7: "Literature",
        p8: "Discovering cultural traditions",
        p9: "Joint projects"
      },
      s7: {
        title: "Youth and Elderly – Together, Not Alone",
        intro: "One of the important goals of the center is to reduce loneliness and connect generations. Programs can include:",
        item1: "Social gatherings and conversations",
        item2: "Walks",
        item3: "Chess and board games",
        item4: "Reading sessions",
        item5: "Music and singing",
        item6: "Conversations about life memories and experiences",
        item7: "Creative activities",
        item8: "Small celebrations",
        item9: "Cultural programs",
        item10: "Joint intergenerational activities"
      },
      s8: {
        title: "Music, Art and Creativity",
        intro: "The center can host:",
        item1: "Music workshops",
        item2: "Singing",
        item3: "Instruments and group music",
        item4: "Music programs for children",
        item5: "Cultural evenings",
        item6: "Poetry and literature",
        item7: "Painting",
        item8: "Photography"
      },
      s9: {
        title: "Health and Social Guidance",
        intro: "In this section, the goal is to provide information and create access routes to existing services, not to replace doctors or specialized centers.",
        activitiesTitle: "Activities:",
        a1: "Informing about prevention and health",
        a2: "Information about the Austrian healthcare system",
        a3: "Guidance on care and daily life matters",
        a4: "Referral to specialized and professional services",
        a5: "Information sessions and meetings",
        outro: "The project for this section also plans for the involvement of experienced individuals in medicine, nursing, and counseling."
      },
      s10: {
        title: "Social Accompaniment and Guidance",
        intro: "Help and guidance in the areas of:",
        item1: "Education",
        item2: "Studies and vocational training",
        item3: "Work",
        item4: "Offices and authorities",
        item5: "Health",
        item6: "Childcare",
        item7: "Social centers and services",
        item8: "Existing counseling centers",
        outro1: "An important principle is:",
        outro2: "We are not a replacement for specialized centers; rather, we are a bridge for easier access to existing services.",
        outro3: "If necessary, individuals are referred to the relevant specialized centers."
      },
      s11: {
        title: "Discover Austria",
        intro: "Integration is not only about learning the language; understanding the society and culture of the place you live is also important.",
        programsTitle: "Proposed programs:",
        p1: "Group walks and excursions",
        p2: "Museums",
        p3: "Libraries",
        p4: "Historical sites",
        p5: "Parks",
        p6: "Public facilities",
        p7: "Cultural programs",
        p8: "Joint activities",
        outro: "Additionally, the goal is for Austrians to also have the opportunity to get to know other people and cultures."
      },
      s12: {
        title: "Persian Culture, History and Heritage",
        intro1: "One of the special sections of the House of the Lion and the Sun is to introduce and keep alive Persian language, literature, history of Iran, music, art, traditions, Iranian celebrations, and the cultural heritage of Iran.",
        intro2: "Programs such as Persian Evening, Mehregan, Nowruz, Yalda Night, music and literature evenings, and cultural lectures and gatherings can be introduced in this section."
      },
      s13: {
        title: "Cultures Side by Side",
        intro1: "The House of the Lion and the Sun is not meant to be a closed space for a specific community. Its goal is to create connections between Iranians, Austrians, and people of different backgrounds.",
        intro2: "Two programs planned in the project:",
        p1: "\"Austria meets the World\"",
        p2: "\"Cultural Evening – Music, Literature and Gathering\""
      },
      s14: {
        title: "Volunteering",
        text1: "The House of the Lion and the Sun is built upon volunteering. The goal is to channel the skills and expertise of volunteers in fields such as culture, language, music, education, photography, health, and care in an organized and sustainable manner. Together we can keep this space alive.",
        text2: "The project emphasizes that financial funding is not meant to replace volunteering, but rather to organize it and make it more sustainable."
      },
      s15: {
        title: "Freedom, Dialogue and Human Rights",
        text1: "The House of the Lion and the Sun also provides a space for dialogue about freedom, human rights, and social issues.",
        text2: "This section is best kept brief on the Lion and Sun Center website, as the primary website for human rights activities is the separate Schild website.",
        cta: "More information about Schild activities ←"
      },
      s16: {
        title: "Weekly Schedule",
        note: "(This layout is drawn directly from the proposed project schedule.)",
        d1: "Monday",
        d1_t: "German in Everyday Life / Language Café",
        d2: "Tuesday",
        d2_t: "Youth and Elderly / Coffee, Conversation, Games and Walks",
        d3: "Wednesday",
        d3_t: "Children / Language, Culture and Creative Activities",
        d4: "Thursday", // Note: The prompt translation uses English names for days in English block
        d4_t: "Social Accompaniment and Guidance",
        d5: "Friday",
        d5_t: "Music, Art, Photography or Cultural Program",
        d6: "Weekend",
        d6_t: "Cultural programs, excursions, and intergenerational activities"
      },
      s17: {
        title: "Upcoming Events",
        text1: "In this section, events are displayed with a photo, date, and a short description.",
        text2: "(The project aims to organize at least one cultural or music program per month.)",
        e1: "Iranian Evening",
        e2: "Mehregan Celebration",
        e3: "Music Evening",
        e4: "Cultural Evening",
        e5: "Lectures & Workshops"
      },
      s18: {
        title: "Opening Hours",
        d1: "Monday to Friday:",
        d1_t: "09:00 – 20:00",
        d2: "Saturday:",
        d2_t: "09:00 – 16:00",
        d3: "Sunday:",
        d3_t: "Based on scheduled programs and special events"
      },
      s19: {
        title: "Get in Touch",
        nameLabel: "Name:",
        nameValue: "House of the Lion and the Sun / Center Locale",
        addrLabel: "Address:",
        addrValue: "Scherffenberggasse 5/1/R02, 1180 Vienna (Waldeckgasse), Austria",
        phoneLabel: "Phone:",
        phoneValue: "0690 104 23 511 / 0681 103 20 389",
        emailLabel: "Email:",
        emailValue: "contact@lionandsuncenter.org",
        instaLabel: "Instagram:",
        instaValue: "@lionandsuncenter"
      },
      s20: {
        text1: "Together, not alone.",
        text2: "With each other, not next to each other.",
        text3: "Participation instead of isolation.",
        text4: "Gathering as the foundation for coexistence and integration."
      }
    }
  }
};

// Contact details that never change between languages.
const SITE_CONSTANTS = {
  email: "contact@lionandsuncenter.org",
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
