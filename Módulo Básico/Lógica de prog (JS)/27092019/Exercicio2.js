const MEDIA = 5;

//Objetos alunos
var aluno1 = {
    nome: "alan",
    nota: 3
};
var aluno2 = {
    nome: "pedro",
    nota: 5
};

var aluno3 = {
    nome:"joão",
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

console.log("Nota dos alunos" + JSON.stringify(alunos));
console.log ("alunos com nota acima da média: " + JSON.stringify(maiorQueCinco));
console.log("aluno menor nota: " + JSON.stringify(alunoMenorNota));
console.log("aluno maior nota: " + JSON.stringify(alunoMaiorNota));
console.log("A media da turma é: " + JSON.stringify(total/alunos.length));


//funcção para cacular a media
/*
function calcNotas(){
    var media = 5;
    if(nota<5){
        console.log("O"+ aluno.nome +"está abaixo da média");
    }else if(media == 5){
        console.log("O" + aluno.nome +"aluno está na média");
    }else if (nota > 5){
        console.log("O"+ aluno.nome + "aluno está acima da média");
    }
    
    }
    */