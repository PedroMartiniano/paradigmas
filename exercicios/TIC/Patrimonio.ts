import { Manutencoes } from "./Manutencoes"
import { EstadoPatrimonio } from "./EstadoPatrimonio"

export class Patrimonio {
    protected nomePatrimonio: string
    protected codigoPatrimonio: number
    protected dataAquisicao: Date
    protected localPatrimonio: string
    protected estadoAtual: EstadoPatrimonio
    protected patri: Patrimonio

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

    // setEstadoPatrimonio(estado: string) {
    //     (typeof estado === "string") ? (this.estadoAtual = estado) : (this.estadoAtual = "")
    // }

    setDataAquisicao(data: Date) {
        (this.dataAquisicao = data)
    }

    setLocalPatrimonio(local: string) {
        (typeof local === "string") ? (this.localPatrimonio = local) : (this.localPatrimonio = "")
    }

    getNomePatrimonio(): string {
        return this.nomePatrimonio
    }

    getCodigoPatrimonio(): number {
        return this.codigoPatrimonio
    }

    // getEstadoAtual(): string {
    //     return this.estadoAtual
    // }

    getDataAquisicao(): Date {
        return this.dataAquisicao
    }

    getLocalPatrimonio(): string {
        return this.localPatrimonio
    }

    localizarPatrimonio(): string {
        return this.localPatrimonio
    }

    // estadoPatrimonio(): string {
    //     return this.estadoAtual
    // }

    addEstadoPatrimonioExcelente(patri: Patrimonio){
        this.estadoAtual.addExcelente(patri)
    }

    addEstadoPatrimonioBom(patri: Patrimonio){
        this.estadoAtual.addBom(patri)
    }

    addEstadoPatrimonioRuim(patri: Patrimonio){
        this.estadoAtual.addRuim(patri)
    }

    toString(): string {
        return `Património nome: ${this.nomePatrimonio}\nCódigo: ${this.codigoPatrimonio}\ndata de Aquisição: ${this.dataAquisicao}\nLocal Atual do Património: ${this.localPatrimonio}`
    }
}