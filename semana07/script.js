// Ex. 01 - Crie uma classe chamada Produto com os seguintes atributos: nome, preco, quantidade

class Produto {
    nome;
    preco;
    quantidade;

// Ex. 02 - Crie um construtor para a classe Produto que permita receber os valores base para cada um dos parâmetros.    
    constructor(
        valorNome, 
        valorPreco, 
        valorQuantidade,         
      ){
        this.nome = valorNome
        this.preco = valorPreco
        this.quantidade = valorQuantidade  
      }

//Ex. 03 -  Crie um método para a classe Produto chamado de Vender().
// Este método deve receber como parâmetro a quantidade vendida e deve reduzir (deduzir) da quantidade do produto. Porém, para ser possível essa venda a quantidade vendida não pode ser maior que a quantidade disponível.
// Caso não haja quantidade suficiente, exiba uma mensagem de “Estoque insuficiente”.

      Vender(quantidadeVendida){
        if (quantidadeVendida > this.quantidade) {
            console.log("Estoque insuficiente.")
        } else {
            this.quantidade = this.quantidade - quantidadeVendida;
            console.log(`Quantidade vendida: ${quantidadeVendida}. Quantidade restante em estoque: ${this.quantidade}`)
        }
      }


// Ex. 04 - Crie um método chamado Repor() dentro da classe Produto.
// Este método deve receber como parâmetro a quantidade reposta e adicionar o montante à quantidade do produto.

Repor(quantidadeReposta){
  this.quantidade += quantidadeReposta
}

// Ex. 05 - Crie um método chamado de MostrarEstoque() dentro da classe Produto.
// Este método deve exibir uma mensagem parecida com a seguinte:
// “O produto CANETA BIC AZUL possui 5 unidades disponíveis”

MostrarEstoque(){
  console.log(`O produto ${this.nome} custa R$ ${this.preco} e possui ${this.quantidade} unidades.`)
}

// Ex. 06 - Crie um método chamada de AtualizarPreco dentro da classe Produto.
// Este método deve receber como parâmetro o novo valor do produto e atualizar o preço atual.

AtualizarPreco(novoValor){
  this.preco = novoValor
}

}

const caneta = new Produto("Caneta", 2, 5)
caneta.Vender(6)
caneta.Repor(10)
caneta.Vender(6)
caneta.AtualizarPreco(2.5)
caneta.MostrarEstoque()