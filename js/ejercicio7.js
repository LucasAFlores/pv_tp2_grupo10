const nombres = ["Ana", "Francisco", "Alberto", "Guadalupe", "Luis", "Valentina"];
let nombreMasLargo = "";

console.log("Lista de nombres:");
nombres.forEach(nombre => {

    console.log(`- ${nombre}`);

    if (nombre.length > nombreMasLargo.length) {
        nombreMasLargo = nombre;
    }
});

console.log("----------------------------");
console.log(`El nombre más largo es: ${nombreMasLargo}`);
console.log(`Tiene un total de ${nombreMasLargo.length} caracteres.`);