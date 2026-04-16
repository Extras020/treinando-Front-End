import promptSync from 'prompt-sync'
const prompt = promptSync()
import { Livro, Usuario, Biblioteca } from './classes.js'
import { criarLivro, criarUsuario } from './objetos.js'
import { sistema } from './sistema.js'

let livro = criarLivro()
sistema.cadastrarLivro(livro)
let usuario = criarUsuario()
sistema.cadastrarUsuario(usuario)