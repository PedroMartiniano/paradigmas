import { Funcionario } from "./Funcionario";

export class Gerente extends Funcionario {
    private bonus: number

    constructor(nome: string, endereco: string, cpf: number, salario: number, bonus: number) {
        super(nome, endereco, cpf, salario)
        this.setBonus(bonus)
    }
    setBonus(bonus: number) {
        this.bonus = bonus
    }
    calculaSalario(): number {
        return this.salario + this.bonus
    }
    toString(): string {
        return `${super.toString()}\nBônus Salarial: R$${this.bonus.toFixed(2)}\nSalário total: R$${this.calculaSalario().toFixed(2)}`
    }
}

const objGerente = new Gerente('Vinicius', 'Rua yyy, 567', 123456789, 5200, 1500)

console.log(objGerente.toString())