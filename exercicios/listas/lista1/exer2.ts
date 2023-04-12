class Cliente {
    numeroConta: number
    numeroAgencia: number
    nome: string
    saldo: number
    constructor(numeroConta: number, numeroAgencia: number, nome: string, saldo: number) {
        this.numeroConta = numeroConta
        this.numeroAgencia = numeroAgencia
        this.nome = nome
        this.saldo = saldo
    }
    realizarDeposito(deposito: number): void {
        this.saldo += deposito
    }
    realizarSaque(saque: number){
        (saque > this.saldo) ? console.log("Saldo Insuficiente") : this.saldo -= saque
    }
    mostrarConta(): string {
        return `N° da conta: ${this.numeroConta} | Nome: ${this.nome} | Saldo: R$${this.saldo}`
    }
}
class testaCliente {
    
}

let cliente1 = new Cliente(12345, 77, "Pedro", 800)

cliente1.realizarDeposito(60)
cliente1.realizarSaque(900)

console.log(cliente1.mostrarConta())