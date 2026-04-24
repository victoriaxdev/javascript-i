// Calcula valor final baseado na forma de pagamento

const valorTotal = Number(prompt("*COMPRA*\nValor Total:"));
const formaPag = Number(
  prompt("Forma de pagamento:\n(1) à vista\n(2) a prazo")
);

let aVista;
let aPrazo;
let aVcartao;

if (formaPag === 1) {
  aVista = Number(prompt("À vista em:\n(1) dinheiro\n(2) cartão"));

  if (aVista === 1) {
    // 10% desconto dinheiro
    alert("Valor TOTAL: " + (valorTotal * 0.9) + " R$");
  } else {
    aVcartao = Number(prompt("(1) crédito\n(2) débito"));

    if (aVcartao === 1) {
      // 5% desconto crédito
      alert("Valor TOTAL: " + (valorTotal * 0.95) + " R$");
    } else {
      // 8% desconto débito
      alert("Valor TOTAL: " + (valorTotal * 0.92) + " R$");
    }
  }
} else {
  aPrazo = Number(prompt("Em quantas vezes?"));

  if (aPrazo <= 3) {
    // sem juros
    alert("Valor TOTAL: " + valorTotal + " R$");
  } else {
    // 4% acréscimo
    const total = valorTotal * 1.04;
    alert(
      "Parcelas: " + (total / aPrazo) + " R$\nValor TOTAL: " + total + " R$"
    );
  }
}