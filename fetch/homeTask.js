const root = document.querySelector("#root");

const showEachProduct = (arrayOfProducts) => {
  // Проверяем, что arrayOfProducts существует и является массивом перед использованием forEach
  if (Array.isArray(arrayOfProducts)) {
    arrayOfProducts.forEach((product) => {
      console.log(product);
      const productCard = document.createElement("div"); // Создаем новый div-элемент и сохраняем его в переменной productCard
      // Создаем новый заголовок h2 и сохраняем его в переменной title
      const title = document.createElement("h2");

      // Устанавливаем текст заголовка (title) равным значению product.title
      title.innerText = product.title;

      // Создаем новый параграф (p) и сохраняем его в переменной description
      const description = document.createElement("p");

      // Устанавливаем текст параграфа (description) равным значению product.description
      description.innerText = product.description;
      const image = document.createElement("img");
      image.src = product.images[0];
      productCard.append(title, description, image);

      root.append(productCard);
    });
  } else {
    // Выводим сообщение об ошибке, если arrayOfProducts не является массивом
    console.error("Ошибка: arrayOfProducts не является массивом");
  }
};

const fetchProducts = async (callback) => {
  try {
    const response = await fetch("https://dummyjson.com/products"); // отправили запрос и получили промис
    const data = await response.json(); // JSON --> JavaScript тип данных
    callback(data.products);
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
};

fetchProducts((arrayOfProducts) => showEachProduct(arrayOfProducts));
