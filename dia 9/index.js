let nome = prompt('Insira o seu nome')
let idade = parseInt(prompt('Insira a sua Idade'))
let peso = (prompt('Insira seu peso atual'))
let altura = prompt('Digite a sua altura em metros')
let profissao = prompt('E por fim, insira a sua profissão')

console.log(" Salve, " + nome + " você tem: " + idade + " anos, " + "atualmente pesa: " + peso + "KG"+ " e a sua profissão é: " + profissao)

if(idade >= 18) {
  console.log('Está liberado para tomar umas geladas')
} else{
  console.log('Sem Gelada para você')
}

// DESCOBRINDO A IDADE DO USUARIO EM MESES / SEMANAS E DIAS

let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365

console.log("Você tem: " + idade + " Anos " + meses + " meses " + semanas + " semanas " + dias + " dias")

// CALCULANDO O IMC DO USUARIO E SUA RESPECTIVA FAIXA

let imc = peso / (altura * altura)

if (imc < 18.5) {
  console.log('Você está no estado de: Magreza')
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log('Você está no estado de: Normalidade')
} else if (imc >= 25 && imc <= 30){
  console.log('Você está no estado de: Sobrepeso')
} else{
  console.log('Voce está no estado de: Obesidade')
}


// DESCOBRINDO ANO DE NASCIMENTO DO USUÁRIO
let atual = 2023;
let anoNasc = atual - idade;
console.log('Seu ano de nascimento é: ' + anoNasc)

// DESCOBRINDO TODOS OS ANOS QUE O USUARIO VIVEU
let anosVividos = anoNasc
let atualIdade = 0

for(let anosVividos = anoNasc; anosVividos <= atual; anosVividos++){
  console.log(anosVividos + " - " + atualIdade + " anos de idade ")
  atualIdade++
}

