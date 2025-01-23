const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://coderhouse70230:coderhouse@cluster0.8hzd7.mongodb.net/Artillery?retryWrites=true&w=majority&appName=Cluster0")
    .then( () => console.log("Conectado a la BD"))
    .catch( (error) => console.log(error))