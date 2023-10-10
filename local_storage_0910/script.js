const rootElement = document.querySelector('#root')

const toggleButton = document.createElement('button')
toggleButton.innerText = 'toggle'
rootElement.appendChild(toggleButton)

const heading = document.createElement('h1')
rootElement.appendChild(heading)

let storageValue = localStorage.getItem('counter')
// если значения нет то 0
heading.innerHTML = storageValue || '0'

// изменять состояние в зависимости от значения storageValue
toggleButton.addEventListener('click', () => {
  // в localStorage изменил
  storageValue === '0' ? localStorage.setItem('counter', '1') : localStorage.setItem('counter', '0')
  // я переменную перезаписал с новым значением
  storageValue = localStorage.getItem('counter')
  // я отобразил
  heading.innerHTML = storageValue
})

