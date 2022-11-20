// 01-variables.js

// mutables (re asignadas =) e inmutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 12;
numeroDos = 8;
numeroUno = false;
numeroDos = true;

// Inmutables
const configuracionArchivos = 'PDF';
// configuracionArchivos = 'XML';
// vamos a preferir CONST > LET > NUNCA VAR!

// Tipos de variables (primitivas)
const numero = 1; // number
const sueldo = 1.2; // number
const texto = 'Adrian'; // "Adrian" string
const apellidos = "Eguez"; // string
const booleano = true; // boolean
const hijos = null; // object
const zapatos = undefined; // undefined

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellidos);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);

//Truthy Falsy
// Vacío
if(""){
    console.log("String vacio Es verdadero")
}else{
    console.log("String vacio Es falsy")
}
//String
if("Daniela"){
    console.log("String Es verdadero") //truthy
}else{
    console.log("String  Es falsy")
}
// Valor negativo
if(-1){
    console.log("-1 Es verdadero") //truthy
}else{
    console.log("-1 Es falsy")
}
// Cero
if(0){
    console.log("0 Es verdadero") //truthy
}else{
    console.log("0 Es falsy")
}
// Valor positivo
if(1){
    console.log("1 Es verdadero") //truthy
}else{
    console.log("1 Es falsy")
}
//Nulo
if(null){
    console.log("null Es verdadero") //truthy
}else{
    console.log("null Es falsy")
}
// Indefinido
if(undefined){
    console.log("undefined Es verdadero") //truthy
}else{
    console.log("undefined Es falsy")
}

// Orden de Importancia
// 1) "const"
// 2) "let"
// 3) X -> "var" == no se debe utilizar var


// Javascript

const adrian = {
    "nombre": 'Adrian', //llave: valor
    "apellido": 'Eguez',
    edad: 32,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: 'plomo',
        talla: '40',
    },
    mascotas: ['Cachetes', 'Pequitas', 'Panda'],
};
console.log(adrian);

// Acceder a las propiedades del objeto
adrian.nombre; // "Adrian"
adrian.apellido; // 'Eguez'
adrian["nombre"];

// Cambiar valores
adrian.nombre = "Vicente";
adrian["nombre"] = "Adrian";

//Crear nuevos atributos o métodos dentro del objeto
adrian.sueldo; //undefined
console.log(adrian.sueldo);
adrian.sueldo =1.2;
console.log(adrian.sueldo); // 1.2
adrian["gastos"] = 0.8;
console.log(adrian.gastos); // 0.8
console.log(adrian);

// Borrar el valor de una propiedad
adrian.nombre = undefined;
console.log(adrian);
console.log(Object.keys(adrian)); // Arreglo de llaves
console.log(Object.values(adrian)); //Arreglo de valores

// DELETE la llave y el valor dentro del objeto
delete adrian.nombre; //Elimina la llave "nombre"
console.log(Object.keys(adrian));
console.log(adrian)

// Variables por valor o referencia
// Variables por valor en JS son las primitivas: number, string, boolean
let edadAdrian = 32;
let edadVicente = edadAdrian; // Guardamos una primitiva en otra variable
// Variables por valor
console.log(edadAdrian);//32
console.log(edadVicente);//32
edadAdrian = edadAdrian +1;
console.log(edadAdrian);//33
console.log(edadVicente);//32

// Variables por referencia
let notas = {
    total: 10
};

let notasSegundoBimestre = notas; //IGUALANDO AL OBJETO
notasSegundoBimestre.total = notasSegundoBimestre.total + 1;
console.log(notas);
console.log(notasSegundoBimestre);

//Como clonar objetos
let notasTercerBimestre = Object.assign({},notas);
// Object.assign([], arreglo)
notasTercerBimestre.total = notasTercerBimestre.total + 1;

console.log("notas", notas);
console.log("notasSegundoBimestre",notasSegundoBimestre);
console.log("notasTercerBimestre",notasTercerBimestre);

