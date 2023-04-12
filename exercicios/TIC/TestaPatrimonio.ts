import { Brinquedos } from "./Brinquedos";
import { Eletronico } from "./Eletronicos";
import { MateriaisEducativos } from "./MateriaisEducativos";
import { Mobiliarios } from "./Mobiliarios";
import { Patrimonio } from "./Patrimonio";
import { EstadoPatrimonio } from "./EstadoPatrimonio";

function testaPatri(camaleao: Patrimonio){
    console.log(camaleao.toString())
    console.log(camaleao.localizarPatrimonio())
}

let objMobiliario = new Mobiliarios("Mesa MDF", 453, "disponivel", new Date(2023, 0O4, 0O3, 20, 51, 30), "Sala 06", "Mesa")
// let objBrinquedos = new Brinquedos("Carrinho", 142, "Estragado", 1, "Sala de Brinquedos", 3)
// let objEletronico = new Eletronico("PC", 587, "Indisponivel", 1, "Sala 04", "Computador", "Dell", "C200-A")
// let objMatEducativo = new MateriaisEducativos("Livro", 679, "disponível", 1, "Sala 02", 2, "Pequeno Principe", 30, "Livro")

objMobiliario.addEstadoPatrimonioBom(objMobiliario)

console.log(EstadoPatrimonio.toString())

// testaPatri(objBrinquedos)
// testaPatri(objMobiliario)

