/** CLASE 1 - TEST Y MOCKS  **/

// TDD: Significa "Desarrollo Orientado a Pruebas". 
// Es una metodologia de desarrollo de software que consiste en pensar y escribir las pruebas que debe cumplir determinada funcion, incluso antes de escribirla. 

//SE DIVIDE EN 3 ETAPAS: 

// 1) Escribir una prueba fallida. 
// 2) Hacer que la prueba pase. 
// 3) Refactorizar. 

//EJEMPLO SUMA: 

//PASO 1: 

// const suma = (a, b) => {
//     let resultado = a + b; 
//     return resultado; 
// }

//Ahora tenemos que pensar en multiples escenarios para poner a prueba nuestra función. 

//1. La función debe retornar null si algun parametro no es numerico. 
//2. La función debe retornar 0 si no se pasa ningun parametro. 
//3. La funcion debe poder realizar la suma correctamente. 
//4. La funcion debe poder hacer la suma con cualquier cantidad de numeros. 

//PASO 2: hacemos que las pruebas pasen


// const suma = (a, b) => {
//     //Test 2: me retorna 0 si no me envian ningun parametro: 
//     if(!a || !b) {
//         return 0;
//     }

//     //Test 1: me tiene que retornar null si un dato no es numerico
//     if(typeof a !== "number" || typeof b !== "number") {
//         return null; 
//     }

//     //Test 3: tiene que hacer la suma correctamente
//     let resultado = a + b; 
//     return resultado; 

// }

//PARA RESOLVER EL TEST 4 VAMOS A TENER QUE MODIFICAR TODA LA FUNCION PARA RECIBIR N PARAMETROS. 

// const suma = (...numeros) => {
//     //TEST 2: 
//     if(numeros.length === 0) {
//         return 0; 
//     }

//     //TEST 1: retornamos null si alguno no es numerico.. 
//     let banderita = true; 
//     for ( let i = 0; i < numeros.length && banderita; i++ ) {
//         if(typeof numeros[i] !== "number") {
//             banderita = false; 
//         }
//     }

//     if(banderita !== true) {
//         return null; 
//     }

//     //TEST 3 Y 4:
//     let resultado = 0; 
//     for(let i = 0; i < numeros.length; i++) {
//         resultado += numeros[i]; 
//     }
//     return resultado;
// }

//PASO 3 REFACTORIZAR: 

const suma = (...numeros) => {
    if(numeros.length === 0 ) return 0; 
    if(!numeros.every(num => typeof num === "number")) return null; 
    return numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);
}


let testPasados = 0; 
let testTotales = 4;

//TEST 1: 
console.log("La función debe retornar null si algun parametro no es numerico. ");
let resultado1 = suma("2", 3); 
if(resultado1 === null) {
    console.log("Test 1 pasado!"); 
    testPasados++; 
}else {
    console.log("El test 1 no se pasó, se esperaba null pero se recibio: " + resultado1);
}

console.log("-----------------------------------------------------------");

//TEST 2: 
console.log("La función debe retornar 0 si no se pasa ningun parametro.");
let resultado2 = suma(); 
if(resultado2 === 0) {
    console.log("Test 2 Pasado!"); 
    testPasados++;
}else {
    console.log("El test 2 no se pasó, se esperaba 0 pero se recibio: " + resultado2); 
}

console.log("-----------------------------------------------------------");

//TEST 3: 
console.log("La funcion debe poder realizar la suma correctamente."); 
let resultado3 = suma(2, 3); 
if(resultado3 === 5) {
    console.log("Test 3 Pasado!"); 
    testPasados++;
} else {
    console.log("El test 3 no se paso, se esperaba 5 pero se recibio: " + resultado3); 
}

console.log("-----------------------------------------------------------");

//TEST 4: 
console.log("La funcion debe poder hacer la suma con cualquier cantidad de numeros.");
let resultado4 = suma(1, 2, 3, 4, 5);
if (resultado4 === 15) {
    console.log("Test 4 Pasado!");
    testPasados++; 
} else {
    console.log("El test 4 no se paso, se esperaba 15 per se recibio: " + resultado4);
}

if(testPasados === testTotales) {
    console.log("Felicitaciones, todos los test pasaron con exito, la vida te sonrie, te aumentaran el sueldo"); 
} else {
    console.log("Se pasaron " + testPasados + " de un total de " + testTotales + " te invito a que te dediques al mundo del diseño");
}