import promptSync from 'prompt-sync'
const prompt = promptSync()
import { Livro, Usuario, Biblioteca } from './classes.js'
import { criarLivro, criarUsuario, requisicao_emprestimo, solicita_devolucao } from './objetos.js'
import { sistema } from './sistema.js'

while(true){
    let escolha = Number(prompt())
    if(escolha == 1){
        let livro = criarLivro()
        sistema.cadastrarLivro(livro)
    }
    if(escolha == 2){
        let usuario = criarUsuario()
        sistema.cadastrarUsuario(usuario)
    }
}