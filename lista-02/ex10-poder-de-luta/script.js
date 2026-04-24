// Exercício 10 - Lista 02
// Verifica se o poder de luta é maior ou igual a 8000

let poderDeLuta = Math.floor(
  Number(prompt("Qual é o poder de luta de Kakarotto?"))
);

if (poderDeLuta >= 8000) {
  alert("Isso deve ser um engano, esse aparelho deve estar quebrado!");
} else {
  alert("Ainda não é o suficiente para derrotar Vegeta!");
}