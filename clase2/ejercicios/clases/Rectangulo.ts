//Ejercicios de clases 1)Crear interfaz llamada Rectangulo y luego una función que acepte un objeto de tipo Rectangulo
import IRectangulo from "../interfaces/IRectangulo";
class Rectangulo implements IRectangulo{
    ancho:number;
    largo:number;

    constructor(ancho:number, largo:number) {
        this.ancho = ancho;
        this.largo = largo;
    }

    getArea():number{
        return this.ancho * this.largo;
    }
}
