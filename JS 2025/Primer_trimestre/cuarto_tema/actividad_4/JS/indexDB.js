const INDEXDB_NAME = "notasRA";
const INDEXDB_VERSION = 1;
const STORE_NAME = "notas";

let db = null;

function crearBD() {
    return new Promise((resolve, reject) => {
        let request = indexedDB.open(INDEXDB_NAME, INDEXDB_VERSION);

        request.onsuccess = (event) => {
            db = event.target.result;
            resolve();
        };

        request.onerror = (event) => {
            reject(event.target.error);
        };

        request.onupgradeneeded = (event) => {
            db = event.target.result;

            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, {
                    keyPath: "id",
                    autoIncrement: true,
                });
            }
        };
    });
}

crearBD();

document.getElementById("testText").addEventListener('blur', (event) => {
    if (db) { 
        let data = { texto: event.target.value };
        addData(data)
            .then(() => {
                console.log("Dato añadido correctamente");
            })
            .catch((error) => {
                console.error("Error addData: " + error);
            });
    } else {
        console.error("La base de datos no está disponible.");
    }
});

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

//Devolver información a nota 
function obtenerDatos(id) {
    if (!db) {
        throw new Error("La base de datos no está abierta.");
    }

    return new Promise((resolve, reject) => {
        let transaction = db.transaction(STORE_NAME, "readonly");
        let objectStore = transaction.objectStore(STORE_NAME);
        let request = objectStore.get(id);

        request.onsuccess = (event) => {
            resolve(event.target.result);
            console.log(request.result.texto);
            return request.result.texto;
        };

        request.onerror = (event) => {
            reject(event.target.error);
        };
    });
}

document.getElementById("testing").addEventListener('click',(event) => {
    if (db) {
        obtenerDatos(1)
            .then((data) => {
                document.getElementById("testText").value=data.texto;
            })
            .catch((error) => {
                console.error("Error addData: " + error);
            });
    } else {
        console.error("La base de datos no está disponible.");
    }
});
