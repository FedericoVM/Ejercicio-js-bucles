/*

3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
guión -.
Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

*/

/*

1) Preguntar al usuario si desea ingresar una cadena de texto. En caso de cancelar
    sale del programa

2) Pedir que ingrese el texto

3) Repetir el paso 1 y 2

4) Concatenar las cadenas con " - "

5) Mostrar por consola las palabras ingresadas por el usuario

*/

let textos=[];

while(confirm("Desea ingresar un texto?")){
    let textoUsuario = prompt("Ingrese el texto");
    textos.push(textoUsuario);
}

for (let i = 0; i < textos.length; i++) {
    if (i!=0 && i != textos.length-1) {
        document.write( " - " + textos[i] + " - ");
    } else {
        document.write(textos[i]);
    }   
}

