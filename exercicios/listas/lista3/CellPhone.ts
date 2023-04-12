export class CellPhone {
    private id: number
    private nro: number
    private operadora: string
    constructor(id: number, nro: number, operadora: string) {
        this.id = id
        this.nro = nro
        this.operadora = operadora
    }

    toString(): string{
        return `Id: ${this.id} Número: ${this.nro} Operadora: ${this.operadora}`
    }
}