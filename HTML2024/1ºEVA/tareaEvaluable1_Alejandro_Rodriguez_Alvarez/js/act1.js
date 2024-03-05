let texto="\"Compartir el conocimiento es el acto más fundamental de la amistad. Porque es una forma de dar algo sin perder nada.\""
;

textomayus=texto.toUpperCase();


console.log(textomayus);

document.open();


document.write('<p style="background-color: grey; color: white;">'+textomayus+'</p>');


textoMinus=texto.toLowerCase();

console.log(textoMinus);

document.write('<p style="background-color: grey; color: white;">'+textoMinus+'</p>');

document.write('La cadena de texto con espacios mide: ' + texto.length + ' caracteres</br>');

document.write('La cadena de texto sin espacios mide: ' +  texto.replace(/ /g, "").length + ' caracteres');




document.close();