/*Ejercicios de clases
2) Crear una interfaz llamada empleado y una clase llamada EmpleadoDatabase que tenga un arreglo de objetos
tipo Empleado. Crear método getEmpleadoPorId que devuelva el objeto empleado correspondiente.
* */
interface IEmpleado {
    nombre: string,
    id: number,
    salario: number
}
export default IEmpleado