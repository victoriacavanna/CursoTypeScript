import ILibro from "./interfaces/ILibro"
let libros = [];
const libro1: ILibro = {
    titulo: "Todo por volver a verte",
    autor: "Florencia Vercellone",
    cantidadPaginas: 320,
    isbn: "9789500212922"
}
libros.push(libro1);
const libro2: ILibro = {
    titulo: "Estudio de escarlata",
    autor: "Arthur Conan Doyle",
    cantidadPaginas: 224,
    isbn: "9789500213059"
}
libros.push(libro2);
const libro3: ILibro = {
    titulo: "Sensatez y sentimientos",
    autor: "Austen Jane",
    cantidadPaginas: 312,
    isbn: "9789875669925"
}
libros.push(libro3);
const totalPaginas = (lista:ILibro []):number => {
    let total = 0;
    for (let i = 0; i < lista.length; i++){
        total += lista[i].cantidadPaginas;
    }
    return total;
}