import { Imovel } from "./Imovel";
import { Reformas } from "./Reformas";

let obj1Reforma = new Reformas(1220.50)
let objImovel = new Imovel(150000, obj1Reforma)
let obj2Reforma = new Reformas(1390.99)

objImovel.addValorReformas(obj2Reforma)

console.log(objImovel.toString())