// Exercício 03 - Lista 02
// Calcula √(A² + B³) com arredondamento

let numeroA = Math.ceil(Number(prompt("Digite o primeiro número:")));
let numeroB = Math.ceil(Number(prompt("Digite o segundo número:")));

let potenciaA = numeroA ** 2;
let potenciaB = numeroB ** 3;

let raiz = (potenciaA + potenciaB) ** 0.5;

alert("Resultado: " + raiz.toFixed(2));