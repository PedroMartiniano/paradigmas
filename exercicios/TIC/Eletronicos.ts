import { Patrimonio } from "./Patrimonio";
import { Manutencoes } from "./Manutencoes";

export class Eletronico extends Patrimonio {
    private tipoEletronico: string
    private marcaEletronico: string
    private modeloEletronico: string

    constructor(nomePatrimonio: string, codigoPatrimonio: number, dataAquisicao: Date, localPatrimonio: string, tipoEletronico: string, marcaEletronico: string, modeloEletronico: string) {
        super(nomePatrimonio, codigoPatrimonio, dataAquisicao, localPatrimonio)//herança
        this.setTipoEletronico(tipoEletronico)
        this.setMarcaEletronico(marcaEletronico)
        this.setModeloEletronico(modeloEletronico)
    }

    setTipoEletronico(tipo: string) {
        (typeof tipo === "string") ? (this.tipoEletronico = tipo) : (this.tipoEletronico = "")
    }

    addManutencoes(manutencao: Manutencoes){
        this.manutencoes.push(manutencao)
    }

    setMarcaEletronico(marca: string) {
        (typeof marca === "string") ? (this.marcaEletronico = marca) : (this.marcaEletronico = "")
    }

    setModeloEletronico(modelo: string) {
        (typeof modelo === "string") ? (this.modeloEletronico = modelo) : (this.modeloEletronico = "")
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

    localizarPatrimonio(): string {
        return this.localPatrimonio
    }

    toString(): string {
        return `\n${super.toString()}\nTipo Eletronico: ${this.tipoEletronico}\nMarca Eletronico: ${this.marcaEletronico}\nModelo Eletronico? ${this.modeloEletronico}`
    }
}