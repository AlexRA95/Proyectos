function potencia(num1,num2) {
    
    let poten = num1 ** num2;
    console.log("La potencia es " + poten);

}


function iva(pre) {
    
    let ivapre =pre*1.21;
    console.log("El precio con IVA es: " + ivapre);

}

potencia(2,3);



let precio =prompt("Introduce el precio: ");

iva(precio);