// Livros 1.1

class Livro {
    constructor(titulo, autor, isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
    }

    toString() {
        return `Título: ${this.titulo}, Autor: ${this.autor}, ISBN: ${this.isbn}`;
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    removerLivro(isbn) {
        this.livros = this.livros.filter(livro => livro.isbn !== isbn);
    }

    listarLivros() {
        return this.livros.slice();
    }
}

const biblioteca = new Biblioteca();

// Adicionar livros
biblioteca.adicionarLivro(new Livro("Java Programming", "James Gosling", "123456789"));
biblioteca.adicionarLivro(new Livro("Effective Java", "Joshua Bloch", "987654321"));

// Listar livros
console.log("Livros na Biblioteca:");
biblioteca.listarLivros().forEach(livro => console.log(livro.toString()));

// Remover um livro pelo ISBN
biblioteca.removerLivro("123456789");

// Listar livros novamente
console.log("\nLivros na Biblioteca após remoção:");
biblioteca.listarLivros().forEach(livro => console.log(livro.toString()));
