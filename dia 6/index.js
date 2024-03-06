/* CRIANDO ALGORITMO PARA VALOR INTEIRO E POSITIVO*/

/*let valor = Number(prompt('Digite um número inteiro e positivo!'))

for(let contador = 0; contador <= valor; contador++){
    console.log("O contador é: " + contador)
} */

 /*CRIANDO ALGORITMO PARA CONTAGEM DE 0 A 5 FEITA DE 5 EM 5
for(let contagem = 0; contagem <= 50; contagem+= 5){
    console.log("A contagem é:" + contagem)
} */


/* CRIANDO ALGORITMO PARA CONTAGEM INVERSA DE 5 EM 5
for(let inversa = 50; inversa >= 0; inversa-= 5){
    console.log("A Contagem inversa é:" + inversa)
} */

/* CRIANDO ALGORITMO PARA TABUADA! */

let numero = parseInt(prompt('Digite um numero inteiro '))
    for(let i = numero; i <= numero + 2; i++ ) {
        console.log('Tabuada do numero:' + i)
        for(let f = 0; f <= 10; f++){
            console.log(i + " x " + f + " = " + (i * f)) 
        }        
    }