import { Pessoa } from "./Pessoa";

export class Juridica extends Pessoa {
    private cnpj: number

    constructor(nome: string, cnpj: number) {
        super(nome)
        this.setCnpj(cnpj)
    }

    setCnpj(cnpj: number) {
        this.cnpj = cnpj
    }

    getCnpj(): number{
        return this.cnpj
    }

    mostra(): string {
        return `${super.mostra()} Cnpj: ${this.cnpj}`
    }

}