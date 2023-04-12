class Produto {
    id: number
    descricao: string
    private qtde: number
    private preco: number
    constructor(id: number, descricao: string, qtde: number, preco: number) {
        this.id = id
        this.descricao = descricao
        this.setQtde(qtde)
        this.setPreco(preco)
    }
    setQtde(x: number): void{
        (x >= 0) ? this.qtde = x : console.log("Quantidade negativa não permitida")
    }
    setPreco(x: number): void{
        (x >= 0) ? this.preco = x : console.log("Preço negativa não permitida")
    }
    comprar(x: number): void {
        this.qtde += x
    }
    vender(x: number): void {
        (x > this.qtde) ? console.log(`Quantidade não disponível`) : this.qtde -= x
    }
    subir(x: number): void {
        this.preco += x
    }
    descer(x: number): void {
        (x > this.preco) ? console.log(`Preço mais baixo do que a quantidade modificada`) : this.preco -= x
    }
    mostra(): void{
        console.log(`Id: ${this.id} | Descrição: ${this.descricao} | Quantidade: ${this.qtde} | Preço: R$${this.preco.toFixed(2)}`)
    }
    getQtde(): number{
        return this.qtde
    }
    getPreco(): number{
        return this.preco
    }
}

let produto = new Produto(12345, "abajur", 18, 299.90)

produto.comprar(4)
produto.vender(2)
produto.subir(50)
produto.descer(30)
produto.mostra()

produto.setQtde(-40)
produto.setPreco(39.90)
produto.mostra()
console.log(`Qtde do produto: ${produto.getQtde()} | Preço do produto: R$${produto.getPreco()}`)