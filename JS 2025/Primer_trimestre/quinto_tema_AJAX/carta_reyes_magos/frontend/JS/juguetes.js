function checkNombre(element) {
    const re = /^[a-zA-Z ]{1,20}$/;
    if (element.value.trim() !=="") {
        if(re.test(element.value)){
            cambiarColor(element,true);
        }else{
            cambiarColor(element,false);
        }
    }
}

function checkFile(element) {
        if(element.files.length !== 0){
            cambiarColor(element,true);
        }else{
            cambiarColor(element,false);
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

function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
}

async function checkAllFields() {
    checkNombre(document.getElementById('nombre'));
    checkFile(document.getElementById('imagen'));

    let allFieldsValid = true;
    
    // Verifica si todos los campos tienen la clase "bien"
    let fields = ['nombre','imagen'];
    fields.forEach((fieldId) => {
        let field = document.getElementById(fieldId);
        if (!field.classList.contains('bien')) {
            allFieldsValid = false;
        }
    });
    if (allFieldsValid) {
        const imagen = document.getElementById('imagen').files[0];
        const base64Image = await toBase64(imagen);
        postJuguetes(document.getElementById('nombre').value, base64Image);
    } else {
        //Si todos los campos no son validos se manda un alert de que algun campo es incorrecto
        alert("Algun campo introducido no es valido");
    }
}

document.getElementById('enviar').addEventListener('click', function(event) {
    event.preventDefault();
    checkAllFields();
});



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

async function postJuguetes(nombre,img) {
    const apiUrl = "http://127.0.0.1:8000/juguetes/";

    const myHeaders = {
        "Content-Type": "application/json",
    };

    try {    
        const response = await fetch(apiUrl,{
            method: "POST",
            body: JSON.stringify({"nombre": nombre ,"imagen": img}),
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

async function delJuguetes(id) {
    const apiUrl = `http://127.0.0.1:8000/juguetes/${id}`;

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

async function tablaJuguetes() {
    let juguetes = await getJuguetes();

    if(juguetes && juguetes.length > 0){
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
        juguetes.forEach(juguetes=>{
            let fila = document.createElement('tr');
            let nombre= document.createElement('td');
            nombre.textContent=juguetes.nombre;
            let imgcol = document.createElement('td');
            let img = document.createElement('img');
            img.src=juguetes.imagen;
            img.style.maxWidth = "100px";
            img.style.height = "auto";
            imgcol.appendChild(img);
            let acciones = document.createElement('td');
            let deleteButton = document.createElement('button');
            let i = document.createElement('i');
            i.classList.add('bi','bi-trash');
            deleteButton.classList.add("btn", "btn-danger", "btn-sm");
            deleteButton.appendChild(i);

            deleteButton.addEventListener("click", ()=> delJuguetes(juguetes.id));

            acciones.appendChild(deleteButton);

            fila.appendChild(nombre);
            fila.appendChild(imgcol);
            fila.appendChild(acciones);
            tbody.appendChild(fila);
        });

        table.appendChild(tbody);
        tableCont.appendChild(table);
        cont.appendChild(tableCont);

    }
}

tablaJuguetes();