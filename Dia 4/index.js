/* const temFome = prompt('Você está com fome? (sim/não)')
   const temDinheiro = prompt('Você tem dinheiro? (sim/não)')
   const restauranteAberto = prompt('O restaurante está aberto (sim/não) ?')


// == igual  | != diferente  | < menor que e  > maior que |  <= >= maior e menor ou igual
// === é igual o valor e o tipo  | !== é diferente o valor e o tipo!


    if(temFome === "não" || temDinheiro === "não"){
        console.log("Hoje a janta será em casa");
    } else if (temFome === "sim" && temDinheiro === "sim" && restauranteAberto === "não") {
        console.log("Peça um delivery!");
    } else  (temFome === "sim" && temDinheiro === "sim" && restauranteAberto === "sim") {
        console.log("Hoje o jantar será no seu restaurante preferido!");
    } */    

let nome = prompt('Digite seu nome')
let idade = parseInt(prompt('Insira sua idade'))
let temCarta = prompt('Voce possui carta de motorista? (sim/não)')
let temCarro = prompt('Voce possui algum carro? (sim/não)')

if(idade < 18 || temCarta === "não") {
    console.log(nome + ", você não pode dirigir")
} else if (idade >= 18 && temCarta === "sim" && temCarro === "não"){
    console.log(nome + ", você pode dirigir mas não tem um carro")
} else {
    console.log(nome + ", você será o motorista");
}