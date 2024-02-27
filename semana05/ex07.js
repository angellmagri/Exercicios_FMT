// Utilizando o array numeros utilizado nos exercícios anteriores, crie um novo array chamado quadrados que contenha o quadrado de cada número do array numeros. Imprima o array quadrados no console. Use o método map para realizar a criação de um novo array.

const prompt = require("prompt-sync")({sigint: true})
const numeros = []

for (let index = 0; index < 5; index++) {
    const numero = (prompt("Digite um número: "))
    numeros.push(numero)
}

const quadrados = numeros.map(numeroatual => numeroatual * numeroatual)

console.log("O array dos quadrados do números é ", quadrados)