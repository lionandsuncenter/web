/**
 * Popup Announcement Module
 * Automatically loads and displays a responsive 2-slide carousel modal (Video & Image).
 * Supports touch & pointer swipe across media and text, sound toggle, auto-pausing,
 * multilingual markdown with RTL/LTR support, and persistent FAB trigger.
 */
(() => {
  "use strict";

  const VIDEO_CANDIDATES = [
    "popup/video.mp4",
    "popup/popup.mp4",
    "popup/video.webm",
    "popup/popup.webm"
  ];

  const IMAGE_CANDIDATES = [
    "popup/image.jpg",
    "popup/image.jpeg",
    "popup/image.png",
    "popup/image.webp",
    "popup/popup.jpg",
    "popup/popup.jpeg",
    "popup/popup.png",
    "popup/popup.webp"
  ];

  /**
   * Event Expiration Date (ISO 8601)
   * The popup is automatically suppressed after this date/time.
   * Mehregan Event: October 11, 2026 at 23:59:59 (Vienna CEST / UTC+2).
   * Set to null to disable expiration.
   */
  const EXPIRATION_DATE = new Date("2026-10-11T23:59:59+02:00");

  function isExpired() {
    if (!EXPIRATION_DATE) return false;
    return Date.now() > EXPIRATION_DATE.getTime();
  }

  const FAB_TOOLTIPS = {
    fa: "اطلاعیه ویژه",
    de: "Mitteilung",
    en: "Announcement"
  };

  const I18N_LABELS = {
    fa: {
      videoBadge: "ویدیو",
      imageBadge: "تصویر",
      closeLabel: "بستن پنجره",
      prevLabel: "اسلاید قبلی",
      nextLabel: "اسلاید بعدی",
      unmuteLabel: "وصل صدا",
      muteLabel: "قطع صدا"
    },
    de: {
      videoBadge: "Video",
      imageBadge: "Bild",
      closeLabel: "Schließen",
      prevLabel: "Vorherige Folie",
      nextLabel: "Nächste Folie",
      unmuteLabel: "Ton einschalten",
      muteLabel: "Stummschalten"
    },
    en: {
      videoBadge: "Video",
      imageBadge: "Photo",
      closeLabel: "Close popup",
      prevLabel: "Previous slide",
      nextLabel: "Next slide",
      unmuteLabel: "Unmute audio",
      muteLabel: "Mute audio"
    }
  };

  /**
   * Probes whether an image URL exists, can be loaded, and detects its aspect ratio.
   */
  function probeImage(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const width = img.naturalWidth || 1080;
        const height = img.naturalHeight || 1547;
        resolve({
          url,
          width,
          height,
          isPortrait: height > width
        });
      };
      img.onerror = () => resolve(null);
      img.src = `${url}?v=${Date.now()}`;
    });
  }

  /**
   * Probes whether a video URL exists, can be decoded, and detects its aspect ratio.
   */
  async function probeVideo(url) {
    return new Promise((resolve) => {
      const video = document.createElement("video");
      video.preload = "metadata";
      let finished = false;

      const finish = (result) => {
        if (!finished) {
          finished = true;
          video.removeAttribute("src");
          video.load();
          resolve(result);
        }
      };

      video.onloadedmetadata = () => {
        const width = video.videoWidth || 720;
        const height = video.videoHeight || 1280;
        finish({
          url,
          width,
          height,
          isPortrait: height > width
        });
      };

      video.onerror = () => finish(null);
      setTimeout(() => finish(null), 3000);

      video.src = `${url}?v=${Date.now()}`;
    });
  }

  /**
   * Detects available media and returns ordered slide configs with orientation data:
   * Slide 1: Video (if present)
   * Slide 2: Image (if present)
   */
  async function detectMedia() {
    let videoData = null;
    for (const vUrl of VIDEO_CANDIDATES) {
      const found = await probeVideo(vUrl);
      if (found) {
        videoData = found;
        break;
      }
    }

    let imageData = null;
    for (const iUrl of IMAGE_CANDIDATES) {
      const found = await probeImage(iUrl);
      if (found) {
        imageData = found;
        break;
      }
    }

    const slides = [];
    if (videoData) {
      slides.push({
        type: "video",
        url: videoData.url,
        isPortrait: videoData.isPortrait,
        width: videoData.width,
        height: videoData.height
      });
    }
    if (imageData) {
      slides.push({
        type: "image",
        url: imageData.url,
        isPortrait: imageData.isPortrait,
        width: imageData.width,
        height: imageData.height
      });
    }

    return slides;
  }

  /**
   * Fetches localized markdown text according to current language with fallback.
   */
  async function fetchMarkdownText(lang) {
    const candidates = [
      `popup/popup.${lang}.md`,
      `popup/text.${lang}.md`,
      "popup/popup.md",
      "popup/text.md"
    ];

    for (const url of candidates) {
      try {
        const res = await fetch(`${url}?v=${Date.now()}`);
        if (res.ok) {
          const text = await res.text();
          if (text && text.trim().length > 0) return text.trim();
        }
      } catch (err) {
        // Proceed to next candidate
      }
    }
    return "";
  }

  /**
   * Splits markdown by slide delimiter:
   * Supports `<!-- slide -->`, `<!-- slide 1 -->`, `---slide---`, `===slide===`,
   * or standard markdown horizontal rules (`---`, `***`, `___`), while being
   * fully resilient to RTL marks (\u200E, \u200F), zero-width characters, and trailing whitespace.
   */
  function splitMarkdownSlides(rawMd) {
    if (!rawMd || typeof rawMd !== "string") return [];

    const normalized = rawMd.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

    const delimiterPattern = /(?:^|\n)[\s\u200B-\u200F\uFEFF\u202A-\u202E]*(?:<!--[\s\u200B-\u200F\uFEFF\u202A-\u202E]*slide(?:\s*\d+)?[\s\u200B-\u200F\uFEFF\u202A-\u202E]*-->|---slide---|===slide===|={3,}|(?:-[ \t\u00A0\u200B-\u200F]*){3,}|(?:\*[ \t\u00A0\u200B-\u200F]*){3,}|(?:_[ \t\u00A0\u200B-\u200F]*){3,})[\s\u200B-\u200F\uFEFF\u202A-\u202E]*(?:\n|$)/i;

    const parts = normalized
      .split(delimiterPattern)
      .map((part) => part.trim())
      .filter((part) => part.length > 0);

    return parts.length > 0 ? parts : [normalized.trim()];
  }

  /**
   * Lightweight, safe Markdown to HTML parser.
   */
  function parseMarkdown(md) {
    if (!md) return "";

    let text = md.replace(/\r\n/g, "\n");
    text = text.replace(/^(#{1,4}\s+[^\n]+)/gm, "\n\n$1\n\n");

    // Escape raw HTML characters to prevent XSS
    let html = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Headings
    html = html.replace(/^#### (.*?)$/gm, "<h4>$1</h4>");
    html = html.replace(/^### (.*?)$/gm, "<h3>$1</h3>");
    html = html.replace(/^## (.*?)$/gm, "<h2>$1</h2>");
    html = html.replace(/^# (.*?)$/gm, "<h1>$1</h1>");

    // Bold and Italic
    html = html.replace(/\*\*\*(.*?)\*\*\*/g, "<strong><em>$1</em></strong>");
    html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/__(.*?)__/g, "<strong>$1</strong>");
    html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
    html = html.replace(/_(.*?)_/g, "<em>$1</em>");

    // Links: [text](url) - supports https, http, mailto, tel, and local anchors
    html = html.replace(
      /\[(.*?)\]\(((?:https?:\/\/|mailto:|tel:|#|\/)[^\s)]+)\)/g,
      (match, label, url) => {
        const isExternal = url.startsWith("http");
        const targetAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
        return `<a href="${url}"${targetAttr} class="popup-link">${label}</a>`;
      }
    );

    // Unordered lists
    html = html.replace(/(?:^[ \t]*[-*][ \t]+(.*?)(?:\r?\n|$))+/gm, (match) => {
      const items = match
        .trim()
        .split(/\r?\n/)
        .map((line) => line.replace(/^[ \t]*[-*][ \t]+/, "").trim())
        .filter(Boolean)
        .map((item) => `<li>${item}</li>`)
        .join("");
      return `<ul>${items}</ul>`;
    });

    // Paragraphs: split by double newlines
    const blocks = html.split(/\n{2,}/);
    html = blocks
      .map((block) => {
        const trimmed = block.trim();
        if (!trimmed) return "";
        if (/^<(h[1-4]|ul|ol|li|blockquote)/i.test(trimmed)) {
          return trimmed;
        }
        return `<p>${trimmed.replace(/\n/g, "<br />")}</p>`;
      })
      .filter(Boolean)
      .join("");

    return html;
  }

  /**
   * Main Initialization
   */
  async function initPopup() {
    // 1. Expiration check: suppress completely if past the event deadline
    if (isExpired()) {
      return;
    }

    const slides = await detectMedia();
    if (!slides || slides.length === 0) {
      // No media file found: silently ignore popup
      return;
    }

    let currentLang = document.documentElement.lang || "fa";
    let isRtl = currentLang === "fa" || document.documentElement.dir === "rtl";

    let rawMarkdown = await fetchMarkdownText(currentLang);
    let slideTextParts = splitMarkdownSlides(rawMarkdown);

    // Build Backdrop
    const backdrop = document.createElement("div");
    backdrop.className = "popup-backdrop";
    backdrop.id = "announcementPopup";
    backdrop.setAttribute("role", "dialog");
    backdrop.setAttribute("aria-modal", "true");
    backdrop.setAttribute("aria-label", "Announcement");

    // Build Modal
    const modal = document.createElement("div");
    modal.className = "popup-modal";
    if (isRtl) modal.setAttribute("dir", "rtl");

    // Close Button
    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "popup-close-btn";
    closeBtn.id = "popupCloseBtn";
    const labels = I18N_LABELS[currentLang] || I18N_LABELS.fa;
    closeBtn.setAttribute("aria-label", labels.closeLabel);
    closeBtn.innerHTML = '<i class="fa-solid fa-xmark" aria-hidden="true"></i>';

    // Carousel Viewport & Track
    const carouselContainer = document.createElement("div");
    carouselContainer.className = "popup-carousel-container";

    const carouselTrack = document.createElement("div");
    carouselTrack.className = "popup-carousel-track";

    // Build Slide Elements
    const slideElements = [];
    let videoElement = null;
    let soundToggleBtn = null;

    slides.forEach((slide, idx) => {
      const slideEl = document.createElement("div");
      slideEl.className = `popup-slide ${slide.isPortrait ? "is-portrait" : "is-landscape"}`;
      slideEl.setAttribute("data-slide-index", String(idx));

      // Media Wrapper
      const mediaWrap = document.createElement("div");
      mediaWrap.className = "popup-media-wrap";

      // Badge (Video / Image)
      const badge = document.createElement("span");
      badge.className = "popup-media-badge";
      badge.innerHTML =
        slide.type === "video"
          ? `<i class="fa-solid fa-circle-play" aria-hidden="true"></i> <span>${labels.videoBadge}</span>`
          : `<i class="fa-solid fa-image" aria-hidden="true"></i> <span>${labels.imageBadge}</span>`;
      mediaWrap.appendChild(badge);

      if (slide.type === "video") {
        // Video Player
        const video = document.createElement("video");
        video.className = "popup-video";
        video.src = slide.url;
        video.setAttribute("playsinline", "");
        video.setAttribute("webkit-playsinline", "");
        video.loop = true;
        video.muted = false; // Enabled sound by default (unmuted)
        video.removeAttribute("muted");
        video.volume = 1.0;
        video.preload = "auto";
        videoElement = video;

        // Dynamic aspect ratio check on video metadata
        video.addEventListener("loadedmetadata", () => {
          const isP = video.videoHeight > video.videoWidth;
          slide.isPortrait = isP;
          slideEl.classList.toggle("is-portrait", isP);
          slideEl.classList.toggle("is-landscape", !isP);
          if (idx === activeIndex) updateModalOrientation();
        });

        // Sound Toggle Button
        const soundBtn = document.createElement("button");
        soundBtn.type = "button";
        soundBtn.className = "popup-sound-btn is-unmuted";
        soundBtn.setAttribute("aria-label", labels.muteLabel);
        soundBtn.title = labels.muteLabel;
        soundBtn.innerHTML = '<i class="fa-solid fa-volume-high" aria-hidden="true"></i>';

        soundBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          video.muted = !video.muted;
          updateSoundButtonUI();
        });

        soundToggleBtn = soundBtn;

        // Play / Pause pulse overlay
        const playOverlay = document.createElement("div");
        playOverlay.className = "popup-play-overlay";
        playOverlay.innerHTML = '<div class="popup-play-overlay-icon"><i class="fa-solid fa-play"></i></div>';

        video.addEventListener("click", () => {
          if (video.paused) {
            playVideoWithAudioPreference();
            playOverlay.querySelector("i").className = "fa-solid fa-play";
          } else {
            video.pause();
            playOverlay.querySelector("i").className = "fa-solid fa-pause";
          }
          playOverlay.classList.add("is-pulsing");
          setTimeout(() => playOverlay.classList.remove("is-pulsing"), 400);
        });

        mediaWrap.appendChild(video);
        mediaWrap.appendChild(soundBtn);
        mediaWrap.appendChild(playOverlay);
      } else {
        // Static Image
        const img = document.createElement("img");
        img.className = "popup-image";
        img.src = slide.url;
        img.alt = "Lion and Sun Announcement";
        img.loading = "eager";

        // Dynamic aspect ratio check on image load
        img.addEventListener("load", () => {
          const isP = img.naturalHeight > img.naturalWidth;
          slide.isPortrait = isP;
          slideEl.classList.toggle("is-portrait", isP);
          slideEl.classList.toggle("is-landscape", !isP);
          if (idx === activeIndex) updateModalOrientation();
        });

        mediaWrap.appendChild(img);
      }

      slideEl.appendChild(mediaWrap);

      // Text Section for this slide
      const textWrap = document.createElement("div");
      textWrap.className = "popup-text-wrap";
      textWrap.setAttribute("dir", isRtl ? "rtl" : "ltr");

      const slideText =
        slideTextParts[idx] !== undefined
          ? slideTextParts[idx]
          : slideTextParts[0] || "";

      if (slideText) {
        textWrap.innerHTML = parseMarkdown(slideText);
      }
      slideEl.appendChild(textWrap);

      carouselTrack.appendChild(slideEl);
      slideElements.push({ slideEl, textWrap, badge, type: slide.type });
    });

    carouselContainer.appendChild(carouselTrack);

    // Multi-Slide Controls (Arrows & Indicators)
    let prevArrow = null;
    let nextArrow = null;
    let dotsContainer = null;
    const dotButtons = [];

    if (slides.length > 1) {
      // Prev Arrow
      prevArrow = document.createElement("button");
      prevArrow.type = "button";
      prevArrow.className = "popup-arrow popup-arrow-prev";
      prevArrow.setAttribute("aria-label", labels.prevLabel);
      prevArrow.innerHTML = '<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>';

      // Next Arrow
      nextArrow = document.createElement("button");
      nextArrow.type = "button";
      nextArrow.className = "popup-arrow popup-arrow-next";
      nextArrow.setAttribute("aria-label", labels.nextLabel);
      nextArrow.innerHTML = '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>';

      // Indicators Container
      dotsContainer = document.createElement("div");
      dotsContainer.className = "popup-indicators";
      dotsContainer.setAttribute("role", "tablist");
      dotsContainer.setAttribute("aria-label", "Slide indicators");

      slides.forEach((_, dIdx) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = `popup-dot ${dIdx === 0 ? "is-active" : ""}`;
        dot.setAttribute("role", "tab");
        dot.setAttribute("aria-selected", dIdx === 0 ? "true" : "false");
        dot.setAttribute("aria-label", `Slide ${dIdx + 1}`);
        dot.addEventListener("click", (e) => {
          e.stopPropagation();
          goToSlide(dIdx);
        });
        dotsContainer.appendChild(dot);
        dotButtons.push(dot);
      });

      carouselContainer.appendChild(prevArrow);
      carouselContainer.appendChild(nextArrow);
      carouselContainer.appendChild(dotsContainer);
    }

    modal.appendChild(closeBtn);
    modal.appendChild(carouselContainer);
    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);

    // Floating Action Button (FAB)
    const fab = document.createElement("button");
    fab.type = "button";
    fab.className = "popup-fab";
    fab.id = "popupFab";
    fab.setAttribute("aria-label", "Open announcement");
    fab.innerHTML = `
      <i class="fa-solid fa-bullhorn" aria-hidden="true"></i>
      <span class="popup-fab-badge" aria-hidden="true"></span>
      <span class="popup-fab-tooltip" id="popupFabTooltip">${FAB_TOOLTIPS[currentLang] || FAB_TOOLTIPS.fa}</span>
    `;
    document.body.appendChild(fab);

    // Carousel State & Navigation
    let activeIndex = 0;
    let isOpen = false;

    function updateCarouselUI() {
      carouselTrack.style.transform = `translateX(-${activeIndex * 100}%)`;

      // Update indicator dots
      dotButtons.forEach((dot, idx) => {
        const isActive = idx === activeIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      // Update arrows
      if (prevArrow && nextArrow) {
        prevArrow.classList.toggle("is-disabled", activeIndex === 0);
        nextArrow.classList.toggle("is-disabled", activeIndex === slides.length - 1);
      }

      // Handle video play / pause on slide transition
      if (videoElement) {
        const videoIndex = slides.findIndex((s) => s.type === "video");
        if (activeIndex === videoIndex && isOpen) {
          playVideoWithAudioPreference();
        } else {
          videoElement.pause();
        }
      }
    }

    function updateSoundButtonUI() {
      if (!soundToggleBtn || !videoElement) return;
      const curLabels = I18N_LABELS[document.documentElement.lang || "fa"] || I18N_LABELS.fa;
      if (videoElement.muted) {
        soundToggleBtn.innerHTML = '<i class="fa-solid fa-volume-xmark" aria-hidden="true"></i>';
        soundToggleBtn.setAttribute("aria-label", curLabels.unmuteLabel);
        soundToggleBtn.title = curLabels.unmuteLabel;
        soundToggleBtn.classList.remove("is-unmuted");
      } else {
        soundToggleBtn.innerHTML = '<i class="fa-solid fa-volume-high" aria-hidden="true"></i>';
        soundToggleBtn.setAttribute("aria-label", curLabels.muteLabel);
        soundToggleBtn.title = curLabels.muteLabel;
        soundToggleBtn.classList.add("is-unmuted");
      }
    }

    async function playVideoWithAudioPreference() {
      if (!videoElement) return;

      // 1. Unmuted playback by default
      videoElement.muted = false;
      videoElement.removeAttribute("muted");
      try {
        await videoElement.play();
        updateSoundButtonUI();
      } catch (err) {
        // 2. If blocked by browser autoplay policy (NotAllowedError), play muted as fallback
        videoElement.muted = true;
        updateSoundButtonUI();
        try {
          await videoElement.play();
        } catch (silentErr) {
          // Playback halted
        }

        // 3. Unmute automatically on the very first user interaction anywhere on the window
        const interactionEvents = ["click", "touchstart", "pointerdown", "keydown"];
        const activateSoundOnInteraction = () => {
          if (videoElement) {
            videoElement.muted = false;
            videoElement.removeAttribute("muted");
            videoElement.play().catch(() => {});
            updateSoundButtonUI();
          }
          interactionEvents.forEach((evt) => {
            window.removeEventListener(evt, activateSoundOnInteraction, true);
          });
        };

        interactionEvents.forEach((evt) => {
          window.addEventListener(evt, activateSoundOnInteraction, { capture: true, once: true });
        });
      }
    }

    function updateModalOrientation() {
      const activeSlide = slides[activeIndex];
      const isPortrait = activeSlide ? Boolean(activeSlide.isPortrait) : false;
      modal.classList.toggle("is-portrait-layout", isPortrait);
      modal.classList.toggle("is-landscape-layout", !isPortrait);
    }

    function goToSlide(index) {
      if (index < 0 || index >= slides.length) return;
      activeIndex = index;
      carouselTrack.style.transition = "transform 0.38s cubic-bezier(0.16, 1, 0.3, 1)";
      updateModalOrientation();
      updateCarouselUI();
    }

    if (prevArrow) {
      prevArrow.addEventListener("click", (e) => {
        e.stopPropagation();
        goToSlide(activeIndex - 1);
      });
    }

    if (nextArrow) {
      nextArrow.addEventListener("click", (e) => {
        e.stopPropagation();
        goToSlide(activeIndex + 1);
      });
    }

    // Modal Lifecycle
    function openPopup() {
      isOpen = true;
      backdrop.classList.add("is-visible");
      document.body.classList.add("popup-open");
      fab.classList.add("is-active");
      closeBtn.focus();

      // Play video with audio if currently on video slide
      if (videoElement && slides[activeIndex] && slides[activeIndex].type === "video") {
        playVideoWithAudioPreference();
      }
    }

    function closePopup() {
      isOpen = false;
      backdrop.classList.remove("is-visible");
      document.body.classList.remove("popup-open");
      fab.classList.remove("is-active");

      // Auto-pause video on modal dismissal
      if (videoElement) {
        videoElement.pause();
      }
      fab.focus();
    }

    // Dismissal Event Handlers
    closeBtn.addEventListener("click", closePopup);

    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closePopup();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        closePopup();
      } else if (e.key === "ArrowLeft") {
        if (slides.length > 1) goToSlide(activeIndex - 1);
      } else if (e.key === "ArrowRight") {
        if (slides.length > 1) goToSlide(activeIndex + 1);
      }
    });

    fab.addEventListener("click", () => {
      if (isOpen) {
        closePopup();
      } else {
        openPopup();
      }
    });

    // Touch & Pointer Swipe Support across BOTH media and text
    let startX = 0;
    let startY = 0;
    let deltaX = 0;
    let deltaY = 0;
    let isTracking = false;
    let isHorizontalSwipe = false;
    let startTime = 0;

    function handleDragStart(x, y) {
      if (slides.length <= 1) return;
      startX = x;
      startY = y;
      deltaX = 0;
      deltaY = 0;
      isTracking = true;
      isHorizontalSwipe = false;
      startTime = Date.now();
    }

    function handleDragMove(x, y, cancelableEvent) {
      if (!isTracking || slides.length <= 1) return;
      deltaX = x - startX;
      deltaY = y - startY;

      // Disambiguate horizontal swipe from vertical scrolling in text area
      if (!isHorizontalSwipe) {
        if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 8) {
          // Native vertical scroll: abandon carousel tracking
          isTracking = false;
          return;
        }
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 8) {
          isHorizontalSwipe = true;
        }
      }

      if (isHorizontalSwipe) {
        if (cancelableEvent && cancelableEvent.cancelable) {
          cancelableEvent.preventDefault();
        }

        // Apply resistance at carousel ends
        let dampedDelta = deltaX;
        if ((activeIndex === 0 && deltaX > 0) || (activeIndex === slides.length - 1 && deltaX < 0)) {
          dampedDelta = deltaX * 0.28;
        }

        carouselTrack.style.transition = "none";
        carouselTrack.style.transform = `translateX(calc(-${activeIndex * 100}% + ${dampedDelta}px))`;
      }
    }

    function handleDragEnd() {
      if (!isTracking) return;
      isTracking = false;

      if (isHorizontalSwipe) {
        isHorizontalSwipe = false;
        carouselTrack.style.transition = "transform 0.38s cubic-bezier(0.16, 1, 0.3, 1)";

        const elapsed = Math.max(1, Date.now() - startTime);
        const velocity = Math.abs(deltaX) / elapsed;
        const threshold = 45;

        if (deltaX < -threshold || (deltaX < -20 && velocity > 0.35)) {
          goToSlide(activeIndex + 1);
        } else if (deltaX > threshold || (deltaX > 20 && velocity > 0.35)) {
          goToSlide(activeIndex - 1);
        } else {
          goToSlide(activeIndex); // Snap back to current slide
        }
      }
    }

    // Attach Touch Event Listeners to the entire carousel container (media + text)
    carouselContainer.addEventListener(
      "touchstart",
      (e) => {
        if (e.touches && e.touches.length === 1) {
          handleDragStart(e.touches[0].clientX, e.touches[0].clientY);
        }
      },
      { passive: true }
    );

    carouselContainer.addEventListener(
      "touchmove",
      (e) => {
        if (e.touches && e.touches.length === 1) {
          handleDragMove(e.touches[0].clientX, e.touches[0].clientY, e);
        }
      },
      { passive: false }
    );

    carouselContainer.addEventListener("touchend", handleDragEnd);
    carouselContainer.addEventListener("touchcancel", handleDragEnd);

    // Reactive Language & Direction Observer
    const langObserver = new MutationObserver(async (mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "attributes" && (mutation.attributeName === "lang" || mutation.attributeName === "dir")) {
          const newLang = document.documentElement.lang || "fa";
          const newRtl = newLang === "fa" || document.documentElement.dir === "rtl";
          const curLabels = I18N_LABELS[newLang] || I18N_LABELS.fa;

          // Update Tooltip & Labels
          const tooltip = document.getElementById("popupFabTooltip");
          if (tooltip) {
            tooltip.textContent = FAB_TOOLTIPS[newLang] || FAB_TOOLTIPS.fa;
          }
          closeBtn.setAttribute("aria-label", curLabels.closeLabel);

          if (prevArrow) prevArrow.setAttribute("aria-label", curLabels.prevLabel);
          if (nextArrow) nextArrow.setAttribute("aria-label", curLabels.nextLabel);
          if (soundToggleBtn && videoElement) {
            const soundText = videoElement.muted ? curLabels.unmuteLabel : curLabels.muteLabel;
            soundToggleBtn.setAttribute("aria-label", soundText);
            soundToggleBtn.title = soundText;
          }

          modal.setAttribute("dir", newRtl ? "rtl" : "ltr");

          // Re-fetch and re-render Markdown content for the new language
          const newMd = await fetchMarkdownText(newLang);
          const newParts = splitMarkdownSlides(newMd);

          slideElements.forEach((item, idx) => {
            const partText = newParts[idx] !== undefined ? newParts[idx] : newParts[0] || "";
            item.textWrap.setAttribute("dir", newRtl ? "rtl" : "ltr");
            item.textWrap.innerHTML = parseMarkdown(partText);

            // Update badge text
            item.badge.innerHTML =
              item.type === "video"
                ? `<i class="fa-solid fa-circle-play" aria-hidden="true"></i> <span>${curLabels.videoBadge}</span>`
                : `<i class="fa-solid fa-image" aria-hidden="true"></i> <span>${curLabels.imageBadge}</span>`;
          });

          // Refresh orientation and carousel track position for the new language
          updateModalOrientation();
          updateCarouselUI();
        }
      }
    });

    langObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang", "dir"]
    });

    // Initialize state
    updateModalOrientation();
    updateCarouselUI();

    // Auto-open with slight delay on page load for smooth entry
    setTimeout(() => {
      openPopup();
    }, 450);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPopup);
  } else {
    initPopup();
  }
})();
