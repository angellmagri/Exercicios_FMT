// EXERCÍCIO 1: Crie um novo projeto Node.js. 
//Instale o Express.js usando o npm. 
//Crie um arquivo app.js e configure um servidor Express básico que escute na porta 3000.


const express = require("express")
const app = express()

app.listen(3000, function(){
    console.log("Servidor Rodando!")
 }) // esse '3000' é uma 'porta'


// EXERCÍCIO 2: Adicione rotas ao novo projeto:
//Uma rota GET que responda à URL '/sobre' com uma mensagem sobre o seu aplicativo.
//Uma rota GET que responda à URL '/contato' com uma mensagem de contato.