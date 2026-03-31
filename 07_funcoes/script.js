function mensagem(){ // sem parâmetro
    console.log("Olá, tudo bem?");
}

mensagem();

function mensagem(nome){ // com parametro
    console.log("Boa tarde," + nome + "!")
}

mensagem("Nicole");

function soma(a,b){ // função com retorno
    return a + b;
}
let resultado = soma(5,9);
console.log(resultado);// retorna a soma 