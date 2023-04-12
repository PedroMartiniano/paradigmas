import { Patrimonio } from "./Patrimonio";

export class Brinquedos extends Patrimonio {
    private faixaEtaria: number

    constructor(nomePatrimonio: string, codigoPatrimonio: number, estadoAtual: string, dataAquisicao: Date, localPatrimonio: string, faixaEtaria: number) {
        super(nomePatrimonio, codigoPatrimonio, dataAquisicao, localPatrimonio)//herança
        this.setFaixaEtaria(faixaEtaria)
    }

    setFaixaEtaria(faixaEtaria: number) {
        (typeof faixaEtaria === "number" && faixaEtaria > 0) ? (this.faixaEtaria = faixaEtaria) : (this.faixaEtaria = -1)
    }
    getFaixaEtaria(): number {
        return this.faixaEtaria
    }

    localizarPatrimonio(): string {
        return this.localPatrimonio
    }

    toString(): string {
        return `\n${super.toString()}\nFaixa Etaria: ${this.faixaEtaria}`
    }
}