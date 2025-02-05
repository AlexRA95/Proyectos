
document.getElementById("enviar").addEventListener('click', () => {
    // Uso de la promesa con .then() y .catch()
    inicioSesion(document.getElementById('nombre').value, document.getElementById('contra').value)
        .then((message) => {
            console.log(message); // Se ejecuta si la promesa se resuelve
        })
        .catch((error) => {
            console.error(error); // Se ejecuta si la promesa se rechaza
        })
        .finally(() => { console.log("Proceso finalizado") });
});

function inicioSesion(usuario, contra) {
    return new Promise((resolve, reject) => {
        console.log("Iniciando sesión...");
        setTimeout(() => {
            if (usuario === "admin" && contra === "1234") {
                resolve("Sesión iniciada correctamente");
            } else {
                reject("Error al iniciar sesión");
            }
        }, 3000); // Simula una demora de 2 segundos
    });
}


