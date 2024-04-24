// Variáveis Utilizadas
let pessoaMesa = document.getElementById("pessoaMesa");
let totalConta = document.getElementById("totalConta");
let metodoPagamento = document.getElementById("metodoPagamento"); //("Insira o metodo de pagamento (1 - Pix / 2 - Dinheiro / 3 - Cartão) : "));
let divideConta = document.getElementById("divideConta");
let calculaGorjeta = document.getElementById("calculaGorjeta");   //("Deseja colaborar com uma gorjeta para o garcom? 1 - Sim / 2 - Não  :"));

let valorGorjeta = 0;
if (calculaGorjeta == 1){
    valorGorjeta = document.getElementById("valorGorjeta");
    
    }
// Case para cálculo pelo metodo de pagamento
let valorDesconto = 0;
switch (metodoPagamento){
    case 1: 
        valorDesconto = (totalConta*10)/100;
    break
    case 2:
        valorDesconto = (totalConta*10)/100;
    break
    case 3:
        valorDesconto = 0;
    break
    default: 
        valorDesconto = 0;
    break
}

// Divisao pelas pessoas da mesa
let qtdPessoaMesa = 0;
if (divideConta == 1){
    qtdPessoaMesa=pessoaMesa;
} else {
    qtdPessoaMesa = 1;
}


let valorTotalConta = (totalConta+valorGorjeta-valorDesconto)/qtdPessoaMesa;


// Saídas das informações coletadas
        console.log(`O valor total da conta é: R$ ${totalConta.toFixed(2)} `);
  
   
        console.log(`O valor de desconto: R$ ${valorDesconto.toFixed(2)} `);
    
    
        console.log(`O valor total da gorjeta: R$ ${valorGorjeta.toFixed(2)} `);
    
   
        console.log()
    


console.log(`O total da conta para cada pessoa:  R$ ${valorTotalConta.toFixed(2)}`);