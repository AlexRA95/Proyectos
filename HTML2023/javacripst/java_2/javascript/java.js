/*
function sesion(){
    
    var user = document.getElementById("usuario").value;
    var pass = document.getElementById("pass").value;

    if( user == "admin" && pass == "1234"){
        alert("lol")
        //location.href = "https://www.hoy.es";
    }else{
        alert("Pringado")
    }

}
*/

function validarFormulario() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
  
    // Verifica si los campos están vacíos
    if (usuario == "" || contrasena == "") {
      alert("Por favor, ingrese su usuario y contraseña");
    } else {
      // Verifica si los datos son correctos
      if (usuario == "admin" && contrasena == "1234") {
        // Si los datos son correctos, redirige a otra página
        window.location.href = "https://www.hoy.es";
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    }
  }
  