// 01-variables.ts
// npm install -g typescript
// tsc
// 01-variables.ts
let nombre: string; // primitiva
let nombre2: String; // Clase String

//Transpiladores
// tsc 01-variables.ts --target es3
// tsc 01-variables.ts --target es6

// nombre = 1;
let edad: number = 32;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo: number;
sueldo = 12.4;

// Duck Typing
let apellido = 'Eguez'; // string ->
// apellido = 1; // No permite igualarle a otro tipo de datos
apellido = 'Sarzosa';
apellido.toUpperCase();

// Si se quiere poner una variable que sea cualquier cosa se pone any
let marihuana: any = 2;
marihuana = '2';
marihuana = true;
marihuana = () => '2';

// Una variable puede ser de multiples tipos de datos
let edadMultiple: number | string |Date = '2'; // 2 | NewDate()
edadMultiple = 2;
edadMultiple = 'dos';
edadMultiple = new Date();
edadMultiple = 2222;

// Utilizar edadMultiple para sumar otro numero
// Para utilizar como numero edad multiple se debe castear
let numeroUnico: number = 1;
numeroUnico = numeroUnico + (edadMultiple as number);









