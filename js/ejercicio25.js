document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById('btnColor');
    
    
    const colores = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#D4A5A5', '#9B59B6'];

    boton.addEventListener('click', () => {
        
        const indiceAleatorio = Math.floor(Math.random() * colores.length);
        const nuevoColor = colores[indiceAleatorio];

        
        document.body.style.backgroundColor = nuevoColor;

        
        console.log("El color ha cambiado a: " + nuevoColor);
    });
});
