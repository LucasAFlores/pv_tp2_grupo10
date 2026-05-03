const notas = [8, 4, 10, 5, 7, 3, 6, 9, 2, 6];

console.log("--- Todas las notas ---");
notas.forEach((nota, indice) => {
  console.log(`Nota ${indice + 1}: ${nota}`);
});
console.log("\n--- Notas Aprobadas ---");
notas.forEach(nota => {
  if (nota >= 6) {
    console.log(nota);
  }
});
console.log("\n--- Notas Desaprobadas ---");
notas.forEach(nota => {
  if (nota < 6) {
    console.log(nota);
  }
});

const sumaTotal = notas.reduce((acumulador, nota) => acumulador + nota, 0);
const promedio = sumaTotal / notas.length;
console.log(`\nPromedio general: ${promedio.toFixed(2)}`);
const cantidadAprobados = notas.filter(nota => nota >= 6).length;
console.log(`Cantidad de alumnos aprobados: ${cantidadAprobados}`);