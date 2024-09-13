let num = Number(prompt("Dame un número: "));


    if (Number.isInteger(num)) {
        let cuadrado = Math.pow(num,num);
        alert("El cuadrado de " + num + " es --> " + cuadrado);
    } else {
        alert("No es un número lo que has introducido");
    }


