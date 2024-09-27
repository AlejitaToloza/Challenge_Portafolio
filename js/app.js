// Seleccionamos todos los botones del menú
const botonesMenu = document.querySelectorAll('.menu__contenedor .boton');
const contenedorInformacion = document.querySelector('.contenedor__informacion');

// Función para ocultar todas las secciones de información
function ocultarSecciones() {
    const secciones = contenedorInformacion.children;
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = 'none';
    }
}

// Añadimos un evento de clic a cada botón
botonesMenu.forEach(boton => {
    boton.addEventListener('click', () => {
        // Ocultamos todas las secciones antes de mostrar la seleccionada
        ocultarSecciones();
        contenedorInformacion.style.display = 'block'; // Asegúrate de mostrar el contenedor de información

        // Mostramos la sección correspondiente según el texto del botón
        switch (boton.textContent) {
            case 'Sobre mí':
                contenedorInformacion.querySelector('.card__sobremi').style.display = 'block';
                break;
            case 'Skills':
                contenedorInformacion.querySelector('.card__skill').style.display = 'block';
                break;
            case 'Hobbies':
                contenedorInformacion.querySelector('.card__hobbies').style.display = 'block';
                break;
            case 'Formación':
                contenedorInformacion.querySelector('.card__formacion').style.display = 'block';
                break;
            case 'Proyectos':
                contenedorInformacion.querySelector('.card__proyectos').style.display = 'block';
                break;
            case 'Contacto':
                contenedorInformacion.querySelector('.card__contacto').style.display = 'block';
                break;
        }
    });
});


// Obtener elementos del DOM
const soundToggle = document.getElementById('sound-toggle');
const audio = document.getElementById('audio');
const soundIcon = document.getElementById('sound-icon');

// Variable para rastrear el estado del sonido
let isSoundOn = false;

// Función para alternar el sonido
soundToggle.addEventListener('click', () => {
    isSoundOn = !isSoundOn; // Cambia el estado

    if (isSoundOn) {
        audio.play(); // Reproduce el sonido
        soundIcon.classList.remove('fa-volume-up'); // Cambia el ícono
        soundIcon.classList.add('fa-volume-mute'); // Ícono de sonido desactivado
        /*soundToggle.textContent = 'Desactivar Sonido'; // Cambia el texto del botón*/
    } else {
        audio.pause(); // Pausa el sonido
        audio.currentTime = 0; // Reinicia el sonido
        soundIcon.classList.remove('fa-volume-mute'); // Cambia el ícono
        soundIcon.classList.add('fa-volume-up'); // Ícono de sonido activado
        /*soundToggle.textContent = 'Activar Sonido'; // Cambia el texto del botón*/
    }
});


// Obtener elementos del DOM
const iconosSkill = document.querySelectorAll('.card__skill--icono');
const iconosFormacion = document.querySelectorAll('.card__formacion__division');
const iconosHobbies = document.querySelectorAll('.card__hobbies--icono');
const hoverSound = document.getElementById('hover-sound');
const hoverSound2 = document.getElementById('hover-sound2');
const hoverSound3 = document.getElementById('hover-sound3');

// Agregar evento de mouseover para los iconos de habilidades
iconosSkill.forEach(icono => {
    icono.addEventListener('mouseover', () => {
        hoverSound.currentTime = 0; // Reinicia el sonido si ya se está reproduciendo
        hoverSound.play(); // Reproduce el sonido1 al hacer hover
    });

    icono.addEventListener('mouseout', () => {
        hoverSound.pause(); // Detiene el sonido1
        hoverSound.currentTime = 0; // Reinicia el sonido1
    });
});

// Agregar evento de mouseover para los iconos de formación
iconosFormacion.forEach(icono => {
    icono.addEventListener('mouseover', () => {
        hoverSound2.currentTime = 0; // Reinicia el sonido si ya se está reproduciendo
        hoverSound2.play(); // Reproduce el sonido2 al hacer hover
    });

    icono.addEventListener('mouseout', () => {
        hoverSound2.pause(); // Detiene el sonido2
        hoverSound2.currentTime = 0; // Reinicia el sonido2
    });
});

// Agregar evento de mouseover para los iconos de hobbies
iconosHobbies.forEach(icono => {
    icono.addEventListener('mouseover', () => {
        hoverSound3.currentTime = 0; // Reinicia el sonido si ya se está reproduciendo
        hoverSound3.play(); // Reproduce el sonido2 al hacer hover
    });

    icono.addEventListener('mouseout', () => {
        hoverSound3.pause(); // Detiene el sonido2
        hoverSound3.currentTime = 0; // Reinicia el sonido2
    });
});