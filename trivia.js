// Preguntas de la trivia
const preguntas = [
    {
        pregunta: "¿En dónde nació el Beato P. Faustino Oteiza Segura?",
        respuesta: "Nació en Ayegui, España."
    },
    {
        pregunta: "¿Cuál es su nombre religioso?",
        respuesta: "Beato P. Faustino Oteiza Segura de la Virgen de los Dolores Sch. P."
    },
    {
        pregunta: "¿Cuál fue su labor?",
        respuesta: "Dedicó su vida a la educación y a la formación de niños y jóvenes."
    },
    {
        pregunta: "¿cómo murió y cuándo murió?",
        respuesta: "Fue asesinado junto al hermano Florentin el 9 de Agosto de 1936."
    },
    {
        pregunta: "¿Cuándo fue su beatificación?",
        respuesta: "Fue beatificado el 1 de Octubre de 1995."
    }
];

// Variables del juego
let preguntaActual = 0;
let puntos = 0;

// Crear el contenedor de la trivia
const trivia = document.createElement("div");
trivia.id = "trivia";
document.body.appendChild(trivia);

// Mostrar la pregunta actual
function mostrarPregunta() {
    trivia.innerHTML = "";

    if (preguntaActual < preguntas.length) {
        trivia.innerHTML = `
            <h2>Trivia de Informática</h2>
            <p>${preguntaActual + 1}. ${preguntas[preguntaActual].pregunta}</p>

            <input type="text" id="respuesta" placeholder="Escribí tu respuesta">

            <button id="comprobar">Responder</button>

            <p id="mensaje"></p>
            <p>Puntos: ${puntos}</p>
        `;

        document.getElementById("comprobar").addEventListener("click", comprobarRespuesta);

        document.getElementById("respuesta").addEventListener("keydown", function(evento) {
            if (evento.key === "Enter") {
                comprobarRespuesta();
            }
        });

    } else {
        mostrarResultado();
    }
}

// Comprobar si la respuesta es correcta
function comprobarRespuesta() {
    const respuestaUsuario = document
        .getElementById("respuesta")
        .value
        .trim()
        .toLowerCase();

    const respuestaCorrecta = preguntas[preguntaActual].respuesta
        .toLowerCase();

    const mensaje = document.getElementById("mensaje");

    if (respuestaUsuario === "") {
        mensaje.textContent = "¡Escribí una respuesta primero!";
        return;
    }

    if (respuestaUsuario === respuestaCorrecta) {
        puntos += 10;
        mensaje.textContent = "¡Correcto! Ganaste 10 puntos.";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "Incorrecto. La respuesta correcta era: " +
            preguntas[preguntaActual].respuesta;
        mensaje.style.color = "red";
    }

    document.getElementById("respuesta").disabled = true;
    document.getElementById("comprobar").disabled = true;

    const botonSiguiente = document.createElement("button");
    botonSiguiente.textContent = "Siguiente pregunta";
    botonSiguiente.addEventListener("click", function() {
        preguntaActual++;
        mostrarPregunta();
    });

    trivia.appendChild(botonSiguiente);
}

// Mostrar el resultado final
function mostrarResultado() {
    trivia.innerHTML = `
        <h2>¡Terminaste la trivia!</h2>
        <p>Tu puntaje final es: ${puntos} de ${preguntas.length * 10} puntos.</p>
        <button id="reiniciar">Volver a jugar</button>
    `;

    document.getElementById("reiniciar").addEventListener("click", reiniciarTrivia);
}

