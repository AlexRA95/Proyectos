async function getJuguetes() {
    const apiUrl = "http://127.0.0.1:8000/juguetes/";

    const myHeaders = {
        "Content-Type": "application/json",
    };

    try {    
        const response = await fetch(apiUrl,{
            method: "GET",
            headers: myHeaders,
        });
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }

        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error('Error al obtener las noticias:', error);
    }
}

async function getReyes() {
    const apiUrl = "http://127.0.0.1:8000/reyes_magos/";

    const myHeaders = {
        "Content-Type": "application/json",
    };

    try {    
        const response = await fetch(apiUrl,{
            method: "GET",
            headers: myHeaders,
        });
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }

        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error('Error al obtener las noticias:', error);
    }
}

async function getUsers() {
    const apiUrl = "http://127.0.0.1:8000/usuarios/";
    const myHeaders = {
        "Content-Type": "application/json",
    };
    try {    
        const response = await fetch(apiUrl,{
            method: "GET",
            headers: myHeaders,
        });
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener las noticias:', error);
    }
}

async function getCartasbyUserID(userID) {
    const apiUrl = `http://127.0.0.1:8000/cartas/${userID}`;
    const myHeaders = {
        "Content-Type": "application/json",
    };
    try {    
        const response = await fetch(apiUrl,{
            method: "GET",
            headers: myHeaders,
        });
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener las cartas:', error);
    }
}

async function delCarta(cartaId) {
    const apiUrl = `http://127.0.0.1:8000/cartas/${cartaId}`;

    const myHeaders = {
        "Content-Type": "application/json",
    };

    try {    
        const response = await fetch(apiUrl,{
            method: "DELETE",
            headers: myHeaders,
        });
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
        //Una vez borrado el usuario volvemos a cargar la página
        generarCartasUser();
        
    } catch (error) {
        console.error('Error al obtener las noticias:', error);
    }
}

async function generarUsers() {
    let users = await getUsers();
    if(users && users.length > 0){
        let selectUser = document.getElementById("usuario");
        users.forEach(user=>{
            let option = document.createElement('option');
            option.value= user.nombre;
            option.textContent= user.nombre;
            selectUser.appendChild(option);
        });
        let selectUserCartas = document.getElementById("usuarioCartas");
        users.forEach(user=>{
            let option = document.createElement('option');
            option.value= user.id;
            option.textContent= user.nombre;
            selectUserCartas.appendChild(option);
        });
    }
}

async function getUsersByNombre(nombre) {
    const apiUrl = `http://127.0.0.1:8000/usuarios/${nombre}`;
    const myHeaders = {
        "Content-Type": "application/json",
    };
    try {    
        const response = await fetch(apiUrl,{
            method: "GET",
            headers: myHeaders,
        });
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener las noticias:', error);
    }
}

async function getReyesByNombre(nombre) {
    const apiUrl = `http://127.0.0.1:8000/reyes_magos/${nombre}`;
    const myHeaders = {
        "Content-Type": "application/json",
    };
    try {    
        const response = await fetch(apiUrl,{
            method: "GET",
            headers: myHeaders,
        });
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener las noticias:', error);
    }
}

async function getJugueteByNombre(nombre) {
    const apiUrl = `http://127.0.0.1:8000/juguetes/${nombre}`;
    const myHeaders = {
        "Content-Type": "application/json",
    };
    try {    
        const response = await fetch(apiUrl,{
            method: "GET",
            headers: myHeaders,
        });
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener las noticias:', error);
    }
}

async function generarReyes() {
    let reyes = await getReyes();
    if(reyes && reyes.length > 0){
        let selectRey = document.getElementById("reyes");
        reyes.forEach(rey=>{
            let option = document.createElement('option');
            option.value= rey.nombre;
            option.textContent= rey.nombre;
            selectRey.appendChild(option);
        });
    }
}

