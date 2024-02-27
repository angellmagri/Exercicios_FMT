// Usando o mesmo array do exercício anterior, adicione mais uma fruta ao array frutas. Em seguida, remova a primeira fruta do array. Imprima o array atualizado no console.

// resolução simples
// let frutas = ["Banana", "Manga", "Abacaxi", "Morango"]
// frutas.splice(0, 1)
// console.log(frutas)

// resolução com prompt-sync

const prompt = require("prompt-sync")({sigint: true})
const frutas = []

for(let i = 0; i < 3; i++){
  frutas.push(prompt("Digite o nome da fruta: "))
}

frutas.push(prompt("Digite uma fruta adicional: "))
frutas.splice(0,1)
console.log(frutas)