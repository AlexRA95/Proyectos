let img1= document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let newCont= document.getElementById("newCont");

img1.addEventListener('dragstart',(event)=>{
    event.dataTransfer.setData('text/plain',event.target.src);
});

img2.addEventListener('dragstart',(event)=>{
    event.dataTransfer.setData('text/plain',event.target.src);
});

img3.addEventListener('dragstart',(event)=>{
    event.dataTransfer.setData('text/plain',event.target.src);
});

img4.addEventListener('dragstart',(event)=>{
    event.dataTransfer.setData('text/plain',event.target.src);
});

newCont.addEventListener('drop',(event)=>{
    let imgCont=document.createElement('img');
    imgCont.src=event.dataTransfer.getData("text/plain");
    event.target.appendChild(imgCont);
});

newCont.addEventListener('dragover', (event)=>{
    event.preventDefault();
});