const inquirer = require('inquirer');
const fs = require('fs');

class Genero{

    // Crea un nuevo genero
    constructor(nombre, cantidadDeLibros, subgenero, principalAutor) {
        this.nombre = nombre;
        this.cantidadDeLibros = cantidadDeLibros;
        this.subgenero = subgenero;
        this.principalAutor = principalAutor;
        this.libros = [];
    }

    async crearGenero(){
        const nuevoGenero = new Genero()
        let promesaGenero;
        const respuestaGenero = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'nombre',
                    message: 'Ingrese el nombre del género'
                },
                {
                    type: 'input',
                    name: 'cantidadDeLibros',
                    message: 'Ingrese la cantidad de libros que existen',
                },
                {
                    type: 'input',
                    name: 'subgenero',
                    message: 'Ingrese el nombre del subgénero'
                },
                {
                    type: 'input',
                    name: 'principalAutor',
                    message: 'Ingrese del autor principal'
                },
            ]).then(a=>{
                promesaGenero = new Promise(
                    respuesta =>(
                        nuevoGenero.nombre = a.nombre,
                            nuevoGenero.cantidadDeLibros = parseInt(a.cantidadDeLibros),
                            nuevoGenero.subgenero = a.subgenero,
                            nuevoGenero.principalAutor = a.principalAutor,
                            nuevoGenero.libros = [],
                            respuesta(nuevoGenero)
                    ));
            });
        return promesaGenero
    }

    // Actualiza la información genero
    async actualizarGenero(listaGeneros){
        let promesaGenero;
        let indiceGenero;
        const respuestaGenero = await inquirer
            .prompt([
                {
                    type:'input',
                    name:'nombre',
                    message:'Ingrese el nombre del género:'
                },
                {
                    type:'rawlist',
                    name:'nuevaEleccion',
                    message:'Elige la opción que vas a cambiar:',
                    choices: ['1. Nombre', '2. Cantidad de libros', '3. Subgenero','4. Autor principal']},
                {
                    type:'input',
                    name:'nuevoValor',
                    message:'Ingrese el nuevo valor:'
                },
            ]).then(a=>{
                promesaGenero = new Promise(
                    res =>(
                        listaGeneros
                            .forEach(
                                valorActual => {
                                    if (valorActual.nombre === a.nombre) {
                                        indiceGenero = listaGeneros.indexOf(valorActual)
                                        switch (a.nuevaEleccion){
                                            case "1. Nombre":
                                                listaGeneros[indiceGenero].nombre = a.nuevoValor;
                                                break;
                                            case "2. Cantidad de libros":
                                                listaGeneros[indiceGenero].cantidadDeLibros = parseInt(a.nuevoValor);
                                                break;
                                            case "3. Subgenero":
                                                listaGeneros[indiceGenero].subgenero = a.nuevoValor;
                                                break;
                                            case "4. Autor principal":
                                                listaGeneros[indiceGenero].principalAutor = a.nuevoValor;
                                                break;
                                        }
                                    }
                                }
                            ),
                            res(listaGeneros)
                    ));
            });
        return promesaGenero
    }

    //Borra el género elegido
    async borrarGenero(listaGenero){
        let promesaGenero;
        const respuestaGenero = await inquirer
            .prompt([
                {
                    type:'input',
                    name:'nombre',
                    message:'Ingrese el nombre del género:'
                },
            ]).then(a=>{
                promesaGenero = new Promise(
                    res =>(
                        res(listaGenero.filter(item => item.nombre !== a.nombre))
                    ));
            });
        return promesaGenero
    }
}
class Libro{

    constructor(nombre, autor, fechaPublicacion, numeroCopiasVendidas, estaEnLibrerias) {
        this.nombreLibro = nombre;
        this.autorLibro = autor;
        this.fechaPublicacionLibro = fechaPublicacion
        this.numeroCopiasVendidasLibro = numeroCopiasVendidas
        this.estaEnLibreriasLibro = estaEnLibrerias
    }

    async indiceGenero(listaGenero){
        var promesaIndiceGenero
        var indiceGenero;
        await inquirer.prompt([
            {
                type:'input',
                name:'nombre',
                message:'Ingrese el nombre del género:'
            },
        ]).then(respuesta => {
            promesaIndiceGenero = new Promise(
                res => (
                    listaGenero
                        .forEach(
                            valorActual => {
                                if (valorActual.nombre === respuesta.nombre) {
                                    indiceGenero = listaGenero.indexOf(valorActual)
                                }
                            }
                        ),
                        res(indiceGenero)
                ));
        });
        return promesaIndiceGenero
    }

