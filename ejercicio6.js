const edades = [19, 22, 17, 30, 25, 14, 28, 21];

const calcularPromedio = (arr) => arr.reduce((suma, edad) => suma + edad, 0) / arr.length;

console.log(`Las edades son:`);
edades.forEach((edad, indice) => console.log(`  Edad ${indice + 1}: ${edad} años`));

const promedio = calcularPromedio(edades);
console.log(`Promedio de edades: ${promedio.toFixed(2)} años`);
