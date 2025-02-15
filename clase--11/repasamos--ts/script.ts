console.log("Hola mamá, ahora estoy en Typescript y sin manos! "); 

//Veamos el tema de los tipos de datos: 

let nombre: string = "Pepe"; 
let apellido: string = "Argento"; 

nombre = "Fatiga"; 

//Objetos literales: 

const persona: {nombre: string, edad: number} = {
    nombre: "Juan",
    edad: 30
}

console.log(persona);

//Arreglos / Arrays: 

const numeros: number[] = [1, 2, 3, 4, 5];

console.log(numeros);

const combinadito: (number | string)[] = ["ola", "ke", "ase", 1000]; 

//Funciones: 

function suma(numeroA: number, numeroB:number): number {
    return numeroA + numeroB;
}

console.log(suma(155,5)); 

//Ejemplo con función flechiña: 
const restar = (a: number, b: number) => a - b; 

console.log(restar(100, 20)); 
