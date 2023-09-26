// Создаем класс школа School
// конструктор = name, level, numberOfStudents
// getter для наших переменных

// сеттер для numberOfStudents = проверяет является ли numberOfStudents числом
// если да то присваиваем, если нет то выводим
// 'Invalid input: numberOfStudents must be set to a Number.'

// метод quickFacts выводит в консоль данные о школе
// в _name обучается _numberOfStudents учеников на _level уровне

// статический метод pickSubstituteTeacher
// принимает параметр substituteTeachers - массив строк ['John', 'Mike']
// внтури генерирует рандомное число от 0 до и длина массива - 1
// выбирает из массива одного преподавателя

class School {
  constructor(name, level, numberOfStudents) {
    this.name = name
    this.level = level
    this.numberOfStudents = numberOfStudents
  }

  get newName() {
    return this.name
  }
  get newLevel() {
    return this.level
  }
  get newNumberOfStudents() {
    return this.numberOfStudents
  }

  set newNumberOfStudents(number) {
    typeof numberOfStudents === number
      ? (this.numberOfStudents = number)
      : console.log('Invalid input: numberOfStudents must be set to a Number.')
  }
  quickFacts() {
    console.log(
      `в школе ${this.newName} учится ${this.newNumberOfStudents} в департаменте ${this.newLevel} `
    )
  }
  static pickSubstituteTeacher(substitueTeachers) {
    console.log(substitueTeachers[Math.floor(Math.random() * (substitueTeachers.length - 1))])
  }
}

const newSchool = new School('highSchool', 'primary', 220)
newSchool.quickFacts()

// создаем класс Primary, наследует все от школы + свойство pickupPolicy
// конструктор супер + новый геттер
class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents)
    this.pickupPolicy = pickupPolicy
  }
  get newPickapPolicy() {
    return this.pickupPolicy
  }
}
const prime = new Primary(
  '13',
  222,
  'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
)
console.log(prime.pickupPolicy)

School.pickSubstituteTeacher([
  'Jamal Crawford',
  'Lou Williams',
  'J. R. Smith',
  'James Harden',
  'Jason Terry',
  'Manu Ginobli',
])
// создаем класс HighSchool то же самое + свойство sportsTeams + getter для него
// level = highSchool
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'highSchool', numberOfStudents)
    this.sportsTeams = sportsTeams
  }
  get newsportsTeams() {
    return this.sportsTeams
  }
}

// создать инстанс проверить статик и проверить внутренние метода
