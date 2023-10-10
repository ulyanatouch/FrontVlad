const nameInput = document.querySelector("#name");
const addStorageButton = document.querySelector("#addStorageButton");
const deleteStorageButton = document.querySelector("#deleteStorageButton");
const header = document.querySelector(".header-container");
const themeButton = document.querySelector("#theme-button");

nameInput.addEventListener("input", (event) => {
  localStorage.setItem("nameInput", event.target.value);
});

// при нажатии на кнопку данные из Storage добаыляются в input
// 1. Добавляем событие click
// 2. callback --> надо получить к value нашего input'a
// 3. и занести значение из localStorage --> getItem()
addStorageButton.addEventListener("click", () => {
  nameInput.value = localStorage.getItem("nameInput");
});

deleteStorageButton.addEventListener("click", () => {
  nameInput.value = localStorage.removeItem("nameInput");
  // deleteStorageButton.addEventListener('click', () => localStorage.removeItem('nameInput'))
  nameInput.value = "";
});

if (savedClasses) {
  header.className = savedClasses;
}

themeButton.addEventListener("click", () => {
  header.classList.toggle("darkMode");
  localStorage.setItem("savedClasses", header.className);
});
