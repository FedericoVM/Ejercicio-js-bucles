/*

11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el
nombre del mayor. *
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

*/

let nombreUsuarioUno = prompt("Ingrese el nombre del Usuario 1");
console.log();
let edadUsuarioUno = parseInt(prompt("Ahora ingrese la edad del Usuario 1"));
console.log();

let nombreUsuarioDos = prompt("Ingrese el nombre del Usuario_2");
console.log();
let edadUsuarioDos = parseInt(prompt("Ahora ingrese la edad del Usuario 2"));
console.log();

let nombreUsuarioTres = prompt("Ingrese el nombre del Usuario 3");
console.log();
let edadUsuarioTres = parseInt(prompt("Ahora ingrese la edad del Usuario 3"));
console.log();

let usuarioMayor = Math.max(edadUsuarioUno, edadUsuarioDos, edadUsuarioTres);


if (edadUsuarioUno === edadUsuarioDos && edadUsuarioUno === edadUsuarioTres) {
    alert("Las edades son iguales")
} else {

    if (edadUsuarioUno === usuarioMayor) {
        alert(`El usuario mayor es:  ${nombreUsuarioUno}`)
    } else if (edadUsuarioDos === usuarioMayor) {
        alert(`El usuario mayor es:  ${nombreUsuarioDos}`)
    } else if (edadUsuarioTres === usuarioMayor) {
        alert(`El usuario mayor es:  ${nombreUsuarioTres}`)
    } else {
        alert("Todos tienen la misma edad")
    }

}



