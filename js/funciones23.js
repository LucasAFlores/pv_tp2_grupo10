export const actualizarYVerificarColor = (textoEscrito, contenedorDestino) => {
    contenedorDestino.textContent = textoEscrito;
    if (textoEscrito.length > 20) {
        contenedorDestino.style.backgroundColor = '#ffcccc'; 
    } else {
        contenedorDestino.style.backgroundColor = 'transparent';
    }
};