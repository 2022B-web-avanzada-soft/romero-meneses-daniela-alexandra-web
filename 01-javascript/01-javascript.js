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

