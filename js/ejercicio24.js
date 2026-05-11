document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('formulario');
    const res = document.getElementById('resultado');

    form.addEventListener('change', (e) => {
        const seleccion = e.target.value;
        res.innerHTML = `Elegiste: <strong>${seleccion}</strong>`;
        console.log("Seleccionado:", seleccion);
    });
});
