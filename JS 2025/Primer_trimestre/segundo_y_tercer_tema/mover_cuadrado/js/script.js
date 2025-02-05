let x = 0;
let y = 0;

document.addEventListener('keydown', event => {
  switch (event.key) {
    case 'w':
        y -= 10;
        document.getElementById("cuadrado").style.marginTop = y + "px";
        console.log("w");
      break;
    case 's':
        y += 10;
        document.getElementById("cuadrado").style.marginTop = y + "px";
        console.log("s");
      break;
    case 'a':
        x -= 10;
        document.getElementById("cuadrado").style.marginLeft = x + "px";
        console.log("a");
      break;
    case 'd':
        x += 10;
        document.getElementById("cuadrado").style.marginLeft = x + "px";
        console.log("d");
      break;
  }
});
