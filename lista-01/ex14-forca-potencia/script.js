// Exercício 14
// Calcula força e potência com base nos valores informados

let massa = Number(prompt("Digite o valor da massa (kg):"));
let aceleracao = Number(prompt("Digite o valor da aceleração (m/s²):"));

let calculoForca = massa * aceleracao;
alert("Valor da força = " + calculoForca + " N");

let trabalho = Number(prompt("Digite o valor do trabalho (Joules):"));
let tempo = Number(prompt("Digite o valor do tempo (segundos):"));

alert("Potência = " + trabalho / tempo + " Watts");