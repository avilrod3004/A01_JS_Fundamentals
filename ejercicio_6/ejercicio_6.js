let number = prompt("Introduce un número:")

if (!isNaN(number)) {
    number > 0 ? alert("Es positivo") : number < 0 ? alert("Es negativo") : alert("Es cero")
} else {
    alert("ERROR - Introduce un número")
}
