const idadeMin = 18
const idadeCliente =19;

if(idadeCliente >= idadeMin){
console.log('Você pode fazer a carteira de habilitação');
} else {
console.log('Ainda não tem idade suficiente para dirigir')
}

//operador Ternário

let permissao = idadeCliente >= idadeMin ? "sim" : "não";
console.log("permissao para dirigir: "+ permissao)