// ключ: значение
const user = {
  name: 'John',
  surname: 'Doe',
  age: 40,
  image: 'cсылка',
  city: 'Berlin',
  // метод - функция внутри объекта
  sayHello: function () {
    console.log('Hello')
  },
}

user.sayHello()

const user2 = {
  name: 'John',
  surname: 'Doe',
  age: 40,
  image: 'cсылка',
  city: 'Berlin',
}
console.log(user === user2)
// выводит ключи
//[ 'name', 'surname', 'age', 'city' ]
console.log(Object.keys(user))
//выводит значения
//[ 'John', 'Doe', 40, 'Berlin' ]
console.log(Object.values(user))
// выводит массив массивов со переменными [ключ, значение]
//[ [ 'name', 'John' ], [ 'surname', 'Doe' ], [ 'age', 40 ],[ 'city', 'Berlin' ]

console.log(Object.entries(user))
// получаем значение по ключу
console.log(user.name)
// перезаписываем значение
user.age = 41
// удалить значение
delete user.city

console.log(user)

// ФУНКЦИИ
sumTwoNumbers(5, 5)
// function declaration
function sumTwoNumbers(a, b) {
  console.log('function call')
  console.log(a + b)
  // если нет return то функция возвращает undefined
}

console.log(sumTwoNumbers(6, 10)) //  результат return
console.log(sumTwoNumbers(16, 100))
//ReferenceError: Cannot access 'sumThreeNumbers'
//before initialization
sumThreeNumbers(3, 4, 5)
// function expression
const sumThreeNumbers = function (a, b, c) {
  return a + b + c
}

// undefined
console.log(myVarVariable)
var myVarVariable // declaration + initialization to undefined
myVarVariable = 1 // assignement

//ReferenceError: Cannot access 'myLetVAriable' before initialization
console.log(myLetVAriable)
let myLetVAriable // только declaration
myLetVAriable = 1 // initialization + assignement (инициализация и присваивание)
console.log(myConstVAriable)

//SyntaxError: Missing initializer in const declaration
// const myConstVariable
const mySecondConstVAriable = 1 // объявление/инициализация и присваивание
