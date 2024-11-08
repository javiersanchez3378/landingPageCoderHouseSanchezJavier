// Generar el número aleatorio entre 1 y 100 y declarar la variable de intentos
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intento = 0;

// Capturamos el botón y le agregamos el evento "click"
document.getElementById("adivinarBtn").addEventListener("click", function() {
    // Obtenemos el valor ingresado en el campo de texto y lo convertimos en un número
    let numeroIngresado = parseInt(document.getElementById("numeroInput").value);

    // Validamos que el número esté dentro del rango
    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
        alert("Por favor, ingresa un número válido entre 1 y 100.");
    } else {
        intento++; // Incrementamos el contador de intentos

        // Verificamos si el usuario adivinó el número, o si el número secreto es mayor o menor
        if (numeroIngresado === numeroSecreto) {
            alert("¡Felicidades! Adivinaste el número en " + intento + " intento(s).");
        } else if (numeroIngresado < numeroSecreto) {
            alert("El número secreto es mayor. Intenta de nuevo.");
        } else {
            alert("El número secreto es menor. Intenta de nuevo.");
        }
    }
});
