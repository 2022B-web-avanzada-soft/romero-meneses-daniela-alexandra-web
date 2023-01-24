const fs = require('fs');

async function leerArchivo(path){
    let miPrimerPromesa = await new Promise(
        (resolve, reject)=>{
            fs.readFile(
                path,
                'utf-8',//codificación
                (errorLecturaPrimerArchivo , contenidoArchivo) =>{//callback
                    if(errorLecturaPrimerArchivo){
                        reject('error leyendo archivo');
                    }else{
                        resolve(contenidoArchivo);
                    }
                }
            );
        }
    );
    return miPrimerPromesa
}

async function escribirArchivo(path, contenidoArchivo){
    const miPromesa = await new Promise(
        (resolve, reject)=> {
            fs.writeFile(
                path,
                contenidoArchivo,
                (errorEscritura) => {//callback
                    if (errorEscritura) {
                        reject('error leyendo archivo');
                    } else {
                        resolve(contenidoArchivo);
                    }
                }
            );
        }
    );
    return miPromesa
}
async function leerEscribirArchivo(path, nuevoContenido){
    try {
        let respuestaContenidoArchivoOriginal = await leerArchivo(path); //espera una respuesta
        if(respuestaContenidoArchivoOriginal == ""){
            respuestaContenidoArchivoOriginal='[]'
        }
        respuestaContenidoArchivoOriginal = JSON.parse(respuestaContenidoArchivoOriginal);
        respuestaContenidoArchivoOriginal.push(nuevoContenido)
        const strMedico = JSON.stringify(respuestaContenidoArchivoOriginal);
        await escribirArchivo(path, strMedico);
    }catch (error){
        console.error(error);
    }
}
module.exports = {
    "leerArchivo": leerArchivo,
    "escribirArchivo": escribirArchivo,
    "leerEscribirArchivo": leerEscribirArchivo
}