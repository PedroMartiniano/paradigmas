import { Animal } from "./Animal";

export class Horse extends Animal {
    private competitor: boolean

    constructor(name: string, competitor: boolean){
        super(name)
        this.competitor = competitor
    }

    toString(): string {
        return `${super.toString()} Competitor: ${this.competitor ? 'Yes' : 'No'}`
    }

    move(): string {
        return `Riding...`
    }
}