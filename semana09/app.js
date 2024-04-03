// EXERCÍCIO 1: Crie um novo projeto Node.js. 
//Instale o Express.js usando o npm. 
//Crie um arquivo app.js e configure um servidor Express básico que escute na porta 3000.


const express = require("express")
const app = express()
app.use(express.json())

//app.listen(3033, function(){
//    console.log("Servidor Rodando!")
// }) 
// Não funcionou com a porta 3000 - poderia já estar ocupada. 
// Comentei o app.listen porque estou usando o mesmo arquivo para vários exercícios e é recomendado que o app.listen fique no final da aplicação.

// EXERCÍCIO 2: Adicione rotas ao novo projeto:
//Uma rota GET que responda à URL '/sobre' com uma mensagem sobre o seu aplicativo.
//Uma rota GET que responda à URL '/contato' com uma mensagem de contato.

app.get("/sobre",function(req, res){
    res.send("Esse é um aplicativo criado para responder aos exercícios da semana 9!")
})  // acessar: http://localhost:3033/sobre

 app.get("/contato",function(req, res){
    res.send("Contate-nos pelo e-mail: angell_magri@estudante.sesisenai.org.br")
})  // acessar: http://localhost:3033/contato

 // EXERCÍCIO 3: 
 //Crie um middleware que registre informações sobre todas as solicitações recebidas pelo servidor Express.
// Use esse middleware para registrar o método HTTP, a URL e o horário de cada solicitação no console.


app.listen(3033, function(){
    console.log("Servidor Rodando!")
 }) // Não funcionou com a porta 3000 - poderia já estar ocupada.