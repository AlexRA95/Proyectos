let img =document.getElementById("imgGato");
let contenedor =document.getElementById("contenedor");

img.addEventListener('dragstart',(event)=>{
    console.log("dragstart");
    event.dataTransfer.setData('text/plain',event.target.src);
});


contenedor.addEventListener('drop',(event)=>{
    let imgCont=document.createElement('img');
    imgCont.src=event.dataTransfer.getData("text/plain");
    event.target.appendChild(imgCont);
    /*
    Este código cambia la imagen del fondo del div, no crea un nuevo elemento cada vez
    event.target.style.backgroundImage="url("+event.dataTransfer.getData("text/plain")+")";
    event.target.style.backgroundSize="contain";
    event.target.style.backgroundRepeat="no-repeat";
    */
});

contenedor.addEventListener('dragover', (event)=>{
    event.preventDefault();
});