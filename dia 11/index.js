//// DECLARANDO AS VARIAVEIS /////


// let alunos = [];
// let notas = [];
// let continuar = true;
// let contador = 0;

//// INSERINDO AS INFORMAÇOES////

// while(continuar){
//     let nomeAluno = prompt('Digite o nome do ' + (contador + 1) + " º aluno")
//     let notaAluno = parseInt(prompt('Agora digite a nota do aluno:'))
//     let parar = prompt('Você deseja inserir mais informaçoes? (sim/nao)')
//     alunos[contador] = nomeAluno
//     notas[contador] = notaAluno
//     if(parar == "nao"){
//         continuar = false;
//     }
//     contador++
// }

// console.log('A nota dos alunos é: ')
// for (let i = 0; i < alunos.length; i++){
//     console.log(alunos[i] + " -- " + notas[i])
// }

//// EXIBINDO A SOMA DAS NOTAS/////

// let somaNotas = 0;
// for(let i = 0; i < notas.length; i++){
//     somaNotas += notas[i]
// }
// console.log('A soma das notas é: ' + somaNotas )

//// EXIBINDO A MEDIA DAS NOTAS////

// let mediaGeral = somaNotas / ( contador + 1 )
// console.log('A media geral das notas foi:' + mediaGeral)


//// EXERCICIO 2 ////

//// DECLARANDO VARIAVEIS ////
let modelos = [];
let anos = [];
let valores = [];
let continuar = true;
let contador = 0;

while(continuar){
    let modeloCarro = prompt('Digite o modelo do seu carro:')
    let anoCarro = prompt('Agora digite o ano do seu carro:')
    let valorCarro = parseFloat(prompt('E para finalizar, digite o valor do seu carro:'))
    modelos[contador] = modeloCarro
    anos[contador] = anoCarro
    valores[contador] = valorCarro

    let finalizar = prompt('Você deseja cadastrar mais informaçoes? (sim/nao)')
    if (finalizar == "nao" ) {
        continuar = false;
    }
    contador++
}

//// EXIBINDO INFORMAÇOES SOBRE OS CARROS ////
console.log("Carros cadastrados:")
for(let i = 0; i < modelos.length; i++){
    console.log('O modelo do carro é:' + modelos + ' o ano do carro é: ' + anos + ' e o valor é: ' + valores)
}

