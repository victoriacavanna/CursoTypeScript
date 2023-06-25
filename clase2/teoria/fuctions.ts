//Declaración

let arrayNumeros: number[] = [1,2,3,4,5];
//                  tipo dato entrada , tipo de dato salida
function miFuncion(arrayNumeros: number[]): string{
        for (let numero of arrayNumeros){
            console.log(numero);
        }
        return "Función 1";
}
// arrow function
//                  función anónima
const miFuncion2 = (arregloNumeros: number[]): string => {
    for (let numero of arrayNumeros){
        console.log(numero);
    }
    return "Funcion 2";
}

const sumaArreglo = (arreglo:number[]):number =>{
    let suma = 0;
    for (let i = 0; i < arreglo.length; i ++){
        suma += arreglo[i];
    }
    return suma;
}
const main = ():void => {
    let numeros1 = [1,2,3];
    console.log(sumaArreglo(numeros1));
}
main();

/* TIPOS DE DATOS ESPECIALES
any -> cualquier dato (puede cambiar) | se suele usar cuando se trabaja con librerías externas
unknown -> "desconocido" no se le puede asignar nada | para manejarlo ej: function manejar(valor:unknown) {if (typeof valor === "string) ...
undefined -> indefinido
null -> nulo
*/