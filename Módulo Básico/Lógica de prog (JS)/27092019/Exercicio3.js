//Usar o exercício anterior e exibir em ordem decrescente por nota os alunos

const MEDIA = 5;

//Objetos alunos
var aluno1 = {
    nome: "Alan",
    nota: 3
};
var aluno2 = {
    nome: "Pedro",
    nota: 5
};

var aluno3 = {
    nome:"João",
    nota:10
};

var aluno4 = {
    nome: "Conrado",
    nota: 10

}

var aluno5 = {
    nome: "Ramon",
    nota: 9.0
}
//array de alunos
var alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

var alunoMaiorNota;
var alunoMenorNota;
var alunoNotaAcimaCinco;
var total = 0;
var maiorQueCinco =[];

//fazer for do array 
for(i=0;i<alunos.length;i++){
    total += alunos[i].nota;
    if(alunos[i].nota > MEDIA) {
        maiorQueCinco.push(alunos[i].nome);
    }

    if (alunoMaiorNota == undefined){
        alunoMaiorNota = alunos[i];
    }else{
        if (alunos[i].nota > alunoMaiorNota.nota){
            alunoMaiorNota = alunos[i];
        }
    }

    if (alunoMenorNota == undefined){
        alunoMenorNota = alunos[i];
    }else{
        if (alunos[i].nota < alunoMenorNota.nota){
            alunoMenorNota = alunos[i];
        }
    }
}

//ordenando o array alunos por nota
var alunosDecrescente = alunos.sort(compare);

//outputs
console.log("\nLISTAGEM DE ALUNOS POR NOTA DECRESCENTE: ");
listaAlunos(alunosDecrescente);


console.log ("\nALUNOS COM NOTA ACIMA DA MÉDIA: ");
listaVetor(maiorQueCinco)

console.log("\nALUNO COM A MENOR NOTA: " + alunoMenorNota.nome+" / NOTA: "+alunoMenorNota.nota);
console.log("\nALUNO COM A MAIOR NOTA: " + alunoMaiorNota.nome+" / NOTA: "+alunoMaiorNota.nota);
console.log("\nA MÉDIA DA TURMA É: " + (total/alunos.length));

//função para o sort, observar expressão ternária.
function compare(a,b) {
    return a.nota < b.nota ? 1 : a.nota > b.nota ? -1 : 0;
};

//função para listar vetores
function listaVetor(vetor){
    for(var i = 0; i < vetor.length;i++){
       console.log("Aluno: "+ vetor[i]);
    }

}

//listagem de alunos
function listaAlunos(alunos){
    for(var i = 0; i < alunos.length;i++){
        console.log("Aluno: "+ alunos[i].nome+" / Nota: "+ alunos[i].nota);
    }

}
