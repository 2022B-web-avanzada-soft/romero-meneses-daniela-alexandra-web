const inquirer = require("inquirer");

class Libro{

    constructor(nombre, autor,numeroPaginas, fechaDePublicacion, estaEnLibrerias) {
        this.nombre = nombre
        this.autor = autor
        this.numeroPaginas = numeroPaginas
        this.fechaDePublicacion = fechaDePublicacion
        this.estaEnLibrerias = estaEnLibrerias
    }

    async indiceGenero(listaGenero){
        var promIndiceGen
        var indiceGenero;
        await inquirer.prompt([
            {type:'input',name:'opciones',message:'Ingrese el nombre del Género:'},
        ]).then(respuestaGen => {
            promIndiceGen = new Promise(
                res => (
                    listaGenero
                        .forEach(
                            valorActual => {
                                if (valorActual.nombre == respuestaGen.opciones) {
                                    indiceGenero = listaGenero.indexOf(valorActual)
                                }
                            }
                        ),
                        res(indiceGenero)
                ));
        });
        return promIndiceGen
    }

    async crearLibro(){
        const nuevoLibro = new Libro()
        let promesaLibro;
        await inquirer
            .prompt([
                {type:'input',name:'nombre',message:'Ingrese el nombre:'},
                {type:'input',name:'autor',message:'Ingrese el autor:'},
                {type:'input',name:'numeroPaginas',message:'Ingrese el número de páginas:'},
                {type:'input',name:'fechaDePublicacion',message:'Ingrese la fecha de publicación (aaaa-mm-dd):'},
                {type:'input',name:'estaEnLibrerias',message:'¿Lo puede encontrar en librerías?  si  o  no:'}
            ]).then(a=>{
                promesaLibro = new Promise(
                    res =>(
                        nuevoLibro.nombre = a.nombre,
                            nuevoLibro.autor = a.autor,
                            nuevoLibro.numeroPaginas = parseInt(a.numeroPaginas),
                            nuevoLibro.fechaDePublicacion = new Date(a.fechaDePublicacion.split('-')[0],a.fechaDePublicacion.split('-')[1],a.fechaDePublicacion.split('-')[2]),
                            nuevoLibro.estaEnLibrerias = (a.estaEnLibrerias === 'si'? true: false),
                            res(nuevoLibro)
                    ));
            });
        return promesaLibro
    }

    async actualizarLibros(listaGeneros, indiceGenero){
        let promesaGen;
        let indiceLibro;
        await inquirer
            .prompt([
                {type:'input',name:'nombre',message:'Ingrese el nombre del libro:'},
                {type:'rawlist',name:'eleccion',message:'Elige la opción que vas a cambiar:',
                    choices: ['nombre', 'autor', 'numeroPaginas','fechaDePublicacion','estaEnLibrerias']},
                {type:'input',name:'nuevoValor',message:'Ingrese el nuevo valor:'},
            ]).then(a=>{
                promesaGen = new Promise(
                    res => {
                        listaGeneros[indiceGenero].libros
                            .forEach(
                                paciente => {
                                    if (paciente.nombre == a.nombre) {
                                        indiceLibro = listaGeneros[indiceGenero].libros.indexOf(paciente)
                                        switch (a.eleccion) {
                                            case "nombre":
                                                listaGeneros[indiceGenero].libros[indiceLibro].nombre = a.nuevoValor
                                                break
                                            case "autor":
                                                listaGeneros[indiceGenero].libros[indiceLibro].autor = a.nuevoValor
                                                break
                                            case "numeroPaginas":
                                                listaGeneros[indiceGenero].libros[indiceLibro].numeroPaginas = parseInt(a.nuevoValor)
                                                break
                                            case "fechaDePublicacion":
                                                listaGeneros[indiceGenero].libros[indiceLibro].fechaDePublicacion = new Date(a.nuevoValor.split('-')[0], a.nuevoValor.split('-')[1], a.nuevoValor.split('-')[2])
                                                break
                                            case "estaEnLibrerias":
                                                listaGeneros[indiceGenero].libros[indiceLibro].estaEnLibrerias = (a.nuevoValor === 'si' ? true : false)
                                                break
                                        }
                                    }
                                }
                            )
                        res(listaGeneros);
                    });
            });
        return promesaGen
    }

    async borrarLibro(listaGenero, indiceGenero){
        let promesaGen;
        let listaLibros = listaGenero[indiceGenero].libros;
        await inquirer
            .prompt([
                {type:'input',name:'nombre',message:'Ingrese el nombre del Libro:'},
            ]).then(a=>{
                promesaGen = new Promise(
                    res =>(
                        listaGenero[indiceGenero].libros=listaLibros.filter(item => item.nombre !== a.nombre),
                            res(listaGenero)
                    ));
            });
        return promesaGen
    }

}
 module.exports={
    "Libro":Libro
 }