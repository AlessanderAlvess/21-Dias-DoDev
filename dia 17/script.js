class Aluno {
    Nome
    Idade
    Nota
    constructor(nome, idade, nota){
        this.Nome = nome
        this.Idade = idade
        this.Nota = nota
    }
}


//ARRAYS
let arrayDeAlunos = [];

function CadastrarAlunos(nome, idade, nota){
    let objetoAluno = new Aluno(nome,idade,nota)
    if(!array.some(x => x.Nome == nome)){
        array.push(objetoAluno)
    return objetoAluno
    }
}

function OrdernarPorNotas (array){
    array.sort((a, b) => a.Nota - b.Nota)
    return array
}

function OrdernarPorIdade (array){
    array.sort((a, b) => a.Idade - b.Idade)
    return array
}

function OrdernarPorNome(array){
    array.sort((a,b) => {
        const nomeA = a.Nome.toUpperCase();
        const nomeB = b.Nome.toUpperCase();

        if(nomeA < nomeB){
            return -1;
        }
        if(nomeA > nomeB){
            return 1;
        }
    });
    return array
}

function CalcularMedia(array){
    if(array.length === 0 ){
        return 0;
    }
    let somaNotas = 0;

    array.forEach((aluno) => {
        somaNotas += Number(aluno.nota)
    })

    const media = somaNotas / array.length;
    return media;
}