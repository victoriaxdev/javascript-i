// Exercício 01 - Lista 02
// Calcula troco e aplica arredondamentos

let dinheiroQueRecebi = Number(prompt("Valor recebido:"));
let valorDoProduto = Number(prompt("Valor do produto:"));

let troco = dinheiroQueRecebi - valorDoProduto;

console.log("a) " + troco);
console.log("b) " + Math.ceil(troco));
console.log("c) " + Math.floor(troco));