/*
17- Realiza un script que muestre la posición de la primera vocal de un texto
introducido por teclado.

*/

let texto = prompt("Ingrese un texto");
let posiciónVocal = 0;
let bandera = 0;

for (let i = 0; i < texto.length; i++) {
  let caracter = texto.charAt(i);

  if (
    caracter === "a" ||
    caracter === "e" ||
    caracter === "i" ||
    caracter === "o" ||
    caracter === "u"
  ) {
    bandera ++;
    if (bandera === 1) {
      posiciónVocal = [i];
    }
  }
}

document.write(`La posicion de la primera vocal es: ${posiciónVocal}`);
