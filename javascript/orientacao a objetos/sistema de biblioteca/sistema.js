import { Livro, Usuario, Biblioteca } from './classes.js'
import fs from 'fs'
export const sistema = new Biblioteca()
let users = fs.readFileSync("usuarios.json", "utf-8")
sistema.usuarios = JSON.parse(users)
let books = fs.readFileSync("acervo.json", "utf-8")
sistema.acervo = JSON.parse(books)