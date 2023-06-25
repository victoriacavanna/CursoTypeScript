
let diasSemana: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

//Error de tipo de dato
//let numerosP: string[] = ['hola', 23, 5, 10, true, false];

//Recorrer vector: Convencional
for (let i = 0; i < diasSemana.length; i++){
    console.log(diasSemana[i]);
}

//Otras formas: recorrer vector


for (let diaSemana of diasSemana){
    //Para cada dia dentro del arreglo imprimir
    console.log(diaSemana);
}

for (let i in diasSemana){
    //Acceder a cada índice del arreglo
    console.log(diasSemana);
}

/*
==DIFERENCIA==
for of -> diaSemana (string, segun tipo de dato del arreglo)
for in -> i (entero)
FOR OF -> MÁS COMÚN QUE FOR IN para recorrer vectores
 */
