//Mock: es una imitacion de un dato real. Es una simulacion que generamos en el entorno de desarrollo para no manipular datos reales. 

//npm install @faker-js/faker

import express from "express"; 
import usuariosRouter from "./routes/usuarios.router.js"; 
const app = express(); 
const PUERTO = 8080; 

//Rutas: 
app.use("/api/users", usuariosRouter); 

app.listen(PUERTO, () => console.log("Escuchando en el puerto de Mar del Plata"));