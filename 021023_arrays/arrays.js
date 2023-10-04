const arr1 = [1, 2, 3, 4, 6]
const arr2 = [1, 2, 3, 4, 6]

// let const

// примитивы и объекты
// number, string, boolean, null, undefined, bigInt, symbol

// остальное typeof arr1
console.log(typeof arr1) // объект
// подтип объекта
// сложная структура данных
// может хранить любые данные в себе в том числе обхекты и массивы
// мы можем обращаться по индексу элементу и использовать

console.log(arr1 === arr2) // сравниваются по ссылке в памяти
arr3 = arr1 // копирую ссылки в памяти
arr4 = [1, 2, 3, 4, 6] // создается новая ссылка
arr3[0] = 70 // обращаюсь к копии ссылки
console.log(arr3)
console.log(arr1)
// for in for of

const arrayWithWords = ['Anna', 'Philipp', 'Lilia', 'Yanis']
const anotherArray = [1, 2, 3, 4, 57, 8]

for (let i = 10; i < arrayWithWords.length - 4; i += 2) {
  console.log(arrayWithWords[i])
}

//    каждый элемент массив
for (const number of anotherArray) {
  console.log(number)
}

// повторить кусок кода и вызывать в разных местах
function sum(a, b) {
  const res = a + b
  const newrs = res + a + b
  return 'CHECK' // получаем результат выполнения
  // функции и моем его дальше использовать
  // после return завершение выполнения функции
}
// функция без return возвращает undefined
console.log(sum(2, 3))
const result = sum(2, 3)

console.log(result - 8)
console.log(typeof sum) // function
// callback function
// функция передается аргументом в другую функцию

// выполни действие через какое-то время
const mySetTimeout = function () {
  console.log('my')
}
setTimeout(() => console.log('dsfs'), 2000)

// методы массивов
//map forEach

// push pop unshift shift
// pop - удаляет последний элемент из конца массива
// push - добавляет элемент в конец массива

// shif удаляет первый жлемент
// unshift - джобавляет элемент в начало

const arr20 = [1, 2, 3, 4, 6]

// const el = arr20.pop()
// console.log(el)
// console.log(arr20)
// const el1 = arr20.shift()
// console.log(el1)
// console.log(arr20)

// arr20.push(100)
// arr20.unshift(200)
// console.log(arr20)

// pop - никаких значений
// push -принимает значение - структура данных
// forEach - callback function

const arr20 = [1, 3, 4, 5, 6, 7, 8, 9]
// value - значения одного из жлементов массива
// index  - индекс элемента массива
// array - сам массив
// (value, index, arr)

const val1 = arr20.forEach((el) => el + 2)
// FOREACH возвращает undefined
console.log(val1)
// MAP возвращает новый массив!

// если нам надо результат созранить в отдельной переменной
// надо сдлеать цепочку методов массива
const val2 = arr20.map((el, ind, arr) => el + 2).pop()

console.log(val2)

// 0. пройтись по массиву и возвести все переменные в квадрат
// записываем в отдельную
// результат вывести в консоль
const arr20 = [1, 3, 4, 5, 6, 7, 8, 9] //i * i//i ** 2

// 1. Если число отриц то сделать положительным
const arrNew = [-1, 2, -100, -700, 300, 200, -900]
const res = arrNew.map((value) => (value < 0 ? Math.abs(value) : value))
// тернарный оператор --> улучшенная версия if else

// 2. пройтись по массиву и если у нас число отриц то его пушим в новый массив
const arrNew12 = [-1, 2, -100, -700, 300, 200, -900]

// фильтрует данные по условию в функции колбек
const filteredArray = arrNew12.filter((el) => el < 0)
// возвращает новый массив с отфильтрованными данными по условию
console.log(filteredArray)

const array = [
  1,
  'apple',
  3,
  4,
  'banana',
  'cherry',
  7,
  8,
  9,
  'date',
  11,
  'fig',
  136776,
  14676,
  'grape',
]
// длина элемента больше 4 el.length
const anotherFiltredArray = array.filter((el) => typeof el === 'number')
console.log(anotherFiltredArray)

const newFiltredArray = array.filter((el) => typeof el === 'string' && el.length > 4)
console.log(newFiltredArray)

// синтаксис функция
// синтаксис методов
// синтаксис условных конструкций if else , ternary operator
