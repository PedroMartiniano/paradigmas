import { Funcionario } from "./Funcionario"

export class Assistente extends Funcionario {
    private HoraExtra: number

    constructor(nome: string, endereco: string, cpf: number, salario: number, horaExtra: number) {
        super(nome, endereco, cpf, salario)
        this.setHoraExtra(horaExtra)
    }
    setHoraExtra(horaExtra: number) {
        this.HoraExtra = horaExtra
    }
    calculaSalario(): number {
        return this.salario + (this.HoraExtra * 50)
    }
    toString(): string {
        return `${super.toString()}\nQtd Hora Extra: ${this.HoraExtra}\nSalário total: R$${this.calculaSalario().toFixed(2)}`
    }
}

const objAssistente = new Assistente('João', 'Rua xxx, 1001', 123456789, 2400, 5)

console.log(objAssistente.toString())