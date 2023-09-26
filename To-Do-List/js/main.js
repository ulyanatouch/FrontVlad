const headerText = document.querySelector('.header__text')
const clearAll = document.querySelector('.header__clear')

const form = document.querySelector('.form')
const taskInput = document.querySelector('.form__text')

const taskList = document.querySelector('.list')
const emptyList = document.querySelector('.list__item-empty')

let tasks = []

if (localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'))
  tasks.forEach((task) => renderTask(task))
}

checkEmptyList()
numberTask(tasks.length)

form.addEventListener('submit', addTask)

taskList.addEventListener('click', deleteTask)

taskList.addEventListener('click', doneTask)

clearAll.addEventListener('click', clearBtn)

function addTask(e) {
  e.preventDefault()

  const taskText = taskInput.value

  const newTask = {
    id: Date.now(),
    text: taskText,
    done: false,
  }

  // провірка на value
  if (taskText) {
    tasks.push(newTask)
    renderTask(newTask)
    numberTask(tasks.length)
  }

  // почистити поле ввода і додати фокус
  taskInput.value = ''
  taskInput.focus()

  checkEmptyList()
  saveToLocalStorage()
}

function deleteTask(e) {
  if (e.target.parentElement.className !== 'delete__btn') return

  const parentNode = e.target.closest('.list__item')

  const id = +parentNode.id

  tasks = tasks.filter((task) => task.id !== id)

  parentNode.remove()

  checkEmptyList()
  saveToLocalStorage()
  numberTask(tasks.length)
}

function doneTask(e) {
  if (e.target.dataset.check !== 'done') return

  const parentNode = e.target.closest('.list__item')

  const id = +parentNode.id

  const task = tasks.find((task) => task.id === id)

  task.done = !task.done

  if (e.target.dataset.check === 'done') {
    e.target.classList.toggle('check--active')

    const listText = e.target.closest('li').querySelector('.list__text')

    listText.classList.toggle('list__text-active')
  }
  saveToLocalStorage()
}

function checkEmptyList() {
  if (tasks.length > 0) {
    emptyList.style.display = 'none'
  } else {
    emptyList.style.display = 'flex'
  }
}

function saveToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function renderTask(task) {
  const cssClass = task.done ? 'list__text list__text-active' : 'list__text'
  const btnClass = task.done ? 'check__btn check--active' : 'check__btn'

  const taskHTML = `<li id = '${task.id}' class="list__item">
          <button class="delete__btn" type="button">
            <img src="./images/delete.svg" alt="delete">
          </button>
          <button class="${btnClass}" data-check="done" type="button"></button>
          <p class="${cssClass}">${task.text}</p>
        </li>`

  taskList.insertAdjacentHTML('afterbegin', taskHTML)
}

function numberTask(args) {
  headerText.textContent = args <= 1 ? `${args} task` : `${args} tasks`
}

function clearBtn() {
  while (taskList.firstChild.className !== 'list__item-empty') {
    taskList.removeChild(taskList.firstChild)
    tasks.splice(0, 1)
    localStorage.clear()
    numberTask(tasks.length)
    checkEmptyList()
  }
}