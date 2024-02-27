// Crie um array chamado numeros contendo cinco números inteiros. Utilize um loop for para imprimir cada número do array no console.

// Desafio: utilize a biblioteca prompt-sync para receber cada um dos 5 números.

// resolução simples
// let numeros = [1, 2, 3, 4, 5];

// for (let index = 0; index < numeros.length; index++) {
//    console.log(numeros[index]);
//     }

// resolução com prompt-sync

const prompt = require("prompt-sync")({sigint: true})
const numeros = []

for (let index = 0; index < 5; index++) {
    const numero = parseInt(prompt("Digite o número:"))
    numeros.push(numero)
}

for (let index = 0; index < numeros.length; index++) {
    console.log(`O número é ${numeros[index]}`)
       
}