let age = prompt("¿Cuál es tu edad?");


if (!isNaN(age)) {
    age = Number(age);
    if (age < 18) {
        alert("Es menor de edad")
    } else {
        if (age >= 18 && age <= 25) {
            alert("Tiene entre 18 y 25 años")
        } else {
            alert("Es mayor de edad")
        }
    }
} else {
    alert("ERROR - Introduce un número")
}