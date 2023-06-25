//Ejercicio 6: Crear una función que tome un arreglo de Usuarios y retorne la edad promedio

import IUsuario from "./interfaces/IUsuario";
let usuarios: IUsuario[] = [];

const usuario1:IUsuario = {
    nombre: "Ana",
    email: "anagonzalez@gmail.com",
    edad: 23
}
usuarios.push(usuario1);
const usuario2:IUsuario = {
    nombre: "Matias",
    email: "matiasgomez@gmail.com",
    edad: 34
}
usuarios.push(usuario2);

const usuario3:IUsuario = {
    nombre: "Lucia",
    email: "fernandezlucia@gmail.com",
    edad: 27
}

usuarios.push(usuario3);

const edadPromedio = (lista:IUsuario[]):number => {
    let promedio: number;
    let suma = 0;
    for (let i = 0; i < lista.length; i++){
        suma += lista[i].edad;
    }
    promedio = suma / lista.length;
    return promedio;
}

console.log("La edad promedio de los usuarios es: " + edadPromedio(usuarios));