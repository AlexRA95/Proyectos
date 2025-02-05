document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault();
});

function crearTabla() {
    let filas = document.getElementById("filas").value;
    let columnas = document.getElementById("columnas").value;
    let cuerpo = document.getElementById('cuerpo');
    cuerpo.innerHTML = ''; // Limpiar la tabla anterior

    for (let i = 0; i < Number(filas); i++) {
        let fila = document.createElement('div');
        fila.className = 'fila';

        for (let j = 0; j < Number(columnas); j++) {
            let cuadrado = document.createElement('div');
            cuadrado.className = 'cuadrado';
            fila.appendChild(cuadrado);
        }

        cuerpo.appendChild(fila);
    }
}

document.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("cuadrado")) {
        console.log( );
        event.target.style.background = "rgb("+ Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255)+ "," + Math.floor(Math.random()*255)+")";
    }
});

document.addEventListener("mouseout", (event) => {
    if (event.target.classList.contains("cuadrado")) {
        setTimeout(()=>{event.target.style.background = "none"},300)
    }
});

document.getElementById("btn").onclick = crearTabla;