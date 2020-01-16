/*Escreva um programa que calcula o preço total da compra do seu celular. Você pode continuar comprando telefones (dica: loop!) até você ficar sem dinheiro na sua conta bancária. Você irá também comprar acessórios para cada
 telefone enquanto sua quantidade de dinheiro for menor do que seu limite mensal.*/

var contCelular = 0;
var taxa = 0.3;
var celular = 300;
var acessorios = 50;

var totalAcessorios= acessorios*taxa;
totalAcessorios=Number(totalAcessorios);

var saldo = prompt("Informe o saldo inicial ");
saldo = Number(saldo);

var totalCelular = celular + (taxa * celular);
totalCelular = Number(totalCelular);

var totalCompra = 0;
var contAcessorios = 0;


console.log("O valor total de cada celular é: $" + totalCelular.toFixed(2));

while(saldo>0){
    if(saldo>=totalCelular){
        saldo -= totalCelular;
        totalCompra += totalCelular;
        contCelular++;
    } 
    
    if(saldo >= totalAcessorios){
        saldo -= totalAcessorios;
        totalCompra += totalAcessorios;
        contAcessorios++;
    } 

    if(saldo<totalAcessorios){
        break;
    }        
        console.log('**CHECA SALDO: ' + saldo +' CHECA CELULAR: ' +contCelular+' CHECA ACESSÓRIO: '+contAcessorios);
} 


console.log("O valor total da compra é: $ " + totalCompra.toFixed(2));
console.log("O número de celulares comprados foi: " + contCelular);
console.log("O número de acessórios comprados foi: " + contAcessorios + ", com o valor total de: $" + (contAcessorios * totalAcessorios));
console.log("SALDO FINAL NA CONTA: $" + saldo);
