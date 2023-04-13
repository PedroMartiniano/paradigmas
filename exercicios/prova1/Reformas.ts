export class Reformas{
    private valorReformas: number

    constructor(valor: number){
        this.setValorReformas(valor)
    }

    setValorReformas(valor: number){
        this.valorReformas = valor
    }

    getValorReformas(): number{
        return this.valorReformas
    }

    toString(): string {
        return `\nValores das reformas: ${this.valorReformas}`
    }
}