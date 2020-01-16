/*(5) Escrever um algoritmo que lê um valor em reais e calcula qual o menor número possível de notas
 de 100, 50, 10, 5 e 1 em que o valor lido pode ser decomposto.
 Escrever o valor lido e a relação de notas necessárias.*/
 
//input de valor inicial
var numero = prompt("Informe o valor desejado (R$ XXXX, XX): ");
numero = Number(numero);

//Comço do script para contagem de notas
var notasCem = numero / 100;

//Obs.: conta para deduzir do valor inicial o valor em notas e acrescentar o resto
numero = numero - notasCem * 100 + numero % 100;


console.log("\nValor atual do numero: " + numero);

var notasCinquenta = numero / 50;

numero = numero - notasCinquenta * 50 + numero % 50;

console.log("\nValor atual do numero: " + numero);

var notasDez = numero / 10;
numero = numero - notasDez * 10 + numero % 10;

console.log("\nValor atual do numero: " + numero);

var notasCinco = numero / 5;
numero = numero - notasCinco * 5 + numero % 5;

var centavos = numero - Math.floor(numero);

var notasUm = numero;

console.log("\nValor atual do numero: " + numero);

if (notasCem > 0) {
    console.log("\nNúmero de notas de R$ 100,00: " + Math.floor(notasCem));
}

if (notasCinquenta > 0) {
    console.log("\nNúmero de notas de R$ 50,00: " + Math.floor(notasCinquenta));
}

if (notasDez > 0) {
    console.log("\nNúmero de notas de R$ 10,00: " + Math.floor(notasDez));
}

if (notasCinco > 0) {
    console.log("\nNúmero de notas de R$ 5,00: " + Math.floor(notasCinco));
}

if (notasUm > 0) {
    console.log("\nNúmero de notas de R$ 1,00: " + Math.floor(notasUm));
}


console.log("\nNúmero de centavos restantes: R$ " + centavos.toFixed(2));

