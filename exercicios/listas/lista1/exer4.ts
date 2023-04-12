class Rio{
    constructor(public nome: string, public nivel: number, public poluido: boolean){

    }

    chover(): void{
        this.nivel += 0.1
    }
    ensolarar(): void{
        (this.nivel == 0.1) ? console.log("Rio secou") : this.nivel -= 0.1
    }
    limpar(): void{
        this.poluido = false
    }
    sujar(): void{
        this.poluido = true
    }
    mostrar(): string {
        return `Nome: ${this.nome} | Nível: ${this.nivel.toFixed(2)} | Poluído: ${this.poluido ? 'Sim' : 'Não'}`
    }
}

let rio = new Rio("Solimões", 0.7, true)

rio.chover()
rio.chover()
rio.ensolarar()
rio.limpar()
console.log(rio.mostrar())
