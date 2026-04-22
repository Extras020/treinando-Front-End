import promptSync from 'prompt-sync'
const prompt = promptSync()
import { Livro, Usuario, Biblioteca } from './classes.js'
import { criarLivro, criarUsuario, requisicao_emprestimo, solicita_devolucao } from './objetos.js'
import { sistema } from './sistema.js'

let livro = criarLivro()
sistema.cadastrarLivro(livro)
let usuario = criarUsuario()
sistema.cadastrarUsuario(usuario)
let loanRequest = requisicao_emprestimo()
sistema.emprestarLivro(loanRequest)
let returnRequest = solicita_devolucao()
sistema.devolverLivro(returnRequest)