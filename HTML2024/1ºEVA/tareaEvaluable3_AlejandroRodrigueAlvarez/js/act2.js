function alturaformateada(centimetros) {
    
    let format =centimetros/100;
    alert("Tu altura es de " + format.toFixed(3) + " metros");

}




let altura =prompt("Introduce tu altura en centimetros");

alturaformateada(altura);