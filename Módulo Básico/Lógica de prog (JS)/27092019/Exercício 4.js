/*var qtdAlunos = 36;
var alunos = [];
for (var i = 0; i < qtdAlunos; i++) {
    alunos[i] = i + 1;
}

function random() {
    return alunos[Math.floor(Math.random() * alunos.length)]
} */



var qtdAlunos = 36;
var alunos = [];
var cont = 0;




for (var i = 0; i < qtdAlunos; i++) {
    var numeroAleatorio = Math.floor(Math.random() * qtdAlunos + 1);
    if (alunos.indexOf(numeroAleatorio) == -1) {
        alunos.push(numeroAleatorio);
    } else {
        i--;
    }
       
}

console.log(alunos)
while (alunos.length) {
    cont++;
    var b = alunos.splice(0, 6);
    console.log("O grupo " + cont + " é: " + b);
}






