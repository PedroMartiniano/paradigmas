// arquivo de teste para as classes

// importando as classes
import { Patrimonio } from "./Patrimonio";
import { Brinquedos } from "./Brinquedos";
import { Eletronico } from "./Eletronicos";
import { MateriaisEducativos } from "./MateriaisEducativos";
import { Mobiliarios } from "./Mobiliarios";
import { EstadoPatrimonio } from "./EstadoPatrimonio";
import { Manutencoes } from "./Manutencoes";

// criando uma função com polimorfismo
function testaPatri(camaleao: Patrimonio){
    console.log(camaleao.toString())
    console.log(camaleao.localizarPatrimonio())
}

// criando variáveis e testando 
let data1Mobiliario = new Date("2023-04-13")
let obj1Mobiliario = new Mobiliarios('Mesa', 12, data1Mobiliario, 'Sala 01', 'Mesa de professor')


let obj1Estado = new EstadoPatrimonio(obj1Mobiliario, 'bom')

let data1Manutecao = new Date('2023-03-18')
let data2Manutecao = new Date('2023-04-12')
let obj1Manutencao = new Manutencoes(data1Manutecao, data2Manutecao, 'Marquinhos', 'arrumou rodinha')

obj1Mobiliario.addManutencoes(obj1Manutencao)

testaPatri(obj1Mobiliario)
console.log(obj1Estado.toString())