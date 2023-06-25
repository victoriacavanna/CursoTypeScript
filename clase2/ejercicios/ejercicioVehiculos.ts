import Auto from "./clases/Auto"
import Avion from "./clases/Avion"
import Submarino from "./clases/Submarino";
import IPosicion from "./interfaces/IPosicion";
import IVehiculo from "./interfaces/IVehiculo";
import Medios from "./enumVehiculos";

let arrayVehiculos: IVehiculo[] = [];

const auto1 = new Auto(4, 1, "A1", Medios.TIERRA);
arrayVehiculos.push(auto1);

const avion1 = new Avion(8, 0.5, "B1", Medios.AIRE);
arrayVehiculos.push(avion1);

const mostrarVehiculos = (array: IVehiculo[]): void => {
    array.forEach((vehiculo) => {
        let medioPreferencia: string;
        switch (vehiculo.medio) {
            case Medios.AGUA:
                medioPreferencia = "AGUA";
                break;
            case Medios.TIERRA:
                medioPreferencia = "TIERRA";
                break;
            case Medios.AIRE:
                medioPreferencia = "AIRE";
                break;
            default:
                medioPreferencia = "";
                break;
        }
        console.log("Cantidad de ruedas: " + vehiculo.ruedas);
        console.log("Porcentaje de tanque: " + vehiculo.porcentajeTanque);
        console.log("Matrícula: " + vehiculo.matricula);
        console.log("Medio de preferencia: " + medioPreferencia);
        console.log("");
    });
}

mostrarVehiculos(arrayVehiculos);

