let ano = prompt('Introduce tu año de nacimiento: ')
let mes = prompt('Introduce tu mes de nacimiento: ')
let dia = prompt('Introduce tu dia de nacimiento: ')

edad1 = new Date().getFullYear() - ano;
mesAhora = new Date().getMonth()+1;
diaAhora = new Date().getDate();

if (edad1 > 18) {
  alert('Puedes entrar, eres mayor de edad')
} else {
  if (mes < mesAhora) {
    alert('Puedes entrar, eres mayor de edad')
  } else {
    if ( mes == mesAhora && dia <= diaAhora) {
      alert('Puedes entrar, eres mayor de edad')
    } else {
      alert('Eres menor, no puedes entrar')
    }
  }
}
