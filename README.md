<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>کانون شیر و خورشید | به‌زودی ...</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <style>
        :root {
            --bg-deep: #08080a;
            --gold-main: #d4af37;
            --gold-light: #fbe69b;
            --gold-dark: #8c7323;
            --gold-gradient: linear-gradient(135deg, #fbe69b 0%, #d4af37 50%, #8c7323 100%);
            --glass-bg: rgba(20, 20, 24, 0.65);
            --glass-border: 1px solid rgba(212, 175, 55, 0.2);
            --text-main: #f4f4f5;
            --text-muted: #a1a1aa;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: var(--bg-deep);
            color: var(--text-main);
            font-family: 'Vazirmatn', sans-serif;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            overflow-x: hidden;
            position: relative;
        }

        /* Ambient Background Glow */
        .bg-glow {
            position: absolute;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, rgba(8, 8, 10, 0) 70%);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
            pointer-events: none;
        }

        /* Header / Language Switcher */
        header {
            width: 100%;
            max-width: 1200px;
            padding: 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .brand-mini {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .brand-mini img {
            height: 40px;
            object-fit: contain;
        }

        .brand-title {
            font-size: 1rem;
            color: var(--gold-light);
            font-weight: 700;
        }

        .lang-selector {
            display: flex;
            gap: 6px;
            background: rgba(0,0,0,0.4);
            padding: 4px 6px;
            border-radius: 8px;
            border: var(--glass-border);
        }

        .lang-btn {
            background: transparent;
            border: none;
            color: var(--text-muted);
            padding: 4px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 700;
            transition: 0.3s;
        }

        .lang-btn.active, .lang-btn:hover {
            background: var(--gold-gradient);
            color: var(--bg-deep);
        }

        /* Main Glass Card */
        main {
            width: 100%;
            max-width: 750px;
            padding: 0 20px;
            margin: 40px 0;
        }

        .card {
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            border: var(--glass-border);
            border-radius: 24px;
            padding: 50px 30px;
            text-align: center;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
            position: relative;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(212, 175, 55, 0.1);
            border: 1px solid rgba(212, 175, 55, 0.3);
            color: var(--gold-light);
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 0.85rem;
            margin-bottom: 24px;
        }

        .badge i {
            font-size: 0.75rem;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
        }

        .main-title {
            font-size: 3.2rem;
            font-weight: 900;
            background: var(--gold-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 12px;
            line-height: 1.2;
        }

        .subtitle {
            font-size: 1.25rem;
            color: #ddd;
            margin-bottom: 8px;
        }

        .tagline {
            font-size: 0.95rem;
            color: var(--text-muted);
            margin-bottom: 35px;
        }

        /* Countdown */
        .countdown {
            display: flex;
            justify-content: center;
            gap: 16px;
            margin-bottom: 40px;
            direction: ltr;
        }

        .time-box {
            background: rgba(10, 10, 12, 0.7);
            border: var(--glass-border);
            border-radius: 12px;
            padding: 14px;
            min-width: 75px;
        }

        .time-box span {
            display: block;
            font-size: 1.8rem;
            font-weight: 900;
            color: var(--gold-light);
            line-height: 1;
        }

        .time-box label {
            font-size: 0.7rem;
            color: var(--text-muted);
            text-transform: uppercase;
            margin-top: 6px;
            display: block;
        }

        /* Notify Form */
        .notify-form {
            display: flex;
            max-width: 460px;
            margin: 0 auto 30px;
            gap: 8px;
        }

        .notify-input {
            flex: 1;
            background: rgba(0, 0, 0, 0.5);
            border: var(--glass-border);
            border-radius: 10px;
            padding: 12px 16px;
            color: #fff;
            font-family: inherit;
            outline: none;
            transition: 0.3s;
        }

        .notify-input:focus {
            border-color: var(--gold-main);
        }

        .notify-btn {
            background: var(--gold-gradient);
            border: none;
            border-radius: 10px;
            padding: 12px 24px;
            color: var(--bg-deep);
            font-weight: 700;
            font-family: inherit;
            cursor: pointer;
            transition: 0.3s;
            white-space: nowrap;
        }

        .notify-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
        }

        /* Quick Contact Links */
        .contact-bar {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            padding-top: 20px;
            border-top: 1px dashed rgba(212, 175, 55, 0.2);
        }

        .contact-item {
            color: var(--text-muted);
            text-decoration: none;
            font-size: 0.88rem;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: 0.3s;
        }

        .contact-item:hover {
            color: var(--gold-light);
        }

        .contact-item i {
            color: var(--gold-main);
        }

        /* Footer */
        footer {
            padding: 24px;
            text-align: center;
            color: var(--text-muted);
            font-size: 0.85rem;
        }

        footer p {
            margin-bottom: 4px;
        }

        /* Mobile Adaptations */
        @media (max-width: 600px) {
            .main-title { font-size: 2.3rem; }
            .card { padding: 35px 20px; }
            .countdown { gap: 8px; }
            .time-box { min-width: 65px; padding: 10px; }
            .time-box span { font-size: 1.4rem; }
            .notify-form { flex-direction: column; }
            .notify-btn { width: 100%; }
        }
    </style>
</head>
<body>

    <div class="bg-glow"></div>

    <!-- Header -->
    <header>
        <div class="brand-mini">
            <img src="assets/images/logo.png" alt="Logo" onerror="this.style.display='none'">
            <span class="brand-title" data-i18n="brand">شیر و خورشید</span>
        </div>

        <div class="lang-selector">
            <button onclick="changeLanguage('fa')" class="lang-btn active">FA</button>
            <button onclick="changeLanguage('de')" class="lang-btn">DE</button>
            <button onclick="changeLanguage('en')" class="lang-btn">EN</button>
        </div>
    </header>

    <!-- Main Content -->
    <main>
        <div class="card">
            
            <div class="badge">
                <i class="fa-solid fa-circle"></i>
                <span data-i18n="status">وب‌سایت در دست ساخت است</span>
            </div>

            <h1 class="main-title" data-i18n="title">کانون شیر و خورشید</h1>
            <p class="subtitle" data-i18n="subtitle">خانه فرهنگ، زبان، تاریخ و هویت ایران</p>
            <p class="tagline" data-i18n="tagline">انجمن پادشاهی شیلد • وین، اتریش</p>

            <!-- Countdown Timer -->
            <div class="countdown">
                <div class="time-box">
                    <span id="days">00</span>
                    <label data-i18n="d">روز</label>
                </div>
                <div class="time-box">
                    <span id="hours">00</span>
                    <label data-i18n="h">ساعت</label>
                </div>
                <div class="time-box">
                    <span id="minutes">00</span>
                    <label data-i18n="m">دقیقه</label>
                </div>
                <div class="time-box">
                    <span id="seconds">00</span>
                    <label data-i18n="s">ثانیه</label>
                </div>
            </div>

            <!-- Email Notification -->
            <form class="notify-form" onsubmit="event.preventDefault(); alert('با تشکر! ایمیل شما ثبت شد.');">
                <input type="email" class="notify-input" placeholder="ایمیل خود را وارد کنید..." data-i18n-ph="ph" required>
                <button type="submit" class="notify-btn" data-i18n="btn">اطلاع‌رسانی</button>
            </form>

            <!-- Direct Contact -->
            <div class="contact-bar">
                <a href="mailto:info.lionandsun@gmail.com" class="contact-item">
                    <i class="fa-solid fa-envelope"></i> info.lionandsun@gmail.com
                </a>
                <a href="https://instagram.com/lionandsuncenter" target="_blank" class="contact-item">
                    <i class="fa-brands fa-instagram"></i> @lionandsuncenter
                </a>
                <a href="tel:+4368110320389" class="contact-item">
                    <i class="fa-solid fa-phone"></i> 0681 103 20 389
                </a>
            </div>

        </div>
    </main>

    <!-- Footer -->
    <footer>
        <p>Scheffenberggasse 5 / 1 / R02, 1180 Wien (Waldeckgasse)</p>
        <p data-i18n="footer_sub">انجمن پادشاهی شیلد • Schild Royal Association</p>
    </footer>

    <!-- Scripts -->
    <script>
        const translations = {
            fa: {
                brand: "شیر و خورشید",
                status: "وب‌سایت در دست ساخت است",
                title: "کانون شیر و خورشید",
                subtitle: "خانه فرهنگ، زبان، تاریخ و هویت ایران",
                tagline: "انجمن پادشاهی شیلد • وین، اتریش",
                d: "روز", h: "ساعت", m: "دقیقه", s: "ثانیه",
                ph: "ایمیل خود را وارد کنید...",
                btn: "اطلاع‌رسانی",
                footer_sub: "انجمن پادشاهی شیلد • Schild Royal Association"
            },
            de: {
                brand: "Löwe & Sonne",
                status: "Website befindet sich im Aufbau",
                title: "Zentrum Löwe & Sonne",
                subtitle: "Haus der iranischen Kultur, Sprache, Geschichte und Identität",
                tagline: "Königliche Vereinigung Schild • Wien, Österreich",
                d: "Tage", h: "Std", m: "Min", s: "Sek",
                ph: "E-Mail-Adresse eingeben...",
                btn: "Benachrichtigen",
                footer_sub: "Königliche Vereinigung Schild"
            },
            en: {
                brand: "Lion & Sun",
                status: "Website Under Construction",
                title: "Lion & Sun Center",
                subtitle: "House of Iranian Culture, Language, History, and Identity",
                tagline: "Schild Royal Association • Vienna, Austria",
                d: "Days", h: "Hours", m: "Mins", s: "Secs",
                ph: "Enter your email...",
                btn: "Notify Me",
                footer_sub: "Schild Royal Association"
            }
        };

        function changeLanguage(lang) {
            const isRTL = lang === 'fa';
            document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
            document.documentElement.setAttribute('lang', lang);

            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.innerText.toLowerCase() === lang) {
                    btn.classList.add('active');
                }
            });

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang][key]) el.innerText = translations[lang][key];
            });

            document.querySelectorAll('[data-i18n-ph]').forEach(el => {
                const key = el.getAttribute('data-i18n-ph');
                if (translations[lang][key]) el.placeholder = translations[lang][key];
            });

            localStorage.setItem('preferred_lang', lang);
        }

        // Simple Countdown Logic (Set target date 30 days from now)
        const targetDate = new Date().getTime() + (30 * 24 * 60 * 60 * 1000);

        setInterval(() => {
            const now = new Date().getTime();
            const diff = targetDate - now;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = days < 10 ? '0' + days : days;
            document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
            document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
            document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;
        }, 1000);

        document.addEventListener('DOMContentLoaded', () => {
            const savedLang = localStorage.getItem('preferred_lang') || 'fa';
            changeLanguage(savedLang);
        });
    </script>
</body>
</html>
