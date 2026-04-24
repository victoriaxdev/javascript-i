// Verifica o tipo de triângulo com base nos lados

const ladoA = Number(prompt("Digite o valor do lado A:"));
const ladoB = Number(prompt("Digite o valor do lado B:"));
const ladoC = Number(prompt("Digite o valor do lado C:"));

if (ladoA === ladoB && ladoB === ladoC) {
  alert("Triângulo Equilátero!");
} else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA) {
  alert("Triângulo Isósceles!");
} else {
  alert("Triângulo Escaleno!");
}