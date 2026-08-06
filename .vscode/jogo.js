const prompt = require('prompt-sync')();

console.log("=== Jogo de Adivinhação ===");
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let acertou = false;

while (!acertou) {
    const palpite = prompt("Adivinhe um número de 1 a 10: ");
    
    if (parseInt(palpite) === numeroSecreto) {
        console.log("Parabéns! Você acertou!");
        acertou = true;
    } else {
        console.log("Errou! Tente de novo.");
    }
}
