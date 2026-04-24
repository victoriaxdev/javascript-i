// Jogo Pedra, Papel e Tesoura contra o computador

const maoUsuario = prompt("Pedra, Papel e Tesoura!\nQual você vai jogar?");
const numero = Math.floor(Math.random() * 3);

const opcoes = ["Pedra", "Papel", "Tesoura"];
const maoComputador = opcoes[numero];

alert("O computador escolheu: " + maoComputador + "!");

if (maoUsuario === maoComputador) {
  alert("Empate! Jogue novamente.");
} else if (
  (maoUsuario === "Tesoura" && maoComputador === "Papel") ||
  (maoUsuario === "Pedra" && maoComputador === "Tesoura") ||
  (maoUsuario === "Papel" && maoComputador === "Pedra")
) {
  alert("Você venceu!");
} else {
  alert("Você perdeu!");
}