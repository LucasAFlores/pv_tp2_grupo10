const lado1 = 8;
const lado2 = 5;

const calcularArea = (a, b) => a * b;
const calcularPerimetro = (a, b) => 2 * (a + b);

const area = calcularArea(lado1, lado2);
const perimetro = calcularPerimetro(lado1, lado2);

console.log(`Los lados del rectángulo son: ${lado1} cm y ${lado2} cm`);
console.log(`Área del rectángulo: ${area} cm²`);
console.log(`Perímetro del rectángulo: ${perimetro} cm`);
