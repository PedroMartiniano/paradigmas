class alunoEncap {
    private nroAluno: number
    nome: string
    idade: number
    p1: number
    p2: number
    constructor(nroAluno: number, nome: string, idade: number, p1: number, p2: number) {
        this.setNroAluno(nroAluno)
        this.setNome(nome)
        this.setIdade(idade)
        this.setP1(p1)
        this.setP2(p2)
    }
    setNroAluno(x: number) {
        if (x.toString().length == 6) {
            this.nroAluno = x
        }
        else {
            console.log("Qtde de caracteres inválida.")
            this.nroAluno = 111111
        }
    }
    setNome(x: string) {
        if(x.length <= 30){
            this.nome = x
        }
        else{
            console.log("Qtde de caracteres superior ao permitido.")
            this.nome = ""
        }
    }
    setIdade(x: number) {
        if (x > 0) {
            this.idade = x
        }
        else {
            console.log("Idade negativa não permitida.")
            this.idade = 0
        }
    }
    setP1(x: number) {
        if (x > 0) {
            this.p1 = x
        }
        else {
            console.log("nota negativa não permitida.")
            this.p1 = 0
        }
    }
    setP2(x: number) {
        if (x > 0) {
            this.p2 = x
        }
        else {
            console.log("nota negativa não permitida.")
            this.p2 = 0
        }
    }
    notaFinal(): number{
        return (this.p1 + this.p2) / 2
    }
    dadosAluno(): string{
        return `Número do Aluno: ${this.nroAluno}\nNome: ${this.nome}\nIdade: ${this.idade}`
    }
}

let teste = new alunoEncap(123456, "teste", 15, 7, 6)
console.log(teste.notaFinal())
console.log(teste.dadosAluno())