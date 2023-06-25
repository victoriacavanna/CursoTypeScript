/*Ejercicios de clases
2) Crear una interfaz llamada empleado y una clase llamada EmpleadoDatabase que tenga un arreglo de objetos
tipo Empleado. Crear método getEmpleadoPorId que devuelva el objeto empleado correspondiente.**/
import IEmpleado from "../interfaces/IEmpleado"

let arrayEmpleados: IEmpleado[];
let empleado1:IEmpleado = { nombre:"Pedro",id: 1, salario: 2000};
arrayEmpleados.push(empleado1);
let empleado2:IEmpleado = { nombre:"Rocio",id: 2, salario: 2000};
arrayEmpleados.push(empleado2);
let empleado3:IEmpleado = { nombre:"Pablo",id: 3, salario: 2000};
arrayEmpleados.push(empleado3);
class EmpleadoDatabase {
    listado : IEmpleado[];

    constructor(listado: IEmpleado[]) {
    this.listado = listado;
    }

    getEmpleadoPorId(numId:number): IEmpleado | undefined{
            let empleadoEncontrado: IEmpleado | undefined;
            this.listado.forEach((empleado) => {
                if (empleado.id === numId) {
                    empleadoEncontrado = empleado;
                }
            });
            return empleadoEncontrado;
    }
}

export default EmpleadoDatabase