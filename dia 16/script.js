//// ARRAY DOS NOMES E SENHAS
let nomes = []
let senhas = []

//// SOLICITANTO AO USUARIO AS OPÇOES
function solicitarUsuario(){
    let opcao = prompt('Escolha uma opção: \n1. Cadastrar\n2. Fazer loguin' + '\n3. Excluir o cadastro\n4. Encerrar o programa');
    return opcao;
}

//// SOLICITANTO AO USUARIO O NOME E SENHA
function cadastroUsuario(){
    nomes.push(prompt('Digite o seu nome:'))
    senhas.push(prompt('Digite a sua senha:'))
}

//// FUNÇÃO DE LOGUIN
function fazerLogin(nome, senha){
    let indice = nomes.indexOf(nome);
    if(indice !== -1 && senhas[indice] == senha){
        return true;
    } else {
        return false;
    }
}

//// FUNÇÃO EXCLUIR CADASTRO
function excluirCadastro(nome){
    let indice = nomes.indexOf(nome);
    if(indice !== -1){
        nomes.splice(indice, 1)
        senhas.splice(indice, 1)
        console.log("Cadastro excluido!")
    } else {
        console.log("Usuario não foi encontrado!")
    }
}

///// CRIANDO O FLUXO DE FUNCIONAMENTO DO CODIGO
let continuar = true;
while(continuar){
    let opcao = solicitarUsuario();

    switch(opcao){
        case "1":
            cadastroUsuario();
            break;
        case "2":
            let nome = prompt("Digite o seu nome")
            let senha = prompt("Digite a sua senha")
            let login = fazerLogin(nome, senha);
        if(login) {
            console.log("Login realizado!")
        } else {
            console.log("Nome ou senha incorretos!")
        }
        break;
        case "3":
            excluirCadastro(nome);
            break;
        case "4":
            continuar = false;
            break;
        default:
            console.log("Opçao invalida. Tente novamente");
            break;
    }
}