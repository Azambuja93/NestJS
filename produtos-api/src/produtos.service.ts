import { Produto } from "./produtos.model";
import { Get, Injectable } from "@nestjs/common";

@Injectable()
export class ProdutosService {

    produtos: Produto[] = [
        new Produto("LIV01", "Livro TDD e BDD na prática", 29.90),
        new Produto("LIV02", "Livro iniciando com Flurter", 39.90),
        new Produto("LIV03", "Inteligência artificial como serviço", 29.90),
    ]

    obterTodos(): Produto[] {
        return this.produtos
    }

    obterUm(id: number): Produto {
        return this.produtos[0]
    }

    criar(produto: Produto) {
        this.produtos.push(produto)
    }

    alterar(produto: Produto): Produto {
        return produto
    }

    apagar(id: number) {
        return this.produtos.pop()
    }   

}