/** CLASE 4 - LOGGERS Y TESTING DE PERFORMANCE **/

//Temas de hoy: 

//1) Que son los loggers
//2) Winston
//3) Test de carga con Artillery
//4) Modelo de Performance con Artillery

//Los loggers: es una herramienta que registra información importante sobre el funcionamiento de una aplicación mientras se ejecuta.  Estos registros son útiles para diagnosticar problemas, rastrear eventos y ver el rendimiento del sistema. 

//Podemos: 

//Trabajar con diferentes "niveles" de mensajes. 
//Tienen "transportes" de información. 

//Winston: es una biblioteca popular de logging (registro) para Node JS, ampliamente utilizada en el desarrollo de aplicaciones Backend. 

import express from "express"; 
const app = express(); 
const PUERTO = 8080; 
//Importamos el middleware. 
import addLogger from "./utils/logger.js";

//Middleware
app.use(addLogger); 

//Rutas
app.get("/clientes", (req, res) => {
    res.send("Funciona, por favor tuenti ayudanos hoy!"); 
})

//Ruta warning: 

app.get("/warning", (req, res) => {
    req.logger.warn("¡Cuidado, hombre radiactivo!"); 
    res.send("Prueba de Warning"); 
})

//Ruta para probar todos los logs: 

app.get("/loggerTest", (req, res) => {
    req.logger.debug("Mensaje de Debug");
    req.logger.http("Mensaje de HTTP");
    req.logger.info("Mensaje de Info");
    req.logger.warning("Mensaje de Warning");
    req.logger.error("Mensaje de Error");
    req.logger.fatal("Mensaje fata");

    res.send("Logs Generados"); 
})

app.listen(PUERTO, () => console.log(`Escuchando en el puerto: ${PUERTO}`)); 

//Artillery: es una herramienta que me permite simular multiples peticiones de informacion a  mi servidor, con la idea de testear el funcionamiento. 

//Simulamos algunas operaciones con Artillery: 

//SIMPLE: 

app.get("/operacionsimple", (req, res) => {
    let suma = 0; 

    for (let i = 0; i < 1000000; i++ ) {
        suma += i; 
    }

    res.send({suma});
})

//COMPLEJA: 

app.get("/operacioncompleja", (req, res) => {
    let suma = 0; 

    for (let i = 0; i < 5e8; i++ ) {
        suma += i; 
    }

    res.send({suma});
})

