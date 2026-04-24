// Verifica se o ano é bissexto

const ano = Number(prompt("Digite um ano com 4 dígitos:"));

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  alert(ano + " é um ano bissexto!");
} else {
  alert(ano + " não é um ano bissexto.");
}