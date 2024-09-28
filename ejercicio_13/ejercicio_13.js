let esNumero = false;

do {
    let entrada = Number(prompt("Introduce un número: "));

    console.log(entrada);
    if (!isNaN(entrada)) {
        esNumero = true;
    } else {
        alert("ERROR - El valor introducido no es un número.")
    }
} while (!esNumero);