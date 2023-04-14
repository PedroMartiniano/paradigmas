// importando a classe "Patrimonio"
import { Patrimonio } from "./Patrimonio"

// criando a classe EstadoPatrimonio 
export class EstadoPatrimonio {
    // criando e definindo as variáveis como um vetor vazio
    private excelente: Patrimonio[] = []
    private bom: Patrimonio[] = []
    private ruim: Patrimonio[] = []
    private patrimonio: Patrimonio
    private estadoPatrimonio: string

    // criando o construtor para receber o património e qual estado ele se encontra
    constructor(patrimonio: Patrimonio, estado: string) {
        this.patrimonio = patrimonio
        this.setEstadoPatrimonio(estado)
        this.addEstadoPatrimonio(estado, patrimonio)
    }

    // setters
    setEstadoPatrimonio(estado: string) {
        this.estadoPatrimonio = estado
    }

    // getters
    getEstadoPatrimonio(): string {
        return this.estadoPatrimonio
    }

    // método "addEstadoPatrimonio" que irá dar push no vetor referente ao estado passado por parâmetro
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

    // criando "toString"
    toString(): string{
        return `\nPatrimónios: ${this.patrimonio}\nQuantidade Excelentes: ${this.excelente.length}\nQuantidade Bons: ${this.bom.length}\nQuantidade Ruins: ${this.ruim.length}`
    }
}