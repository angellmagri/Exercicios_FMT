// Crie um array chamado pares que contenha apenas os números pares do array numeros criado nos exercícios anteriores. Em seguida, imprima esse novo array no console. Utilize o método filter para realizar a operação de filtragem.

const prompt = require("prompt-sync")({sigint: true})
const numeros = []

for (let index = 0; index < 5; index++) {
    const numero = (prompt("Digite um número: "))
    numeros.push(numero)
}

const soPares = numeros.filter(numeroAtual => {
    if(numeroAtual % 2 == 0){
      return true
    }
  })
  
  console.log("O novo array com números pares é ", soPares)