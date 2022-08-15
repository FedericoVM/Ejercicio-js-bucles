/*

4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con
“cancelar” deberá indicarse la suma total de los números introducidos.

*/
let acumulador = 0;

while (confirm("¿ Desea agregar un numero ?")) {
  let numero = parseInt(prompt("Ingrese un numero"));
  if (!isNaN(numero)) {
    acumulador = acumulador + numero;
  } else {
    alert("Atencion! El valor ingresado no corresponde a un numero");
  }
}

document.write( `La suma de los numeros ingresados es:  ${acumulador}` );
