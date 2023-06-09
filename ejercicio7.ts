//Imprimir la suma de los siguientes números del array

let numeros: number[] = [15,16,3,4,8,10,12,27];
function sumaNum(arrayNum : number []) {
    let suma = 0;
    for (let i: number = 0; i < arrayNum.length; i++){
        suma += arrayNum[i];
    }
    console.log("La suma de todos los números del array es: " + suma);
}
sumaNum(numeros);