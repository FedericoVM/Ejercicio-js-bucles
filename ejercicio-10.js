/*

10- Realiza un script que pida número de filas y columnas y escriba una tabla.
Dentro de cada una de las celdas deberá escribirse un número consecutivo en
orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.


*/


let numeroFila = parseInt(prompt("Ingrese el numero de filas"));
console.log();
let numeroColumna = parseInt(prompt("Ingrese el numero de columna"));

let filaPorColumna = (numeroFila * numeroColumna);
let fila = "<tr>";
let columna = "<td>"; 

for (let i = 0; i < numeroFila; i++) {
   document.write(fila);
    for (let j = 0; j < numeroColumna; j++) {
        document.write(columna)
        document.write(" " +  filaPorColumna + " ")
        filaPorColumna --;
    }
    
    document.write("<br>")
  
}

