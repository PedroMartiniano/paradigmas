export class Manutencoes {
    private dataEnvio: Date
    private dataRecebimento: Date
    private prestadorServico: string
    private descricao: string

    constructor(dataEnvio: Date, dataRecebimento: Date, prestadorServico: string, descricao: string) {
        this.setDataEnvio(dataEnvio)
        this.setDataRecebimento(dataRecebimento)
        this.setPrestadorServico(prestadorServico)
        this.setDescricao(descricao)
    }

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

    toString(): string {
        return `Data Envio: ${this.dataEnvio}\nData Recebimento: ${this.dataRecebimento}\nPrestador de Serviço: ${this.prestadorServico}\nDescrição: ${this.descricao}`
    }
}
