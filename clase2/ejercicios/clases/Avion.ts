import IVehiculo from "../interfaces/IVehiculo"
import IPosicion from "../interfaces/IPosicion";
import Medios from "../enumVehiculos";

class Avion implements IVehiculo {
    ruedas: number;
    porcentajeTanque: number;
    matricula: string;
    medio: Medios;

    constructor(ruedas:number, porcentajeTanque: number, matricula:string, medio: Medios) {
        this.ruedas = ruedas;
        this.porcentajeTanque = 1.0;
        this.matricula = matricula;
        this.medio = Medios.AIRE;
    }

    sePuedeMoverA(posicion:IPosicion):boolean{
        return posicion.z >= 0;
    }
}

export default Avion