let fecha = prompt ("Introduce el año de tu nacimiento: ");

edad =new Date().getFullYear()-fecha;

document.open();

document.write('Tu edad es: '+ edad + ' años');