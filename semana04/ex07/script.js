let somaDeProdutos = [0, 0, 0, 0, 0]; 
let opcaoEscolhida; 

do {
  opcaoEscolhida = parseInt(
    prompt(
      "Qual produto você deseja comprar? (1)Hortifruti (2)Laticínios (3)Carnes (4)Peixes (5)Aves (6)Fechar Pedido"
    )
  ); 

  if (opcaoEscolhida < 1 || opcaoEscolhida > 6) { 
       
    alert("Opção inválida. Tente novamente.");
    break;
  }
  if (opcaoEscolhida === 6) {     
    break;
  }

  let quantidadeDesejada = parseInt(
    prompt(`Quantas unidades do produto você deseja comprar?`)
  ); 

  somaDeProdutos[opcaoEscolhida - 1] += quantidadeDesejada; 
  
} while (opcaoEscolhida != 6); 

if (somaDeProdutos.length === 0) { 
  alert("Você não comprou nenhum produto.");
} else {
  let greaterQuantity = 0;
  let indexGreaterQuantity = 0;


  for (let i = 0; i < somaDeProdutos.length; i++) {
   
    if (somaDeProdutos[i] > greaterQuantity) { 
      greaterQuantity = somaDeProdutos[i];
      indexGreaterQuantity = i; 
    }
  }


  switch (indexGreaterQuantity + 1) {
    case 1:
      productName = "Hortifruti";
      break;
    case 2:
      productName = "Laticínios";
      break;
    case 3:
      productName = "Carnes";
      break;
    case 4:
      productName = "Peixes";
      break;
    case 5:
      productName = "Aves";
      break;
  }

 
  alert(`O produto com maior quantidade é ${productName}`);
}