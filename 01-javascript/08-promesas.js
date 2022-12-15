// 08-promesas.js
const fs = require('fs');
/*
* Una funcion que acepte como parametro una variable
* del "path" del archivo y otra variable con el "contenidoArchivo".
* Utilizar el modulo 'fs' para leer el archivo en ese "path" y anadir el
* "contenidoArchivo" a ese archivo.
* */

function leerArchivo(path){
    return new Promise(
        (resolve, reject)=>{
            fs.readFile(
                path, // Nombre o path del archivo
                'utf-8', // codificacion
                (errorLectura, contenido) => {
                    if (errorLectura) {
                        console.error(errorLectura);
                        reject('Error leyendo primer archivo');
                    } else {
                        resolve(contenido)
                    }
                }
            );
        }
    ); //
}
function escribirArchivo(path, nuevoContenido){
    return new Promise(
        (resolve, reject) =>{
            fs.writeFile(
                path,
                nuevoContenido,
                (errorEscritura) => {
                    if (errorEscritura) {
                        console.error(errorEscritura);
                        reject('Error escribiendo nuevo archivo');
                    } else {
                        resolve('Completado');
                    }
                }
            );
        }
    ); //
}
//
function ejercicio08(path, contenidoNuevo){
    leerArchivo(path)
        .then(
            (contenidoArchivoOriginal)=>{
                return escribirArchivo(
                    path, contenidoArchivoOriginal + contenidoNuevo
                )
            }
        )
        .then()
        .catch((error)=> console.error(error));
}

//ejercicio08('06-ejemplo.txt', ' :)  lo logramos!');

//SYNC AWAIT
// Reglas
// 1. Estar dentro de una funcion (nombrada o anonima)
// 2. AGREGAR la palabra 'async' antes de la declaración de la función
// 3. AGREGAR la palabra 'await' antes de la declaración de una promesa

async function asyncAwaitUno(path, nuevoContenido){
    // Si sabemos que en la promesa puede existir un reject usamos try-catch
    try{
        const respuestaContenidoArchivoOriginal = await leerArchivo(path);
        await escribirArchivo(path, respuestaContenidoArchivoOriginal + nuevoContenido);
        1 + 1; //caramelo
        leerArchivo().then().catch()//async
        await leerArchivo() //sync
        // await escribirArchivo(path,(await leerArchivo(path)) + nuevoContenido);
    }catch (error){
        console.error(error)
    }

}
asyncAwaitUno('06-ejemplo.txt', ' :)  lo logramos!').then().catch()
const asyncAwaitDos = function (){

}
const asyncAwaitTres = () =>{

}
