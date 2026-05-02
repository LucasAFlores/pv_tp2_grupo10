const horas = 2;
const minutos = 45;

const convertirASegundos = (h, m) => (h * 3600) + (m * 60);

const segundos = convertirASegundos(horas, minutos);

console.log(`Horas: ${horas} - Minutos: ${minutos}`);
console.log(`Resultado de la conversión: ${segundos} segundos`);
