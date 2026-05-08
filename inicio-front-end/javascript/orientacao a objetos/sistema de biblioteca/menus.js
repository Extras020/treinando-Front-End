import promptSync from 'prompt-sync'
const prompt = promptSync()
import { Livro, Usuario, Biblioteca } from './classes.js'
import { criarLivro, criarUsuario, requisicao_emprestimo, solicita_devolucao } from './objetos.js'
import { sistema } from './sistema.js'


export function menuLivro(){
    while(true){
        console.log("1 - Cadastrar Livro")
        console.log("2 - Buscar Livro")
        console.log("3 - Listar acervo")
        console.log("0 - Voltar")
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
            let id = prompt("Digite o Id do livro: ")
            if(id != undefined){
                sistema.buscarLivro(id)
            }
            else{
                console.log("algo deu errado, tente novamente!")
            }
        }
        else if(escolha == 3){
            sistema.listarAcervo()
        }
        else if(escolha == 0){
            return
        }
    }
}
export function menuUsuario(){
    while(true){
        console.log("1 - Cadastrar Usuário")
        console.log("2 - Buscar Usuário")
        console.log("3 - Listar Usuários")
        console.log("4 - Remover Usuário")
        console.log("0 - Voltar")
        let escolha = Number(prompt())
        if(escolha == 1){
            let usuario = criarUsuario()
            if(usuario != undefined){
                sistema.cadastrarUsuario(usuario)
            }
            else{
                console.log("algo deu errado, tente novamente!")
            }
        }
        else if(escolha == 2){
            let cpf = prompt("Digite o CPF do usuário: ")
            if(cpf != undefined){
                sistema.buscarUsuario(cpf)
            }
            else{
                console.log("algo deu errado, tente novamente!")
            }
        }
        else if(escolha == 3){
            sistema.listarUsuarios()
        }
        else if(escolha == 4){
            let cpf = prompt("Digite o CPF do usuário: ")
            if(cpf != undefined){
                sistema.removerUsuario(cpf)
            }
            else{
                console.log("algo deu errado, tente novamente!")
            }
        }
        else if(escolha == 0){
            return
        }
    }
}
export function menuEmprestimos(){
    while(true){
        console.log("1 - Emprestar Livro")
        console.log("2 - Devolver Livro")
        console.log("0 - Voltar")
        let escolha = Number(prompt())
        if(escolha == 1){
            let req_emprestimo = requisicao_emprestimo()
            if(req_emprestimo != undefined){
                sistema.emprestarLivro(req_emprestimo)
            }
            else{
                console.log("algo deu errado, tente novamente!")
            }
        }
        else if(escolha == 2){
            let sol_devolucao = solicita_devolucao()
            if(sol_devolucao != undefined){
                sistema.devolverLivro(sol_devolucao)
            }
            else{
                console.log("algo deu errado, tente novamente")
            }
        }
        else if(escolha == 0){
            return
        }
    }
}