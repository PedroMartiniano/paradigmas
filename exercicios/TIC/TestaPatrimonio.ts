import { Brinquedos } from "./Brinquedos";
import { Eletronico } from "./Eletronicos";
import { EstadoPatrimonio } from "./EstadoPatrimonio";
import { MateriaisEducativos } from "./MateriaisEducativos";
import { Mobiliarios } from "./Mobiliarios";
import { Patrimonio } from "./Patrimonio";
import { Manutencoes } from "./Manutencoes";
// import { EstadoPatrimonio } from "./EstadoPatrimonio";

function testaPatri(camaleao: Patrimonio){
    console.log(camaleao.toString())
    console.log(camaleao.localizarPatrimonio())
}

let data1Mobiliario = new Date("2023-04-13")
let obj1Mobiliario = new Mobiliarios('Mesa', 12, data1Mobiliario, 'Sala 01', 'Mesa de professor')
// let objBrinquedos = new Brinquedos("Carrinho", 142, "Estragado", 1, "Sala de Brinquedos", 3)
// let objEletronico = new Eletronico("PC", 587, "Indisponivel", 1, "Sala 04", "Computador", "Dell", "C200-A")
// let objMatEducativo = new MateriaisEducativos("Livro", 679, "disponível", 1, "Sala 02", 2, "Pequeno Principe", 30, "Livro")

// console.log(obj1Mobiliario.toString())
// testaPatri(obj1Mobiliario)
let obj1Estado = new EstadoPatrimonio(obj1Mobiliario, 'bom')
// console.log(obj1Estado.toString())

let data1Manutecao = new Date('2023-03-18')
let data2Manutecao = new Date('2023-04-12')
let obj1Manutencao = new Manutencoes(data1Manutecao, data2Manutecao, 'Marquinhos', 'arrumou rodinha')

obj1Mobiliario.addManutencoes(obj1Manutencao)

testaPatri(obj1Mobiliario)
// testaPatri(objBrinquedos)
// testaPatri(objMobiliario)

