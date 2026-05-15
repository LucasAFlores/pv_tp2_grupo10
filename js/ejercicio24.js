
import { mostrarSeleccion } from './serviceEjercicio24.js';

document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.querySelector('#formulario');
    const res = document.querySelector('#resultado');

    
    form.addEventListener('change', (e) => {
        const seleccion = e.target.value;
        
        
        res.innerHTML = ''; 
        
        
        const componente = mostrarSeleccion(seleccion);
        
        res.appendChild(componente);
    });
});