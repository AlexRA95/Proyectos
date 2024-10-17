

window.addEventListener('load', function(){
    document.getElementById("win-width").textContent= "Width-> "+ this.window.screen.width;
    document.getElementById("win-height").textContent= "Height-> "+ this.window.screen.height;
    document.getElementById("in-width").textContent= "Width-> "+ this.window.innerWidth;
    document.getElementById("in-height").textContent= "Height-> "+ this.window.innerHeight;
});