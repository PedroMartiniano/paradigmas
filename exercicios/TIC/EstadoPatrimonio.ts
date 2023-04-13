import { Patrimonio } from "./Patrimonio"

export class EstadoPatrimonio {
    private excelente: Patrimonio[] = []
    private bom: Patrimonio[] = []
    private ruim: Patrimonio[] = []
    private patrimonio: Patrimonio
    private estadoPatrimonio: string

    constructor(patrimonio: Patrimonio, estado: string) {
        this.patrimonio = patrimonio
        this.setEstado(estado)
        this.addEstadoPatrimonio(estado, patrimonio)
    }

    setEstado(estado: string) {
        this.estadoPatrimonio = estado
    }

    addEstadoPatrimonio(estado: string, patrimonio: Patrimonio) {
        if (estado === "excelente") {
            this.excelente.push(patrimonio)
        }
            else if(estado === "bom") {
                this.bom.push(patrimonio)
            }
                else if(estado === "ruim") {
                    this.ruim.push(patrimonio)
                }
    }

    toString(): string{
        return `Patrimónios ${this.patrimonio}\nExcelentes: ${this.excelente.length}\nBom: ${this.bom.length}\nRuim: ${this.ruim.length}`
    }
}