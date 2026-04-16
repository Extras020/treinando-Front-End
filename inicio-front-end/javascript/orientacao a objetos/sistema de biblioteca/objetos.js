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
    let cpf = prompt("digite o cpf do usuário: ")
    // não usar isso aqui!!!! let usuario = sistema.buscarUsuario(cpf)
    let id = prompt("digite o id do livro que deseja: ")
}