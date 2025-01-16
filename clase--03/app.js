const express = require("express");
const app = express(); 

app.get("/", (req, res) => {
    res.send("Olis, que hacen? Saludos a Icardi"); 
})

app.listen(8080);

//Repasito de los comandos: 

//Instalacion: npm install -g yarn (instalacion global)
//Para conocer la version instalada: yarn --version
//Para crear el paquete: yarn init -y
//Para instalar dependencias: yarn add express
//Para eliminar dependencias: yarn remove express
//Para ejecutar un script: yarn run dev
