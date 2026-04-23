// Exercício 02 - Lista 02
// Calcula divisão e resto entre dois números

let numeroA = Math.floor(Number(prompt("Primeiro número:")));
let numeroB = Math.floor(Number(prompt("Segundo número:")));

let divisao = numeroA / numeroB;
let resto = numeroA % numeroB;

alert(
  "O resultado da divisão é: " +
    divisao +
    "\nO resto da divisão é: " +
    resto
);