function addEventListener() {
    let nombre= document.getElementById('formularioNombre');
    nombre.addEventListener("blur", (event)=>{checkNombre(event.target)})
    let apellido= document.getElementById('formularioApe');
    apellido.addEventListener("blur", (event)=>{checkApe(event.target)})
    let telf= document.getElementById('formularioTel');
    telf.addEventListener("blur", (event)=>{checkTelf(event.target)})
    let pass= document.getElementById('formularioPass');
    pass.addEventListener("blur", (event)=>{checkPass(event.target)})
    let pass2= document.getElementById('formularioPassR');
    pass2.addEventListener("blur", (event)=>{checkPass2(event.target)})
    let checkedCheck = document.getElementById("botonRegistrar");
    checkedCheck.addEventListener("change",function (event) {
        if (event.target.checked) {
            console.log("Se ha dado al check")
        }
    })
}

function checkNombre(element) {
    let re = new RegExp("^[A-Za-z ]{1,20}$");
    if (re.test(element.value)) {
        console.log("Nombre valido");
    }else{
        console.log("Nombre no valido");
    }
}

function checkApe(element) {
    let re = new RegExp("^[A-Za-z ]{1,20}$");
    if (re.test(element.value)) {
        console.log("Apellido valido");
    }else{
        console.log("Apellido no valido");
    }
}

function checkTelf(element) {
    let re = new RegExp("^[0-9]{9}$");
    if (re.test(element.value)) {
        console.log("Telefono valido");
    }else{
        console.log("Telefono no valido");
    }
}

function checkPass(element) {
    let re = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$");
    if (re.test(element.value)) {
        console.log("Contraseña valida");
    }else{
        console.log("Contraseña no valida");
    }
}

function checkPass2(element) {
    let re = document.getElementById("formularioPass").value;
    if (re === element.value) {
        console.log("Contraseña valida");
    }else{
        console.log("Contraseña no valida");
    }
}

addEventListener();

