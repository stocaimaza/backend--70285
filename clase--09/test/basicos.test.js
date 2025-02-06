import assert from "assert"; 
//Módulo nativo de Node JS que nos permite realizar las validaciones. 

//Función muy simple de practica: 

function suma(a, b) {
    return a + b; 
}

//describe: es una función que me permite agrupar un conjunto de pruebas relacionadas bajo el mismo bloque descriptivo. 

describe("Testeamos la función SUMA", () => {
    //it: unidad mínima de nuestro testing
    it("Debe retornar 3 cuando se suma 1 y 2", () => {
        assert.strictEqual(suma(1,2), 3);
    })

   
})

describe("Ejemplo de Hooks en Mocha", function () {
    before( () => {
        console.log("Este codigo se ejecuta antes de todas las pruebas"); 
    })

    after( () => {
        console.log("Este codigo se ejecuta despues de todas las pruebas"); 
    })

    beforeEach( () => {
        console.log("Este codigo se ejecuta antes de cada prueba"); 
    })

    afterEach(() => {
        console.log("Este codigo se ejecuta despues de cada prueba");
    })

    it("Debe sumar correctamente", () => {
        assert.strictEqual(suma(10, 5), 15); 
    })

    it("Debe retornar 0 cuando se suma -1 y 1", () => {
        assert.strictEqual(suma(-1, 1), 0); 
    })

})