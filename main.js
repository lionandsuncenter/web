/**
 * main.js
 * ------------------------------------------------------------------
 * Small, dependency-free site controller. Responsibilities:
 *   1. Render text content for the active language (from i18n.js)
 *   2. Build the activities grid and gallery grid from data
 *   3. Handle the language switcher (with localStorage persistence)
 *   4. Handle the mobile nav toggle
 *   5. Handle the gallery lightbox
 * ------------------------------------------------------------------
 */

(function () {
  "use strict";

  const STORAGE_KEY = "lionandsun-lang";
  const DEFAULT_LANG = "fa";
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

  function renderStaticText(content) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = resolvePath(content, el.getAttribute("data-i18n"));
      if (value !== null) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const [attr, path] = el.getAttribute("data-i18n-attr").split(":");
      const value = resolvePath(content, path);
      if (value !== null) el.setAttribute(attr, value);
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

  function renderActivities(content) {
    const grid = document.getElementById("activitiesGrid");
    if (!grid) return;
    grid.innerHTML = "";
    content.activities.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="activity-icon"><i class="fa-solid ${item.icon}" aria-hidden="true"></i></span>
        <span class="activity-text">${item.text}</span>
      `;
      grid.appendChild(li);
    });
  }

  function renderGallery(content) {
    const grid = document.getElementById("galleryGrid");
    if (!grid) return;
    const images = [
      "assets/img/gallery-1.jpg",
      "assets/img/gallery-2.jpg",
      "assets/img/gallery-3.jpg",
      "assets/img/gallery-4.jpg",
      "assets/img/gallery-5.jpg"
    ];
    grid.innerHTML = "";
    images.forEach((src, i) => {
      const caption = content.gallery.captions[i] || "";
      const fig = document.createElement("figure");
      fig.className = "gallery-item";
      fig.tabIndex = 0;
      fig.setAttribute("data-src", src);
      fig.setAttribute("data-caption", caption);
      fig.innerHTML = `
        <img src="${src}" alt="${caption}" loading="lazy" />
        <figcaption>${caption}</figcaption>
      `;
      grid.appendChild(fig);
    });
  }

  function renderFooterLinks(content) {
    const emailLink = document.getElementById("emailLink");
    const instaLink = document.getElementById("instagramLink");
    const waLink = document.getElementById("whatsappLink");
    const phoneLink = document.getElementById("phoneLink");
    const websiteLink = document.getElementById("websiteLink");

    if (emailLink) emailLink.href = `mailto:${SITE_CONSTANTS.email}`;
    if (instaLink) instaLink.href = SITE_CONSTANTS.instagramUrl;
    if (waLink) {
      waLink.href = SITE_CONSTANTS.whatsappUrl;
      waLink.querySelector("span").textContent = SITE_CONSTANTS.whatsapp;
    }
    if (phoneLink) {
      phoneLink.href = SITE_CONSTANTS.phoneUrl;
      phoneLink.querySelector("span").textContent = SITE_CONSTANTS.phone;
    }
    if (websiteLink) websiteLink.href = SITE_CONSTANTS.website;
  }

  function setActiveLangButton(lang) {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });
  }

  function applyLanguage(lang) {
    const content = SITE_CONTENT[lang] || SITE_CONTENT[DEFAULT_LANG];
    renderMeta(content, lang);
    renderStaticText(content);
    renderActivities(content);
    renderGallery(content);
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
  /* Lightbox                                                          */
  /* ---------------------------------------------------------------- */

  function initLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const closeBtn = document.getElementById("lightboxClose");
    if (!lightbox || !lightboxImg || !closeBtn) return;

    let lastFocused = null;

    function open(src, caption) {
      lastFocused = document.activeElement;
      lightboxImg.src = src;
      lightboxImg.alt = caption;
      lightboxCaption.textContent = caption;
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      closeBtn.focus();
      document.body.style.overflow = "hidden";
    }

    function close() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      lightboxImg.src = "";
      document.body.style.overflow = "";
      if (lastFocused) lastFocused.focus();
    }

    document.addEventListener("click", (e) => {
      const item = e.target.closest(".gallery-item");
      if (!item) return;
      open(item.getAttribute("data-src"), item.getAttribute("data-caption"));
    });

    document.addEventListener("keydown", (e) => {
      const item = document.activeElement.closest && document.activeElement.closest(".gallery-item");
      if (item && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        open(item.getAttribute("data-src"), item.getAttribute("data-caption"));
      }
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) close();
    });

    closeBtn.addEventListener("click", close);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) close();
    });
  }

  /* ---------------------------------------------------------------- */
  /* Language switcher wiring                                          */
  /* ---------------------------------------------------------------- */

  function initLangSwitch() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        if (lang) applyLanguage(lang);
      });
    });
  }

  /* ---------------------------------------------------------------- */
  /* Init                                                               */
  /* ---------------------------------------------------------------- */

  document.addEventListener("DOMContentLoaded", () => {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const initialLang = getSavedLang() || DEFAULT_LANG;
    applyLanguage(initialLang);

    initLangSwitch();
    initNavToggle();
    initLightbox();
  });
})();
