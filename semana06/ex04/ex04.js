// Crie uma função que irá pedir 3 informações através do prompt, o nome, a idade e o email. Monte essas informações em um objeto igual ao do exercício 03, após isso salve esse objeto com a chave “user” no localStorage.



function salvarUsuarioNoLocalStorage() {
    // Pedir as informações do usuário via prompt
    let nome = prompt("Por favor, insira seu nome:");
    let idade = prompt("Por favor, insira sua idade:");
    let email = prompt("Por favor, insira seu email:");

    // Criar um objeto com as informações do usuário
    let usuario = {
        nome: nome,
        idade: idade,
        email: email
    };

    // Converter o objeto para JSON
    let usuarioJSON = JSON.stringify(usuario);

    // Salvar o objeto no localStorage com a chave "user"
    localStorage.setItem("user", usuarioJSON);

    console.log("Informações do usuário salvas com sucesso no localStorage.");
}

// Chamar a função para salvar as informações do usuário no localStorage
salvarUsuarioNoLocalStorage();
