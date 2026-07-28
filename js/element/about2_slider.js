export function about2SliderInit() {
  window.addEventListener("load", () => {
    if (typeof Swiper === "undefined") {
      console.error("Swiper не найден. Проверьте подключение в HTML.");
      return;
    }

    new Swiper(".about2__slider", {
      loop: true,

      loopedSlides: 2,
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 0,

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
        nextEl: ".next2",
        prevEl: ".prev2",
      },

      pagination: {
        el: ".about2__slider--p",
        type: "fraction",

        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            ' <span class="counter-separator">/</span> ' +
            '<span class="' +
            totalClass +
            '"></span>'
          );
        },
      },

      formatFractionCurrent: function (number) {
        return number < 10 ? "0" + number : number;
      },
      formatFractionTotal: function (number) {
        return number < 10 ? "0" + number : number;
      },
    });
  });
}
