console.log('Hello')
const div = document.querySelector(selectors)
function createFiveDivs() {
  return `<div class='myDiv'> </div>`
}
// примитивы сравниваются по значению
let sum = 1
const num1 = '1'
const num2 = '1'
console.log(num1 === num2)
console.log(1 === 1)

const bool1 = true
const bool2 = true
console.log(bool1 === bool2)

const a = null //
const b = null
console.log(typeof a) //object

console.log(a === b) //сравнивается как примитив

// Сравниваются по ссылке в памяти
const obj1 = { x: 1 } // место в памяти
const obj2 = { x: 1 } // другое место в памяти
const arr1 = [1]
const arr2 = [1]
//сравниваются ссылки
console.log(arr1 === arr2) // false
// одно место не равно другому
console.log(obj1 === obj2) // false

// выпустили вторую банк карту
// копируем не объект а ссылку
// перезаписываем исходный объект
const obj3 = { x: 2, y: 3 }
const obj4 = obj3
obj4.x = 4
console.log(obj3)
console.log(obj4 === obj3) // true / false

const user = {
  name: 'Ivan',
  city: 'Berlin',
  weather: '29C',
}

const weatherOfNextCity = user.weather //camelCase
const UserName = user.name // PascalCase
const usersCity = user.city
const user_city = user.city
const user_city_2 = user.city // snake_case

// let const
const firstConstantVariable = 'a'
// TypeError: Assignment to constant variable.
firstConstantVariable = 'b'

let secondVariable = 'a' // строка
secondVariable = 1 // число
secondVariable = true // boolean
secondVariable = undefined
secondVariable = null
console.log(secondVariable)

let thirdVariable
thirdVariable = 2
console.log(thirdVariable)

// var let
var firstVar = 1
firstVar = 2
console.log(firstVar)

// Hoisting поднятие
secondVar
console.log(secondVar)
var secondVar = 1

// hoisting поднятие
callThisfunction() //

// function declaration
function callThisfunction() {
  console.log('function is called')
}

callThisfunction() //

// Cannot access 'myFunction' before initialization
myFunction()
// function expression
const myFunction = function () {
  console.log('Second function call')
}

myFunction()

// конкатенация и интерполяция
const firstNumber = 1
const secondNumber = '1'
//конкатенация
console.log(firstNumber + secondNumber) //

al
prompt('Tell me a number') //
