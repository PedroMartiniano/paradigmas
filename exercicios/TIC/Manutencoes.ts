// criando a classe "Manutencoes"
export class Manutencoes {
    // definindo as variáveis da classe
    private dataEnvio: Date
    private dataRecebimento: Date
    private prestadorServico: string
    private descricao: string

    // criando o construtor
    constructor(dataEnvio: Date, dataRecebimento: Date, prestadorServico: string, descricao: string) {
        this.setDataEnvio(dataEnvio)
        this.setDataRecebimento(dataRecebimento)
        this.setPrestadorServico(prestadorServico)
        this.setDescricao(descricao)
    }

    // setters
    setDataEnvio(dataEnvio: Date) {
        this.dataEnvio = dataEnvio
    }

    setDataRecebimento(dataRecebimento: Date) {
        this.dataRecebimento = dataRecebimento
    }

    setPrestadorServico(prestadorServico: string) {
        this.prestadorServico = prestadorServico
    }

    setDescricao(descricao: string){
        this.descricao = descricao
    }

    // getters
    getDataEnvio(): Date{
        return this.dataEnvio
    }

    getDataRecebimento(): Date{
        return this.dataRecebimento
    }

    getPrestadorServico(): string {
        return this.prestadorServico
    }

    getDescricao(): string {
        return this.descricao
    }

    // criando "toString"
    toString(): string {
        return `\nData Envio: ${this.dataEnvio}\nData Recebimento: ${this.dataRecebimento}\nPrestador de Serviço: ${this.prestadorServico}\nDescrição: ${this.descricao}`
    }
}
