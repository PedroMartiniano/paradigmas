import { Funcionario } from "./Funcionario";

export class Diretor extends Funcionario {
    private acoesEmpresa: number

    constructor(nome: string, endereco: string, cpf: number, salario: number, acoes: number) {
        super(nome, endereco, cpf, salario)
        this.acoesEmpresa = acoes
    }

    setAcoesEmpresa(acoes: number) {
        this.acoesEmpresa = acoes
    }
    calculaSalario(): number {
        return this.salario + (this.acoesEmpresa * 0.2)
    }
    toString(): string {
        return `${super.toString()}\nValor em ações: R$${this.acoesEmpresa.toFixed(2)}\nSalário total: R$${this.calculaSalario().toFixed(2)}`
    }
}

const objDiretor = new Diretor('Pedro', 'Rua zzz, 342', 123456789, 9600, 30000)

console.log(objDiretor.toString())