import { Pessoa } from "./Pessoa";
import { Fisica } from "./Fisica";
import { Juridica } from "./Juridica";


function pessoas(camaleao: Pessoa) {
    console.log(camaleao.mostra())
}

let objPessoaFisica = new Fisica('Pedro', 45130236866)
let objPessoaJuridica = new Juridica('João', 45997418000153)

pessoas(objPessoaFisica)
pessoas(objPessoaJuridica)