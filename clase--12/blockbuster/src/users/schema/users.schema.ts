import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
//Armamos nuestro Schema y Modelo de Usuarios. 

//1) El Schema lo voy a armar a partir de una clase. 
//2) Agregamos los decoradores Prop y Schema. 
//3) Hidratamos el documento para que tenga metodos de mongoose. 

export type UsersDocument = HydratedDocument<User>
//Un documento hidratado hace referencia a que los resultados que devuelve la BD sean instancias de Mongo, lo cual me permite acceder a multiples funcionalidades adicionales. 

@Schema()
export class User {
    @Prop({required: true})
    first_name: string; 

    @Prop()
    last_name: string; 

    @Prop()
    email: string; 

    @Prop()
    password: string
}

//4) Al final del archivo, colocaremos la creacion del schema final. 

export const usersSchema = SchemaFactory.createForClass(User); 