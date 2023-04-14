import { Manutencoes } from "./Manutencoes" // importando a classe "Manutencoes"

// Criando classe pai "Património" 
export class Patrimonio {
    //criando as variáveis que serão passadas para as classes filhos por herança
    protected nomePatrimonio: string
    protected codigoPatrimonio: number
    protected dataAquisicao: Date
    protected localPatrimonio: string
    protected patri: Patrimonio
    protected manutencoes: Manutencoes[] = [] // passando a classe "Manutencoes" como uma variável vetor

    //criando o construtor com os setters
    constructor(nomePatri: string, codigoPatri: number, dataAquisicao: Date, localPatri: string) {
        this.setNomePatrimonio(nomePatri)
        this.setcodigoPatrimonio(codigoPatri)
        this.setDataAquisicao(dataAquisicao)
        this.setLocalPatrimonio(localPatri)
    }

    //criando os setters
    setNomePatrimonio(nome: string) {
        this.nomePatrimonio = nome
    }

    setcodigoPatrimonio(codigo: number) {
        (codigo >= 0) ? (this.codigoPatrimonio = codigo) : (this.codigoPatrimonio = 0)
    }

    setDataAquisicao(data: Date) {
        (this.dataAquisicao = data)
    }

    setLocalPatrimonio(local: string) {
        this.localPatrimonio = local
    }

    // criando o método "addManutencoes" que irá adicionar as manutenções no vetor
    addManutencoes(manutencao: Manutencoes){
        this.manutencoes.push(manutencao)
    }

    // criando os getters 
    getNomePatrimonio(): string {
        return this.nomePatrimonio
    }

    getCodigoPatrimonio(): number {
        return this.codigoPatrimonio
    }

    getDataAquisicao(): Date {
        return this.dataAquisicao
    }

    getLocalPatrimonio(): string {
        return this.localPatrimonio
    }

    // criando o método "localizarPatrimonio" que irá mostrar em que sala o património está
    localizarPatrimonio(): string {
        return this.localPatrimonio
    }

    // criando toString
    toString(): string {
        return `Património nome: ${this.nomePatrimonio}\nCódigo: ${this.codigoPatrimonio}\ndata de Aquisição: ${this.dataAquisicao}\nLocal Atual do Património: ${this.localPatrimonio}\n\nManutenções: ${this.manutencoes.toString()}`
    }
}