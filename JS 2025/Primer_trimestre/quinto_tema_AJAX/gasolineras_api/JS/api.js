let lista = [712, 1579, 644];
lista.forEach(element => {
    // Crear una instancia de XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // Configurar la solicitud: método, URL y si es asincrónica (true)
    xhr.open('GET', 'https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroMunicipio/' + element, true);

    // Definir una función que se ejecutará cuando cambie el estado de la solicitud
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) { // 4 significa "completado", 200 es "OK"
            // La respuesta del servidor se encuentra en xhr.responseText
            var data = JSON.parse(xhr.responseText); // Convertir JSON en objeto de JavaScript
            data.ListaEESSPrecio.forEach(element => {
                crearCaja(element);
            });
        }
    };

    // Enviar la solicitud
    xhr.send();
});


function crearCaja(element) {
    const cuerpoDiv = document.createElement("div");
    cuerpoDiv.id = "cuerpo";
    cuerpoDiv.classList.add("col-3", "border", "border-primary", "m-3");

    // Función auxiliar para crear párrafos de información
    const crearParrafo = (label, value, id) => {
            console.log(value);
            const p = document.createElement("p");
            const strong = document.createElement("strong");
            strong.textContent = `${label}: `;
            const span = document.createElement("span");
            span.id = id;
            span.textContent = (value==="€"?"No disponible":value);
            p.appendChild(strong);
            p.appendChild(span);
            return p;
        
    };

    // Crear el título (Rótulo)
    const rotuloH3 = document.createElement("h3");
    rotuloH3.id = "rotulo";
    rotuloH3.classList.add("text-primary","text-center");
    rotuloH3.textContent = element.Rótulo;
    cuerpoDiv.appendChild(rotuloH3);

    // Campos adicionales
    cuerpoDiv.appendChild(crearParrafo("Dirección", element.Dirección, "direccion"));
    cuerpoDiv.appendChild(crearParrafo("Localidad", element.Localidad, "localidad"));
    cuerpoDiv.appendChild(crearParrafo("Horario", element.Horario, "horario"));
    cuerpoDiv.appendChild(crearParrafo("Gasolina 95", element["Precio Gasolina 95 E5"]+ '€', "gasolina95"));
    cuerpoDiv.appendChild(crearParrafo("Gasoleo A", element["Precio Gasoleo A"]+ '€', "gasoleoA"));
    cuerpoDiv.appendChild(crearParrafo("Gasoleo B", element["Precio Gasoleo B"]+ '€', "gasoleoB"));
    cuerpoDiv.appendChild(crearParrafo("Gasolina 98", element["Precio Gasolina 98 E5"]+ '€', "gasolina98"));

    // Agregar el contenedor principal al documento
    document.getElementById('cartas').appendChild(cuerpoDiv);

}