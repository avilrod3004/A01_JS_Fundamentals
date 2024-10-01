const entrada = prompt("Introduce una cadena de texto, para saber si es un palíndromo:");

const fraseLimpia = entrada.toLowerCase().replace(/[^a-z0-9]/g, '');
const fraseInvertida = fraseLimpia.split('').reverse().join('');

fraseLimpia === fraseInvertida ? alert("Es un palíndromo") : alert("No es un palíndromo");

