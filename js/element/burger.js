let lastScrollTop = 0;

export function burgerInit() {
  const bBtn = document.querySelector(".header__burger-btn");
  const bContent = document.querySelector(".header__content");
  const header = document.querySelector(".header");

  if (!bBtn || !bContent || !header) return;

  bBtn.addEventListener("click", () => bntClick(bBtn, bContent));
  document.body.addEventListener("click", (e) => oderClick(e, bBtn, bContent));
  window.addEventListener("keydown", (e) => keyPress(e, bBtn, bContent));
  window.addEventListener("scroll", () => scroll(header, bContent), {
    passive: true,
  });
}

function setBurgerState(btn, elem, isActive) {
  elem.classList.toggle("active", isActive);
  document.body.classList.toggle("sLock", isActive);
  btn.setAttribute("aria-expanded", String(isActive));
  btn.setAttribute("aria-label", isActive ? "Закрыть меню" : "Открыть меню");
}

function bntClick(btn, elem) {
  const isActive = !elem.classList.contains("active");
  setBurgerState(btn, elem, isActive);
}

function oderClick(e, btn, elem) {
  const headerClick = e.target.closest("header");
  const linkClick = e.target.classList.contains("header__link");

  if (!headerClick || linkClick) {
    setBurgerState(btn, elem, false);
  }
}

function keyPress(e, btn, elem) {
  if (e.key === "Escape" && elem.classList.contains("active")) {
    setBurgerState(btn, elem, false);
  }
}

function scroll(header, elem) {
  const currentScroll = window.scrollY || document.documentElement.scrollTop;

  if (currentScroll < 0) return;

  if (elem.classList.contains("active")) {
    lastScrollTop = currentScroll;
    return;
  }

  if (currentScroll > lastScrollTop && currentScroll > 60) {
    header.classList.add("header--hidden");
  } else {
    header.classList.remove("header--hidden");
  }

  lastScrollTop = currentScroll;
}
