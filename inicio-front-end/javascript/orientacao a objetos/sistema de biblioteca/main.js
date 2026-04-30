import promptSync from 'prompt-sync'
const prompt = promptSync()
import { Livro, Usuario, Biblioteca } from './classes.js'
import { criarLivro, criarUsuario, requisicao_emprestimo, solicita_devolucao } from './objetos.js'
import { sistema } from './sistema.js'

while(true){
    console.log("1 - Cadastrar livro")
    console.log("2 - Cadastrar usuário")
    console.log("3 - Buscar usuário")
    console.log("4 - Buscar Livro")
    console.log("5 - Empréstimo")
    console.log("6 - Devolução")
    console.log("7 - Sair")
    let escolha = Number(prompt())
    if(escolha == 1){
        let livro = criarLivro()
        if(livro != undefined){
            sistema.cadastrarLivro(livro)
        }
        else{
            console.log("algo deu errado, tente novamente!")
        }
    }
    else if(escolha == 2){
        let usuario = criarUsuario()
        if(usuario != undefined){
            sistema.cadastrarUsuario(usuario)
        }
        else{
            console.log("algo deu errado, tente novamente!")
        }
    }
    else if(escolha == 3){
        let cpf = prompt("Digite o CPF do usuário: ")
        sistema.buscarUsuario(cpf)
    }
    else if(escolha == 4){
        let id = prompt("Digite o Id do livro: ")
        sistema.buscarLivro(id)
    }
    else if(escolha == 5){
        let req_emprestimo = requisicao_emprestimo()
        if(req_emprestimo != undefined){
            sistema.emprestarLivro(req_emprestimo)
        }
        else{
            console.log("algo deu errado, tente novamente!")
        }
    }
    else if(escolha == 6){
        let sol_devolucao = solicita_devolucao()
        if(sol_devolucao != undefined){
            sistema.devolverLivro(sol_devolucao)
        }
        else{
            console.log("algo deu errado, tente novamente")
        }
    }
    else if(escolha == 7){
        break
    }
}