import {
    paisesAmericas,
    llenarSelect,
    sincronizarCapital,
    mostrarSeleccionEnConsola
} from './funciones21.js';

const selectPais = document.querySelector('#selectPais');
const selectCapital = document.querySelector('#selectCapital');

llenarSelect(selectPais, paisesAmericas, 'pais');
llenarSelect(selectCapital, paisesAmericas, 'capital');

const { pais, capital } = sincronizarCapital(selectPais, selectCapital);
mostrarSeleccionEnConsola(pais, capital);

selectPais.addEventListener('change', () => {
    const seleccion = sincronizarCapital(selectPais, selectCapital);
    mostrarSeleccionEnConsola(seleccion.pais, seleccion.capital);
});
