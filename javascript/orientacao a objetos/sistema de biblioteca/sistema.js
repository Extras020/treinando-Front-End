import { Livro, Usuario, Biblioteca } from './classes.js'
import fs from 'fs'
export const sistema = new Biblioteca()
let users = fs.readFileSync("usuarios.json", "utf-8")
const dados_users = JSON.parse(users)
sistema.usuarios = dados_users.map(
    u => new Usuario(u.nome, u.cpf, u.idade)
)
for(let l = 0; l < dados_users.length; l++){
    sistema.usuarios[l].emprestados = dados_users[l].emprestados
}
let books = fs.readFileSync("acervo.json", "utf-8")
const dados_books = JSON.parse(books)
sistema.acervo = dados_books.map(
    i => new Livro(i.nome, i.autor, i.id, i.qnt)
)