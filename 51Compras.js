class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    getPreco() {
        return this.preco;
    }

    getQuantidade() {
        return this.quantidade;
    }
}


class CarrinhoDeCompras {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto, quantidade) {
        for (let i = 0; i < quantidade; i++) {
            this.produtos.push(produto);
        }
    }

    calcularTotal() {
        return this.produtos.reduce((total, produto) => total + produto.getPreco(), 0);
    }

    calcularDesconto() {
        return this.calcularTotal() > 100 ? this.calcularTotal() * 0.1 : 0;
    }

    calcularTotalComDesconto() {
        return this.calcularTotal() - this.calcularDesconto();
    }
}


const produto1 = new Produto('Camiseta', 25.99, 10);
const produto2 = new Produto('Calça', 50.99, 5);

const carrinho = new CarrinhoDeCompras();
carrinho.adicionarProduto(produto1, 3);
carrinho.adicionarProduto(produto2, 2);

console.log("Total: " + carrinho.calcularTotal().toFixed(2));
console.log('Desconto: ' + carrinho.calcularDesconto());
console.log('Total com desconto: ' + carrinho.calcularTotalComDesconto());
