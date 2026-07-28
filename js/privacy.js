document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    window.close();

    setTimeout(() => {
      if (!window.closed) {
        alert('Закройте вкладку вручную или нажмите "Назад"');
      }
    }, 100);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.querySelector(".close-hint");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      window.close();
      setTimeout(() => {
        if (!window.closed) {
          alert("Закройте вкладку вручную");
        }
      }, 100);
    });
  }
});
