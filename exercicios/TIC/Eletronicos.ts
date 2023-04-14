// importando as classes "Patrimonio" e "Manutencoes"
import { Patrimonio } from "./Patrimonio";
import { Manutencoes } from "./Manutencoes";

// criando a classe filho "Brinquedos" e definindo "Patrimonio" como sua classe pai
export class Eletronico extends Patrimonio {
    // criando as variáveis da classe
    private tipoEletronico: string
    private marcaEletronico: string
    private modeloEletronico: string

    // criando o construtor
    constructor(nomePatrimonio: string, codigoPatrimonio: number, dataAquisicao: Date, localPatrimonio: string, tipoEletronico: string, marcaEletronico: string, modeloEletronico: string) {
        super(nomePatrimonio, codigoPatrimonio, dataAquisicao, localPatrimonio)//herança
        this.setTipoEletronico(tipoEletronico)
        this.setMarcaEletronico(marcaEletronico)
        this.setModeloEletronico(modeloEletronico)
    }

    // setters
    setTipoEletronico(tipo: string) {
        this.tipoEletronico = tipo
    }

    setMarcaEletronico(marca: string) {
        this.marcaEletronico = marca
    }

    setModeloEletronico(modelo: string) {
        this.modeloEletronico = modelo
    }

    // criando o método "addManutencoes" com anulação de método
    addManutencoes(manutencao: Manutencoes){
        this.manutencoes.push(manutencao)
    }

    //geters
    getTipoEletronico(): string {
        return this.tipoEletronico
    }

    getMarcaEletronico(): string {
        return this.marcaEletronico
    }

    getModeloEletronico(): string {
        return this.modeloEletronico
    }

    // criando o método "localizarPatrimonio" com anulação de método 
    localizarPatrimonio(): string {
        return this.localPatrimonio
    }

    // criando "toString"
    toString(): string {
        return `\n${super.toString()}\nTipo Eletronico: ${this.tipoEletronico}\nMarca Eletronico: ${this.marcaEletronico}\nModelo Eletronico? ${this.modeloEletronico}`
    }
}