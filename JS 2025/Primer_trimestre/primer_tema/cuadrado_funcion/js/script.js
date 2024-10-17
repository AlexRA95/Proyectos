let num = Number(prompt("Dame un número:  "))

function cuadrado(numero) {
    return Math.pow(numero,2);
}

if (Number.isInteger(num)) {
    console.log(cuadrado(num));
}else{
    console.log("No es un numero")
}
