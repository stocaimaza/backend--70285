"use strict";
console.log("Hola mamá, ahora estoy en Typescript y sin manos! ");
//Veamos el tema de los tipos de datos: 
let nombre = "Pepe";
let apellido = "Argento";
nombre = "Fatiga";
//Objetos literales: 
const persona = {
    nombre: "Juan",
    edad: 30
};
console.log(persona);
//Arreglos / Arrays: 
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
const combinadito = ["ola", "ke", "ase", 1000];
//Funciones: 
function suma(numeroA, numeroB) {
    return numeroA + numeroB;
}
console.log(suma(155, 5));
//Ejemplo con función flechiña: 
const restar = (a, b) => a - b;
console.log(restar(100, 20));
