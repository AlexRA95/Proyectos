/*

Suma de numeros

var num1 = prompt("Introduce un numero: ");
 var num1 = Number(num1);
var num2 = prompt("Introduce un numero: ");
 var num2 = Number(num2);

var suma = num1 + num2

document.write("El numero 1 es: " + num1 + " ,el numero 2 es: " + num2 + " y la suma de " + num1 + " y de " + num2 + " es = " + suma )

*/

/*

var user = prompt("Escribir nombre: ");
var password = prompt("Escribir contraseña: ");

// user = admin
// password = 1234



if( user == "admin" && password == "1234" ){

    Swal.fire({
        icon: 'success',
        title: 'Enhorabuena',
        text: 'Quieres ir al panel de control?',
        showConfirmButton: true,
        confirmButtonColor: '#196f3d',
        confirmButtonText: 'Sí, claro!',
        showCancelButton:true ,
      }).then((result) => {
        // Read more about isConfirmed, isDenied below 
        if (result.isConfirmed) {
            location.href = "https://www.hoy.es"
        }
      })

//    location.href = "https://www.hoy.es"

}else{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las credenciales no son correctas!',
        confirmButtonColor: '#d33',
        confirmButtonText: 'Re-Intentar',
        showCancelButton: true,
      })
}
*/

