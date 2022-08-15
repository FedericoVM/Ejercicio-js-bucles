/*

8- Crea script para generar pirámide siguiente con los números del 1 al número
que indique el usuario (no mayor de 50)
1
12
123
1234
12345
123456

 */

let tamanioPiramide = parseInt(
  prompt("Ingrese el tamaño que desee asignar a la piramide ( Rango 0 - 50)")
);

let contador = 0;

if (tamanioPiramide > 0 && tamanioPiramide < 51 && !isNaN(tamanioPiramide)) {
  for (let i = 0; i < tamanioPiramide; i++) {
    contador++;
    let aux = 0;
    for (let j = 0; j < contador; j++) {
      aux++;
      document.write(` ${aux} `);
    }

    document.write("<br>");
  }
} else {
  document.write("El numero esta fuera del  rango o no ingreso un numero");
}
