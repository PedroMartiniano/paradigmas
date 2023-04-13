import { Reformas } from "./Reformas"

export class Imovel {
    private valorImovel: number
    private valorReformas: Reformas[]

    constructor(valorImovel: number, valorReformas: Reformas) {
        this.setValorImovel(valorImovel)
        this.valorReformas = []
        this.addValorReformas(valorReformas)
    }

    setValorImovel(valor: number) {
        this.valorImovel = valor
    }

    getValorImovel(): number {
        return this.valorImovel
    }

    addValorReformas(valor: Reformas){
        this.valorReformas.push(valor)
    }

    toString(): string {
        return `Valor do Imovel: ${this.valorImovel.toFixed(2)}\n${this.valorReformas.toString()}`
    }
}