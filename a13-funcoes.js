/*var x;
console.log(x);
x = 'oi';

function soma () {
    2 + 2
}*/

var valor1 = prompt("digite o valor 1");
var valor2 = prompt("digite o valor 2");


function calcular(valor1, valor2, operacao) {
    switch (operacao) {
        case '+':
            return valor1 + valor2;
        case '-':
            return valor1 - valor2;
        case '*':
            return valor1 * valor2;
        case '/':
            if (valor2 === 0) {
                return "Erro: Divisão por zero!";
            }
            return valor1 / valor2;
        default:
            return "Erro: Operação inválida!";
    }
}