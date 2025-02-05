//Función para buscar el valor de una cookie concreta
function buscarCookie(nombre) {
    let cookies = document.cookie.split(";");
    let valor=null;
    for (let i = 0; i < cookies.length; i++) {
        let contenido=cookies[i].split("=");
        if (contenido[0] === nombre) {
            valor=contenido[1];
        }
    }
    return valor;
}
//Recordar nombre de usuario
function saludarUser() {
    if (buscarCookie("user")) {
        alert("Hola " + buscarCookie("user"));
    }
}

document.getElementById("crear").addEventListener('click',()=>{
    if (document.getElementById("usuario").value.length !== 0) {
        document.cookie="user="+document.getElementById("usuario").value;
    }
});

//Recordar y cambiar de modo oscuro a modo claro
document.addEventListener('DOMContentLoaded', (event) => {
    saludarUser();
    const htmlElement = document.documentElement;
    const switchElement = document.getElementById('darkModeSwitch');
    //Buscamos la cookie con el valor del modo de la página
    
    //Si no la encontramos, por defecto el valor será el modo oscuro
    const currentTheme = buscarCookie("mode") || 'dark';
    htmlElement.setAttribute('data-bs-theme', currentTheme);
    switchElement.checked = currentTheme === 'dark';

    switchElement.addEventListener('change', function () {
        if (this.checked) {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            document.cookie="mode=dark";
        } else {
            htmlElement.setAttribute('data-bs-theme', 'light');
            document.cookie="mode=light";
        }
    });
});

document.getElementById("eliminar").addEventListener('click',()=>{
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        document.cookie=cookies[i]+"; max-age=0";
    }
});