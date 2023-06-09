"use strict";
//Hacer una funcion entre que reciba 3 números y retorne si el último está entre los 2. Sino, retorna false
exports.__esModule = true;
var readlineSync = require("readline-sync");
var numA = parseInt(readlineSync.question("Ingrese un numero: "));
var numB = parseInt(readlineSync.question("Ingrese un numero: "));
var numC = parseInt(readlineSync.question("Ingrese un numero: "));
function entre(num1, num2, num3) {
    if (num3 < num2 && num3 > num1) {
        return true;
    }
    else {
        return false;
    }
}
var resultado = entre(numA, numB, numC);
if (resultado) {
    console.log(numC + " si se encuentra entre " + numA + " y " + numB);
}
else {
    console.log(numC + " no se encuentra entre " + numA + " y " + numB);
}
