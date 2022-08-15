/*

1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un
mensaje que ya puede conducir, si la edad ingresada no es un número válido
indicarlo en un mensaje.

*/

let edadUsuario = parseInt(prompt("Ingrese la edad"));


if (edadUsuario <= 0 || edadUsuario > 100) {
    document.write("La edad ingresada no es correcta. Reinicie e intente nuevamente");
} else if (edadUsuario > 17) {
    document.write("Usted ya puede conducir");
} else {
    document.write("Usted NO puede conducir");
}
