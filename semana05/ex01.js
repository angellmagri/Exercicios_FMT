// Crie um array chamado frutas contendo três frutas diferentes. Em seguida, imprima no console a segunda fruta do array.
// Desafio: utilize a biblioteca prompt-sync para receber cada uma das 3 frutas.

// resolução simples
// let frutas = ["Banana", "Manga", "Abacaxi"]
// console.log(frutas[1])

// resolução com prompt-sync

const prompt = require("prompt-sync")({sigint: true})
const frutas = []

for(let i = 0; i < 3; i++){
  frutas.push(prompt("Digite o nome da fruta: "))
}

console.log(frutas[1])