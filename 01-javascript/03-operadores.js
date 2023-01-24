//03-operadores.js

const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];
// FUNCIONES COMO PARAMETROS
// FIND
// Enviamos una expresionn -->> Trusty o Falsy
// devuelve el primero que cumple con esa condicion
const respuestaFind = arreglo
    .find(
        function (valorActual, indiceActual, arregloCompleto){
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            return valorActual.nombre === "Cristian"; // EXPRESION ===
        }
    );
// console.log("respuestaFind",respuestaFind); // Cristian //Si no encuentra devuelve undefined

//FINDINDEX
// Enviamos una expresion --> Trusty o Falsy
// devuelve el indice del primero que cumpla esa condicion
const respuestaIndex = arreglo
    .find(
        function (valorActual, indiceActual,arregloCompleto){
            return valorActual.nombre === "Cristian";
        }
    );
console.log('respuestaIndex', respuestaIndex); // Indice -> 6

// FOR EACH
// Itera el arreglo y no devuelve nada
const respuestaForEach = arreglo
    .forEach(
        function (valorActual, indiceActual, arregloCompleto){
            console.log('valorActual', valorActual);
        }
    );

//console.log('respuestaForEach', respuestaForEach);

// MAP
// Modifica o muta el arreglo y devuelve un nuevo arreglo
// enviamos los datos del nuevo arreglo
// devuelve el nuevo arreglo

const respuestaMap = arreglo
    .map(
        (valorActual, indiceActual, arregloCompleto) => {
            const notaActual = valorActual.nota + 1;
            const nuevoElemento = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: notaActual,
                estaAprobado: notaActual > 14,
                casado: false,
            };
            return nuevoElemento;
        }
    );
//console.log('respuestaMap', respuestaMap);
//console.log('arreglo', arreglo);

// FILTER
// Filtra el arreglo
// Enviamos EXPRESION --> TRUSTY O FALSY
// devuelve los elementos que cumplen con la condicion

const respuestaFilter = arreglo
    .filter(
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota >= 14;
        }
    );

//console.log('respuestaFilter', respuestaFilter);
//console.log('arreglo', arreglo);

// SOME --> Expresion
// Devuelve un booleano
// Hay alguna nota menor a 9? Si No
// OR

const respuestaSome = arreglo
    .some(
        function (valorActual, indiceActual, arregloCompleto){
            return valorActual.nota <9;
        }
    );
//console.log('respuestaSome', respuestaSome);

// EVERY -> Expresion
// Devuelve booleano
// Todas las notas son mayores a 14?
// AND
const respuestaEvery = arreglo
    .every(
        function (valorActual, indiceActual, arregloCompleto){
            return valorActual.nota >14;
        }
    );
//console.log('respuestaEvery', respuestaEvery);

// REDUCE Recorre el arreglo realizando operaciones
// REDUCE izq -> der
// REDUCE RIGHT der -> izq
// arreglo = [1, 2, 3, 5, 6, 5, 4, 3, 1]
// 0 -> Variable Inicial
//OPERACION SUMA
// 0 + 1
// Valor inicial + arreglo[0]
// 1 + 2
// Valor acumulado + arreglo[1]

//OPERACION RESTA
// 100 -> Variable inicial
// 100 - 1
// Valor inicial - arreglo[0]
// 99 - 2
// Valor acumulado - arreglo[1]

const respuestaReduce = arreglo
    .reduce(
        function (valorAcumulado, valorActual, indice, arregloCompleto){
            return (valorAcumulado + valorActual.nota);
        },
        0 // Acumulador
    );

//console.log('respuestaReduce', respuestaReduce)
//console.log('promedio', respuestaReduce/arreglo.length)

const respuestaReduceConMenos = arreglo
    .reduce(
        function (valorAcumulado, valorActual, indice, arregloCompleto){
            return (valorAcumulado - valorActual.nota);
        },
        100 // Acumulador
    );

//console.log('respuestaReduceConMenos', respuestaReduceConMenos)
arreglo.filter((a)=> a.nota < 14 )
    .map((e)=> e.nota + 1)
    .some((e)=> e >14);
