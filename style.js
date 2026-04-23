//Conversões Tipos de dados
//Number = int ou float
//String = texto ou char
//Boolean = lógico

//Conversões Implícita
const numero = 456;
const numString = '456';
console.log(numero == numString); //Implícita

//Conversões Explícitas
console.log(numero + numString);

console.log(numero + Number(numString)); //Explícitas
console.log(String(numero) + numString); //Explícitas