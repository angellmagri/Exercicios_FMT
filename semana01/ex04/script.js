// Implemente uma função chamada adicao que aceita dois números como argumentos e uma função anônima. Esta função deve simular uma operação de adição, onde os dois números são somados. Após a soma, chame a função passada como parâmetro e o resultado deve ser passado para a função anônima.
// OBS: a função anônima apenas irá imprimir o resultado passado pelo parâmetro.



function funcaoAdicao(parametro1, parametro2, parametro3) {
    let soma = parametro1 + parametro2
    parametro3(soma)
}

let FuncaoAnonima = function (soma){
    console.log("O resultado da soma é: " + soma)
}

funcaoAdicao(2, 4, FuncaoAnonima)