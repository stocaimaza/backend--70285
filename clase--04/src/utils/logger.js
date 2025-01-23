//Primer paso fundamental: npm i winston
//Segundo paso: importamos

import winston from "winston";

// const logger = winston.createLogger({
//     //Le pasamos un objeto para crear el Logger. 
//     //Aca podemos configurar el nivel y el transporte. 

//     transports: [
//         new winston.transports.Console({level: "http"}),
//         //Agregamos un nuevo transporte: 
//         new winston.transports.File({
//             filename: "./errors.log",
//             level: "warn"
//         })
//     ]
// })

//Personalizamos nuestros niveles: 

const niveles = {
    nivel: {
        fatal: 0,
        error: 1, 
        warning: 2, 
        info: 3, 
        http: 4, 
        debug: 5
    }, 
    colores: {
        fatal: "red",
        error: "yellow", 
        warning: "blue", 
        info: "green",
        http: "magenta", 
        debug: "white"
    }
}

//Creamos nuestro logger con niveles y colores propios: 

const logger = winston.createLogger({
    levels: niveles.nivel, 
    transports: [
        new winston.transports.Console({
            level: "http", 
            format: winston.format.combine(
                winston.format.colorize({colors: niveles.colores}),
                winston.format.simple()
            )
        }), 
        //Agregamos un nuevo transporte: 
        new winston.transports.File({
            filename: "./errors.log", 
            level: "warning", 
            format: winston.format.simple()
        })
    ]
})



//Creamos un middleware

const addLogger = (req, res, next) => {
    req.logger = logger; 
    req.logger.http(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`);
    next();
}

//Lo exportamos y lo usamos en la App conectado al servidor. 
export default addLogger; 