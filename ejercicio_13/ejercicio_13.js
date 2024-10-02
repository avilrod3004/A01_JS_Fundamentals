let esNumero = false;

do {
    let entrada = prompt("Introduce un número: ");

    console.log(entrada);
    if (Number.isNaN(Number(entrada))) {
        esNumero = true;
    } else {
        alert("ERROR - El valor introducido no es un número.")
    }
} while (!esNumero);