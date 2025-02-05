/**
 * LocalStorage es una API que ofrecen los navegadores.
 * No se comparte entre navegadores.
 * Se guardan en formato JSON.
 * Podemos ver el contenido en el inspector.
 */

// ALMACENAR 1
localStorage.setItem("test", 1);
//almacena 1 en localStorage bajo la clave "test".
//Este valor es válido porque es un número, que el localStorage convierte automáticamente a texto.

// ALMACENAR 2 (OBJETO MAL)
localStorage.user = { name: "John" };
//Guarda como valor [object Object]

//ALMACENAR 3 (OBJETO BIEN)
//Creación de un objeto carrito con una propiedad cliente que tiene como valor "Paco".
const carrito = {
  cliente: "Paco",
};

//Convertir un objeto/Array a JSON con el método JSON.stringify
const carritoToJSON = JSON.stringify(carrito);
//Convierte el objeto carrito a una cadena JSON. El resultado es {"cliente":"Paco"}

// Almacenar usando una key en localStorage
localStorage.setItem("carrito", carritoToJSON);
/* Guarda la cadena JSON en localStorage bajo la clave "carrito". Ahora, el navegador 
almacena esta información hasta que el usuario la elimine o la aplicación la actualice
*/

// Leer el valor almacenado en localStorage
const carritoJSON = localStorage.getItem("carrito");
// Recupera el valor asociado a la clave "carrito" del localStorage, obteniendo {"cliente":"Paco"}

console.log(carritoJSON);
// Muestra la cadena JSON en la consola del navegador.

// Convertir JSON de nuevo a objeto/Array:
const JSONToCarrito = JSON.parse(carritoJSON);
// Convierte la cadena JSON de vuelta a un objeto JavaScript. El resultado es { cliente: "Paco" }

console.log(JSONToCarrito);
//Muestra el objeto en la consola, confirmando que se ha convertido de nuevo a formato de objeto

// Actualizar el objeto carrito en localStorage
const carritoActualizado = {
  cliente: "Paco",
  productos: 0,
};
// Se crea un nuevo objeto carritoActualizado que ahora tiene dos propiedades: cliente y productos

//Objeto a JSON y almacenarlo en localStorage
const carritoActualizadoToJSON = JSON.stringify(carritoActualizado);
localStorage.setItem("carrito", carritoActualizadoToJSON);

// Eliminar la clave "carrito" en localStorage y su valor
localStorage.removeItem("carrito");

// Eliminar todo (test,user y carrito)
localStorage.clear();
