let num = Number(prompt("Elige un número:"));

if (!isNaN(num)) {
    for (let index = 1; index <= 10; index++) {
        let resul=num*index;
        console.log(num + " * " + index + " = " + resul);
    }
}else{
    console.log("No es un número");
}

