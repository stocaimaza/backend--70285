//Instalamos: npm i express cors whatsapp-web.js qrcode-terminal

import express from "express"; 
import { Client } from "whatsapp-web.js";
import qrcode from "qrcode-terminal"; 
import cors from "cors"; 

//Creamos la app de express: 
const app = express(); 
const PUERTO = 8080; 

//Middleware
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(cors()); 

//Inicializamos el cliente de WhatsApp: 

const client = new Client({
    //Usamos la propiedad puppeteer me permite controlar sin la interfaz grafica
    puppeteer: {
        headless: true
    
    }
})

let isAuthenticated = false; 


client.on("qr", qr => {
    //Usamos "qrcode-terminal" para generar y mostrar el codigo del QR en la terminal. 
    qrcode.generate(qr, {small: true}); 
    //Small:true hace que el qr se muestre mas pequeño y legible en la terminal. 
})

//Confirmamos si el cliente esta listo para enviar mensajes:

client.on("ready", () => {
    console.log("Cliente de WhatsApp esta listo!"); 
    isAuthenticated = true; 
})