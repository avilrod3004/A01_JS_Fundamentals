let edad = prompt("Introduce tu edad:")
let nacionalidade = prompt("Introduce tu nacionalidad:")

if (!isNaN(edad)) {
    edad = Number(edad);

    if (edad >= 18 && nacionalidade.toLowerCase() === "española") {
        alert("Puedes votar");
    } else {
        alert("No puedes votar");
    }
} else {
    alert("ERROR - El valor introducido en la edad no es un número")
}