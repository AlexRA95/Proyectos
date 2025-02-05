function addNota() {
const colDiv = document.createElement("div");
colDiv.className = "col-3 m-4";

const notaDiv = document.createElement("div");
notaDiv.className = "nota";

const rowGreenDiv = document.createElement("div");
rowGreenDiv.className = "row bg-success";

const iconContainer = document.createElement("div");
iconContainer.className = "col-12 d-flex justify-content-end p-2";

const editIcon = document.createElement("i");
editIcon.className = "fa-solid fa-pen-to-square text-white me-3";

const deleteIcon = document.createElement("i");
deleteIcon.className = "fa-solid fa-trash text-white";

iconContainer.appendChild(editIcon);
iconContainer.appendChild(deleteIcon);
rowGreenDiv.appendChild(iconContainer);

const rowWhiteDiv = document.createElement("div");
rowWhiteDiv.id = "cuerpo";
rowWhiteDiv.className = "row bg-white";

const colWhiteDiv = document.createElement("div");
colWhiteDiv.className = "col-12";

const textArea = document.createElement("textarea");
textArea.className = "border-0";

colWhiteDiv.appendChild(textArea);

rowWhiteDiv.appendChild(colWhiteDiv);

notaDiv.appendChild(rowGreenDiv);
notaDiv.appendChild(rowWhiteDiv);

colDiv.appendChild(notaDiv);

document.getElementById("contenedor").appendChild(colDiv);

}

document.getElementById("anadirNota").addEventListener('click',addNota);

function borrarNotas() {
    document.getElementById("contenedor").innerHTML="";
}

document.getElementById("borrarNotas").addEventListener('click',borrarNotas);