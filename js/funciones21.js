export const paisesAmericas = [
    { pais: 'Argentina', capital: 'Buenos Aires' },
    { pais: 'Brasil', capital: 'Brasilia' },
    { pais: 'Chile', capital: 'Santiago' },
    { pais: 'Colombia', capital: 'Bogotá' },
    { pais: 'México', capital: 'Ciudad de México' },
    { pais: 'Perú', capital: 'Lima' },
    { pais: 'Uruguay', capital: 'Montevideo' }
];

export const llenarSelect = (select, opciones, propiedad) => {
    select.innerHTML = '';
    opciones.forEach((item) => {
        const opcion = document.createElement('option');
        opcion.value = item[propiedad];
        opcion.textContent = item[propiedad];
        select.appendChild(opcion);
    });
};

export const obtenerCapitalPorPais = (nombrePais) => {
    const encontrado = paisesAmericas.find((item) => item.pais === nombrePais);
    return encontrado ? encontrado.capital : '';
};

export const sincronizarCapital = (selectPais, selectCapital) => {
    const paisSeleccionado = selectPais.value;
    const capital = obtenerCapitalPorPais(paisSeleccionado);
    selectCapital.value = capital;
    return { pais: paisSeleccionado, capital };
};

export const mostrarSeleccionEnConsola = (pais, capital) => {
    console.log(`País seleccionado: ${pais} — Capital: ${capital}`);
};
