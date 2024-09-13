let num = Number(prompt("Elige un número:"));
let cont=num;

if (!isNaN(num)) {
    while (num>0) {
        num = num*cont;
        cont--;
        console.log(num);
    }
    console.log(num);
}else{
    console.log("No es un número");
}
