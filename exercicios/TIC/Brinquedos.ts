// importando as classes "Patrimonio" e "Manutencoes"
import { Patrimonio } from "./Patrimonio";
import { Manutencoes } from "./Manutencoes";

// criando a classe filho "Brinquedos" e definindo "Patrimonio" como sua classe pai
export class Brinquedos extends Patrimonio {
    // criando a variável da classe
    private faixaEtaria: number

    // criando o construtor
    constructor(nomePatrimonio: string, codigoPatrimonio: number, dataAquisicao: Date, localPatrimonio: string, faixaEtaria: number) {
        super(nomePatrimonio, codigoPatrimonio, dataAquisicao, localPatrimonio)//herança
        this.setFaixaEtaria(faixaEtaria)
    }

    // setter
    setFaixaEtaria(faixaEtaria: number) {
        (faixaEtaria >= 0) ? (this.faixaEtaria = faixaEtaria) : (this.faixaEtaria = 1)
    }

    // criando o método "addManutencoes" com anulação de método
    addManutencoes(manutencao: Manutencoes){
        this.manutencoes.push(manutencao)
    }

    // getter
    getFaixaEtaria(): number {
        return this.faixaEtaria
    }

    // criando o método "localizarPatrimonio" com anulação de método 
    localizarPatrimonio(): string {
        return this.localPatrimonio
    }

    // criando "toString"
    toString(): string {
        return `\n${super.toString()}\nFaixa Etaria: ${this.faixaEtaria}`
    }
}