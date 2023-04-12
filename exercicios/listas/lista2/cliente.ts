class clienteEncap{
    private nroConta: string
    private nroAgencia: string
    private nome: string
    private saldo: number
    constructor(nroConta: string, nroAgencia: string, nome: string, saldo: number){
        this.setNroConta(nroConta)
        this.setNroAgencia(nroAgencia)
        this.setNome(nome)
        this.setSaldo(saldo)
    }
    setNroConta(x: string){
        if ((x.length == 8) && (x[6] == '-')) {
            this.nroConta = x
        }
        else console.log(`Nro da conta inválido`)
    }
    setNroAgencia(x: string){
        if ((x.length == 6) &&(x.charAt(4) == '-')){
            this.nroAgencia = x
        }
        else console.log(`Nro da agência inválido`)
    }
    setNome(x: string){
        (x.length <= 30) ? this.nome = x : console.log(`Qtde de caracteres superior ao permitido`)
    }
    setSaldo(x: number){
        (x >= 0) ? this.saldo = x : console.log(`Saldo não pode ser negativo`)
    }
    getNroConta(): string{
        return this.nroConta
    }
    getNroAgencia(): string{
        return this.nroAgencia
    }
    getNome(): string{
        return this.nome
    }
    getSaldo(): number{
        return this.saldo
    }

    realizarDeposito(value: number){
        this.saldo += value
    }

    realizarSaque(value: number){
        this.setSaldo(this.saldo - value)
    }
    
    mostra(): string{
        return `Número da Conta: ${this.getNroConta()}\nNúmero da Agência: ${this.getNroAgencia()}\nNome: ${this.getNome()}\nSaldo: ${this.getSaldo().toFixed(2)}`
    }
}

let fulano = new clienteEncap(`123456-x`, `1234-5`, `Pedro`, 123.96)

fulano.realizarDeposito(25.5)
fulano.realizarSaque(3.96)
console.log(fulano.mostra())