

// URL da API
const apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=10';

// Comunicação com a API usando Fetch API
fetch(apiUrl)
    .then(response => response.json()) // Convertendo a resposta para JSON
    .then(data => {
        // Iterando sobre a lista de imagens
        data.forEach(image => {
            // Escrevendo a tag <img> no documento HTML usando document.write()
            document.write(`<img src='${image.url}' width='200'/> <br />`);
        });
    })
    .catch(error => {
        console.error('Ocorreu um erro ao buscar as imagens:', error);
    });
