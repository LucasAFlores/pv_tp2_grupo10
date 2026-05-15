
import { mostrarSeleccion } from './serviceEjercicio24.js';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('formulario');
    const res = document.getElementById('resultado');

    form.addEventListener('change', (e) => {
        const seleccion = e.target.value;
        
        
        res.innerHTML = ''; 
        
        
        const componente = mostrarSeleccion(seleccion);
        
        
        res.appendChild(componente);
        
        console.log("Seleccionado:", seleccion);
    });
});