///// CLASSE DO HOTEL
class Hotel {
    Id
    Nome
    Categoria
    Endereco
    Telefone
    constructor(id, nome, categoria, endereco, telefone){
        this.Id = id
        this.Nome = nome
        this.Categoria= categoria
        this.Endereco = endereco
        this.Telefone = telefone
    }
}


//// CLASSE DAS RESERVAS
class Reservas {
    Id
    IdHotel
    Responsavel
    DiaEntrada
    DiaSaida
        constructor(id, idhotel, responsavel, diaentrada, diasaida){
            this.Id = id
            this.IdHotel = idhotel
            this.Responsavel = responsavel
            this.DiaEntrada = diaentrada
            this.DiaSaida = diasaida
        }
}

///// ARRAYS
let hoteis = []
let reservas = []
let idHotel = 1
let idReservas = 1


//// CADASTRO HOTEL
function CadastrarHotel(){
    let nome = prompt("Digite o nome do hotel desejado")
    let categoria = prompt("Digite a categoria do Hotel")
    let endereco = prompt("Digite o endereço do hotel")
    let telefone = prompt("Digite o telefone do hotel")
    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone)
    idHotel++
    hoteis.push(hotel)
}

///// CADASTRO RESERVAS
function CadastrarReserva(){
    let idHotel
    let existe = false

    do {
        idHotel = parseInt(prompt("Insira o id do hotel"))
        for(let i = 0; i < hoteis.length; i++){
            if(idHotel == hoteis[i].Id){
                i = hoteis.length
                existe = true
            } else if ( i == hoteis.length - 1){
                console.log("Id de hotel não cadastrado")
            }
        }
    } while (!existe)

    let nome = prompt("INsira o nome do responsavel")
    let diaEntrada = prompt("INsira o dia da sua entrada")
    let diaSaida
    do{
        diaSaida = parseInt(prompt("Insira o dia de saida"))
        if(diaSaida < diaEntrada){
            console.log("O dia de saida deve ser maior que o de entrada")
        }
    } while (diaSaida < diaEntrada)

    let reserva = new Reservas(idReservas, idHotel, nome, diaEntrada, diaSaida)
    idReservas++
    reservas.push(reserva)
}

//// PROCURAR AS RESERVAS PELO HOTEL
function ProcurarReservasPeloHotel(idHotel) {
    reservas.forEach(reserva => {
        if(idHotel == reserva.idHotel){
            let i = idHotel -1 
            console.log("Hotel:", hoteis[i].Nome)
            console.log("Responsavel:", reserva.Responsavel)
            console.log("Dia De Entrada no Hotel:", reserva.diaEntrada)
            console.log("Dia de Saida do Hotel:", reserva.DiaSaida)
        }
    })
}

//// PROCURAR OS HOTEIS PELAS RESERVAS
function ProcurarHoteisPelasReservas(idReservas){
    let idHotel = reservas[idReservas - 1].idHotel
    console.log("Hotel:", hoteis[idHotel - 1].Nome)
    console.log("Endereço do hotel:", hoteis[idHotel - 1].Endereco)
    console.log("Dia da entrada no hotel:", hoteis[idHotel - 1].diaEntrada)
    console.log("Dia da saida do hotel:", hoteis[idHotel - 1].DiaSaida)
}


//// PROCURAR AS RESERVAS PELOS RESPONSAVEIS
function ProcurarReservaPeloResponsavel(nome){
    for(let i = 0; i < reservas.length; i++){
        if(nome == reservas[i].Responsavel){
            console.log("Id da reserva: " + reservas[i].Id)
            console.log("hotel" + hoteis[(reservas[i].idHotel) - 1].Nome)
        }
    }
}

//// PROCURAR HOTEIS PELAS CATEGORIAS
function ProcurarHotelPelaCategoria(categoria) {
    let hoteisProcurados = []
    for(let i = 0; i < hoteis.length; i++){
        if(categoria == hoteis[i].Categoria){
            hoteisProcurados.push(hoteis[i].Nome)
        }
    }
    return hoteisProcurados
}

//// ATUALIZAR O TELEFONE  DO HOTEL
function AtualizarTelefone(idHotel, telefone){
    hoteis[idHotel - 1].Telefone = telefone
    console.log("Número de telefone foi atualizado com sucesso")
}

//// FLUXO
let continuar = true;
do {
    let opcoes = prompt ("Escolha a opção desejada: \n1 - Cadastrar hotel \n2 - Cadastrar reserva \n3 - Procurar a reserva pelo nome do hotel" + "\n4 - Procurar o hotel pelo numero de reserva \n5 - Procurar reserva pelo nome do responsavel \n6 - Procurar os hoteis pelas categorias" + "\n7 -Atualizar o telefone do hotel \n8 - Finalizar")

    switch(opcoes){
        case "1":
            CadastrarHotel()
            break;
        case "2":
            CadastrarReserva()
            break;
        case "3":
            ProcurarReservasPeloHotel(prompt("Digite o id do hotel desejado"))
            break;
        case "4":
            ProcurarHoteisPelasReservas(prompt("Digite o id da sua reserva"))
        case "5":
            ProcurarReservaPeloResponsavel(prompt("Digite o nome do responsavel pela reserva"))
            break;
        case "6":
            let hoteisProcurados = ProcurarHotelPelaCategoria(parseInt(prompt("Digite a categoria desejada:")))
            console.log(hoteisProcurados)
            break;
        case "7":
            let idHotel = parseInt(prompt("Insira o id do hotel para atualizar"))
            let telefone = prompt("Insira o novo numero de telefone")
            AtualizarTelefone(idHotel, telefone)
            break;
        case "8":
            console.log("Programa finalizado")
            continuar = false;
            break;
        default:
            console.log("Opção escolhida é invalida!")
            break;   
    }            
} while(continuar)