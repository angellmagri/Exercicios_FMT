// Crie um novo array chamado numerosOrdenados contendo os mesmos números do array numeros. Em seguida, ordene esse novo array em ordem crescente e imprima-o no console.

// versão simples
// let numerosOrdenados = [3, 7, 21, 2, 1]

// numerosOrdenados.sort(function(a, b){
//     return a - b;
// }
// );

// console.log(numerosOrdenados)

// versão com prompt-sync

const prompt = require("prompt-sync")({sigint: true})
const numerosOrdenados = []

for (let index = 0; index < 5; index++) {
    const numero = (prompt("Digite um número: "))
    numerosOrdenados.push(numero)
}

numerosOrdenados.sort(function(a, b){
    return a - b
});

console.log(numerosOrdenados)