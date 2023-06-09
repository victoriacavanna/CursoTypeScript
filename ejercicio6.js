/* Realizar una función mayorQueCeroMenorQueDiez que reciba un número como
argumento y devuelva true si un número es mayor que cero y menor que diez, y false
en caso contrario. Indicar, además, el tipo del argumento que recibe y el tipo del valor de retorno:
function mayorQueCeroMenorQueDiez(numero:   ):
Teniendo un arreglo de numeros:
let numeros: number[] = [15,16,3,4,8,10,12,27];
 */
var numeros = [15, 16, 3, 4, 8, 10, 12, 27];
function mayorQueCeroMenorQueDiez(numero) {
    if (numero > 0 && numero < 10) {
        return true;
    }
    else {
        return false;
    }
}
numeros.forEach(function (numero) {
    console.log(mayorQueCeroMenorQueDiez(numero));
});
