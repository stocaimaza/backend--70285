/** FUNCIÓN DE EJEMPLO**/

export const suma = (...numeros) => {
    if(numeros.length === 0)  return 0; 
    if(!numeros.every(num => typeof num === "number")) return null; 
    return numeros.reduce((acc, ele) => acc + ele, 0); 
}

export const resta = (...numeros) => {
    if(numeros.length === 0)  return 0; 
    if(!numeros.every(num => typeof num === "number")) return null; 
    return numeros.reduce((acc, ele) => acc - ele, 0); 
}


export const multiplicacion = (...numeros) => {
    if(numeros.length === 0)  return 0; 
    if(!numeros.every(num => typeof num === "number")) return null; 
    return numeros.reduce((acc, ele) => acc * ele, 0); 
}


export const division = (...numeros) => {
    if(numeros.length === 0)  return 0; 
    if(!numeros.every(num => typeof num === "number")) return null; 
    return numeros.reduce((acc, ele) => acc / ele, 0); 
}



//Para instalar dependencias pero leyendo el archivo package-lock.json tenemos que usar el comando NPM CI

//Podemos buscar vulnerabilidades con respecto a las versiones de las dependencias que tenemos instaladas: NPM AUDIT

//Corregimos esas vulnerabilidades con: NPM AUDIT FIX --FORCE

