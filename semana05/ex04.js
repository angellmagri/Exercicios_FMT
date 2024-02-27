// Utilizando o array numeros do exercício anterior, calcule e imprima a soma de todos os elementos do array. Utilize o reduce para realizar a soma.

// resolução simples

// let numeros = [1, 2, 3, 4, 5]
// let soma = numeros.reduce(function(acumulador, numeroAtual){
//     return acumulador + numeroAtual
// }, 0)

// console.log("A soma dos números é: " + soma)


// resolução com prompt-sync

const prompt = require("prompt-sync")({sigint: true})
const numeros = []

for (let index = 0; index < 5; index++) {
    const numero = parseInt(prompt("Digite o número: "));
    numeros.push(numero);
}

const soma = numeros.reduce((acumulador, numeroAtual) => {
    return acumulador + numeroAtual
  }, 0)

  console.log("A soma dos números é: " + soma)