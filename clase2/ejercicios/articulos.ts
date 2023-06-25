//Ejercicio 4: Crear una funcion que tome un aticulo e imprima su información
import IArticulo from "./interfaces/IArticulo";

const imprimirArticulo = (articulo:IArticulo):void => {
    console.log(`Nombre del artículo: ${articulo.nombre} | Descripción del producto: ${articulo.descripcion} | Precio: ${articulo.precio}`);
}
const articulo1:IArticulo = {
    nombre: "Monitor Samsung",
    precio: 76090,
    descripcion: "Monitor curvo 32 pulgadas UHD 60Hz 1500R"
}
imprimirArticulo(articulo1);