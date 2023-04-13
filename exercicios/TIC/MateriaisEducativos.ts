import { Patrimonio } from "./Patrimonio";
import { Manutencoes } from "./Manutencoes";

export class MateriaisEducativos extends Patrimonio {
    private faixaEtaria: number
    private titulo: string
    private qtde: number
    private tipoMaterial: string

    constructor(nomePatri: string, codigoPatri: number, dataAquisicao: Date, localPatri: string, faixaEtaria: number, titulo: string, qtde: number, tipo: string) {
        super(nomePatri, codigoPatri, dataAquisicao, localPatri)
        this.setFaixaEtaria(faixaEtaria)
        this.setTitulo(titulo)
        this.setQtde(qtde)
        this.setTipoMaterial(tipo)
    }

    setFaixaEtaria(faixaEtaria: number) {
        (typeof faixaEtaria === "number") ? (this.faixaEtaria = faixaEtaria) : (this.faixaEtaria = -1)
    }

    setTitulo(titulo: string) {
        (typeof titulo === "string") ? (this.titulo = titulo) : (this.titulo = "")
    }

    setQtde(qtde: number) {
        (typeof qtde === "number" && qtde > 0) ? (this.qtde = qtde) : (this.qtde = -1)
    }

    setTipoMaterial(tipo: string) {
        (typeof tipo === "string") ? (this.tipoMaterial = tipo) : (this.tipoMaterial = "")
    }

    addManutencoes(manutencao: Manutencoes){
        this.manutencoes.push(manutencao)
    }

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

    localizarPatrimonio(): string {
        return this.localPatrimonio
    }
    
    toString(): string {
        return `\n${super.toString()}\nFaixa Etária: ${this.faixaEtaria}\nTitulo: ${this.titulo}\nQuantidade: ${this.qtde}\nTipo do Material: ${this.tipoMaterial}`
    }
}