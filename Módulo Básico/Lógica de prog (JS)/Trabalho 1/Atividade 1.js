/* (1) Faça um programa que leia a idade de uma pessoa expressa em anos, 
meses e dias e mostre-a expressa apenas em dias.*/

var anosUsuario = Number(prompt("Informe os anos"));
var mesesUsuario = Number(prompt("Informe os meses"));
var diasUsuario = Number(prompt("Informe os Dias "));

//função para subtrair os dias
Date.prototype.subtrairDias = function(diasUsuario) {
    let date = new Date;
    date.setDate(date.getDate() - diasUsuario);
    return date;
}

//função para subtrair os meses
Date.prototype.subtrairMeses = function(mesesUsuario) {
    let date = new Date;
    date.setMonth(date.getMonth() - mesesUsuario);
    return date;
}

//função para subtrair os anos
Date.prototype.subtrairAnos = function(anosUsuario) {
    let date = new Date;
    date.setFullYear(date.getFullYear() - anosUsuario);
    return date;
}

var dataHoje = new Date();

var dataSemDias = (dataHoje.subtrairDias(diasUsuario));//data de hoje sem os dias imputados pelo usuário
var dataSemMeses = (dataSemDias.subtrairMeses(mesesUsuario));//data sem os dias, subtraindo tambem os meses
var dataSemAnos = (dataSemMeses.subtrairAnos(anosUsuario)); //data sem os dias e meses, subtraindo os anos (essa é a data desejada para o cálculo)

console.log(dataSemDias);
console.log(dataSemMeses);
console.log(dataSemAnos);

//cálculo dos dias totais
var diferencaEmMilissegundos = Math.abs(dataHoje - dataSemAnos);
var diferencaEmDias = Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24)); 
console.log(diferencaEmDias - 1);