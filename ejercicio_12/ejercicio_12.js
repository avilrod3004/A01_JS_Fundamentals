let correcta = false;

do {
    let entrada = prompt("Contraseña: ");
    const contrasenia = "1234";

    if (entrada === contrasenia) {
        correcta = true;
        alert("¡¡ CONTRASEÑA CORRECTA !!")
    }
} while (!correcta)