//Importamos Supertest
import supertest from "supertest";

//Importamos chai, recuerden que es una librería de aserciones para Node JS. 
import { expect } from "chai";

//Vamos a crear la constante "requester", quien se encarga de hacer las peticiones al servidor. 

const requester = supertest("http://localhost:8080");

describe("Testing de la App Web Adoptame", () => {
    // describe("Testing de Mascotas", () => {
    //     it("Endpoint /api/pets debe crear una mascota correctamente", async () => {
    //         const pichichoMock = {
    //             name: "Firulais",
    //             specie: "Pichicho",
    //             birthDate: "2021-03-10"
    //         }

    //         const { statusCode, ok, _body } = await requester.post("/api/pets").send(pichichoMock);

    //         console.log(statusCode);
    //         console.log(ok);
    //         console.log(_body);

    //         //Validamos con Chai: 
    //         expect(_body.payload).to.have.property("_id");

    //     })

    //     //Actividad: Nuevos test

    //     it("Al crear una mascota sólo con los datos elementales. Se debe corroborar que la mascota creada cuente con una propiedad adopted : false", async () => {

    //         const nuevaMascota = {
    //             name: "Rex", 
    //             specie: "Perro Alfa", 
    //             birthDate: "1980-06-01"
    //         }

    //         const {statusCode, _body} = await requester.post("/api/pets").send(nuevaMascota); 

    //         expect(statusCode).to.equal(200);
    //         expect(_body.payload).to.have.property("adopted").that.equals(false); 

    //     })

    //     it("Si se desea crear una mascota sin el campo  nombre, el módulo debe responder con un status 400", async () => {
    //         const mascotaSinNombre = {
    //             specie: "Gato", 
    //             birthDate: "2020-05-15"
    //         }; 

    //         const {statusCode} = await requester.post("/api/pets").send(mascotaSinNombre); 
    //         expect(statusCode).to.equal(400); 
    //     })

    //     it("Al obtener a las mascotas con el método GET, la respuesta debe tener los campos status y payload. Además, payload debe ser de tipo arreglo.", async () => {
    //         const {statusCode, _body} = await requester.get("/api/pets"); 
    //         expect(statusCode).to.equal(200); 
    //         expect(_body).to.have.property("payload").that.is.an("array"); 
    //     })

    //     it("El método PUT debe poder actualizar correctamente a una mascota determinada", async () => {
    //         const idMascota = "67abcf871cdac0a1fcc6988c"; 

    //         const datosPerritoActualizado = {
    //             name: "Fatiga", 
    //             specie: "Perro"
    //             //Agregas cualquier campo que queres modificar.
    //         }

    //         const { statusCode } = await requester.put(`/api/pets/${idMascota}`).send(datosPerritoActualizado); 

    //         expect(statusCode).to.equal(200); 

    //     })

    //     it("El método DELETE debe poder borrar la última mascota agregada, ésto se puede alcanzar agregando a la mascota con un POST, tomando el id, borrando la mascota  con el DELETE, y luego corroborar si la mascota existe con un GET", async () => {
    //         //Paso 1: agrego la mascota

    //         const nuevaMascota = {
    //             name: "Violeta", 
    //             specie: "Perro", 
    //             birthDate: "2003-07-02"
    //         }

    //         const { _body: {payload: {_id}}} = await requester.post("/api/pets").send(nuevaMascota); 

    //         //Paso 2: Borrar la mascota agregada
    //         const { statusCode } = await requester.delete(`/api/pets/${_id}`); 

    //         expect(statusCode).to.equal(200);
    //      })
    // })

    //Test 2: Registro de Usuario

    // describe("Test Avanzado", () => {
    //     let cookie; 
    //     //Declaramos de forma global para el test una variable cooki que vamos a usar en las siguientes pruebas. 

    //     it("Debe registrar correctamente a un usuario", async () => {
    //         const mockUsuario = {
    //             first_name: "Milton", 
    //             last_name: "Mambru", 
    //             email: "milton@mambru.com", 
    //             password: "1234"
    //         }; 

    //         const {_body} =  await requester.post("/api/sessions/register").send(mockUsuario); 

    //         //Validamos: 
    //         expect(_body.payload).to.be.ok; 
    //     })

    //     it("Debe loguear correctamente al usuario y recuperar la cookie", async () => {
    //         const mockUsuario = {
    //             email: "milton@mambru.com", 
    //             password: "1234"
    //         }

    //         //Ahora me guardo lso header de la peticion: 
    //         const resultado = await requester.post("/api/sessions/login").send(mockUsuario); 

    //         //Se obtiene la cookie de sesion de la respuesta y se guarda en la variable 
    //         const cookieResultado = resultado.headers["set-cookie"]["0"]; 
            
    //         //Se verifica que la cookie recuperada exista
    //         expect(cookieResultado).to.be.ok; 

    //         //Separamos el nombre y el valor de la cookie recuperada y se guardan en un objeto: 

    //         cookie = {
    //             name: cookieResultado.split("=")["0"], 
    //             value: cookieResultado.split("=")["1"]
    //         }

    //         //Recuerden que el metodo split separa un string en cadenas mas pequeñas. 

    //         //Verificamos con expect: 
    //         expect(cookie.name).to.be.ok.and.eql("coderCookie"); 
    //         expect(cookie.value).to.be.ok; 
    //     })

    //     //Probar la ruta current: 

    //     it("Debe enviar la cookie que contiene el usuario", async () => {
    //         const {_body} = await requester.get("/api/sessions/current").set("Cookie", [`${cookie.name}=${cookie.value}`]); 

    //         //Verificamos que nos retorne el email: 
    //         expect(_body.payload.email).to.be.eql("milton@mambru.com"); 

    //     })
    // })

    //Testing con carga de imagenes: 

    describe("Testeamos la carga de imagenes", () => {
        it("Creamos una mascota pero con imagen", async () => {
            const mascotaMock = {
                name: "Codergato", 
                specie: "Gato naranja asesino", 
                birthDate: "2022-12-18"
            }


            const resultado = await requester.post("/api/pets/withimage")
                .field("name", mascotaMock.name)
                .field("specie", mascotaMock.specie)
                .field("birthDate", mascotaMock.birthDate)
                .attach("image", "./test/codergato.webp"); 

            //Verificamos que la peticion resulto ok: 
            expect(resultado.status).to.be.equal(200); 

            //Verificamos que la mascota tenga el campo id: 
            expect(resultado._body.payload).to.have.property("_id"); 

            //Verificamos que la mascota tenga el campo "image". 
            expect(resultado._body.payload.image).to.be.ok; 
        })
    })
})