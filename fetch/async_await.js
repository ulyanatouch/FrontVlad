// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((data) => {
//     fetch(`https://jsonplaceholder.typicode.com/posts?userId=${data.userId}`)
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))

// const fetchPostById = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const data = await response.json();

//   const postsResponse = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?userId=${data.userId}`
//   );
//   const postsData = await postsResponse.json();
//   console.log(postsData);
// };

// fetchPostById();

const root = document.querySelector("#root");
const form = document.querySelector("form");
const titleValue = document.querySelector("#title");
const descriptionValue = document.querySelector("#description");

const showProduct = (product) => {
  const productCard = document.createElement("div");
  const title = document.createElement("h2");
  title.innerText = product.title;
  const description = document.createElement("p");
  description.innerText = product.description;
  productCard.append(title, description);
  root.append(productCard);
};

const addNewPost = async (post) => {
  const response = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  const data = await response.json();
  showProduct(data);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newProduct = {
    title: titleValue.value,
    description: descriptionValue.value,
  };
  addNewPost(newProduct);

  titleValue.value = "";
  descriptionValue.value = "";
});
