let nomes = [];
let senhas = [];
let contador = 0;
let continuar = true;

while(continuar){
    let opcao = prompt('O que deseja realizar? 1 - Cadastrar / 2 - Login / 3 - Excluir / 4 - Encerrar operação')
    
    switch(opcao){
        case "1":
            nomes[contador] = prompt('Digite seu nome:')
            senhas[contador] = prompt('Digite a sua senha:')
            contador++
            break;
        
        case "2":
            let nome = prompt('Digite seu nome')
            let senha = prompt('Digite a sua senha:')
            let invalido = false;

            for(let i = 0; i < nomes.length; i++){
                if(nome == nomes[i] && senha == senhas[i] ){
                    invalido = true;
                }
            }
            
            if(invalido){
                alert("loguin Realizado com sucesso")
            } else{
                alert("Loguin ou senha incorretos")
            }
            break;
        case "3":
            let nomeExcluir = prompt('Qual nome você deseja excluir?')
            let nomesSec = []
            let senhasSec = []
            let contadorSec = []

            for(let i = 0; i < contador; i++){
                if(nomeExcluir == nomes[i]){
                    alert("Cadastro excluído com sucesso")
                } else {
                    nomesSec[contadorSec] = nomes[i]
                    senhasSec[contadorSec] = senhas[i]
                    contadorSec++
                }
            }

            nomes = nomesSec
            senhas = senhasSec
            contador--
            break;
        
        case "4":
            continuar = false
            break;
        default:
            console.log("Opção invalida, tente outra")   
            break;
    }
}