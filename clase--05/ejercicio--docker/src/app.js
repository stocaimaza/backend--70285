import express from "express"; 
const app = express(); 

app.get("/", (req, res) => {
    res.send("Hola Mamá, estoy trabajando con Docker y sin manos!!"); 
})

app.listen(8080, () => console.log("Funcionando de 10 en el 8080, aguante el ciber!")); 