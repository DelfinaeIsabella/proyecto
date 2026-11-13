document.getElementById("comprobar").addEventListener("click", function(){
    let puntaje = 0;
    let p1 = document.querySelector('input[name="p1"]:checked');
    let p2 = document.querySelector('input[name="p2"]:checked');
    let p3 = document.querySelector('input[name="p3"]:checked');
    let p4 = document.querySelector('input[name="p4"]:checked');
    let p5 = document.querySelector('input[name="p5"]:checked');
    let p6 = document.querySelector('input[name="p6"]:checked');
    let p7 = document.querySelector('input[name="p7"]:checked');
    let p8 = document.querySelector('input[name="p8"]:checked');
    let p9 = document.querySelector('input[name="p9"]:checked');
    let p10 = document.querySelector('input[name="p10"]:checked');
        // Respuestas correctas
        if (p1 && p1.value === "c") puntaje++;
        if (p2 && p2.value === "b") puntaje++;
        if (p3 && p3.value === "a") puntaje++;
        if (p4 && p4.value === "b") puntaje++;
        if (p5 && p5.value === "c") puntaje++;
        if (p6 && p6.value === "b") puntaje++;
        if (p7 && p7.value === "a") puntaje++;
        if (p8 && p8.value === "a") puntaje++;
        if (p9 && p9.value === "a") puntaje++;
        if (p10 && p10.value === "b") puntaje++;

    let mensaje = "<h5>Resultado: " + puntaje + "/10 puntos</h5>";
    if (puntaje === 10) {
      mensaje += "¡Felicitaciones! Has respondido correctamente todas las preguntas.";
    } else if (puntaje === 5) {
      mensaje += "Buen intento. Te quivocaste en la mitad de las preguntas.";
    } else {
      mensaje += "Te invito a intentarlo nuevamente.";
    }
     document.getElementById("resultado").innerHTML = mensaje;
});
        document.getElementById("reiniciar").addEventListener("click", function() {
        let opciones = document.querySelectorAll('input[type="radio"]');
        for (let opcion of opciones) {
        opcion.checked = false;
         }
        document.getElementById("resultado").innerHTML = "";
        });