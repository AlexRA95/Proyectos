/*ACTIVIDADA 1*/

function derechoAzul(objeto) {
    objeto.preventDefault();
    objeto.stopPropagation();
    alert("Has pulsado con el click DERECHO sobre la zona AZUL");
}

function derechoVerde(objeto) {
    objeto.preventDefault();
    alert("Has pulsado con el click DERECHO sobre la zona VERDE");
}

function izqAzul(objeto) {
    objeto.stopPropagation();
    alert("Has pulsado con el click IZQUIERDO sobre la zona AZUL");
}

function izqVerde(objeto) {
    alert("Has pulsado con el click IZQUIERDO sobre la zona VERDE");
}

/*ACTIVIDAD 2 */

let cajaTrack = document.getElementById("caja");

document.getElementById('caja').onmouseenter = function coordenadas(objeto) {
    let tracking = setInterval(function () {
        
        let x=objeto.offsetX - cajaTrack.getBoundingClientRect().left;
        let y=objeto.offsetX - cajaTrack.getBoundingClientRect().top;
        console.log("X: " + x + " y: " + y);
    },100)
    
}