/* Crea la base de datos, la estructura de la tabla, 
y la inserción de registros cada vez que se hace clic en el botón */

let buttonElement = document.getElementById("clickButton");
buttonElement.addEventListener("click", addClick);

//Definen el nombre de la base de datos, la versión y el nombre de la tabla o objectStore
const INDEXDB_NAME = "clickBD";
const INDEXDB_VERSION = 1;
const STORE_NAME = "cliksStore";

let db = null; //Se usará para guardar la referencia a la base de datos abierta.
let counter = 1; //Es un contador que se guardará en la base de datos y se incrementará con cada clic.

// Métodos principales de IndexedDB
/*
indexedDB.open                       //Para abrir la base de datos
'objectStore'.add("data");           //Lo mismo que put, pero si ya hay un valor con la misma clave, la petición falla y se genera un error con el nombre "ConstraintError"
'objectStore'.get("key");            //busca el primer valor, por clave o por rango.
'objectStore'.getAll();              //busca todos los valores, limitado a la cantidad count si esta se especifica.
'objectStore'.put("updatedData");    //Agrega value al almacén. La clave key debe ser suministrada solo si al almacén no se le asignó la opción keyPath o autoIncrement. Si ya hay un valor con la misma clave, este será reemplazado.
'objectStore'.delete("id");          //busca a través de una consulta valores para borrarlos
*/

//Abre la base de datos clickBD y asegura que existe la estructura necesaria para almacenar datos.
function openDB() {
  // Promesa para manejar operaciones asíncronas
  return new Promise((resolve, reject) => {
    // Solicitud para abrir la base de datos
    let request = indexedDB.open(INDEXDB_NAME, INDEXDB_VERSION);

    // Evento que indica que la base de datos está lista.
    request.onsuccess = (event) => {
      // Referencia a la BD
      db = event.target.result;
      // Indica que la promesa se completó con éxito
      resolve();
    };

    // Evento que indica que apertura ha fallado.
    request.onerror = (event) => {
      // Indica que la promesa falló
      reject(event.target.error);
    };
    // Evento que se activa cuando la versión cambia o se crea por primera vez
    request.onupgradeneeded = (event) => {
      db = event.target.result;

      if (!db.objectStoreNames.contains(STORE_NAME)) {
        // Crea un almacen de objetos (tabla), campo id como clave primaria y autoincremental
        let objectStore = db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    };
  });
}
/*  
onsuccess: Se ejecuta cuando la base de datos abre con éxito, almacenando la referencia en db y 
resolviendo la promesa.
onerror: Captura errores al abrir la base de datos.
onupgradeneeded: Solo se ejecuta la primera vez que se crea la base de datos o si su versión cambia,
configurando la tabla cliksStore con un campo id como clave primaria autoincremental.
*/

// Función para añadir un tipo de datos concreto a la BD (Agrega el dato en respuesta al clic)
function addClick() {
  // Conexión y apertura de la BD
  openDB()
    .then(() => {
      // Añadimos un dato
      let data = { clicked: counter };
      addData(data)
        .then(() => {
          // Si se ha añadido correctamente
          counter++;
        })
        .catch((error) => {
          console.error("Error addData: " + error);
        });
    })
    .catch((error) => {
      console.error("Error openDB: " + error);
    });
}
/* 
Llama a openDB() para asegurar que la base de datos esté abierta antes de guardar datos.
Crea un objeto de datos data con el valor actual de counter.
Llama a addData(data) para guardar el objeto en la base de datos.
Si se guarda con éxito, incrementa counter. Si no, muestra un error.
*/

// Función genérica para añadir datos a la BD
// Inserta el dato en la tabla cliksStore de forma asíncrona y en modo readwrite (lectura y escritura )
function addData(data) {
  if (!db) {
    throw new Error("La base de datos no está abierta.");
  }

  return new Promise((resolve, reject) => {
    let transaction = db.transaction(STORE_NAME, "readwrite");
    let objectStore = transaction.objectStore(STORE_NAME);
    let request = objectStore.add(data);

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
}
/*
Crea una transacción en la base de datos para poder leer y escribir en la tabla.
Obtiene una referencia a objectStore, la tabla donde se guardarán los datos.
Usa add(data) para insertar el dato.
onsuccess: Resuelve la promesa si el dato se ha guardado correctamente.
onerror: Rechaza la promesa si hay un error.
*/
