// Imprimir el producto de los numeros del array
let numeros: number[] = [15,16,3,4,8,10,12,27];
function productoNum(arrayNum : number []) {
    let producto = 1;
    for (let i: number = 0; i < arrayNum.length; i++){
        producto *= arrayNum[i];
    }
    console.log("El producto de todos los números del array es: " + producto);
}
productoNum(numeros);
