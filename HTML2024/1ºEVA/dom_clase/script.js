//let Boton1 = document.querySelector("#cambioBoton");
//let Boton2 =document.querySelector("#insertarTexto");
//let Boton3 =document.querySelector("#contMas");
//let Boton4 =document.querySelector("#contMenos");

let botones = document.querySelectorAll("button");
let contador =0;
document.querySelector("#C2").textContent=contador;

function BT1() {
    console.log("Boton1");
}

function BT2() {
    let campo =document.querySelector("#texto").value;
    document.querySelector("#texto").value=null;
    document.querySelector("#C1").textContent=campo;
    

}

function BT3() {
    contador++;
    document.querySelector("#C2").textContent=contador;
}

function BT4() {
    contador--;
    document.querySelector("#C2").textContent=contador;
}

botones[0].addEventListener("click", BT1);
botones[1].addEventListener("click", BT2);
botones[2].addEventListener("click", BT3);
botones[3].addEventListener("click", BT4);
