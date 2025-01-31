/** REPASITO DE DOCKER **/

import express from "express"; 
const app = express(); 
const PUERTO = 8080; 

app.get("/", (req, res) => {
    res.send("Aguante el jugo Mocoreta!"); 
})

app.listen(PUERTO, () => console.log("Listo el jugo")); 