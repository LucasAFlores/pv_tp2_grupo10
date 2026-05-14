export const newparrafos = () => {

    const parrafoText = document.querySelector('#ParrafoText');
    const result = document.querySelector('#result');

    result.textContent = parrafoText.value;

    parrafoText.value = '';

};