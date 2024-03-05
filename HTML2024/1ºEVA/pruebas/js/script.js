let cont = 0

function pulsa (objeto) {
  objeto.stopPropagation()
  console.log(objeto)
  cont++
}

document.addEventListener('click', () => {
  alert('hola')
})

function adios (lol) {
  lol.preventDefault()
  console.log(lol.altKey)
}
