//MercadoPago
//npm i express mercadopago cors

import express from "express";
import cors from "cors";
const app = express(); 
const PUERTO = 8080; 

import {MercadoPagoConfig, Preference} from "mercadopago"; 

const client = new MercadoPagoConfig({
    accessToken: "APP_USR-3389783084454089-010719-80b52281f2a9b27531953fbb5ede21ed-1840474554"
})


//Middleware
app.use(express.json());
app.use(cors()); 

//Rutas
app.post("/create-preference", async (req, res) => {
    try {
        const body = {
            items: [
                {
                    title: req.body.title, 
                    quantity: Number(req.body.quantity), 
                    unit_price: Number(req.body.price), 
                    currency_id: "ARS"
                }
            ], 
            back_urls: {
                success: "https://www.mercadolibre.com.ar/",
                failure: "https://www.mercadolibre.com.ar/", 
                pending: "https://www.mercadolibre.com.ar/"
            }, 
            auto_return: "approved"
        }

        const preference = new Preference(client); 
        const result = await preference.create({body}); 

        //Se lo enviamos al front: 
        res.json({
            id: result.id
        })

    } catch (error) {
        console.log(error);
        res.send("Error mortal"); 
    }
})


app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
})
