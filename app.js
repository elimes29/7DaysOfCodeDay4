/*
Debes crear un pequeño programa que comience con un valor específico predefinido entre 0 y 10 para el número que vas a adivinar (por ejemplo, el 7).

A continuación, el programa te preguntará cuál es el valor que deseas adivinar y, si aciertas, te felicitará. Si te equivocas, te dará 2 intentos más.

Al final, si no aciertas en ninguno de los intentos, imprimirá cuál era el número inicial.

Después de que el programa esté funcionando, intenta usar un número aleatorio en lugar de uno predefinido.
*/

const numSec = Math.floor(Math.random() * (10 - 0 + 1) + 0);
const intentos =3;
let num, ban = 1;

alert(numSec);

for (let index = 0; index < intentos; index++) {
   
    do {
        num = prompt('Ingrese un numero de 1 a 10');
        if (num>0 & num<11){
            ban = 0;
            alert(`¿Será que ${num} es el número secreto?`)
        } else{
            alert(`Ingresaste ${num}, debe ser un número entre 1 y 10.`)
        }
    } while (ban == 1);

    if (numSec == num) {
        alert(`Felicitaciones, lo conseguiste el numero secreto era ${num}`);
        break;
    }else{
        alert(`${num} no es el número secreto, te quedan ${2-index} ${(2-index)>1 ? "intentos" : "intento"}.`);
    }
}