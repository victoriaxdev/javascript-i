// Exercício 04 - Lista 02
// Gera número aleatório entre intervalo definido pelo usuário

let numeroInicio = Math.floor(Number(prompt("Digite um número: ")));
let numeroFim = Math.floor(Number(prompt("Digite outro número: ")));

let aleatorio = Math.floor(
  Math.random() * (numeroFim - numeroInicio + 1) + numeroInicio
);

console.log("Núm. aleatório: " + aleatorio);