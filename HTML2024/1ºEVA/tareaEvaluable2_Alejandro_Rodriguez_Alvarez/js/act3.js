const animal = 'gato'

const sexo = prompt('Introduce tu genero: ')

const hijos = '2'

control = sexo.toLowerCase()

if (control == 'mujer') {
  alert('La madre ' + animal + ' tiene ' + hijos + ' hijos')
} else {
  if (control == 'hombre') {
    alert('El padre ' + animal + ' tiene ' + hijos + ' hijos')
  } else {
    alert('Genero incorrecto')
  }
}
