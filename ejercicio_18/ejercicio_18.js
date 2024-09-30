function validarNumero(numero) {
    let valido = false;

    if (!Number.isNaN(Number(numero))) {
        valido = true;
    }

    return valido;
}

function pedirDatos() {
    let entradaValida = false;
    let entrada;

    do {
        entrada = prompt("Introduce un número entero de varias cifras");

        if (validarNumero(entrada) && entrada.length > 1) {
            entradaValida = true;
        }
    } while (!entradaValida);

    return entrada
}

let numero = pedirDatos();
let sumaDigitos = 0;

for (let i = 0; i < numero.length; i++) {
    sumaDigitos += Number(numero[i]);
}

alert(sumaDigitos);