async function generarJuguetes() {
    let juguetes = await getJuguetes();
    if (juguetes && juguetes.length > 0) {
        let contenedorJuguetes = document.getElementById("juguetes");

        // Crear tabla sin encabezado
        let tabla = document.createElement("table");
        tabla.classList.add("table", "table-striped", "table-bordered");

        // Crear cuerpo de la tabla
        let tbody = document.createElement("tbody");

        juguetes.forEach(juguete => {
            let fila = document.createElement("tr");

            // Celda de la imagen
            let celdaIMG = document.createElement("td");
            celdaIMG.classList.add("text-center"); // Centra el contenido
            let img = document.createElement('img');
            img.src = juguete.imagen;
            img.style.maxWidth = "100px";
            img.style.height = "auto";
            celdaIMG.appendChild(img);
            fila.appendChild(celdaIMG);

            // Celda del nombre
            let celdaNombre = document.createElement("td");
            celdaNombre.classList.add("text-center"); // Centra el texto
            celdaNombre.textContent = juguete.nombre;
            fila.appendChild(celdaNombre);

            // Celda de acción (botón)
            let celdaAccion = document.createElement("td");
            celdaAccion.classList.add("text-center"); // Centra el contenido
            let botonSeleccionar = document.createElement("button");

            // Ícono en el botón
            let icon = document.createElement('i');
            icon.classList.add("bi", "bi-plus");
            botonSeleccionar.appendChild(icon);

            botonSeleccionar.classList.add("btn", "btn-success", "rounded-circle");
            botonSeleccionar.addEventListener("click", () => {
                document.getElementById('enviar').disabled = false;
                let regalos = document.getElementById('regalos');

                // Crear un div para el juguete seleccionado
                let regaloDiv = document.createElement('div');
                regaloDiv.classList.add("regalo-item", "d-flex", "align-items-center", "mb-3");

                // Imagen del juguete
                let regaloImg = document.createElement('img');
                regaloImg.src = juguete.imagen;
                regaloImg.style.maxWidth = "50px";
                regaloImg.style.height = "auto";
                regaloImg.classList.add("me-3");

                // Nombre del juguete
                let regaloNombre = document.createElement('p');
                regaloNombre.textContent = juguete.nombre;

                // Botón para eliminar el regalo
                let botonEliminar = document.createElement('button');
                botonEliminar.classList.add("btn", "btn-danger", "ms-auto");
                botonEliminar.textContent = "Eliminar";
                botonEliminar.addEventListener("click", () => {
                    regaloDiv.remove(); // Elimina el div del juguete seleccionado
                });

                // Añadir imagen, nombre y botón al div
                regaloDiv.appendChild(regaloImg);
                regaloDiv.appendChild(regaloNombre);
                regaloDiv.appendChild(botonEliminar);

                // Agregar el div al contenedor de regalos
                regalos.appendChild(regaloDiv);
            });
            celdaAccion.appendChild(botonSeleccionar);
            fila.appendChild(celdaAccion);

            tbody.appendChild(fila);
        });

        tabla.appendChild(tbody);

        // Limpiar el contenedor y agregar la nueva tabla
        contenedorJuguetes.innerHTML = ""; // Limpia cualquier contenido anterior
        contenedorJuguetes.appendChild(tabla);
    }
}

async function generarCarta() {
    let carta = document.getElementById('carta');
    carta.innerHTML="";
    let titulo = document.createElement('h1');
    titulo.textContent='Querido Rey Mago '+ document.getElementById('reyes').value +':';
    carta.appendChild(titulo);

    let user = await getUsersByNombre(document.getElementById('usuario').value);
    let contenido= document.createElement('p');
    contenido.textContent="Soy " + user.nombre + " y tengo " + user.edad + " años. Me gustaría tener estas navidades : ";
    carta.appendChild(contenido);

    let contenedor=document.createElement('div');
    contenedor.id="regalos";
    carta.appendChild(contenedor);

    let fin = document.createElement('p');
    fin.textContent="Gracias";
    fin.classList.add("text-center");
    carta.appendChild(fin);
}

