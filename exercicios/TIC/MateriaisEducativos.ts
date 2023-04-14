// importando as classes "Patrimonio" e "Manutencoes"
import { Patrimonio } from "./Patrimonio";
import { Manutencoes } from "./Manutencoes";

// criando a classe filho "MateriaisEducativos" e definindo "Patrimonio" como sua classe pai
export class MateriaisEducativos extends Patrimonio {
    // criando as variáveis
    private faixaEtaria: number
    private titulo: string
    private qtde: number
    private tipoMaterial: string

    // criando o construtor e pegando as variáveis da classe pai
    constructor(nomePatri: string, codigoPatri: number, dataAquisicao: Date, localPatri: string, faixaEtaria: number, titulo: string, qtde: number, tipo: string) {
        super(nomePatri, codigoPatri, dataAquisicao, localPatri)
        this.setFaixaEtaria(faixaEtaria)
        this.setTitulo(titulo)
        this.setQtde(qtde)
        this.setTipoMaterial(tipo)
    }

    // criando os setters
    setFaixaEtaria(faixaEtaria: number) {
        (faixaEtaria >= 0) ? (this.faixaEtaria = faixaEtaria) : (this.faixaEtaria = 1)
    }

    setTitulo(titulo: string) {
        this.titulo = titulo
    }

    setQtde(qtde: number) {
        (qtde > 0) ? (this.qtde = qtde) : (this.qtde = 0)
    }

    setTipoMaterial(tipo: string) {
        this.tipoMaterial = tipo
    }

    // criando "addManutencoes" como anulação de método 
    addManutencoes(manutencao: Manutencoes){
        this.manutencoes.push(manutencao)
    }

    // criando os getters
    getFaixaEtaria(): number {
        return this.faixaEtaria
    }

    getTitulo(): string {
        return this.titulo
    }

    getQtde(): number {
        return this.qtde
    }

    getTipoMaterial(): string {
        return this.tipoMaterial
    }

    // criando o método "localizarPatrimonio" com anulação de método 
    localizarPatrimonio(): string {
        return this.localPatrimonio
    }
    
    // criando "toString"
    toString(): string {
        return `\n${super.toString()}\nFaixa Etária: ${this.faixaEtaria}\nTitulo: ${this.titulo}\nQuantidade: ${this.qtde}\nTipo do Material: ${this.tipoMaterial}`
    }
}