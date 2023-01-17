// 09-inquierer.js
// npm init -> package.json -> dependencias ->scripts
// npm install -> npm i inquirer
// node_modules -> estan las dependencias
const inquirer = require('inquirer');
async function main(){
    try {
        const respuesta = await  inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'nombre',
                    message: 'Ingresa tu Nombre'
                },
                {
                    type: 'input',
                    name: 'edad',
                    message: 'Ingresa tu Edad'
                }
            ]);
        console.log('Respuesta', respuesta);
    }catch(e){
        console.error(e);
    }
}
main();
