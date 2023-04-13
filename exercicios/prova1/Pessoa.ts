export class Pessoa {
    private nome: string

    constructor(nome: string) {
        this.setNome(nome)
    }

    setNome(nome: string) {
        this.nome = nome
    }

    getNome(): string {
        return this.nome
    }

    mostra(): string {
        return `Nome Pessoa: ${this.nome}`
    }
}