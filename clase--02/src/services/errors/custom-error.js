//Creamos una clase para generar nuestros propios errores: 

class CustomError {
    static crearError({nombre = "Error", causa = "desconocido", mensaje, codigo = 1}) {
        const error = new Error(mensaje); 
        error.name = nombre; 
        error.causa = causa; 
        error.code = codigo; 
        throw error;
        //Lanzamos el error, esto detiene la aplicacion por eso debemos capturarlo en el otro módulo. 
    }
}

export default CustomError; 