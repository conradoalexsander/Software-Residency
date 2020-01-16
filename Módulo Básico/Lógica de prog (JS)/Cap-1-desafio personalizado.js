
/*Escreva um programa que calcula o preço total da compra do seu celular. Você pode continuar comprando telefones (dica: loop!) até você ficar sem dinheiro na sua conta bancária. Você irá também comprar acessórios para cada
telefone enquanto sua quantidade de dinheiro for menor do que seu limite mensal.
DESAFIO: TORNAR A TAXA, O VALOR DO ACESSÓRIO E O VALOR DO CELULAR PER
*/

var totalCelular = 0;
var contCelular = 0;

var totalAcessorios = 0;
var contAcessorios = 0;

var totalCompra = 0;

var saldo = prompt("Informe o saldo inicial ");
saldo = Number(saldo);
var taxa = prompt("Informe a taxa sobre os produtos: ");
taxa = Number(taxa) / 100;
var somaCelular=0;
var somaAcessorios=0;




console.log("O valor total de cada celular é: $" + totalCelular.toFixed(2));

//bloco de operação de compra
while (saldo > 0) {
    operacao = prompt('Deseja efetivar uma compra (s/n)?');
    operacao = String(operacao);


    if (operacao == "s") {
        celular = prompt("Informe o valor do celular: ");
        celular = Number(celular);
        totalCelular = totalProduto(celular, taxa);
        totalCelular = Number(totalCelular);

        if (saldo >= totalCelular) {

            saldo = debito(saldo, totalCelular);
            totalCompra = valorCompras(totalCompra, totalCelular);
            somaCelular+=totalCelular;
            contCelular++;

            alert("Valor final do celular: $ " + totalCelular +
                "\nCompra efetivada, saldo: $ " + saldo);

        } else {
            alert("O valor do saldo é insuficiente para a operação.");
        }

        acessorios = prompt("Informe o valor do acessório: ");
        acessorios = Number(acessorios);
        totalAcessorios = totalProduto(acessorios, taxa)
        totalAcessorios = Number(totalAcessorios);
        if (saldo >= totalAcessorios) {
            saldo = debito(saldo, totalAcessorios);
            totalCompra = valorCompras(totalCompra, totalAcessorios);
            somaAcessorios+=totalAcessorios;
            contAcessorios++;

            alert("Valor final dos acessorios: $ " + totalAcessorios +
                "\nCompra efetivada, saldo: $ " + saldo);
        } else {
            alert("O valor do saldo é insuficiente para a compra do acessório.");
        }


    } else if (operacao == 'n') {
        break;
    } else {
        alert('Resposta invalida.')
        break;
    }
    //checando no console para debug
    console.log('**CHECA SALDO: ' + saldo + ' CHECA CELULAR: ' + contCelular + ' CHECA ACESSÓRIO: ' + contAcessorios);
}

//Exibindo resultados
alert("O valor total da compra é:" + mostraValor(totalCompra)+"\n"+
"\nO número de celulares comprados foi: " + contCelular + ", com o valor total de: $" + somaCelular.toFixed(2)+"\n"+
"\nO número de acessórios comprados foi: " + contAcessorios + ", com o valor total de: $" + somaAcessorios.toFixed(2)+"\n"+
"\nSALDO FINAL NA CONTA: " + mostraValor(saldo));


//realiza débito do saldo
function debito(saldo, valor) {
    saldo -= valor;
    return saldo;
}

//calcula o valor final do produto ocm taxas
function totalProduto(valorProduto, taxa) {
    return valorProduto * (1 + taxa);
}

//calcula o valor total da compra
function valorCompras(totalCompra, valorProduto) {
    totalCompra += valorProduto;
    return totalCompra;
}

//exibe o valor formatado
function mostraValor(valor){
    return "$: "+valor.toFixed(2);
}






