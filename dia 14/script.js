//// PEGANDO DADOS DO COLABORADOR
var nome
var salario
dadosColaborador();

function dadosColaborador() {
    nome = prompt("Digite o nome do colaborador: ");
    salario = parseFloat(prompt("Agora insira o salario deste colaborador: "));
    calcularAumentoSalario(nome, salario);
}

//// CALCULANDO AUMENTO DE SALARIO DO COLABORADOR
function calcularAumentoSalario(nome, salario){
    var aumento = 0;

    if (salario <= 1500) {
       aumento = 0.2;  // AUMENTO DE 20%
    } else if (salario <= 2000){
        aumento = 0.15 // AUMENTO DE 15%
    } else if (salario <= 3000){
        aumento = 0.1; // AUMENTO DE 10%
    } else{
        aumento = 0.05; // AUMENTO DE 5%
    }

    var novoSalario = salario + (salario * aumento);

    //// EXIBINDO OS RESULTADOS
    console.log("O nome do colaborador é: " + nome);
    console.log("O salario do colaborador é de: R$" + salario);
    console.log("A porcentagem de aumento foi de: " + (aumento * 100) + "%");
    console.log("O salario reajustado do colaborador é de: R$" + novoSalario);

    calcularNovamente();
}

//// PERGUNTANDO SE USUARIO DESEJAR CALCULAR NOVAMENTE
function calcularNovamente() {
    var resposta = prompt("Você deseja calcular novamente? (Sim/Não)");

    if(resposta == "Sim"){
        dadosColaborador();
    } else {
        console.log("Execução encerrada.");
    }
}
