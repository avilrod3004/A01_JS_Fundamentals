const edades = new Array(5);

for (let i = 0; i < 5; i++) {
    const edad = prompt("Introduce tu edad:");
    edades.push(edad);
}

let contador = 0;
for (edad of edades) {
    if (edad >= 18) {
        contador++;
    }
}

alert(`Número de veces que ha introducido un valor mayor o igual a 18: ${contador}`)