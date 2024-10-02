function validarNumero(numero) {
    let valido = false;

    if (!Number.isNaN(Number(numero))) {
        valido = true;
    }

    return valido;
}

let entrada = prompt("Introduce un número: ")

if (validarNumero(entrada)) {
    const numero = Number(entrada);
    let factorial = 1;

    for (let i = 0; i < numero; i++) {
        factorial *= numero - i;
    }

    alert(`Factorial: ${factorial}`);
} else {
    alert("ERROR - La entrada no es válida, introduce un número entero");
}