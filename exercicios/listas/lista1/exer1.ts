class Aluno {
    numeroAluno: number
    nome: string
    idade: number
    p1: number
    p2: number
    constructor(numeroAluno: number, nome: string, idade: number, p1: number, p2: number){
        this.numeroAluno = numeroAluno
        this.nome = nome
        this.idade = idade
        this.p1 = p1
        this.p2 = p2
    }

    notaFinal(): number {
        return (this.p1 + this.p2) / 2
    }

    dadosAluno(): string {
        return `Numero: ${this.numeroAluno}\nNome: ${this.nome}\nIdade: ${this.idade}\nNota Final: ${this.notaFinal()}`
    }

    passou(): void {
        (this.notaFinal() >= 6) ? console.log("Aluno Aprovado") : console.log("Aluno Reprovado")
    }

}

let aluno1 = new Aluno(69, "Pedro", 18, 5, 6)
console.log(aluno1.dadosAluno())
aluno1.passou()