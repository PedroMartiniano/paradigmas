export class Animal{
    protected name: string
    constructor(name: string){
        this.name = name
    }

    toString(): string{
        return `{Nome: ${this.name}}`
    }

    move(): string{
        return `Moving...`
    }
}