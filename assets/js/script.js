// Função para capturar a informação
function capturarInformacao() {
    // Captura a informação usando o prompt
    var informacaoDigitada = prompt("Digite seu nome:");

    // Verifica se a informação não é nula ou vazia
    if (informacaoDigitada !== null && informacaoDigitada !== "") {
      // Exibe a informação na página HTML
      document.getElementById("resultado").innerText = "Olá, " + informacaoDigitada + "! Tudo certo?";
    } else {
      alert("Você não digitou seu nome.");
    }
}