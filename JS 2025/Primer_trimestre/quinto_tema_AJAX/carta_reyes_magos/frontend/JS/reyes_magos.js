function checkNombre(element) {
    const re = /^[a-zA-Z]{1,10}$/;
    if (element.value.trim() !=="") {
        if(re.test(element.value)){
            cambiarColor(element,true);
        }else{
            cambiarColor(element,false);
        }
    }
}

function cambiarColor(element, esValido) {
    if (esValido) {
        element.classList.add('bien');
        element.classList.remove('mal');
    } else {
        element.classList.add('mal');
        element.classList.remove('bien');
    }
}

async function checkAllFields() {
    checkNombre(document.getElementById('nombre'));

    let allFieldsValid = true;
    
    // Verifica si todos los campos tienen la clase "bien"
    let fields = ['nombre'];
    fields.forEach((fieldId) => {
        let field = document.getElementById(fieldId);
        if (!field.classList.contains('bien')) {
            allFieldsValid = false;
        }
    });
    if (allFieldsValid) {
        postReyes(document.getElementById('nombre').value);
    } else {
        //Si todos los campos no son validos se manda un alert de que algun campo es incorrecto
        alert("Algun campo introducido no es valido");
    }
}

document.getElementById('enviar').addEventListener('click', function(event) {
    event.preventDefault();
    checkAllFields();
});



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

async function postReyes(nombre) {
    const apiUrl = "http://127.0.0.1:8000/reyes_magos/";

    const myHeaders = {
        "Content-Type": "application/json",
    };

    try {    
        const response = await fetch(apiUrl,{
            method: "POST",
            body: JSON.stringify({"nombre": nombre }),
            headers: myHeaders,
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }

        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error('Error al obtener al subir el usuario:', error);
    }
}

async function delReyes(id) {
    const apiUrl = `http://127.0.0.1:8000/reyes_magos/${id}`;

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
        //Una vez borrado el rey volvemos a cargar la página
        tablaReyes();
        
    } catch (error) {
        console.error('Error al obtener las noticias:', error);
    }
}

async function tablaReyes() {
    let reyes = await getReyes();

    if(reyes && reyes.length > 0){
        //Parte de crear THEAD
        let cont = document.getElementById("contenedor");
        let tableCont = document.createElement('div');
        tableCont.classList.add('table-responsive','col-12', 'mt-3' , 'col-lg-6', 'bg-light', 'border', 'border-dark-subtle', 'p-3', 'rounded-2');
        tableCont.innerHTML="";
        let table = document.createElement('table');
        table.classList.add("table", "table-bordered", "table-striped");
        let thead = document.createElement('thead');
        let theadFila = document.createElement('tr');
        let theadNombre= document.createElement('th');
        theadNombre.textContent="Nombre";
        let theadAcciones= document.createElement('th');
        theadAcciones.textContent="Acciones";
        theadFila.appendChild(theadNombre);
        theadFila.appendChild(theadAcciones);
        thead.appendChild(theadFila);
        table.appendChild(thead);

        let tbody= document.createElement('tbody');
        reyes.forEach(reyes=>{
            let fila = document.createElement('tr');
            let nombre= document.createElement('td');
            nombre.textContent=reyes.nombre;
            let acciones = document.createElement('td');
            let deleteButton = document.createElement('button');
            let i = document.createElement('i');
            i.classList.add('bi','bi-trash');
            deleteButton.classList.add("btn", "btn-danger", "btn-sm");
            deleteButton.appendChild(i);

            deleteButton.addEventListener("click", ()=> delReyes(reyes.id));

            acciones.appendChild(deleteButton);

            fila.appendChild(nombre);
            fila.appendChild(acciones);
            tbody.appendChild(fila);
        });

        table.appendChild(tbody);
        tableCont.appendChild(table);
        cont.appendChild(tableCont);

    }
}

tablaReyes();