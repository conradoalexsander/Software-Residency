function aluno(nome, nota) {
    this.Nome = nome;
    this.Nota = nota;
}

Conrado = new aluno('Conrado', 10);
Ronaldo = new aluno('Ronaldo', 6);
Maria = new aluno('Maria', 4);
Ramon = new aluno('Ramon', 5);
Afranio = new aluno('Afranio', 0)
var turma = [Conrado, Ronaldo, Maria, Ramon, Afranio];

var maiorNota = turma['0'].Nota;
var maiorNome=" ";
var menorNota = turma['0'].Nota;
var menorNome = " ";
var maiorQueCinco = [];
var total = 0;


for (var j = 0; j < turma.length; j++) {
    total+=turma[j].Nota;
    if (turma[j].Nota > maiorNota) {
        maiorNota = turma[j].Nota;
        maiorNome = turma[j].Nome;
    }

    if (turma[j].Nota < menorNota) {
        menorNota = turma[j].Nota;
        menorNome = turma[j].Nome;
    }

    if(turma[j].Nota > 5){
        maiorQueCinco.push(turma[j].Nome);
    }
}

var media = total/turma.length;

console.log("Os alunos maiores que cinco são: " + maiorQueCinco);
console.log("A menor nota é: " + menorNota);
console.log("A maior nota é: "+ maiorNota);
console.log("A media da turma é: " +media);
