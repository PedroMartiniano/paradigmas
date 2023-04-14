// importando as classes "Patrimonio" e "Manutencoes"
import { Manutencoes } from "./Manutencoes";
import { Patrimonio } from "./Patrimonio";

// criando a classe filho "Mobiliario" e definindo "Patrimonio" como sua classe pai
export class Mobiliarios extends Patrimonio {
    // criando a variável da classe
    private tipoMobiliario: string

    // criando o construtor 
    constructor(nomePatrimonio: string, codigoPatrimonio: number, dataAquisicao: Date, localPatrimonio: string, tipoMobiliario: string) {
        super(nomePatrimonio, codigoPatrimonio, dataAquisicao, localPatrimonio)
        this.setTipoMobiliario(tipoMobiliario)
    }

    // criando os setters
    setTipoMobiliario(tipoMobiliario: string) {
        this.tipoMobiliario = tipoMobiliario
    }

    // criando o método "addManutencoes" com anulação de método
    addManutencoes(manutencao: Manutencoes){
        this.manutencoes.push(manutencao)
    }
    
    // criando os getters
    getTipoMobiliario(): string {
        return this.tipoMobiliario
    }

    // criando o método "localizarPatrimonio" com anulação de método 
    localizarPatrimonio(): string {
        return this.localPatrimonio
    }

    // criando "toString"
    toString(): string {
        return `\n${super.toString()}\nTipo mobiliario: ${this.tipoMobiliario}`
    }
}