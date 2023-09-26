alert('Hello user')
const answerOfPrompt = prompt('Tell me a number')

prompt('how are you?')
// prompt возвращает либо string либо null
console.log(answerOfPrompt) // 's'

console.log(Number(answerOfPrompt)) // NaN not a number
console.log(typeof +answerOfPrompt) // number
console.log(typeof NaN) // number
const sumNumbers = 4 + answerOfPrompt
console.log(sumNumbers)

// преобразовать строку в число поставить + перед строкой

const stringToNumber = +stringNumber
const useNumberObject = Number(stringNumber)

let a = 1
a = a + 2

a += 2
a -= 2
a *= 2

const stringNumber = '2'
const justNumber = 2
// сравнение с привидением типов
console.log(stringNumber == justNumber)
// строгое сравнение
console.log(Number(true))
console.log(Number(false)) // 0
// сравниваются типы
console.log(Number(false) === 0)
// приводятся к одному типу данных
// мы можем привести false к числу? ДА
// Number(false)
console.log(false == 0) // приведение типов
console.log(false === 0)
// Всегда используйте строгое(===) сравнение!

// приведение типов
console.log(1 != '1') // false
// строгое сравнение
console.log(1 !== '1') // true

// Интерполяция
const userName = 'Alex'
const age = 35
const number = 5
// Косые ковычки!
// внутри фигурных выполняется JS
const sayHelloToUser = `Hello ${userName}! You are ${age / number} years old`
console.log(sayHelloToUser)

alert('Hello user')
prompt('how are you?')

const arr1 = [
  1,
  'string',
  false,
  undefined,
  null,
  [1, 2, 3],
  {
    name: 'Peter',
  },
]
console.log(typeof arr1) // object
console.log(arr1.length)
const lengthOfArray = arr1.length // забираю длину = 7
// индекс последного 6
console.log(arr1[lengthOfArray]) // arr1[7] undefined
console.log(arr1[lengthOfArray - 1]) // { name: 'Peter' }
// индексация с нуля
arr1[0] = 1
arr1[1] = 'string'
arr1.at(2) // arr1[2] = false

// pop push изменяют исходный массив
arr1.pop() // удаляет посл элемент
arr1.push('1') // добавляется

arr1.unshift('2') // добавляет в начало!
arr1.shift() // удаляет первый!! элемент
arr1.length // указывает длину = количество элементов в массиве
console.log(arr1)

// как обратиться к посл элементу массива,
// если я не знаю точное количество

// цикл
const arrayOfNumbers = [1, 2, 3, 4, 6]

// for (let i = 0; i < arrayOfNumbers.length; i++) {
//   console.log(arrayOfNumbers[i])
// }

for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
  console.log(arrayOfNumbers[i])
}
