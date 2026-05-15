
import { obtenerColorAleatorio } from './serviceEjercicio25.js';

document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById('btnColor');

    boton.addEventListener('click', () => {
        
        const nuevoColor = obtenerColorAleatorio();

        document.body.style.backgroundColor = nuevoColor;
        console.log("El color ha cambiado a: " + nuevoColor);
    });
});
