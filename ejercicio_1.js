/*
* Declara tres variables, una para cada tipo de dato primitivo que hemos visto
* (cadena, número y booleano). Asigna valores a las variables y, usando la consola,
* muestra el tipo de cada una con typeof.
*
* Realiza una conversión de tipo para una de las variables, por ejemplo, convierte
* un número a cadena.
* */

const name = "Antonio";
let age = 32;
let done = true;

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(done));

age = age.toString()
console.log(typeof(age));