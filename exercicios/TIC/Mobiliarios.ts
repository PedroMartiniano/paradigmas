import { Manutencoes } from "./Manutencoes";
import { Patrimonio } from "./Patrimonio";

export class Mobiliarios extends Patrimonio {
    private tipoMobiliario: string

    constructor(nomePatrimonio: string, codigoPatrimonio: number, dataAquisicao: Date, localPatrimonio: string, tipoMobiliario: string) {
        super(nomePatrimonio, codigoPatrimonio, dataAquisicao, localPatrimonio)
        this.setTipoMobiliario(tipoMobiliario)
    }

    setTipoMobiliario(tipoMobiliario: string) {
        this.tipoMobiliario = tipoMobiliario
    }

    addManutencoes(manutencao: Manutencoes){
        this.manutencoes.push(manutencao)
    }
    
    getTipoMobiliario(): string {
        return this.tipoMobiliario
    }

    localizarPatrimonio(): string {
        return this.localPatrimonio
    }

    toString(): string {
        return `\n${super.toString()}\nTipo mobiliario: ${this.tipoMobiliario}`
    }
}