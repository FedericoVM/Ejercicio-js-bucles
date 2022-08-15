/*

6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
…….



*/
let contador = 0; 
for (let i = 1; i < 31; i++) {
    contador ++;
    for (let j = 0; j < contador; j++) {
        document.write(` ${contador} `);
    }
    document.write("<br>"); 
}