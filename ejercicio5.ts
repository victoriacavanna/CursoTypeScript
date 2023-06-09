//Imprimir las posiciones dentro del arreglo de jugadores donde se encuentra cada Pedro
let jugadores = ['Pedro', 'Juan', 'Pedro', 'Ignacio', 'Matías', 'Roberto',
    'Julián', 'Esteban', 'Pedro', 'Alejandro', 'Franco', 'Francisco',
    'Daniel', 'Pedro', 'Manuel', 'Pedro', 'Marco', 'Javier', 'Miguel'];

let posicionesPedro = [];

for (let i:number = 0; i < jugadores.length; i++){
    if (jugadores[i] == "Pedro"){
        posicionesPedro.push(i);
    }
}
console.log("El nombre 'Pedro' se encuentra en las posiciones: ")
posicionesPedro.forEach(function(posiciones) {
    console.log(posiciones);
});

