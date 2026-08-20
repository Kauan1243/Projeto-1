// Arrow functions - flecha ( => )
// 1º forma - declaração
// 2º forma - expressão da função
// 3º forma - arrow

// arrow veio junto ES6

const apresentarArrow = nome => `Meu nome é ${nome}`;
console.log(apresentarArrow('Kauan'));

const Apresentasoma = calculo => `o resultado da soma é: ${calculo}`;
console.log(Apresentasoma(4 + 5));

const verifica = (Num1, Num2) => Num1 && Num2 > 10;
console.log(verifica(9, 8));

const verificacao = num1 => {
    if (num1 > 10){
        return 'O Valor é maior que 10'
    }else{
        return 'O Valor é menor ou igual a 10'
    }

}

console.log(verificacao(10));


const calcular = (valor1, valor2) => {
    if (valor1 < 10 & valor2 < 10){
        return valor1 * valor2
    }else{
        return "Só é permitido números menores do que 10"
    }

}

console.log(calcular(12, 5))


