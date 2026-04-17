import promptSync from 'prompt-sync'
const prompt = promptSync()
import {Livro, Usuario, Biblioteca} from './classes.js'
import { sistema } from './sistema.js'

export function criarUsuario(){
    let nome = prompt("digite o nome do usuário: ")
    let cpf = prompt("informe o cpf do usuário: ")
    let idade = prompt("informe a idade do usuário: ")
    let usuario = new Usuario(nome, cpf, idade)
    return usuario
}
export function criarLivro(){
    let nome = prompt("informe o nome do livro: ")
    let autor = prompt("informe o nome do autor: ")
    let id = prompt("informe o id do livro: ")
    let qnt = prompt("informe a quantidade: ")
    let livro = new Livro(nome, autor, id, qnt)
    return livro
}
export function requisicao_emprestimo(){
    let escolha = 0
    let cpf_usuario
    let id_livro
    while(escolha == 0){
        cpf_usuario = prompt("digite o cpf do usuário: ")
        sistema.buscarUsuario(cpf_usuario)
        escolha = Number(prompt("confirme se esse é o usuário(1 para sim, 0 para não, 2 para cancelar a operação): "))
        if(escolha == 2){
            return
        }
    }
    escolha = 0
    while(escolha == 0){
        id_livro = prompt("digite o id do livro: ")
        sistema.buscarLivro(id_livro)
        escolha = Number(prompt("confirme se esse é o livro(1 para sim, 0 para não, 2 para cancelar a operação): "))
        if(escolha == 2){
            return
        }
    }
    let dados = {
        cpf: cpf_usuario,
        id: id_livro
    }
    return dados
}