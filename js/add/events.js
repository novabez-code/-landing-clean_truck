function sendMetrikaEvent(goalName, params = {}) {
  if (typeof ym !== "undefined") {
    ym(110995769, "reachGoal", goalName, params);
  }
}

function sendGAEvent(eventName, params = {}) {
  if (typeof gtag !== "undefined") {
    gtag("event", eventName, params);
  }
}

function sendEvent(goalName, eventName, params = {}) {
  sendMetrikaEvent(goalName, params);
  sendGAEvent(eventName, params);
}

document.addEventListener("DOMContentLoaded", function () {
  // Все ссылки с телефоном
  document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      let location = "unknown";
      if (this.closest(".header__phone")) location = "header";
      else if (this.closest(".footer__cont")) location = "footer";

      sendEvent("call_click_" + location, "call_click", {
        phone_number: this.href.replace("tel:", ""),
        location: location,
      });
    });
  });

  // --- Клик по ссылке "Наверх" ---
  const upLink = document.querySelector(".footer__up");
  if (upLink) {
    upLink.addEventListener("click", function () {
      sendEvent("go_to_top", "go_to_top", {
        location: "footer",
      });
    });
  }

  // --- Клики по ссылкам "Подробнее" в слайдере ---
  document.querySelectorAll(".about__slider--link").forEach(function (link) {
    link.addEventListener("click", function () {
      // Определяем, какой слайд
      const slide = this.closest(".swiper-slide");
      let slideId = "unknown";
      if (slide) {
        const classes = slide.className.split(" ");
        const itemClass = classes.find((c) => c.startsWith("item"));
        if (itemClass) slideId = itemClass;
      }

      sendEvent("slider_click", "slider_click", {
        slide: slideId,
      });
    });
  });

  // --- Клик по ссылке "Подробнее" в футере ---
  const footerLink = document.querySelector(".footer__link");
  if (footerLink) {
    footerLink.addEventListener("click", function () {
      sendEvent("footer_about_click", "footer_about_click", {
        location: "footer",
      });
    });
  }

  // --- Клик по ссылке "Политика конфиденциальности" ---
  const privacyLink = document.querySelector(".footer__conf");
  if (privacyLink) {
    privacyLink.addEventListener("click", function () {
      sendEvent("privacy_click", "privacy_click", {
        location: "footer",
      });
    });
  }

  // --- Клик по логотипу ---
  document.querySelectorAll(".logo").forEach(function (logo) {
    logo.addEventListener("click", function () {
      sendEvent("logo_click", "logo_click", {
        location: this.closest("header") ? "header" : "footer",
      });
    });
  });

  // --- Клик по ссылкам в меню ---
  document.querySelectorAll(".header__link").forEach(function (link) {
    link.addEventListener("click", function () {
      sendEvent("menu_click", "menu_click", {
        target: this.textContent.trim(),
      });
    });
  });

  // --- Клик по ссылке "Локация" в хедере ---
  const locLink = document.querySelector(".header__loc--link");
  if (locLink) {
    locLink.addEventListener("click", function () {
      sendEvent("location_click", "location_click", {
        location: "header",
      });
    });
  }

  // --- Клик по карточкам в плане (тарифы) ---
  document.querySelectorAll(".plan__card").forEach(function (card) {
    card.addEventListener("click", function () {
      const title = this.querySelector(".plan__card--title");
      const price = this.querySelector(".plan__card--price");

      sendEvent("plan_card_click", "plan_card_click", {
        title: title ? title.textContent.trim() : "unknown",
        price: price ? price.textContent.trim() : "unknown",
      });
    });
  });

  // --- Клик по кнопкам табов (Автобусы, Спецтехника и т.д.) ---
  document.querySelectorAll(".plan__car--btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      sendEvent("plan_tab_click", "plan_tab_click", {
        tab: this.textContent.trim(),
      });
    });
  });
});
