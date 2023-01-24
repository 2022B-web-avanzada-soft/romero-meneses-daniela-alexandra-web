const inquirer = require('inquirer');
const {leerEscribirArchivo, escribirArchivo, leerArchivo} = require("./leer-y-escribir");
const {Genero} = require("./genero");
const {Libro} = require("./libro");

const path = './generos.txt'

async function main(){

    try{
        const nuevoGenero = new Genero()
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'rawlist',
                    name: 'opcion',
                    message: 'SISTEMA DE GESTIÓN DE GÉNEROS Y LIBROS\n' + 'Elige una opción:',
                    choices: ['Crear', 'Mostrar Género', 'Actualizar', 'Gestión de Libros', 'Borrar Género', 'Salir']
                }
            ]).then((answer) => {
                    switch (answer.opcion) {
                        case 'Crear':
                            nuevoGenero.crearGenero().then(
                                (datos) => {
                                    leerEscribirArchivo(path, datos)
                                    main()
                                })
                            break

                        case 'Mostrar Género':
                            leerArchivo(path).then(
                                datos => {
                                    console.log(JSON.parse(datos))
                                    main()
                                }
                            )
                            break

                        case 'Actualizar':
                            leerArchivo(path).then(
                                datos =>{
                                    const listaGenero = JSON.parse(datos)
                                    nuevoGenero.actualizarGenero(listaGenero).then(
                                        newData =>{
                                            escribirArchivo(path,JSON.stringify(newData))
                                            console.log('Información actualizada')
                                            main()
                                        }
                                    )
                                }
                            )
                            break

                        case 'Gestión de Libros':
                            var nuevoLibro = new Libro()
                            var indiceGen;
                            leerArchivo(path).then(
                                datos =>{
                                    const listaGenero = JSON.parse(datos)
                                    nuevoLibro.indiceGenero(listaGenero).then(
                                        indice =>{
                                            indiceGen = parseInt(indice)
                                            mainLibro();
                                        }
                                    )
                                }
                            )
                        async function mainLibro() {
                            try {
                                nuevoLibro = new Libro()
                                var generos = leerArchivo(path).then(
                                    datos =>{
                                        generos = JSON.parse(datos)
                                    }
                                )
                                const respuestaLibro = await inquirer
                                    .prompt([
                                        {
                                            type: 'rawlist',
                                            name: 'opcion',
                                            message: 'Elige una opción:',
                                            choices: ['Crear', 'Mostrar Libros', 'Actualizar', 'Borrar Libro', 'Salir']
                                        }
                                    ]).then((ansLibro) => {
                                        switch (ansLibro.opcion) {
                                            case 'Crear':
                                                nuevoLibro.crearLibro().then(
                                                    (dataLibro) => {
                                                        generos[indiceGen].libros.push(dataLibro)
                                                        escribirArchivo(path, JSON.stringify(generos))
                                                        mainLibro()
                                                    })
                                                break

                                            case 'Mostrar Libros':
                                                console.log(generos[indiceGen].libros)
                                                mainLibro()
                                                break

                                            case 'Actualizar':
                                                nuevoLibro.actualizarLibros(generos, indiceGen).then(
                                                    newData => {
                                                        escribirArchivo(path, JSON.stringify(newData))
                                                        console.log('Información actualizada')
                                                        mainLibro()
                                                    }
                                                )
                                                break

                                            case 'Borrar Libro':
                                                nuevoLibro.borrarLibro(generos, indiceGen).then(
                                                    newData => {
                                                        escribirArchivo(path, JSON.stringify(newData))
                                                        console.log('Información borrada')
                                                        mainLibro()
                                                    }
                                                )
                                                break

                                            case 'Salir':
                                                main()
                                                break
                                        }
                                    });
                            } catch (e) {
                                console.error(e);
                            }
                        }
                            break

                        case 'Borrar Género':
                            leerArchivo(path).then(
                                dataGen =>{
                                    const listaGenero = JSON.parse(dataGen)
                                    nuevoGenero.borrarGenero(listaGenero).then(
                                        newData =>{
                                            escribirArchivo(path,JSON.stringify(newData))
                                            console.log('Información borrada')
                                            main()
                                        }
                                    )
                                }
                            )
                            break

                        case 'Salir':
                            console.log('Gracias por usar el sistema')
                            break

                    }
                }
            );
    }catch(e){
        console.error(e);
    }
}
main();
