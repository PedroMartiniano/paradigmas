import { Pessoa } from "./Pessoa";

export class Fisica extends Pessoa {
    private cpf: number

    constructor(nome: string, cpf: number) {
        super(nome)
        this.setCpf(cpf)
    }

    setCpf(cpf: number) {
        this.cpf = cpf
    }

    getCpf(): number {
        return this.cpf
    }

    mostra(): string {
        return `${super.mostra()} Cpf: ${this.cpf}`
    }
}