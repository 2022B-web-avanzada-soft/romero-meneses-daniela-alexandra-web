// 05-destructuracion
// Destructuracion de OBJETOS
const adrian = {
    nombre: "Adrian",
};
const carolina = {
    nombre: "Carolina",
    apellido: "Eguez",
};
const adrianCarolina = { // Crea una nueva referencia (valor)
    // En las destructuraciones de objetos el orden importa
    // Se sobreescribe con la información del segundo Objeto.
    ...carolina,
    ...adrian,
};
console.log('adrianCarolina', adrianCarolina);

// Destructuración de Arreglos
const arregloUno = [1, 2, 3, 4, 5];
const arregloDos = [6, 7, 8, 9, 10];
const superArreglo = [
    ...arregloUno, // El orden importa
    ...arregloDos,
]; // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('superArreglo', superArreglo);