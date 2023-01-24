const inquirer = require("inquirer");

class Genero{

    constructor(nombre, autorRepresentativo, esPopular, precioEstimado, numeroDeAutores, libros) {
        this.nombre = nombre
        this.autorRepresentativo = autorRepresentativo
        this.esPopular = esPopular
        this.precioEstimado = precioEstimado
        this.numeroDeAutores = numeroDeAutores
        this.libros = libros

    }

    async crearGenero(){
        const nuevoGenero = new Genero()
        let promesaGen;
        const respuestaM = await inquirer
            .prompt([
                {type:'input',name:'nombre',message:'Ingrese el nombre:'},
                {type:'input',name:'autorRepresentativo',message:'Ingrese el autor representativo:'},
                {type:'input',name:'esPopular',message:'¿Es popular el género? si  o  no:'},
                {type:'input',name:'precioEstimado',message:'Ingrese el precio estimado por libro:'},
                {type:'input',name:'numeroDeAutores',message:'Ingrese el número de autores que han escrito este género:'}
            ]).then(a=>{
                promesaGen = new Promise(
                    res =>(
                        nuevoGenero.nombre = a.nombre,
                            nuevoGenero.autorRepresentativo = a.autorRepresentativo,
                            nuevoGenero.esPopular = (a.esPopular === 'si'? true: false),
                            nuevoGenero.precioEstimado = parseFloat(a.precioEstimado),
                            nuevoGenero.numeroDeAutores = parseInt(a.numeroDeAutores),
                            nuevoGenero.libros = [],
                            res(nuevoGenero)
                    ));
            });
        return promesaGen
    }

    async actualizarGenero(listaGenero){
        let promesaGen;
        let indiceGenero;
        const respuestaGen = await inquirer
            .prompt([
                {type:'input',name:'nombre',message:'Ingrese el nombre del género:'},
                {type:'rawlist',name:'eleccion',message:'Elige la opción que vas a cambiar:',
                    choices: ['nombre', 'autorRepresentativo', 'esPopular','precioEstimado','numeroDeAutores']},
                {type:'input',name:'nuevoValor',message:'Ingrese el nuevo valor:'},
            ]).then(a=>{
                promesaGen = new Promise(
                    res =>(
                        listaGenero
                            .forEach(
                                valorActual => {
                                    if (valorActual.nombre == a.nombre) {
                                        indiceGenero = listaGenero.indexOf(valorActual)
                                        switch (a.eleccion){
                                            case "nombre":
                                                listaGenero[indiceGenero].nombre = a.nuevoValor
                                                break
                                            case "autorRepresentativo":
                                                listaGenero[indiceGenero].autorRepresentativo = a.nuevoValor
                                                break
                                            case "esPopular":
                                                listaGenero[indiceGenero].esPopular = (a.nuevoValor === 'si'? true: false)
                                                break
                                            case "precioEstimado":
                                                listaGenero[indiceGenero].precioEstimado = parseFloat(a.nuevoValor)
                                                break
                                            case "numeroDeAutores":
                                                listaGenero[indiceGenero].numeroDeAutores = parseInt(a.nuevoValor)
                                                break
                                        }
                                    }
                                }
                            ),
                            res(listaGenero)
                    ));
            });
        return promesaGen
    }

    async borrarGenero(listaGenero){
        let promesaGen;
        const respuestaGen = await inquirer
            .prompt([
                {type:'input',name:'nombre',message:'Ingrese el nombre del género:'},
            ]).then(a=>{
                promesaGen = new Promise(
                    res =>(
                        res(listaGenero.filter(item => item.nombre !== a.nombre))
                    ));
            });
        return promesaGen
    }

}
module.exports ={
    "Genero":Genero
}