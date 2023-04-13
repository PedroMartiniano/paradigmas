import { Manutencoes } from "./Manutencoes"

export class Patrimonio {
    protected nomePatrimonio: string
    protected codigoPatrimonio: number
    protected dataAquisicao: Date
    protected localPatrimonio: string
    protected patri: Patrimonio
    protected manutencoes: Manutencoes[] = []

    constructor(nomePatri: string, codigoPatri: number, dataAquisicao: Date, localPatri: string) {
        this.setNomePatrimonio(nomePatri)
        this.setcodigoPatrimonio(codigoPatri)
        this.setDataAquisicao(dataAquisicao)
        this.setLocalPatrimonio(localPatri)
    }

    setNomePatrimonio(nome: string) {
        (typeof nome === "string") ? (this.nomePatrimonio = nome) : (this.nomePatrimonio = "")
    }

    setcodigoPatrimonio(codigo: number) {
        (typeof codigo === "number" && codigo >= 0) ? (this.codigoPatrimonio = codigo) : (this.codigoPatrimonio = -1)
    }

    setDataAquisicao(data: Date) {
        (this.dataAquisicao = data)
    }

    setLocalPatrimonio(local: string) {
        (typeof local === "string") ? (this.localPatrimonio = local) : (this.localPatrimonio = "")
    }

    addManutencoes(manutencao: Manutencoes){
        this.manutencoes.push(manutencao)
    }

    getNomePatrimonio(): string {
        return this.nomePatrimonio
    }

    getCodigoPatrimonio(): number {
        return this.codigoPatrimonio
    }

    getDataAquisicao(): Date {
        return this.dataAquisicao
    }

    getLocalPatrimonio(): string {
        return this.localPatrimonio
    }

    localizarPatrimonio(): string {
        return this.localPatrimonio
    }

    toString(): string {
        return `Património nome: ${this.nomePatrimonio}\nCódigo: ${this.codigoPatrimonio}\ndata de Aquisição: ${this.dataAquisicao}\nLocal Atual do Património: ${this.localPatrimonio}\nManutenções: ${this.manutencoes.toString()}`
    }
}