    async crearLibro(){
        const nuevoLibro = new Libro()
        let promesaLibro;
        await inquirer
            .prompt([
                {
                    type:'input',
                    name:'nombre',
                    message:'Ingrese el nombre:'},
                {
                    type:'input',
                    name:'autorLibro',
                    message:'Ingrese el autor:'},
                {
                    type:'input',
                    name:'fechaPublicacion',
                    message:'Ingrese la fecha de Publicacion (aaaa-mm-dd):'},
                {
                    type:'input',
                    name:'numeroCopias',
                    message:'Ingrese el numero de copias vendidas:'},
                {
                    type:'input',
                    name:'estaEnLibrerias',
                    message:'¿Está el libro en librerias?:  Si  o  No:'}
            ]).then(a=>{
                promesaLibro = new Promise(
                    res =>(
                        nuevoLibro.nombreLibro = a.nombre,
                            nuevoLibro.autorLibro = a.autorLibro,
                            nuevoLibro.fechaPublicacionLibro = new Date(a.fechaPublicacion.split('-')[0],a.fechaPublicacion.split('-')[1],a.fechaPublicacion.split('-')[2]),
                            nuevoLibro.numeroCopiasVendidasLibro = parseInt(a.numeroCopias),
                            nuevoLibro.estaEnLibreriasLibro = (a.estaEnLibrerias === 'Si'),
                            res(nuevoLibro)
                    ));
            });
        return promesaLibro
    }

    async actualizarLibro(listaLibro, indiceGenero){
        let promesaGenero;
        let indiceLibro;
        await inquirer
            .prompt([
                {
                    type:'input',
                    name:'nombre',
                    message:'Ingrese el nombre del libro:'
                },
                {
                    type:'rawlist',
                    name:'respuesta',
                    message:'Elige la opción a actualizar:',
                    choices: ['1. Nombre', '2. Autor', '3. Fecha Publicacion',
                        '4. Número de copias vendidas','5. Está en librerías']
                },
                {
                    type:'input',
                    name:'nuevoValor',
                    message:'Ingrese el nuevo valor:'
                },
            ]).then(a=>{
                promesaGenero = new Promise(
                    res => {
                        listaLibro[indiceGenero].libros
                            .forEach(
                                libro => {
                                    if (libro.nombre === a.nombre) {
                                        indiceLibro = listaLibro[indiceGenero].libros.indexOf(libro)
                                        switch (a.respuesta) {
                                            case "1. Nombre":
                                                listaLibro[indiceGenero].libros[indiceLibro].nombreLibro = a.nuevoValor
                                                break
                                            case "2. Autor":
                                                listaLibro[indiceGenero].libros[indiceLibro].autorLibro = a.nuevoValor
                                                break
                                            case "3. Fecha Publicacion":
                                                listaLibro[indiceGenero].libros[indiceLibro].fechaPublicacionLibro = new Date(a.nuevoValor.split('-')[0], a.nuevoValor.split('-')[1], a.nuevoValor.split('-')[2])
                                                break
                                            case "4. Número de copias vendidas":
                                                listaLibro[indiceGenero].libros[indiceLibro].numeroCopiasVendidasLibro = parseInt(a.nuevoValor)
                                                break
                                            case "5. Está en librerías":
                                                listaLibro[indiceGenero].libros[indiceLibro].estaEnLibreriasLibro = (a.nuevoValor === 'Si')
                                                break
                                        }
                                    }
                                }
                            )
                        res(listaLibro);
                    });
            });
        return promesaGenero
    }

    async borrarLibro(listaGenero, indiceGenero){
        let promesaGenero;
        let listaLibros = listaGenero[indiceGenero].libros;
        await inquirer
            .prompt([
                {
                    type:'input',
                    name:'nombre',
                    message:'Ingrese el nombre del Libro:'},
            ]).then(a=>{
                promesaGenero = new Promise(
                    res =>(
                        listaGenero[indiceGenero].libros=listaLibros.filter(item => item.nombre !== a.nombre),
                            res(listaGenero)
                    ));
            });
        return promesaGenero
    }

}

