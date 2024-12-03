// Votos
function contarClick(color) {
    console.log(`Clic detectado en color: ${color}`);
    
    contadorColores[color]++;
    
    let colorMasClickeado = Object.keys(contadorColores).reduce((a, b) => 
        contadorColores[a] > contadorColores[b] ? a : b
    );

    document.getElementById('botonMasClickeado').textContent = colorMasClickeado;
    document.getElementById('cantidadClicksMasClickeado').textContent = `Clicks: ${contadorColores[colorMasClickeado]}`;
}

document.querySelectorAll('.cuadrado').forEach(cuadrado => {
    cuadrado.addEventListener('click', () => {
        resetInactivityTimer();
        contarClick(cuadrado.classList[i]);
    });
});



// Contador 
let inactivityTimer;

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);

    inactivityTimer = setTimeout(() => {
        reiniciarColores();
    }, 10000);
}

function reiniciarColores() {
    const titulo = document.getElementById('titulo');
    const subtitulo = document.getElementById('subtitulo');
    
    titulo.style.color = 'white';
    subtitulo.style.color = 'white';
    subtitulo.textContent = 'Aburrido... Se están yendo todos...';
}


function detenerFiesta() {
    const audios = document.querySelectorAll('audio');
    
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });

    contadorColores = {
        amarillo: 0,
        verde: 0,
        rojo: 0,
        blanco: 0,
        azul: 0,
        rosa: 0,
        naranja: 0
    };
    document.getElementById('botonMasClickeado').textContent = 'Ningún color';
    document.getElementById('cantidadClicksMasClickeado').textContent = 'Clicks: 0';

    const mensaje = document.getElementById('mensaje');
    subtitulo.style.color = 'white'; 
    subtitulo.textContent = '¡Show detenido!';
    titulo.style.color = 'white';

    const boton = document.getElementById('botonreinicio');
    boton.style.backgroundColor = 'gray';
    boton.style.color = 'white';

    setTimeout(() => {
        boton.style.backgroundColor = '';
        boton.style.color = '';
    }, 1000);

    clearTimeout(inactivityTimer);
    inactivityTimer = null;
}

const cuadrados = document.querySelectorAll(".cuadrado");
let tiempoRestante = 10;
let contadorElemento = document.getElementById("contador");
let mensajeReinicio = document.getElementById("mensajeReinicio");
let intervalo;
let contadorColores = {
    amarillo: 0,
    verde: 0,
    rojo: 0,
    blanco: 0,
    rosa: 0,
    azul: 0,
    naranja: 0
};

function iniciarCuentaRegresiva() {
    clearInterval(intervalo); 
    tiempoRestante = 10; 
    actualizarContador();

    intervalo = setInterval(() => {
        if (tiempoRestante <= 0) {
            clearInterval(intervalo);
            contadorElemento.textContent = "¡Se acabó el tiempo!";
            reiniciarContadorClicks();
            mostrarMensajeReinicio();

            alert("¡La gente se ha ido!");
            location.reload();
        } else {
            tiempoRestante--;
            actualizarContador();
        }
    }, 1000);
}

function actualizarContador() {
    contadorElemento.textContent = tiempoRestante;
}

function reiniciarCuenta() {
    iniciarCuentaRegresiva(); 
    ocultarMensajeReinicio();
}

function reiniciarContadorClicks() {
    contadorColores = {
        amarillo: 0,
        verde: 0,
        rojo: 0,
        blanco: 0,
        rosa: 0,
        azul: 0,
        naranja: 0
    };
    document.getElementById('botonMasClickeado').textContent = "Ningún color";
    document.getElementById('cantidadClicksMasClickeado').textContent = "Clicks: 0";
}

function mostrarMensajeReinicio() {
    mensajeReinicio.style.display = "block";
}

function ocultarMensajeReinicio() {
    mensajeReinicio.style.display = "none";
}

iniciarCuentaRegresiva();



// Cambio de color según el cuadro seleccionado.

function cambiarColor(color) {
    const titulo = document.getElementById('titulo');
    const subtitulo = document.getElementById('subtitulo');
    const colores = {
        amarillo: { color: 'yellow', texto: 'Iniciando por la base...' },
        verde: { color: 'green', texto: 'Prendiendo un poco esto' },
        rojo: { color: 'red', texto: 'Un buen inicio para esta fiesta' },
        blanco: { color: 'white', texto: 'Otra base ¿Por qué no?' },
        azul: { color: 'cyan', texto: '¡Subiendo el ánimo!' },
        rosa: { color: 'magenta', texto: 'Hasta el piso' },
        naranja: { color: 'orange', texto: 'RUUUIDOOOO' },
    };

    if (colores[color]) {
        titulo.style.color = colores[color].color;
        subtitulo.style.color = colores[color].color;
        subtitulo.textContent = colores[color].texto;
    }

    const audio = document.getElementById(color);
    audio.onended = function() {

        subtitulo.style.color = 'white'; 
        subtitulo.textContent = 'Aburrido... Se están yendo todos...';
        titulo.style.color = 'white'

    };
}

// Audios al clickear.

const audio = document.getElementById("amarillo");

function SonidoAmarillo(element) {
    const audio = document.getElementById("amarillo");

    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
        audio.play();
    }
}

function SonidoAzul(element) {
    const audio = document.getElementById("azul");

    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
        audio.play();
    }
}

function SonidoVerde(element) {
    const audio = document.getElementById("verde");

    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
        audio.play();
    }
}

function SonidoRojo(element) {
    const audio = document.getElementById("rojo");

    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
        audio.play();
    }
}

function SonidoBlanco(element) {
    const audio = document.getElementById("blanco");

    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
        audio.play();
    }
}

function SonidoRosa(element) {
    const audio = document.getElementById("rosa");

    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
        audio.play();
    }
}

function SonidoNaranja(element) {
    const audio = document.getElementById("naranja");

    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
        audio.play();
    }
}

/* Botón de Reinicio */

function detenerFiesta() {
    const audios = document.querySelectorAll('audio');
    
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });

    const mensaje = document.getElementById('mensaje');
    subtitulo.style.color = 'white'; 
    subtitulo.textContent = '¡Show detenido!';
    titulo.style.color = 'white'

    const boton = document.getElementById('botonreinicio');
    boton.style.backgroundColor = 'gray';
    boton.style.color = 'white'

    setTimeout(() => {
        boton.style.backgroundColor = '';
        boton.style.color = '';
    }, 1000);
}




