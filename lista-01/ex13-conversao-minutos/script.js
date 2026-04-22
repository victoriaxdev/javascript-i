// Exercício 13
// Converte minutos em horas e minutos restantes

let minutosTotais = Number(prompt("Digite os minutos:"));

let horas = Math.floor(minutosTotais / 60);
let minutosRestantes = minutosTotais % 60;

alert("Resultado: " + horas + " horas e " + minutosRestantes + " minutos.");