
const newparrafos=() => {
    const parrafoText = document.getElementById('ParrafoText');
    const result = document.getElementById('result');
    result.innerHTML = parrafoText.value;
    parrafoText.value = '';
}

document.getElementById('Button').addEventListener('click', newparrafos);