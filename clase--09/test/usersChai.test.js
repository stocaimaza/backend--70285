//Chai es una libreria de assertions, la cual nos permitirá realizar comparaciones de test mas claras. 

//Instalamos: npm install -D chai

import mongoose from "mongoose";
import User from "../src/dao/Users.dao.js";

//Con la ultima version de chai tenemos que importar "expect": 
import { expect } from "chai";

const connection = mongoose.connect(`mongodb+srv://swtocaimaza:coderhouse@cluster0.pmzgicx.mongodb.net/Documentacion70285?retryWrites=true&w=majority&appName=Cluster0`)



describe("Testeamos el DAO de Usuarios", function () {
    //Le asignamos un nombre o titulo y le pasamos una función callback

    before(function() {
        this.usersDao = new User(); 
    })

    //Limpiamos la base de datos cada vez que testeamos. 
    beforeEach(async function() {
        await mongoose.connection.collections.users.drop(); 
    })


    //Test 1: 
    it("El get de usuarios me debe retornar un array", async function() {
        const resultado = await this.usersDao.get(); 
        //Debo verificar que "resultado" sea un array. 
        //assert.strictEqual(Array.isArray(resultado), true); 

        expect(Array.isArray(resultado)).to.be.true; 
    })

    //Test 2: 
    it("El Dao debe agregar correctamente un elemento a la base de datos", async function() {
        let usuario = {
            first_name: "Bruno", 
            last_name: "Diaz", 
            email: "batman@trendelaalegria.com", 
            password: "gotica1234"
        }

        const resultado = await this.usersDao.save(usuario); 
        // assert.ok(resultado._id); 
        expect(resultado).to.have.property("_id"); 
    })

    //Test 3: 

    it("Al agregar un nuevo usuario, éste debe crearse con un arreglo de mascotas vacío por defecto.", async function() {
        let usuario = {
            first_name: "Tortuga", 
            last_name: "Manuelita", 
            email: "pehuajo@forever.com", 
            password: "1234"
        }

        const resultado = await this.usersDao.save(usuario); 
        //assert.deepStrictEqual(resultado.pets, []); 
        expect(resultado.pets).to.deep.equal([]); 
    })

    //Test 4: 

    it("El Dao puede obtener a un usuario por email",  async function () {
        let usuario = {
            first_name: "Fatiga", 
            last_name: "Argento", 
            email: "fatiga@hotmail.com", 
            password: "losargento"
        }; 

        await this.usersDao.save(usuario); 
        const userBuscado = await this.usersDao.getBy({email:usuario.email}); 
        //assert.strictEqual(typeof userBuscado, "object"); 
        expect(userBuscado).to.be.an("object"); 
    })

    after(async function () {
        await mongoose.disconnect(); 
    })
})

