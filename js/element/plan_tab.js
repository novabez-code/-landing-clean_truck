let currentIndex = 0;

let btns = [];
let cards = [];

export function planInit() {
  btns = Array.from(document.querySelectorAll(".plan__car--btn"));
  cards = Array.from(document.querySelectorAll(".plan__card"));
  const btnDiv = document.querySelector(".plan__cars");
  const cardDiv = document.querySelector(".plan__cards");

  if (btns.length === 0 || cards.length === 0) return;

  btnDiv.addEventListener("click", (e) => clickBtn(e));
  cardDiv.addEventListener("click", (e) => clickCard(e));
  cardDiv.addEventListener("keydown", (e) => keyCard(e));
  updateState();
}

function updateState() {
  if (currentIndex >= btns.length) currentIndex = btns.length - 1;
  if (currentIndex < 0) currentIndex = 0;

  btns.forEach((element) => element.classList.remove("active"));
  btns[currentIndex].classList.add("active");

  const currentPrice = Number(btns[currentIndex].dataset.price) || 0;

  cards.forEach((card) => {
    const discount = Number(card.dataset.discount) || 0;
    card.querySelector(".plan__card--price").textContent = Math.ceil(
      discount * currentPrice,
    );
  });
}

function clickBtn(e) {
  const btn = e.target;

  if (btn.classList.contains("plan__car--btn")) {
    currentIndex = +btn.dataset.id;
    updateState();
  }
}

function clickCard(e) {
  const currentCard = e.target.closest(".plan__card");
  if (currentCard) {
    cards.forEach((element) => element.classList.remove("active"));
    currentCard.classList.add("active");
  }
}

function keyCard(e) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();

    const currentCard = e.target.closest(".plan__card");
    if (currentCard) {
      cards.forEach((element) => element.classList.remove("active"));
      currentCard.classList.add("active");
    }
  }
}
