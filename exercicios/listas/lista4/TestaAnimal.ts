import { Animal } from "./Animal";
import { Horse } from "./Horse";
import { Snake } from "./Snake";


function exPolimorfismo(camaleao: Animal){
    console.log(camaleao.toString())
    console.log(camaleao.move())
}

let objSnake = new Snake('Dilma', false)
let objHorse = new Horse('Pé de Pano', true)

exPolimorfismo(objSnake)
exPolimorfismo(objHorse)
// console.log(objSnake.toString())
// console.log(objSnake.move())
// console.log(objHorse.toString())
// console.log(objHorse.move())