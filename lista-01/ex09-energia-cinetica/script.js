// Exercício 09
// Calcula energia cinética: (1/2) * massa * velocidade²

let massaString = prompt("Digite o valor da massa:");
let velocidadeString = prompt("Digite o valor da velocidade:");

let massa = Number(massaString);
let velocidade = Number(velocidadeString);

alert("Energia Cinética Total: " + (1 / 2) * massa * (velocidade * velocidade));