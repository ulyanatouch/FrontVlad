// DOM - document object model
// мы можем представить html в виде объекта
// querySelector и getElementByID - методы объекта document
// наиболее распространненный вариант
// querySelector позволяет обратиться к id class tag
const rootElemet = document.querySelector('#root')
// создали секцию
const firstSection = document.createElement('section')
// секцию прикрепили к корневому элементу
rootElemet.appendChild(firstSection)

// создаем для нашей секции заголовок
const h1Tag = document.createElement('h1')
// добавили класс
h1Tag.classList.add('')
// создали текст
const textForh1 = document.createTextNode('РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В МИРЕ')
// прикрепили этот текст к нашему элементу h1
h1Tag.appendChild(textForh1)
// прикрепили заголовок к секции
firstSection.appendChild(h1Tag)

// Специальный метод для id getElementById()
rootElemet.innerHTML = '<h1> Hello world </h1>'

// querySelector() возвращает первый элемент в списке
const catImageByClass = document.querySelector('.cat-image') // обращаюсь к классу
const catImageByTag = document.querySelector('img') // обращаюсь по тегу
// возвращает один // id уникален!
const catImage = document.querySelector('#red-cat')
catImage.style.border = '10px solid black'

const h1Element = document.querySelector('h1')
h1Element.style.color = 'red'
// Чтобы выбрать все элементы с одинаковым классом или одинаковые элементы
const allDivs = document.querySelectorAll('div')
// обратился ко всем элементам
const allCats = document.querySelectorAll('.cat-image')
// обращению ко второну элементому (индексация с нуля)
const secondCat = allCats[1]
secondCat.style.width = '500px'

const imageContainer = document.querySelector('.image-container')
// создаем элемент напрямую в JS
const myNewCatImage = document.createElement('img')
// добавляем ему аттрибуты
myNewCatImage.src = './cat.jpeg'
myNewCatImage.alt = 'red cat'
// добавляем id чтобы стилизовать отдельно
myNewCatImage.id = 'third-cat'
// добавляем класс
myNewCatImage.classList.add('cat-image')
// добавляет последним к выбранному элементу!!! наш созданный элемент
imageContainer.appendChild(myNewCatImage)
