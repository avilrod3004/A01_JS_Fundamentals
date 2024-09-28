let parar = false;
let numero;

while (!parar) {
    numero = Number(prompt("Introduce un número entero:"));

    if (!Number.isInteger(numero)) {
        alert("ERROR - El valor introducido no es un número entero");
    } else {
        break;
    }
}

if (numero % 2 === 0) {
    alert("El número es par");
} else {
    alert("El número es impar");
}