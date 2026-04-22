// Exercício 16
// Manipula valores com operadores ++ e --

let numA;
let numB;
let numC;
let numD;

// Valores iniciais
numA = 2;
numB = 5;
numC = 0;
numD = 0;

// Operações
numA++;
numC = numB--;
numC++;
numA = ++numD;

// Resultados
console.log("A: " + numA);
console.log("B: " + numB);
console.log("C: " + numC);
console.log("D: " + numD);

const resultado = numA + numB + numC + numD;
console.log("Total: " + resultado);