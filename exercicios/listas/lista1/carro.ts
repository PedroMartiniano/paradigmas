// criando classe 
class carro {
    //declarar variáveis
    marca: string
    modelo: string
    ano: number
    cor: string
    motor: boolean // true = motor ligado; false = motor desligado
    ligar(): void {
        this.motor = true
    }
    desligar(): void {
        this.motor = false
    }
    carroMaisNovo(qtde: number): void {
        this.ano = this.ano + qtde
    }
}


// criando objeto - instânciando
let obj1 = new carro()

obj1.ano = 2018
obj1.marca = "ferrari"
obj1.modelo = "f40"
obj1.cor = "vermelha"
obj1.motor = true

console.log(obj1)

obj1.desligar()

console.log(obj1)

obj1.carroMaisNovo(4)

console.log(obj1)