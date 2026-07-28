export function aboutSliderInit() {
  window.addEventListener("load", () => {
    if (typeof Swiper === "undefined") {
      console.error("Swiper не найден. Проверьте подключение в HTML.");
      return;
    }

    new Swiper(".about__slider", {
      loop: true,
      grabCursor: true,
      slidesPerView: 1.2,
      spaceBetween: 15,
      watchSlidesProgress: true,

      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      a11y: {
        enabled: true,
      },

      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },

      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      },
    });
  });
}