async function main(){
    try{
        console.log("Sistema de Gestión de Libros y Géneros");
        const nuevoGenero = new Genero();
        await inquirer.prompt(
            [
                {
                    type: 'list',
                    name: 'Menu',
                    message: '¿Qué desea hacer?',
                    choices: [
                        '1. Añadir género',
                        '2. Mostrar géneros',
                        '3. Actualizar género',
                        '4. Gestionar libros de un género',
                        '5. Eliminar género',
                        '6. Salir'
                    ]
                }
            ]
        ).then(
            async answerMenu =>{
                switch (answerMenu.Menu){
                    case "1. Añadir género":
                        nuevoGenero.crearGenero().then(
                            (datos)=>{
                                leerEscribirArchivo('./generos.txt',datos)
                                main()
                            }
                        )
                        break;
                    case "2. Mostrar géneros":
                        leerArchivo('./generos.txt').then(
                            data => {
                                console.log(JSON.parse(data))
                                main()
                            }
                        )
                        break;
                    case "3. Actualizar género":
                        leerArchivo('./generos.txt').then(
                            datos =>{
                                const listaGeneros = JSON.parse(datos)
                                nuevoGenero.actualizarGenero(listaGeneros).then(
                                    newData =>{
                                        escribirArchivo('./generos.txt',JSON.stringify(newData))
                                        console.log('Información actualizada')
                                        main()
                                    }
                                )
                            }
                        )
                        break;
                    case "4. Gestionar libros de un género":
                        var nuevoLibro = new Libro()
                        var indiceGenero;
                        leerArchivo('./generos.txt').then(
                            datos =>{
                                const listaGenero = JSON.parse(datos)
                                nuevoLibro.indiceGenero(listaGenero).then(
                                    indice =>{
                                        indiceGenero = parseInt(indice)
                                        mainLibro();
                                    }
                                )
                            }
                        )
                    async function mainLibro() {
                        try {
                            nuevoLibro = new Libro()
                            var generos = leerArchivo('./generos.txt').then(
                                datos =>{
                                    generos = JSON.parse(datos)
                                }
                            )
                            const respuesta = await inquirer
                                .prompt([
                                    {
                                        type: 'rawlist',
                                        name: 'opcion',
                                        message: 'Elige una opción:',
                                        choices: ['1. Crear', '2. Mostrar libro', '3. Actualizar', '4. Borrar libro', '5. Salir']
                                    }
                                ]).then((respuestaGenero) => {
                                    switch (respuestaGenero.opcion) {
                                        case '1. Crear':
                                            nuevoLibro.crearLibro().then(
                                                (datosLibro) => {
                                                    generos[indiceGenero].libros.push(datosLibro)
                                                    escribirArchivo('./generos.txt', JSON.stringify(generos))
                                                    mainLibro()
                                                })
                                            break

                                        case '2. Mostrar libro':
                                            console.log(generos[indiceGenero].libros)
                                            mainLibro()
                                            break

                                        case '3. Actualizar':
                                            nuevoLibro.actualizarLibro(generos, indiceGenero).then(
                                                newData => {
                                                    escribirArchivo('./generos.txt', JSON.stringify(newData))
                                                    console.log('Información actualizada')
                                                    mainLibro()
                                                }
                                            )
                                            break

                                        case '4. Borrar libro':
                                            nuevoLibro.borrarLibro(generos, indiceGenero).then(
                                                newData => {
                                                    escribirArchivo('./generos.txt', JSON.stringify(newData))
                                                    console.log('Información borrada')
                                                    mainLibro()
                                                }
                                            )
                                            break

                                        case '5. Salir':
                                            main()
                                            break
                                    }
                                });
                        } catch (e) {
                            console.error(e);
                        }
                    }
                        break;
                    case "5. Eliminar género":
                        leerArchivo('./generos.txt').then(
                            dataGenero =>{
                                const listaGenero = JSON.parse(dataGenero)
                                nuevoGenero.borrarGenero(listaGenero).then(
                                    newData =>{
                                        escribirArchivo('./genero.txt',JSON.stringify(newData))
                                        console.log('Información borrada')
                                        main()
                                    }
                                )
                            }
                        )
                        break;
                    case "6. Salir":
                        console.log("Gracias por usar el sistema");
                        break;
                    default:
                        main()
                }
            }
        )
    }catch (e){
        console.error(e);
    }
}
main().then().catch();
async function leerArchivo(path){
    let promesaLeer = await new Promise(
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
    return promesaLeer
}

async function escribirArchivo(path, contenidoArchivo){
    const promesaEscribirArchivo = await new Promise(
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
    return promesaEscribirArchivo
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