document.getElementById('enviar').addEventListener('click',async () => {
    //El input de usuarios tiene de ID #usuario
    let userInput = document.getElementById('usuario');
    let user = await getUsersByNombre(userInput.value);
    //El input de los reyes tiene de ID #reyes
    let reyesInput = document.getElementById('reyes');
    let rey = await getReyesByNombre(reyesInput.value);
    //Para los juguetes usaremos el div que los almacena en la carta y recorreremos los hijos
    let regalosDiv = document.getElementById('regalos');
    let juguetesNombres = Array.from(regalosDiv.children).map(regalo => {
        return regalo.querySelector('p')?.textContent; // El texto del nombre
    });

    // Convertir los nombres de los juguetes en IDs
    let juguetesIDs = await Promise.all(
        juguetesNombres.map(async (nombre) => {
            let juguete = await getJugueteByNombre(nombre);
            return juguete.id;
        })
    );

    // Llamar a postCarta con los IDs del usuario, rey, y juguetes
    await postCarta(user.id, rey.id, juguetesIDs);
});


async function postCarta(userID, reyID,juguetesID) {
    const apiUrl = "http://127.0.0.1:8000/cartas/";

    const myHeaders = {
        "Content-Type": "application/json",
    };

    try {    
        const response = await fetch(apiUrl,{
            method: "POST",
            body: JSON.stringify({"usuario_id": userID ,"rey_mago_id": reyID, "juguetes_ids": juguetesID}),
            headers: myHeaders,
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }

        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error('Error al obtener al subir la carta:', error);
    }
}

async function generarCartasUser() {
    let usuarioID = document.getElementById('usuarioCartas').value;

    try {
        // Obtener las cartas del usuario
        let response = await getCartasbyUserID(usuarioID);
        let cartas = response.result; // Extrae el array "result"
        if (!Array.isArray(cartas)) {
            throw new Error("El formato del JSON no es un array.");
        }

        let tablaCartas = document.getElementById("tablaCartas");

        // Limpiar contenido previo
        tablaCartas.innerHTML = "";

        // Crear tabla
        let tabla = document.createElement("table");
        tabla.classList.add("table", "table-striped", "table-bordered");

        // Crear encabezado
        let thead = document.createElement("thead");
        let encabezado = document.createElement("tr");
        ["ID", "Rey Mago", "Juguetes", "Acciones"].forEach(texto => {
            let th = document.createElement("th");
            th.textContent = texto;
            encabezado.appendChild(th);
        });
        thead.appendChild(encabezado);
        tabla.appendChild(thead);

        // Crear cuerpo de la tabla
        let tbody = document.createElement("tbody");
        cartas.forEach(carta => {
            let fila = document.createElement("tr");

            // Columna de ID de la carta
            let celdaID = document.createElement("td");
            celdaID.textContent = carta.id;
            fila.appendChild(celdaID);

            // Columna del Rey Mago
            let celdaRey = document.createElement("td");
            celdaRey.textContent = carta.rey_mago_id; // Muestra el ID del Rey Mago
            fila.appendChild(celdaRey);

            // Columna de los juguetes
            let celdaJuguetes = document.createElement("td");
            carta.juguetes_ids.forEach(juguete => {
                let jugueteElemento = document.createElement("p");
                jugueteElemento.textContent = juguete.nombre; // Muestra el nombre del juguete
                celdaJuguetes.appendChild(jugueteElemento);
            });
            fila.appendChild(celdaJuguetes);

            // Columna de acciones
            let celdaAccion = document.createElement("td");
            let botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Borrar";
            botonEliminar.classList.add("btn", "btn-danger");
            botonEliminar.addEventListener("click", async () => {
                await delCarta(carta.id); // Llama a la función para eliminar la carta
            });
            celdaAccion.appendChild(botonEliminar);
            fila.appendChild(celdaAccion);

            tbody.appendChild(fila);
        });
        tabla.appendChild(tbody);

        // Añadir tabla al contenedor
        tablaCartas.appendChild(tabla);

    } catch (error) {
        console.error("Error generando la tabla de cartas:", error);
    }
}


// Escuchar clic en el botón de Ver Cartas
document.getElementById('verCartas').addEventListener('click', generarCartasUser);

document.addEventListener('input', generarCarta);

generarUsers();
generarReyes();
generarJuguetes();

//Hacemos que el botón de enviar no se pueda usar hasta que se añada al menos 1 juguete
document.getElementById('enviar').disabled = true;