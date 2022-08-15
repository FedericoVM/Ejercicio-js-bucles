/* 

7- Haz un script que escriba una pirámide inversa de los números del 1 al número
que indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que
indica 30).
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1

*/

let tamanioPiramide = parseInt(prompt("Ingrese el numero de filas que desee para la piramide.(Rango 0 - 50 )"));
let decremento = tamanioPiramide + 1;

if (tamanioPiramide < 51 && tamanioPiramide > 0 && (!isNaN(tamanioPiramide))) {
    
    for (let i = tamanioPiramide; i > 0; i --) {
        decremento --
        for (let j = decremento; j > 0; j --) {
          document.write(` ${ decremento } `);
        }
        document.write("<br>");
    }

} else {
    document.write("Error! El numero ingresado esta fuera del rango permitido o ingreso un valor que no corresponde a un numero");
}

