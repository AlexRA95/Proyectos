document.getElementById("agregar").addEventListener('click', () => {
    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value; 
    // Comprobamos si existe ya el item products, sino creamos un array desde 0
    let productos = JSON.parse(localStorage.getItem("products")) || [];
    //Añadimos el nuevo producto al array
    let nuevoProducto = new Producto(nombre, precio);
    productos.push(nuevoProducto);
    //Guardamos el array en LocalStorage
    localStorage.setItem("products", JSON.stringify(productos));
    document.getElementById("form").reset();
});

//Objeto producto
class Producto {
    constructor(nombre,precio) {
        this.nombre=nombre;
        this.precio=precio;
    };

}

function mostrar() {
    let cont = document.getElementById("mostrarProd");
    cont.innerHTML="";//Borramos contenido de mostrar
    let productos = JSON.parse(localStorage.getItem("products"));
    //Recorremos array de productos y añadimos fila
    for (let i = 0; i < productos.length; i++) {
        let row = document.createElement('div');
        row.classList.add("d-flex", "flex-row", "justify-content-around","mt-3")
        let nombre = document.createElement('p');
        let precio = document.createElement('p');
        let btn = document.createElement('button');
        btn.classList.add("btn","btn-primary");
        btn.id="eliminar";
        btn.textContent="Eliminar";
        nombre.textContent = "Nombre-> " + productos[i].nombre;
        precio.textContent=" Precio-> " + productos[i].precio;
        row.appendChild(nombre);
        row.appendChild(precio)
        row.appendChild(btn);
        cont.appendChild(row);

        btn.addEventListener('click',()=>{
            eliminar(i);
        });
    }
}

document.getElementById("mostrar").addEventListener('click',mostrar);

function eliminar(index) {
    let productos = JSON.parse(localStorage.getItem("products"));
    productos.splice(index,1);
    localStorage.setItem("products", JSON.stringify(productos));
    mostrar();
}
