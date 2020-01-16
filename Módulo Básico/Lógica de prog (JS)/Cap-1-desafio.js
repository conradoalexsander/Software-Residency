
    /*Escreva um programa que calcula o preço total da compra do seu celular. Você pode continuar comprando telefones (dica: loop!) até você ficar sem dinheiro na sua conta bancária. Você irá também comprar acessórios para cada
 telefone enquanto sua quantidade de dinheiro for menor do que seu limite mensal.
 DESAFIO: TORNAR A TAXA, O VALOR DO ACESSÓRIO E O VALOR DO CELULAR PER
 */

var contCelular = 0;

var taxa = prompt("Informe a taxa sobre os produtos: ");
taxa = Number(taxa);

var celular = prompt("Informe o valor dos celulares: ");
celular = Number(celular);

var acessorios = prompt("Informe o valor dos acessórios: ");
celular = Number(acessorios);

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
        saldo = debito(saldo, totalCelular);
        totalCompra = valorCompras(totalCompra, totalCelular);
        contCelular++;
    } 
    
    if(saldo >= totalAcessorios){
        saldo = debito(saldo, totalAcessorios);
        totalCompra = valorCompras(totalCompra, totalAcessorios);
        contAcessorios++;
    } 

    if(saldo<totalAcessorios){
        break;
    }    
 
        console.log('**CHECA SALDO: ' + saldo +' CHECA CELULAR: ' +contCelular+' CHECA ACESSÓRIO: '+contAcessorios);
} 



alert("O valor total da compra é:" + mostraValor(totalCompra)+"\n"+
"\nO número de celulares comprados foi: " + contCelular + ", com o valor total de: $" + (contCelular * totalCelular).toFixed(2)+"\n"+
"\nO número de acessórios comprados foi: " + contAcessorios + ", com o valor total de: $" + (contAcessorios * totalAcessorios).toFixed(2)+"\n"+
"\nSALDO FINAL NA CONTA: " + mostraValor(saldo));



function debito(saldo, valor){
    saldo -= valor;
    return saldo;
}

function valorCompras(totalCompra, valorProduto){
    totalCompra+=valorProduto;
    return totalCompra;
}

function mostraValor(valor){
    return "$: "+valor.toFixed(2);
}





