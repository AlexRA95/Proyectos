let doc = document.getElementById("container");
let title = document.createElement("h1");
title.id="titulo";
title.textContent="Validación de tarjetas de crédito";


//Creamos formulario
let form = document.createElement("form");
//Creamos campos para el nombre
let nombreLabel = document.createElement("label");
nombreLabel.textContent="Nombre de tarjeta: ";
let nombreInput = document.createElement("input");
nombreInput.id="nombre";
nombreInput.type="text";

//Creamos campos para el numero de la tarjeta
let numLabel = document.createElement("label");
numLabel.textContent="Número de la tarjeta: ";
let numInput = document.createElement("input");
numInput.id="num";
numInput.type="text";

//Creamos campos para la fecha de vencimiento
let fechaLabel = document.createElement("label");
fechaLabel.textContent="Fecha de vencimiento: ";
let fehcaInput = document.createElement("input");
fehcaInput.id="venc";
fehcaInput.type="text";

//Creamos campos para el CVV
let cvvLabel = document.createElement("label");
cvvLabel.textContent="CVV: ";
let cvvInput = document.createElement("input");
cvvInput.id="cvv";
cvvInput.type="text";

//Creamos input de los datos
let input = document.createElement("input");
input.type="button";
input.id="boton";
input.value="Enviar";
input.disabled=true;

form.append(nombreLabel,nombreInput,numLabel,numInput,fechaLabel,fehcaInput,cvvLabel,cvvInput,input);

doc.append(title,form);

function addEventListener() {
    let nombre= document.getElementById('nombre');
    nombre.addEventListener("blur", (event)=>{checkNombre(event.target); checkAllFields();})
    let numero= document.getElementById('num');
    numero.addEventListener("blur", (event)=>{checkNumero(event.target); checkAllFields();})
    let venc= document.getElementById('venc');
    venc.addEventListener("blur", (event)=>{checkVencimiento(event.target), checkAllFields();})
    let cvv= document.getElementById('cvv');
    cvv.addEventListener("blur", (event)=>{checkCVV(event.target); checkAllFields();})
}

function cambiarColor(elemento,tipo) {
    if (tipo) {
        elemento.setAttribute('class','bien');
    }else{
        elemento.setAttribute('class','mal');
    }
}


function checkNombre(element) {
    let re = new RegExp("^[A-Za-z ]{1,20}$");
    if (element.value.trim() !== "") {
        if (re.test(element.value)) {
            if(element.value ==="MasterCard" ||element.value ==="Visa" || element.value ==="American Express"){
                cambiarColor(element,true);
            }else{
                cambiarColor(element,false);
            }
        }else{
            cambiarColor(element,false);
        }
    }
    
}

function checkNumero(element) {
    let masterRe = new RegExp("^5[1-5][0-9]{14}$");
    let visaRe = new RegExp("^[4][0-9]{12,15}$");
    let americanRe = new RegExp("^3[4,7][0-9]{13}$");
    switch (document.getElementById("nombre").value) {
        case "MasterCard":
            if (element.value.trim() !== "") {
                if (masterRe.test(element.value)) {
                        cambiarColor(element,true);
                }else{
                    cambiarColor(element,false);
                }
            }
            break;
        case "Visa":
            if (element.value.trim() !== "") {
                if (visaRe.test(element.value)) {
                        cambiarColor(element,true);
                }else{
                    cambiarColor(element,false);
                }
            }
            break;
        case "American Express":
            if (element.value.trim() !== "") {
                if (americanRe.test(element.value)) {
                        cambiarColor(element,true);
                }else{
                    cambiarColor(element,false);
                }
            }
            break;
        default:
            cambiarColor(element,false);
            break;
    }
}

function checkVencimiento(element) {
    let re = new RegExp("^(0[0-9]|1[0-2])\/[0-9]{2}$");
    if (element.value.trim !=="") {
        if(re.test(element.value)){
            cambiarColor(element,true);
        }else{
            cambiarColor(element,false);
        }
    }
}

function checkCVV(element) {
    let re = new RegExp("^[0-9]{3}$");
    if (element.value.trim !=="") {
        if(re.test(element.value)){
            cambiarColor(element,true);
        }else{
            cambiarColor(element,false);
        }
    }
}

function checkAllFields() {
    let allFieldsValid = true;
    
    // Verifica si todos los campos tienen la clase "bien"
    let fields = ['nombre', 'num', 'venc', 'cvv'];
    fields.forEach((fieldId) => {
        let field = document.getElementById(fieldId);
        if (!field.classList.contains('bien')) {
            allFieldsValid = false;
        }
    });

    if (allFieldsValid) {
        document.getElementById('boton').disabled = false;
    } else {
        document.getElementById('boton').disabled = true;
    }
}


addEventListener();