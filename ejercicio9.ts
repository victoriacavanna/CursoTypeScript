/* Hacer una funcion dividir que haga la division entre 2 numeros
    si es que el segundo es distinto de cero. En el caso de que sea igual a 0 retornar el valor 0
*/

import * as readlineSync from 'readline-sync';

let numA: number = parseInt(readlineSync.question("Ingrese un numero: "));
let numB: number = parseInt(readlineSync.question("Ingrese un numero: "));

function dividir(num1: number, num2: number): number {
    if (num2 === 0) {
        return 0;
    } else {
        return num1 / num2;
    }
}

let resultado = dividir(numA, numB);
console.log(numA + "/" + numB + " = " + resultado);