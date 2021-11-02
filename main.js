let tiempoRef = Date.now();
let tiempoCronome = false;
let tiempoAcumulado = 0;

function iniciar() {
    tiempoCronome = true;
}

function pausar() {
    tiempoCronome = false;
}

function reiniciar() {
tiempoAcumulado = 0;
}

setInterval(() => {
    let tiempo = document.getElementById('tiempo');
    if (tiempoCronome) {
        tiempoAcumulado += Date.now() - tiempoRef;

    }
    tiempoRef = Date.now()
    tiempo.innerHTML = formatearMs(tiempoAcumulado);
}, 1000 / 60);

function formatearMs(ms) {

    let miliSec = ms % 1000;
    let st = Math.floor(((ms - miliSec) / 1000));
    let sec = st%60;
    let min = Math.floor((st / 60) % 60);
    let hora = Math.floor((st/ 60 /60));

    Number.prototype.ceros = function name(n) {
        return (this + "").padStart(n, 0)
    }
    return hora.ceros(2) + ":" + min.ceros(2) + ":" + sec.ceros(2) + "." + miliSec.ceros(3)
}