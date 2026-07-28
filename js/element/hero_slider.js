let currentIndex = 0;

let btns = [];
let btnsDiv = null;
let slides = [];
let sliderTimer = null;

const SLIDE_DELAY = 5000;

export function heroSliderInit() {
  btns = Array.from(document.querySelectorAll(".hero__pag"));
  btnsDiv = document.querySelector(".hero__pags");
  slides = Array.from(document.querySelectorAll(".hero__slid"));

  if (btns.length === 0 || !btnsDiv || slides.length === 0) return;

  btnsDiv.addEventListener("click", (e) => btnClick(e));

  updateSlide();
  startAutoPlay();
}

function updateSlide() {
  btns.forEach((item) => item.classList.remove("active"));
  slides.forEach((item) => item.classList.remove("active"));

  if (currentIndex >= slides.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = slides.length - 1;

  btns[currentIndex].classList.add("active");
  slides[currentIndex].classList.add("active");
}

function btnClick(e) {
  const btn = e.target;
  if (btn.classList.contains("hero__pag")) {
    currentIndex = +btn.dataset.id;

    updateSlide();
    resetAutoPlay();
  }
}

function startAutoPlay() {
  sliderTimer = setInterval(() => {
    currentIndex++;
    updateSlide();
  }, SLIDE_DELAY);
}

function resetAutoPlay() {
  clearInterval(sliderTimer);
  startAutoPlay();
}
