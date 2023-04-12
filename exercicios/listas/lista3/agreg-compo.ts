// Classe parte Product

class Product{
    private name: string
    private price: number
    constructor(name: string, price: number){
        this.setName(name)
        this.setPrice(price)
    }
    setName(y: string){
        (y.length > 0 && y.length < 30) && (this.name = y)
    }
    setPrice(x: number){
        (x > 0) && (this.price = x)
    }
    getPrice(): number{
        return this.price
    }
    //método converte objeto em string
    toString(): string{
        return `{Name: ${this.name}, Price: ${this.price}}`
    }
}

const obj1Product = new Product('Alexa', 400)
const obj2Product = new Product('Bola de Basquete', 200)

// class Todo para associação com Product

class CarItem{
    private product: Product // agregação
    private quantity: number
    constructor(product: Product, quantity: number){
        this.product = product
        this.quantity = quantity
    }

    calculateTotalPrice(): number{
        return this.product.getPrice() * this.quantity
    }

    toString(): string{
        return `\nCar Item: {Product: ${this.product.toString()} | Quantity: ${this.quantity} | Total Price: ${this.calculateTotalPrice()}}`
    }
}

const obj1CarItem = new CarItem(obj1Product, 3)
const obj2CarItem = new CarItem(obj2Product, 5)

// console.log(obj1CarItem.toString())
// console.log(obj2CarItem.toString())

class ShoppingCart{
    private id: number
    private carItens: CarItem[]
    
    constructor(id:number){
        this.id = id
        this.carItens = [] //apenas aloca espaço na memória
    }

    addCarItem(carItem: CarItem): void{
        this.carItens.push(carItem)
    }

    toString(): string{
        return `{Id: ${this.id} | Itens do carrinho: ${this.carItens}}\n` 
    }

    calculateTotalPrice(): string{
        let totalPrice: number = 0
        for(let i = 0; i < this.carItens.length; i++){
            totalPrice += this.carItens[i].calculateTotalPrice()
        }
        return `Total Price: R$${totalPrice.toFixed(2)}`
        /*
        this.carItens.forEach(carItem => {
            soma += carItem.calculateTotalPrice()
        })
        return soma
        */
    }
}

const obj1ShoppingCart = new ShoppingCart(12)

obj1ShoppingCart.addCarItem(obj1CarItem)
obj1ShoppingCart.addCarItem(obj2CarItem)

console.log(obj1ShoppingCart.toString())

console.log(obj1ShoppingCart.calculateTotalPrice())