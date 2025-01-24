FROM node
#Definimos una imagen base: NODE, esto lo toma del DockerHub. 

WORKDIR /app
#Creamos una carpeta interna donde guardar nuestro proyecto. 

COPY package.json .
#Aca copiamos el package.json a mi carpeta nueva. 

RUN npm install
#Tiene que instalar todo

COPY . . 
#Copiamos todo el codigo o archivos que faltan

EXPOSE 8080
#Le decimos en que puerto vamos a trabajar

CMD [ "npm", "start" ]
#Tiene que ejecutar "npm start" para que funcione, no se olviden de configurar el script. 

