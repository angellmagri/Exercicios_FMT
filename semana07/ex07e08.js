// Ex. 07 - Crie uma nova classe chamada de Pessoa que deve ter os seguintes atributos: nome, idade, profissao
// Esta classe deve possuir um construtor para receber os valores para cada um dos atributos.

class Pessoa {
    nome;
    idade;
    profissao

    constructor (nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao
    }
}

// E. 08 - Crie uma nova classe chamada de Cliente. Esta classe deve herdar a classe Pessoa.
// Além disso ela deve possuir os seguintes atributos: telefone, email, clienteDesde - deve ser uma string no formato “ANO-MES-DIA”
// Crie um construtor para receber os valores para todos os atributos da classe Cliente e também da classe Pessoa, sendo necessário passar parâmetros para o construtor base da classe Pessoa.

class Cliente extends Pessoa {
    telefone;
    email;
    clienteDesde;

    constructor(nome, idade, profissao, telefone, email, clienteDesde){
    super(nome, idade, profissao)
    this.telefone = telefone
    this.email = email
    this.clienteDesde = clienteDesde
    }
}

const clienteAngell = new Cliente ("Angell", 28, "Estudante FMT", "99999999", "email@email.com", "2023-10-01")
console.log(clienteAngell)
