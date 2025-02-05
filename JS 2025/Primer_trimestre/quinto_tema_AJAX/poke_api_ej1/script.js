function crearDOM() {
    let select = document.createElement('select');
    select.id = "pokemon";
    let defecto = document.createElement('option');
    defecto.value = 'nada';
    defecto.textContent = "Elige un PKM";
    select.appendChild(defecto);
    // Crear una instancia de XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Configurar la solicitud: método, URL y si es asincrónica (true)
    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon?limit=1302', true);

    // Definir una función que se ejecutará cuando cambie el estado de la solicitud
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) { // 4 significa "completado", 200 es "OK"
            // La respuesta del servidor se encuentra en xhr.responseText
            var data = JSON.parse(xhr.responseText); // Convertir JSON en objeto de JavaScript
            data.results.forEach(element => {
                let option = document.createElement('option');
                option.value = element.name;
                option.textContent = element.name;
                select.appendChild(option);
            });

        }
    };
    // Enviar la solicitud
    xhr.send();
    document.getElementById("cont").appendChild(select);
    let datos = document.createElement('div');
    datos.id = "datos";
    document.getElementById('cont').appendChild(datos);


}
crearDOM();

document.getElementById("pokemon").addEventListener('change', (event) => {
    if (event.target.value !== "nada") {
        // Crear una instancia de XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Configurar la solicitud: método, URL y si es asincrónica (true)
    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + event.target.value, true);

    // Definir una función que se ejecutará cuando cambie el estado de la solicitud
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) { // 4 significa "completado", 200 es "OK"
            // La respuesta del servidor se encuentra en xhr.responseText
            var data = JSON.parse(xhr.responseText); // Convertir JSON en objeto de JavaScript
            document.getElementById('datos').innerHTML = "";
            let p = document.createElement('p');
            p.textContent = "Nombre: " + data.forms[0].name;
            document.getElementById('datos').appendChild(p);
            let habilidadesP = document.createElement('p');
            habilidadesP.textContent = "Habilidades: ";
            let listaHab = document.createElement('ul');
            data.abilities.forEach(element => {
                let hab = document.createElement('li');
                hab.textContent = element.ability.name;
                listaHab.appendChild(hab);
            });
            document.getElementById('datos').appendChild(listaHab);
            let img = document.createElement('img');
            img.src = data.sprites.other['official-artwork'].front_default;
            document.getElementById('datos').appendChild(img);

        }
    };
    // Enviar la solicitud
    xhr.send();
    }else{
        document.getElementById('datos').innerHTML = "";
    }
    
});




