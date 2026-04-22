// Exercício 07
// Recebe dois números e exibe operações no console

let primeiroNumeroString = prompt("Digite o primeiro número:");
let segundoNumeroString = prompt("Digite o segundo número:");

let primeiroNumero = Number(primeiroNumeroString);
let segundoNumero = Number(segundoNumeroString);

console.log("Adição: " + (primeiroNumero + segundoNumero));
console.log("Subtração: " + (primeiroNumero - segundoNumero));
console.log("Multiplicação: " + primeiroNumero * segundoNumero);
console.log("Divisão: " + primeiroNumero / segundoNumero);