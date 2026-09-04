/**
 * main.js
 * ------------------------------------------------------------------
 * Developed by: Sadra Babai (github.com/xsadra)
 * ------------------------------------------------------------------
 * Small, dependency-free site controller. Responsibilities:
 *   1. Render text content for the active language (from i18n.js)
 *   2. Handle the language switcher (with localStorage persistence)
 *   3. Handle the mobile nav toggle
 * ------------------------------------------------------------------
 */

(function () {
  "use strict";

  const STORAGE_KEY = "lionandsun-lang-v3";
  const DEFAULT_LANG = "de";
  const SUPPORTED_LANGS = Object.keys(SITE_CONTENT);

  /** Resolve a dot-path like "hero.title" against an object. */
  function resolvePath(obj, path) {
    return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
  }

  function getSavedLang() {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
    } catch (e) {
      /* localStorage unavailable (e.g. private browsing) — ignore */
    }
    return null;
  }

  function saveLang(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore */
    }
  }

  /* ---------------------------------------------------------------- */
  /* Rendering                                                         */
  /* ---------------------------------------------------------------- */

  function decodeValue(val) {
    if (typeof val === "string" && val.startsWith("b64:")) {
      return atob(val.substring(4));
    }
    return val;
  }

  function renderStaticText(content) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = resolvePath(content, el.getAttribute("data-i18n"));
      if (value !== null) el.textContent = decodeValue(value);
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const [attr, path] = el.getAttribute("data-i18n-attr").split(":");
      const value = resolvePath(content, path);
      if (value !== null) el.setAttribute(attr, decodeValue(value));
    });
  }

  function renderMeta(content, lang) {
    document.title = content.meta.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute("content", content.meta.description);
    document.documentElement.lang = content.htmlLang;
    document.documentElement.dir = content.dir;
    document.body.classList.toggle("lang-latin", lang !== "fa");
  }

  function renderFooterLinks(content) {
    const emailLink = document.getElementById("emailLink");
    const instaLink = document.getElementById("instagramLink");
    const qrInstaLink = document.getElementById("qrInstagramLink");
    const waLink = document.getElementById("whatsappLink");
    const phoneLink = document.getElementById("phoneLink");
    const websiteLink = document.getElementById("websiteLink");
    const mobilePhoneLink = document.getElementById("mobilePhoneLink");
    const mobileWhatsappLink = document.getElementById("mobileWhatsappLink");

    const email = decodeValue(SITE_CONSTANTS.email);
    const whatsapp = decodeValue(SITE_CONSTANTS.whatsapp);
    const whatsappUrl = decodeValue(SITE_CONSTANTS.whatsappUrl);
    const phone = decodeValue(SITE_CONSTANTS.phone);
    const phoneUrl = decodeValue(SITE_CONSTANTS.phoneUrl);

    if (emailLink) {
      emailLink.href = `mailto:${email}`;
      const span = emailLink.querySelector("span");
      if (span) span.textContent = email;
    }
    if (instaLink) instaLink.href = SITE_CONSTANTS.instagramUrl;
    if (qrInstaLink) qrInstaLink.href = SITE_CONSTANTS.instagramUrl;
    if (waLink) {
      waLink.href = whatsappUrl;
      const span = waLink.querySelector("span");
      if (span) span.textContent = whatsapp;
    }
    if (phoneLink) {
      phoneLink.href = phoneUrl;
      const span = phoneLink.querySelector("span");
      if (span) span.textContent = phone;
    }
    if (websiteLink) websiteLink.href = SITE_CONSTANTS.schildWebsite || SITE_CONSTANTS.website;

    if (mobilePhoneLink) mobilePhoneLink.href = phoneUrl;
    if (mobileWhatsappLink) mobileWhatsappLink.href = whatsappUrl;
  }

  function setActiveLangButton(lang) {
    // Update the active state of buttons inside the dropdown list
    document.querySelectorAll(".lang-dropdown-list .lang-btn").forEach((btn) => {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    // Update the top-level active button text for mobile view
    const activeBtn = document.getElementById("activeLangBtn");
    if (activeBtn) {
      activeBtn.setAttribute("data-lang", lang);
      activeBtn.textContent = lang === "fa" ? "فا" : lang.toUpperCase();
    }

    // Close the dropdown container on change
    const switchContainer = document.getElementById("langSwitch");
    if (switchContainer) {
      switchContainer.classList.remove("is-open");
    }
  }

  function applyLanguage(lang) {
    const content = SITE_CONTENT[lang] || SITE_CONTENT[DEFAULT_LANG];
    renderMeta(content, lang);
    renderStaticText(content);
    renderFooterLinks(content);
    setActiveLangButton(lang);
    saveLang(lang);
  }

  /* ---------------------------------------------------------------- */
  /* Mobile nav                                                        */
  /* ---------------------------------------------------------------- */

  function initNavToggle() {
    const toggle = document.getElementById("navToggle");
    const nav = document.getElementById("main-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------------------------------------------------------- */
  /* Language switcher wiring                                          */
  /* ---------------------------------------------------------------- */

  function initLangSwitch() {
    // Handle standard list buttons click to switch language
    document.querySelectorAll(".lang-dropdown-list .lang-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent triggering the container click toggle
        const lang = btn.getAttribute("data-lang");
        if (lang) {
          applyLanguage(lang);
        }
      });
    });

    // Handle mobile dropdown container toggle behavior
    const switchContainer = document.getElementById("langSwitch");
    if (switchContainer) {
      switchContainer.addEventListener("click", (e) => {
        if (window.innerWidth <= 820) {
          const dropdownList = document.getElementById("langDropdownList");
          if (!dropdownList.contains(e.target) || e.target === switchContainer || e.target.id === "activeLangBtn") {
            switchContainer.classList.toggle("is-open");
          }
        }
      });

      // Close the dropdown list if clicked outside the language switch container
      document.addEventListener("click", (e) => {
        if (!switchContainer.contains(e.target)) {
          switchContainer.classList.remove("is-open");
        }
      });
    }
  }

  /* ---------------------------------------------------------------- */
  /* Keyboard scroll navigation                                        */
  /* ---------------------------------------------------------------- */

  function initKeyboardNav() {
    const selectors = [
      ".site-header",
      ".hero",
      "#about",
      ".section--spaces",
      "#activities",
      "#community",
      "#schedule",
      "#events",
      "#contact",
      ".site-footer"
    ];

    window.addEventListener("keydown", (e) => {
      const active = document.activeElement;
      if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA" || active.isContentEditable)) {
        return;
      }

      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        const elements = selectors.map(sel => document.querySelector(sel)).filter(Boolean);
        if (!elements.length) return;

        const buffer = 80; // offset buffer in px
        let targetIndex = -1;

        if (e.key === "ArrowDown") {
          for (let i = 0; i < elements.length; i++) {
            const rect = elements[i].getBoundingClientRect();
            if (rect.top > buffer) {
              targetIndex = i;
              break;
            }
          }
        } else if (e.key === "ArrowUp") {
          for (let i = elements.length - 1; i >= 0; i--) {
            const rect = elements[i].getBoundingClientRect();
            if (rect.top < -buffer) {
              targetIndex = i;
              break;
            }
          }
        }

        if (targetIndex !== -1) {
          e.preventDefault();
          elements[targetIndex].scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  }

  /* ---------------------------------------------------------------- */
  /* Scrollspy link highlighting                                       */
  /* ---------------------------------------------------------------- */

  function initScrollspy() {
    const sectionIds = ["top", "about", "activities", "schedule", "events", "contact"];
    const navLinks = document.querySelectorAll(".main-nav a");

    window.addEventListener("scroll", () => {
      let activeId = "top";
      const buffer = 150;

      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= buffer) {
            activeId = id;
          }
        }
      });

      navLinks.forEach(link => {
        const href = link.getAttribute("href");
        const isActive = href === `#${activeId}`;
        link.classList.toggle("is-active", isActive);
      });
    });
  }

  /* ---------------------------------------------------------------- */
  /* Back to Top floating button                                      */
  /* ---------------------------------------------------------------- */

  function initBackToTop() {
    const btn = document.getElementById("backToTop");
    if (!btn) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        btn.classList.add("is-visible");
      } else {
        btn.classList.remove("is-visible");
      }
    });

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------------------------------------------------------------- */
  /* Sidebar Dots dynamic generation                                  */
  /* ---------------------------------------------------------------- */

  function initSidebarDots() {
    const dotsContainer = document.getElementById("sidebarDots");
    if (!dotsContainer) return;

    const sections = [
      { id: "top", label: "Home", i18nKey: "nav.home" },
      { id: "about", label: "About Us", i18nKey: "nav.about" },
      { id: "spaces", label: "Our Spaces", i18nKey: "headings.spaces" },
      { id: "activities", label: "Activities", i18nKey: "nav.activities" },
      { id: "community", label: "Community", i18nKey: "headings.culture" },
      { id: "schedule", label: "Schedule", i18nKey: "nav.schedule" },
      { id: "events", label: "Events", i18nKey: "nav.events" },
      { id: "contact", label: "Contact", i18nKey: "nav.contact" }
    ];

    sections.forEach(sec => {
      const dot = document.createElement("a");
      dot.className = "dot-item";
      dot.href = `#${sec.id}`;
      dot.setAttribute("aria-label", sec.label);
      dot.setAttribute("data-id", sec.id);

      const tooltip = document.createElement("span");
      tooltip.className = "dot-tooltip";
      tooltip.setAttribute("data-i18n", sec.i18nKey);
      tooltip.textContent = sec.label;

      dot.appendChild(tooltip);
      dotsContainer.appendChild(dot);
    });

    window.addEventListener("scroll", () => {
      let activeId = "top";
      const buffer = 180;

      sections.forEach(sec => {
        const el = document.getElementById(sec.id) || document.querySelector(`.section--${sec.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= buffer) {
            activeId = sec.id;
          }
        }
      });

      document.querySelectorAll(".dot-item").forEach(dot => {
        const isActive = dot.getAttribute("data-id") === activeId;
        dot.classList.toggle("is-active", isActive);
      });
    });
  }

  /* ---------------------------------------------------------------- */
  /* Reading Progress Bar                                             */
  /* ---------------------------------------------------------------- */

  function initProgressBar() {
    const bar = document.getElementById("progressBar");
    if (!bar) return;

    window.addEventListener("scroll", () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        const progress = (scrollTop / scrollHeight) * 100;
        bar.style.width = `${progress}%`;
      }
    });
  }

  /* ---------------------------------------------------------------- */
  /* Sticky Header with scroll detection                              */
  /* ---------------------------------------------------------------- */

  function initStickyHeader() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    });
  }

  /* ---------------------------------------------------------------- */
  /* Scroll Reveal Animations                                         */
  /* ---------------------------------------------------------------- */

  function initScrollReveal() {
    const revealElements = document.querySelectorAll(".scroll-reveal");
    if (!revealElements.length) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -12% 0px", // triggers slightly before entering viewport
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
          observer.unobserve(entry.target); // trigger animation only once
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => observer.observe(el));
  }

  /* ---------------------------------------------------------------- */
  /* Dynamic VCF Contact Generation                                   */
  /* ---------------------------------------------------------------- */

  function initSaveContact() {
    const saveBtn = document.getElementById("saveContactBtn");
    if (!saveBtn) return;

    saveBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const email = decodeValue(SITE_CONSTANTS.email);
      const phoneRaw = decodeValue(SITE_CONSTANTS.phone).replace(/\s+/g, "");
      const waRaw = decodeValue(SITE_CONSTANTS.whatsapp).replace(/\s+/g, "");

      const vcard = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        "FN:Haus des Löwen und der Sonne | خانه شیر و خورشید",
        "ORG:Haus des Löwen und der Sonne | خانه شیر و خورشید",
        "N:;Haus des Löwen und der Sonne | خانه شیر و خورشید;;;",
        `EMAIL;TYPE=INTERNET,WORK:${email}`,
        `TEL;TYPE=CELL,VOICE:${phoneRaw}`,
        `TEL;TYPE=WORK,VOICE:${waRaw}`,
        "ADR;TYPE=WORK:;;Scherffenberggasse 5/1/R02;Wien;;1180;Austria",
        `URL:${SITE_CONSTANTS.website}`,
        "X-ABShowAs:COMPANY",
        "END:VCARD"
      ].join("\r\n");

      const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "lion_and_sun_center.vcf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 2000);
    });
  }

  /* ---------------------------------------------------------------- */
  /* Init                                                               */
  /* ---------------------------------------------------------------- */

  document.addEventListener("DOMContentLoaded", () => {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    initSidebarDots();

    const initialLang = getSavedLang() || DEFAULT_LANG;
    applyLanguage(initialLang);

    initLangSwitch();
    initNavToggle();
    initKeyboardNav();
    initScrollspy();
    initBackToTop();
    initProgressBar();
    initStickyHeader();
    initScrollReveal();
    initSaveContact();
  });
})();
