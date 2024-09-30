// variable de control para saber cuando parar el bucle
let parar = false;

// el bucle se ejecutara hasta que la entrada del usuario se un numero negativo
while (!parar) {
    // muestra un mensaje al usuario en el navegador
    let numero = Number(prompt("Introduce un número entero. Número negativo para parar:"));

    // comprueba si la entrada del usuario es un numero entero
    if (!Number.isInteger(numero)) {
        alert("ERROR - El valor introducido no es un número entero")
    } else {
        // si es un entero y negativo, el bucle termina
        if (numero < 0) {
            parar = true;
        }
    }
}