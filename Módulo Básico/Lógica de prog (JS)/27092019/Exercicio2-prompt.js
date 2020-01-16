
//array de alunos
var alunos = [];
var opcao = 's';
var alunoMaiorNota;
var alunoMenorNota;
var alunoNotaAcimaCinco;
var total = 0;
total = Number(total);
var maiorQueCinco = [];
var MEDIA = 5;

//Objetos alunos
while (opcao != 'n') {
    switch (opcao) {
        case 's':
            var aluno = {
                nome: prompt("Nome do aluno: "),
                nota: prompt("Nota do aluno: ")
            }
            alunos.push(aluno);
            total += Number(aluno.nota);

            alert("total de notas acumulado " + Number(total));

            if (aluno.nota > MEDIA) {
                maiorQueCinco.push(aluno.nome);
            }

            if (alunoMaiorNota == undefined) {
                alunoMaiorNota = aluno;
            } else if (aluno.nota > alunoMaiorNota) {

                alunoMaiorNota = aluno;
            }

            if (alunoMenorNota == undefined) {
                alunoMenorNota = aluno;
            } else if (aluno.nota < alunoMenorNota) {

                alunoMenorNota = aluno;
            }

            opcao = prompt("Deseja acrescentar um novo aluno (s/n)? ");
            break;


        default:
            alert("Comando inválido, tente novamente");
            opcao = prompt("Deseja acrescentar um novo aluno (s/n)? ");
            break;
            
    }
}


//ordenando o array alunos por nota
var alunosDecrescente = alunos.sort(compare);

//outputs
console.log("\nLISTAGEM DE ALUNOS POR NOTA DECRESCENTE: ");
listaAlunos(alunosDecrescente);
alert(JSON.stringify(alunosDecrescente));


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
