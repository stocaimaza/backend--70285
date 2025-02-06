import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect(`mongodb+srv://swtocaimaza:coderhouse@cluster0.pmzgicx.mongodb.net/Documentacion70285?retryWrites=true&w=majority&appName=Cluster0`)

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))

///// CLASE 08- DOCUMENTACIÓN 

//Sitio web: https://swagger.io/
//1) Instalamos swagger: npm install swagger-jsdoc swagger-ui-express

//swagger-jsdoc: nos deja escribir la configuracion en un archivo .yaml (tambien en json) y a partir de ahi genera la apidoc. 

//swagger-ui-express: nos permitirá linkear una interfaz grafica para poder visualiar la documentación. 

//2) Importamos los módulos: 

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from "swagger-ui-express"; 

//3) Creamos un objeto de configuracion: swaggerOptions

const swaggerOptions = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Documentación de la App Adoptame", 
            description: "App dedicada a encontrar familias para los perritos de la calle"
        }
    }, 
    apis: ["./src/docs/**/*.yaml"]
}

//4) Conectamos Swagger a nuestro servidor de Express: 

const specs = swaggerJSDoc(swaggerOptions); 
app.use("/apidocs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs)); 