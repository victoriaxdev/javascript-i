// Exercício 11 - Lista 02
// Testa condições com valores e tipos diferentes

let a;
let b;
let c;
let d;
let e;

// Valores escolhidos
a = 3;
// a = 2;
// a = 7;
// a = 0;

b = undefined;
// b = null;
// b = 1;
// b = "null";

c = "20" - 20;
// c = "2000" + "20";
// c = null;
// c = undefined;

d = null;
// d = undefined;
// d = 0;
// d = "undefined";

e = null;
// e = 0;
// e = NaN;
// e = "null";

// Verificações
const verificacaoA = a > 2 && a < 4;
const verificacaoB = b === undefined;
const verificacaoC = typeof c === "number";
const verificacaoD = d == undefined;
const verificacaoE = e === d;

// Resultados
console.log("a=" + verificacaoA);
console.log("b=" + verificacaoB);
console.log("c=" + verificacaoC);
console.log("d=" + verificacaoD);
console.log("e=" + verificacaoE);