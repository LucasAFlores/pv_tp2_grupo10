import { actualizarYVerificarColor } from './funciones23.js';

const input23 = document.querySelector('#entrada23');
const salida23 = document.querySelector('#salida23');

input23.addEventListener('input', (event) => {
    const textoIngresado = event.target.value;
    actualizarYVerificarColor(textoIngresado, salida23);
});