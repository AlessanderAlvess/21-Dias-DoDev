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
        this.VelocidadeMaxima = velocidadeMaxima;
        this.Aceleracao = aceleracao;
    }
 
    exibirInformacoesCarro(){
        console.log("Informaçoes do carro")
        console.log("Equipe do carro: " + this.Nome)
        console.log("Potência do carro em cavalos: " + this.Potencia)
        console.log("Velocidade maxima do carro: " + this.VelocidadeMaxima)
        console.log("Aceleração do carro: " + this.Aceleracao)
    }

    tempoMedio(distancia){
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao)
        return resultado
    }
}

const meuCarro = new Carro("Ferrari", 1000, 240, 2.6)
meuCarro.exibirInformacoesCarro();

let distanciaPercorrida = Number(prompt("Insira uma distância em metros"))
let tempoPercorrido = meuCarro.tempoMedio(distanciaPercorrida)
console.log('O tempo medio percorrido é:' + tempoPercorrido)


///////////////////////////////////////////////////////////////////////////////////////////////

class Corrida {
    Nome
    Tipo
    Distancia
    Vencedor
    Participantes

    constructor(nome, tipo, distancia){
        this.Nome = nome;
        this.Tipo = tipo;
        this.Distancia = distancia;
        this.Vencedor = ""
        this.Participantes = []
    }

    DefinirVencedor(){
        let menorTempo = this.Participantes[0].tempoMedio(this.Distancia)
        let vencedor = this.Participantes[0]

        for(let index = 1; index < this.Participantes.length; index++) {
            let tempo = this.Participantes[index].tempoMedio(this.Distancia)
            if (tempo < menorTempo){
                menorTempo = tempo
                vencedor = this.Participantes[index]
            }
        }

        return this.Vencedor = vencedor

    }

    ExibirVencedor(){
        alert("O vendedor é o: " + this.Vencedor.Nome)
    }
}

let corrida = new Corrida('Chevette', "Stockcar", 50000)

corrida.Participantes[0] = new Carro("Gol", 140, 180, 10) 
corrida.Participantes[1] = new Carro("Polo", 420, 240, 5)
corrida.Participantes[2] = new Carro("Ds3", 600, 280, 2)


corrida.DefinirVencedor()
corrida.ExibirVencedor()

