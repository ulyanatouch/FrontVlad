const header = document.querySelector(".header-container");
const themeButton = document.querySelector("#theme-button");

// ТУТ ПОЛУЧАЕМ
const savedClasses = localStorage.getItem("savedClasses");

// ЕСЛИ ЕСТЬ, ПРИМЕНЯЕМ
if (savedClasses) {
  header.className = savedClasses;
}

themeButton.addEventListener("click", () => {
  header.classList.toggle("darkMode");
  // ТУТ СОХРАНЯЕМ
  localStorage.setItem("savedClasses", header.className);
});
