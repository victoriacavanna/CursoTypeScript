//Hacer una funcion entre que reciba 3 números y retorne si el último está entre los 2. Sino, retorna false

import * as readlineSync from 'readline-sync';

let numA: number = parseInt(readlineSync.question("Ingrese un numero: "));
let numB: number = parseInt(readlineSync.question("Ingrese un numero: "));
let numC: number = parseInt(readlineSync.question("Ingrese un numero: "));

function entre(num1:number, num2:number, num3:number) : boolean{
    if (num3 < num2 && num3 > num1){
        return true;
    } else{
        return false;
    }
}
let resultado = entre(numA, numB, numC);
if (resultado){
    console.log(numC + " si se encuentra entre "+ numA + " y " + numB);
} else {
    console.log(numC + " no se encuentra entre "+ numA + " y " + numB);
}