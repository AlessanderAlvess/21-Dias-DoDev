// let nomes = [];
// let continuar = true;
// let posicaoDoArray = 0;
// while(continuar){
//     let nomeInserido = prompt('Insira um nome:');
//     nomes[posicaoDoArray] = nomeInserido;

//     let desejaContinuar = prompt('Insira 1 caso deseje adicionar um novo nome')   
//     if(desejaContinuar != "1"){
//         continuar = false;
//     }     
//     posicaoDoArray ++;
// }

///////////////////////////////////// EXERCICIO 1.1 /////////////////////////////////////

// let array = [0, 2, 3, 5, 9, 7, 1, 6, 8, 4];

// for(let i = 0; i < array.length; i++){
//         const index = i;
//         console.log(`O índice do elemento ${array[i]} é: ${index}`);
// }

///////////////////////////////////// EXERCICIO 1.2 /////////////////////////////////////

//  let array = [];
//  let arrayInvertido = [];

// for(let i = 0; i < 5; i++){
//         let numeroInserido = parseInt(prompt("Digite o " + (i + 1) + "º número"))
//         array[i] = numeroInserido;
// }

// console.log('Este é o array original ' + array)


///////// ARRAY INVERTIDO ////////

// let j = 4;
// for(let i = 0; i < 5; i++){
//         arrayInvertido[i] = array[j]
//         j--
// }

// console.log('Este é o array invertido ' + arrayInvertido)


///////////////////////////////////// EXERCICIO 1.3 /////////////////////////////////////
// DECLARANDO AS VARIAVEIS

let array = [];
let arrayInvertido = [];
let quantidade = parseInt(prompt('Digite a quantidade de números que queira inserir no array'))

// PREENCHENDO OS ARRAYS

for(let i = 0; i < quantidade; i++){
        let numero = parseInt(prompt('Digite o' + (i + 1) + "º número"))
        array[i] = numero;
}
        console.log('Este é o array original:' + array)

// INVERTENDO O ARRAY
let invertido = quantidade - 1;
for(let i = 0; i < quantidade; i++){
        arrayInvertido[i] = array[invertido]
        invertido--
}
        console.log('Este é o array invertido:' + arrayInvertido)
        
