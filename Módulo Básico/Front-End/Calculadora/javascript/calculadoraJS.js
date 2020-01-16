function soma(n1, n2){
    //função que realiza a soma de dois valores a partir de input do usuário
    n1=Number(document.getElementById('n1').value);
    n2=Number(document.getElementById('n2').value);
    document.getElementById("RESULTADO").innerHTML = " " +(n1+n2).toFixed(casaDecimal());
}

function multiplicacao(n1, n2){
    n1=Number(document.getElementById('n1').value);
    n2=Number(document.getElementById('n2').value);
    document.getElementById("RESULTADO").innerHTML = " "+(n1*n2).toFixed(casaDecimal());
 
}

function exponencial(n1, n2){
    n1=Number(document.getElementById('n1').value);
    n2=Number(document.getElementById('n2').value);
    document.getElementById("RESULTADO").innerHTML = " "+(Math.pow(n1,n2)).toFixed(casaDecimal());
}

function subtracao(n1, n2){
    n1=Number(document.getElementById('n1').value);
    n2=Number(document.getElementById('n2').value);
    document.getElementById("RESULTADO").innerHTML = " " +(n1-n2).toFixed(casaDecimal());
}

function divisao(n1, n2){
    n1=Number(document.getElementById('n1').value);
    n2=Number(document.getElementById('n2').value);
    var div = n1/n2;
    document.getElementById("RESULTADO").innerHTML = " "+ (div).toFixed(casaDecimal());
}

function raizQuadrada(n1){
    n1=Number(document.getElementById('n1').value);
    var raiz = Math.sqrt(n1); 
    document.getElementById("RESULTADO").innerHTML = " "+ raiz.toFixed(casaDecimal());
}

function fatorialOperacao(n1){
    var fat = 1;
        for(x=n1;x>1;x--){
          fat = fat * x;
        }
        return fat;
}

function fatorial(){
    var numero = parseInt(document.getElementById('n1').value);
    var resposta = document.getElementById('RESULTADO');
    var fat=1;

    while(numero>1){
        fat *= numero;
        numero--
    }
    resposta.innerHTML =fat;
  }



function logx(){
    n1=Number(document.getElementById('n1').value); 
    document.getElementById("RESULTADO").innerHTML = " "+ Math.log10(n1).toFixed(casaDecimal());
}


function limpar(){
    document.getElementById("RESULTADO").innerHTML = " ";
}

function casaDecimal(n){
    n=Number(document.getElementById('numDec').value);
    return n;
}

var i = 0;
while(true){
    if((i<=9)===false){
        break;
    }
    console.log(i);
    i=i+1;
}