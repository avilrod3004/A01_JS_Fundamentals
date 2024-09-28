let parar = false;

while (!parar) {
    let numero = Number(prompt("Introduce un número entero. Número negativo para parar:"));

    if (!Number.isInteger(numero)) {
        alert("ERROR - El valor introducido no es un número entero")
    } else {
        if (numero < 0) {
            break;
        }
    }
}