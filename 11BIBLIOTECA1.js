class Livro{
    constructor(titulo, autor, isbn){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
    }

    toString(){
        return(` Titulo: ${this.titulo}, Autor: ${this.autor}, ISBN: ${this.isbn}`);
    }
}

class Biblioteca{
    constructor(){
        this.livros = [];
    }

    adicionar_livro(livro){
        this.livros.push(livro);
    }

    exibir_livros(){
        return this.livros.slice();
    }

    remover_livro(isbn){
        this.livros = this.livros.filter(livro => livro.isbn != isbn);
    }
}

const biblioteca = new Biblioteca();

biblioteca.adicionar_livro(new Livro("Java1", "Marshall Matters", 456789));
biblioteca.adicionar_livro(new Livro("Java2", "MMs", 123789));
biblioteca.exibir_livros().forEach(livro => {console.log(livro.toString());
    
});
