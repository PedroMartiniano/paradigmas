import { Animal } from "./Animal"

export class Snake extends Animal {
    private poisonous: boolean

    constructor(name: string, poisonous: boolean) {
        super(name)
        this.poisonous = poisonous
    }

    toString(): string{
        return `${super.toString()} Poisonous: ${this.poisonous ? 'Yes' : 'No'}`
    }

    move(): string {
        return `Crowling...`
    }
}