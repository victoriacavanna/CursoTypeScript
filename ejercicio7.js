//Imprimir la suma de los siguientes números del array
var numeros = [15, 16, 3, 4, 8, 10, 12, 27];
function sumaNum(arrayNum) {
    var suma = 0;
    for (var i = 0; i < arrayNum.length; i++) {
        suma += arrayNum[i];
    }
    console.log("La suma de todos los números del array es: " + suma);
}
sumaNum(numeros);
