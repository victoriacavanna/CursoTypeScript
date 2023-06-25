"use strict";
exports.__esModule = true;
var imprimirArticulo = function (articulo) {
    console.log("Nombre del art\u00EDculo: ".concat(articulo.nombre, " /n | Descripci\u00F3n del producto: ").concat(articulo.descripcion, " /n | Precio: ").concat(articulo.precio));
};
var articulo1 = {
    nombre: "Monitor Samsung",
    precio: 76090,
    descripcion: "Monitor curvo 32 pulgadas UHD 60Hz 1500R"
};
imprimirArticulo(articulo1);
