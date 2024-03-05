/*let primeiroNumero = Number(prompt('Digite o primeiro número'))
let segundoNumero =  Number(prompt('Digite o segundo número'))
let operacao = parseInt(prompt('escolha a operação que deseja realizar:' + "\n1 = +; \n2 = -; \n3 = *; \n4 = /"))

switch (operacao) {
    case 1:
        console.log(primeiroNumero + " + " + segundoNumero + " = " + (primeiroNumero + segundoNumero))
        break;
    case 2:
        console.log(primeiroNumero + " - " + segundoNumero + " = " + (primeiroNumero - segundoNumero))
        break;
    case 3:
        console.log(primeiroNumero + " * " + segundoNumero + " = " + (primeiroNumero * segundoNumero))
        break;
    default:
        console.log(primeiroNumero + " / " + segundoNumero + " = " + (primeiroNumero / segundoNumero))
        break;
}*/

let valor
let quantidade
let opcao = prompt('Escolha quais opcoes você deseja realizar:' + "\n1 = Abastecer com gasolina \n2 = Abastecer com Alcool \n3 = Calibrar os pneus")

switch(opcao){
    case "1":
        quantidade = prompt("Digite a quantidade desejada:")
        valor = quantidade / 5
        console.log("Foram abastecidos " + quantidade + "L de Gasolina")
        break;
    case "2":
        quantidade = prompt("Digite a quantidade desejada")
        valor = quantidade / 3
        console.log("Foram abastecidos  "  +  quantidade + "L de Alcool")
        break;
    default:
        console.log("Seus pneus foram calibrados com sucesso")
        break;
}