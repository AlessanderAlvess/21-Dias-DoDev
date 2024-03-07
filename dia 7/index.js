// let condicao = true;

// while(condicao) {
//     let idade = Number(prompt('Insira a sua idade'))
//     if(idade < 18){
//         console.log('Você é menor de idade')
//         condicao = false;
//     }
// }
// console.log('Acabou o while')


// EXERCICIO 1

let mediaGeral = 0
let qtdHomens = 0 
let qtdMulheresAcimaDe7 = 0
let maiorNotaHomens = 0
let contador = 1



while(contador <= 10){
    let nota = parseInt(prompt('Digite a nota do ' + contador + "º aluno"))
    let sexo = prompt('Digite o sexo do aluno (Masculino/Feminino)')

    if(sexo == "masculino") {
        if(nota > maiorNotaHomens) {
            maiorNotaHomens = nota
        }
        qtdHomens++
    }

    if(sexo == "feminino" && nota > 7) {
        qtdMulheresAcimaDe7++
    }

    mediaGeral += nota
    contador++
}

mediaGeral = mediaGeral / 10
console.log("A Media geral dos alunos foi de:" + mediaGeral)
console.log("A quantidade de homens que enviaram notas:" + qtdHomens)
console.log("A quantidade de mulheres com nota acima de 7 foi de:" + qtdMulheresAcimaDe7)
console.log("A maior nota entre os homens foi de:" + maiorNotaHomens)