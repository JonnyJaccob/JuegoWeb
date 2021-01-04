document.getElementById('player').addEventListener("mouseover",
    sumarPuntos);

puntos = 0;
tiempo = 10;
necesarios = 20;

function sumarPuntos() {
    puntos++;
    document.getElementById("Puntos").innerHTML = "Puntos <b>" + puntos + "/" + necesarios + "</b>";
    randNum = Math.round(Math.random() * 500);
    randNum2 = Math.round(Math.random() * 500);
    document.getElementById("player").style.marginTop = randNum + "px";
    document.getElementById("player").style.marginLeft = randNum2 + "px";
    if (puntos == necesarios) {
        alert("Ganaste (:")
    }
}

function restarTiempo() {
    tiempo--;
    if (tiempo > 0) {
        document.getElementById("Tiempo").innerHTML = "&nbsp;&nbsp;Tiempo: " + tiempo + "";
    } else {
        document.getElementById("Tiempo").innerHTML = "&nbsp;&nbsp;Tiempo: " + 0 + "";
    }
    if (tiempo == 0) {
        alert("Perdiste D:");
        tiempo = 0;
        puntos = 0;
    }
}
setInterval(restarTiempo, 1000);