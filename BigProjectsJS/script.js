const root_element = document.querySelector("#root");

//----- hero section -------
const hero_section = document.createElement("section");
hero_section.classList.add("hero");

const hero_container = document.createElement("div");
hero_container.classList.add("container");
hero_section.appendChild(hero_container);

const hero_content_element = document.createElement("div");
hero_content_element.classList.add("hero_content");
hero_container.appendChild(hero_content_element);

const h1_element = document.createElement("h1");
h1_element.innerText = "РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В МИРЕ";

const hero_subtitle_element = document.createElement("span");
hero_subtitle_element.classList.add("hero_subtitle");
hero_subtitle_element.innerText = "стадионы, газопроводы, мосты, дамбы";

const hero_list_element = document.createElement("ul");
hero_list_element.classList.add("hero_list");



for (let i = 0; i <= 3; i++) {
    const hero_item_element = document.createElement("li");
    hero_item_element.classList.add("hero_item");

    const item_title = document.createElement("span");
    item_title.classList.add("item_title");
    item_title.innerText = "26";

    const item_subtitle = document.createElement("span");
    item_subtitle.classList.add("item_subtitle");
    item_subtitle.innerText = "лет";

    const item_description = document.createElement("span");
    item_description.classList.add("item_description");
    item_description.innerText = "на рынке";

    hero_item_element.append(item_title, item_subtitle, item_description);
    hero_list_element.append(hero_item_element);
}

hero_content_element.append(
    h1_element,
    hero_subtitle_element,
    hero_list_element
);

//----- projects section -------
const projects_section = document.createElement("section");
projects_section.classList.add("projects");

root_element.append(hero_section, projects_section);