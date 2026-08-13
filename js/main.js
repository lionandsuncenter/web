function changeLanguage(lang) {
    const isRTL = lang === 'fa';
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.value = translations[lang][key];
            } else {
                el.innerText = translations[lang][key];
            }
        }
    });

    localStorage.setItem('preferred_lang', lang);
}

// Restore user language selection on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred_lang') || 'fa';
    document.getElementById('languageSelect').value = savedLang;
    changeLanguage(savedLang);
});
