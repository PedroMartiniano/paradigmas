export class Funcionario {
    protected nome: string
    protected endereco: string
    protected cpf: number
    protected salario: number

    constructor(nome: string, endereco: string, cpf: number, salario: number) {
        this.setNome(nome)
        this.setEndereco(endereco)
        this.setCpf(cpf)
        this.setSalario(salario)
    }

    setNome(nome: string) {
        this.nome = nome
    }
    setEndereco(endereco: string) {
        this.endereco = endereco
    }
    setCpf(cpf: number) {
        this.cpf = cpf
    }
    setSalario(salario: number) {
        this.salario = salario
    }
    toString(): string {
        return `Funcionário: ${this.nome}\nEndereço: ${this.endereco}\nCPF: ${this.cpf}\nSalário Inicial: R$${this.salario.toFixed(2)}`
    }
    calculaSalario(): number {
        return this.salario
    }
}