// Находим элемент на странице с идентификатором "root" и сохраняем его в переменной root
const root = document.querySelector("#root");

// Объявляем функцию showPost, которая принимает два аргумента: data и callback
const showPost = (data) => {
    const postCard = document.createElement('div')  // Создаем новый div-элемент и сохраняем его в переменной postCard
    const title = document.createElement('h2')     // Создаем новый заголовок h2 и сохраняем его в переменной title
    title.innerText = data.title     // Устанавливаем текст заголовка (title) равным значению data.title. Таким образом, заголовок будет содержать текст заголовка поста.
    const postBody = document.createElement('p')   // Создаем новый параграф (p) и сохраняем его в переменной postBody
    postBody.innerText = data.postBody // Устанавливаем текст параграфа (postBody) равным значению data.postBody. Таким образом, параграф будет содержать текст тела поста.
    postCard.append(title, postBody)  // Добавляем элементы title и postBody внутрь элемента postCard
    root.append(postCard); // Добавляем postCard вместо postBody
   
}

// Пример использования функции showPost с callback
showPost({ title: "Заголовок поста", postBody: "Текст тела поста" }, (data) => {
    console.log("Callback вызван с данными:", data);
});



const fetchPost = (id, callback) => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => callback(data));
};

fetchPost(1, (data) => showPost(data));
fetchPost(2, (postData) => showPost(data));
fetchPost(3, (postData) => showPost(data));


// .catch(error => {
//     console.error('Ошибка:', error);
//   });