import promptSync from 'prompt-sync'
const prompt = promptSync()
import { Livro, Usuario, Biblioteca } from './classes.js'
import { criarLivro, criarUsuario, requisicao_emprestimo, solicita_devolucao } from './objetos.js'
import { sistema } from './sistema.js'
import { menuLivro, menuUsuario, menuEmprestimos } from './menus.js'
import { lerNumero } from './validacoes.js'

while(true){
    console.log("1 - Livros")
    console.log("2 - Usuários")
    console.log("3 - Empréstimos")
    console.log("0 - Sair")
    let escolha = lerNumero(3)
    if(escolha == 1){
        menuLivro()
    }
    else if(escolha == 2){
        menuUsuario()
    }
    else if(escolha == 3){
        menuEmprestimos()
    }
    else if(escolha == 0){
        break
    }
}