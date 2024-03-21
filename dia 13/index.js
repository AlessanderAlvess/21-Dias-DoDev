// class Aluno {
//     nome
//     idade
//     areaAtuacao
//     constructor(nome, idade){
//         this.nome = nome
//         this.idade = idade
//     }

//     apresentar(){
//         console.log("Olá, meu nome é:" + this.nome + "minha idade:" + this.idade + " e minha area de atuação é: " + this.areaAtuacao)
//     }
// }


// console.log("========== CADASTRO DE ALUNOS==========")
// let alunos = []
// let idades = []
// let indexAlunos = 0;

// while(continuar){
//     let nome = prompt("Insira o nome do aluno")
//     let idade = prompt("Insira a idade  do aluno")
//     let aluno = new Aluno(nome, idade)

//     let areaAtuacao = prompt("Insira a área de atuação do aluno");
//     aluno.areaAtuacao = areaAtuacao;

//     alunos[indexAlunos] = aluno;
//     let desejaContinuar = prompt("Digite 1 caso deseje cadastrar um novo aluno");
//     if(desejaContinuar =! "1"){
//         continuar = false;
//     } else {
//         indexAlunos++
//     }
// }
/////////////////////////////////////  DESAFIO 1 /////////////////////////////////////

// class Computador{
//     Tipo
//     Processador
//     Video
//     Armazenamento
//     MemoriaRam
//     Ssd
//     constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
//         this.Tipo = tipo;
//         this.Processador = processador;
//         this.Video = video;
//         this.Armazenamento = armazenamento;
//         this.MemoriaRam = memoriaRam;
//         this.Ssd = ssd;
//     }

//     exibirInformacoes(){
//         console.log("Informaçoes do computador")
//         console.log("Tipo do computador: " + this.Tipo)
//         console.log("Tipo do processador: " + this.Processador)
//         console.log("Tipo de video: " + this.Video)
//         console.log("Tamanho de armazenamento: " + this.Armazenamento)
//         console.log("Quantidade de memoria Ram: " + this.MemoriaRam)
//         console.log("Possui ssd?: " + this.Ssd)
//     }
// }

// const minhaConfiguracao = new Computador("Desktop", "Ryzen 3600x", "Dedicado", 1000, 16, true);
// minhaConfiguracao.exibirInformacoes();

/////////////////////////////////////  DESAFIO 2 /////////////////////////////////////
class Carro{
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao

    constructor(nome, potencia, velocidadeMaxima, aceleracao){
        this.Nome = nome;
        this.Potencia = potencia;
        this.VelocidadeMaxima = velocidade;
        this.Aceleracao = aceleracao;
    }
 

    tempoMedio(distancia){
        console.log = Number(prompt("Insira uma distância em metros"))
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao)
        return resultado
    }
}

