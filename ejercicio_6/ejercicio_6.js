let number = prompt("Introduce un número:")

if (!isNaN(number)) {
    number = Number(number);
    number > 0 ? alert("Es positivo") : number < 0 ? alert("Es negativo") : alert("Es cero")
} else {
    alert("ERROR - El valor introducido no es válido. Introduce un número.")
}
