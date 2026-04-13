import promptSync from 'prompt-sync'
const prompt = promptSync()
import {Livro, Usuario, Biblioteca} from './classes.js'

let nome = prompt("digite o nome: ")
let idade = prompt("digite idade: ")
let cpf = prompt("digite o cpf: ")

let lv = new Usuario(nome, cpf, idade)

lv.mostrarDados()