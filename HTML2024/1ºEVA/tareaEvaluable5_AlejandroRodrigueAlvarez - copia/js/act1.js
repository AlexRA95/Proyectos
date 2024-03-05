//Actividad1

let posicionX = document.getElementById("posX");
let posicionY = document.getElementById("posY");


function track(objeto) {
    let x = objeto.clientX;
    let y = objeto.clientY;
    posicionX.textContent=(x);
    posicionY.textContent=(y);
}

document.addEventListener("mousemove",track);

//Act2

function diaNoche(objeto) {
    document.querySelector("#cielo").classList.toggle("cielo")
    document.querySelector("#cielo").classList.toggle("noche")
    document.querySelector("#sol").classList.toggle("sol")
    document.querySelector("#sol").classList.toggle("luna")
    
    if (boton.textContent==("Dia")) {
        boton.textContent=("Noche")
    }else{boton.textContent=("Dia")}
    
}

let boton = document.querySelector("#boton")

boton.addEventListener("click", diaNoche)


//Act2+

function verNoVer0(objeto) {

    if (ver[0].style.display == "block") {
        ver[0].style.display = "none";
      } else {
        ver[0].style.display = "block";
      }

      
    
}
function verNoVer1(objeto) {

    
if (ver[1].style.display == "block") {
    ver[1].style.display = "none";
  } else {
    ver[1].style.display = "block";
  }

}



let queVea = document.querySelectorAll("#cambiar")
let ver = document.querySelectorAll("#invisible")


queVea[0].addEventListener("click", verNoVer0)
queVea[1].addEventListener("click", verNoVer1)

