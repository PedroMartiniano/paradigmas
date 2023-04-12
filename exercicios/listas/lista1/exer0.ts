class carroEncap {
    marca: string
    modelo: string
    cor: string
    ano: number
    motor: boolean
    constructor(marca: string, modelo: string, cor: string, ano: number, motor: boolean) {
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
        this.ano = ano
        this.motor = motor
    }
    ligar(): void {
        this.motor = true
    }
    desligar(): void {
        this.motor = false
    }
    carroMaisNovo(qtde: number): void {
        this.ano = this.ano + qtde
    }
    carroMaisVelho(qtde: number): void {
        this.ano = this.ano - qtde
    }
}

let obj2Encap = new carroEncap("fiat", "palio", "azul", 2016, false)

console.log(obj2Encap)

obj2Encap.ligar()

obj2Encap.carroMaisNovo(4)

console.log(obj2Encap)

obj2Encap.carroMaisVelho(2)

console.log(obj2Encap)