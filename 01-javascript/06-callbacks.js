// 06-callbacks
const fs = require('fs');   // file system
                            //Importar modulo fs

// 1) Leer archivo:06-ejemplo.txt,
// luego imprimir en consolosa
// 2) Después del paso 1, Leer archivo: 01-variables.js
//  , luego imprimir en consola
// 3) Crear un nuevo archivo llamado 06-nuevo-archivo.txt
//  con el contenido de los dos archivos


fs.readFile(
    './06-ejemplo.txt', //Nombre o path del archivo
    'utf-8', //codificacion
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) =>{ // Callback
        if(errorLecturaPrimerArchivo){
            console.error('ERROR LEYENDO ARCHIVO', errorLecturaPrimerArchivo);
        }else{
            fs.readFile(
                './01-javascript.js', //Nombre o path del archivo
                'utf-8', //codificacion
                (errorLecturaPrimerArchivo, contenidoSegundoArchivo) =>{

                    if(errorLecturaPrimerArchivo){
                        console.error('ERROR LEYENDO ARCHIVO', errorLecturaPrimerArchivo);
                    }else{
                        console.log(contenidoPrimerArchivo) // impresion en consola
                        fs.writeFileSync(
                            './06-nuevo-archivo.txt',
                            contenidoPrimerArchivo+ "\n" + contenidoSegundoArchivo,
                            (errorEscritura) =>{
                                if(errorEscritura){
                                    console.error('ERROR ESCRIBIENDO ARCHIVO: ', errorEscritura);
                                }
                            }
                        );
                        console.log(contenidoSegundoArchivo) // impresion en consola
                    }
                }
            );

        }
    }
);
