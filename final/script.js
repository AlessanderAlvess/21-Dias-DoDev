class Livro {
    Titulo
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade = true;
        constructor(titulo, autor, editora, anodepublicacao){
            this.Titulo = titulo
            this.Autor = autor
            this.Editora = editora
            this.AnoDePublicacao = anodepublicacao
        }
}


//// OBJETOS DA CLASSE LIVRO
let livros = []

livros.push(new Livro("PrimeiroLivro", "Alex", "Editora FC", 2024))
livros.push(new Livro("SegundoLivro", "Lucas", "Editora KC", 2002))
livros.push(new Livro("TeceiroLivro", "Cleber", "Editora SC", 2018))
livros.push(new Livro("QuartoLivro", "Roger", "Editora EC", 2008))
livros.push(new Livro("QuintoLivro", "Rubens", "Editora CC", 2012))


//// CLASSE PRA BIBLIOTECA

class Biblioteca {
    Nome
    Endereco
    Telefone
    AcervoDeLivros
        constructor(nome, telefone, endereco, acervo){
            this.Nome = nome
            this.Telefone = telefone
            this.Endereco = endereco
            this.AcervoDeLivros = acervo
        }


BuscarLivroPeloTitulo(titulo) {
    this.AcervoDeLivros.forEach (livro => {
        if (livro.Titulo == titulo){
            console.log(livro)
        }
    })
}

EmprestarLivro(titulo) {
    let emprestado = false
    this.AcervoDeLivros.forEach(livro => {
        if (livro.Titulo == titulo){
            if(livro.Disponibilidade == true){
                livro.Disponibilidade == false
                emprestado = true;
            }
        }
    })
    if (emprestado) {
        return true;
    } else {
        return false;
    }
}

DevolverLivro(titulo) {
    livros.forEach(livro => {
        if(livro.Titulo == titulo){
            livro.Disponibilidade = true
            console.log("O Livro foi devolvido!")
        }
    })
}


}

