// Crie uma função nomeada que recebe um número e devolva uma string dizendo se é par ou ímpar.



var numero = prompt("Digite um número")

function funcaoDeParOuImpar(numero) {
    if (numero % 2 == 0) {
        document.write("O número é par")
    } else {
        document.write("O número é ímpar")
    }    
}

funcaoDeParOuImpar(numero)
