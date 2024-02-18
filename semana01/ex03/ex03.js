// Crie uma arrow function que recebe um array de números e calcula a média deles. OBS: para pegar o tamanho de um array use nomeDoArray.length

const calculoDeMedia = (array)=>{
    let soma = 0
    for (const numero of array) {
        soma = soma + numero
    }

    let media = soma/array.length;
    console.log(media)
}


let arrayNumeros = [10,20,35,100]; 

calculoDeMedia(arrayNumeros);