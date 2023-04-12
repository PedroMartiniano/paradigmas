import { Patrimonio } from "./Patrimonio"

export class EstadoPatrimonio {
    private excelente: Patrimonio[]
    private bom: Patrimonio[]
    private ruim: Patrimonio[]
    private patrimonio: Patrimonio[]

    constructor(excelente: Patrimonio[], bom: Patrimonio[], ruim: Patrimonio[], patrimonio: Patrimonio){
        this.excelente = []
        this.addExcelente(patrimonio)
        this.bom = []
        this.addBom(patrimonio)
        this.ruim = []
        this.addRuim(patrimonio)
    }

    addExcelente(patrimonio: Patrimonio){
        this.excelente.push(patrimonio)
    }

    addBom(patrimonio: Patrimonio){
        this.bom.push(patrimonio)
    }

    addRuim(patrimonio: Patrimonio){
        this.ruim.push(patrimonio)
    }

    toString(): string{
        return `Patrimónios ${this.patrimonio}\n Excelentes: ${this.excelente}\nBom: ${this.bom}\nRuim: ${this.ruim}`
    }
}

