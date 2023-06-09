//Imprimir las posiciones dentro del arreglo de jugadores donde se encuentra cada Pedro
var jugadores = ['Pedro', 'Juan', 'Pedro', 'Ignacio', 'Matías', 'Roberto',
    'Julián', 'Esteban', 'Pedro', 'Alejandro', 'Franco', 'Francisco',
    'Daniel', 'Pedro', 'Manuel', 'Pedro', 'Marco', 'Javier', 'Miguel'];
var posicionesPedro = [];
for (var i = 0; i < jugadores.length; i++) {
    if (jugadores[i] == "Pedro") {
        posicionesPedro.push(i);
    }
}
console.log("El nombre 'Pedro' se encuentra en las posiciones: ");
posicionesPedro.forEach(function (posiciones) {
    console.log(posiciones);
});
