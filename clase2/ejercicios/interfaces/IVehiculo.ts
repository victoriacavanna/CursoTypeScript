import Medios from "../enumVehiculos";
import IPosicion from "./IPosicion";

interface IVehiculo{
    ruedas: number;
    porcentajeTanque: number;
    matricula: string;
    medio: Medios;
    sePuedeMoverA(posicion:IPosicion): boolean;
}
export default IVehiculo