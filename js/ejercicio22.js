import { reflejarTexto } from './funciones22.js';

const input = document.querySelector('#entradaTexto');
const salida = document.querySelector('#salidaTexto');

input.addEventListener('input', (event) => {
    const textoIngresado = event.target.value;
    reflejarTexto(textoIngresado, salida);
    console.log(`Valor actual en Ejercicio 22: ${textoIngresado}`);
});