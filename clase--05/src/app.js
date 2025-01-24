/** CLASE 5 -- CLUSTERIZACION Y ESCALABILIDAD **/

//Temas: 
//1) Escalabilidad
//2) Clusterizar nuestra app
//3) Trabajamos con Docker

//CLUSTERIZAR NUESTRA APLICACION: 

//console.log(process.pid); 
//Obtengo el identificador del proceso. 

//Vamos a utilizar el módulo nativo Cluster que nos permitirá ejecutar este concepto de clusterizacion que recie comentamos. Donde vamos a tener un proceso principal y un conjunto de procesos trabajadores. 

import express from "express";
import cluster from "cluster";

//Realizamos nuestro primer forkeo: 
//La lógica es la siguiente: 
// si sos un proceso primario, entonces indicame con un mensaje por consola y forkea a un trabajador. 
//Si sos un trabajador, entonces indicalo por consola y realiza las tareas que se te asignan. 

//Verificamos la capacidad de nuestra compu: 
import { cpus } from "os";
let numeroDeProcesadores = cpus().length;
//console.log(numeroDeProcesadores);

//La función cpus().length cuenta la cantidad de núcleos de CPU disponibles en el sistema. En la mayoría de los sistemas modernos, esto incluye tanto los núcleos físicos como los hilos de ejecución (hyper-threading) si están habilitados.

// const numCPUS = cpus().length;

// Por lo tanto, numCPUS representará el número total de hilos de ejecución disponibles en el sistema.

///////////////////////////////////////////////////

if (cluster.isPrimary) {
    console.log("Soy el proceso principal");

    for (let i = 0; i < numeroDeProcesadores; i++) {
        //Para aplicar el forkeo voy a utilizar el modulo de Cluster: 
        cluster.fork();
    }
} else {
    console.log(`Me presento, soy un proceso worker con el id: ${process.pid}`);

    const app = express(); 

    // app.get("/", (req, res) => {
    //     res.send("Peticion atendida por un proceso worker"); 
    // })

    //OPERACION SIMPLE: 

    app.get("/operacionsimple", (req, res) => {
        let suma = 0; 

        for(let i = 0; i < 1000000; i++ ) {
            suma += i; 
        }
        res.send({suma}); 
    })

    app.get("/operacioncompleja", (req, res) => {
        let suma = 0; 
        for(let i = 0; i < 5e8; i++) {
            suma += i; 
        }
        res.send({suma}); 
    })

    app.listen(8080, () => console.log("Escuchando en el FM Hit 8080")); 
}

//TESTEAMOS CON ARTILLERY: 

//Operacion simple: 
//artillery quick --count 40 --num 50 "http://localhost:8080/operacionsimple" -o simple.json

//Operacion compleja: antes nos dio 33 con status 200
//artillery quick --count 40 --num 50 "http://localhost:8080/operacioncompleja" -o compleja.json

//ESPECTACULAR EL RESULTADOOOO!!! 2000!!!
