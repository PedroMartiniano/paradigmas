import { CellPhone } from "./CellPhone";

export class Client {
    private id: number
    private name: string 
    private cpf: string
    private cellPhones: CellPhone[]

    constructor(id:number, name:string, cpf:string, cellPhone: CellPhone){
        this.id = id
        this.name = name
        this.cpf = cpf
        this.cellPhones = []
        this.addCellPhone(cellPhone)
    }

    addCellPhone(cellPhone: CellPhone){
        this.cellPhones.push(cellPhone)
    }
    toString(): string {
        return `Id:${this.id}, Nome:${this.name}, CPF:${this.cpf} CellPhone: ${this.cellPhones.toString()}`
    }
    getName(): string {
        return this.name
    }
}

const objCellPhone = new CellPhone(110, 991289052, "Claro")