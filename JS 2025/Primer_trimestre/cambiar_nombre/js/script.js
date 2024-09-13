let num = Number(prompt("¿Cuantas filas quieres?"));
let cont=0;
let fila ="*";
do {
    if (num<=0) {
        cont=num;
    }else{
        console.log(fila)
        fila=fila+"*";
    }
    
    cont=cont+1;
} while (cont<num);
