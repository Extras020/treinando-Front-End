export class Livro{
    #id
    #qnt
    constructor(nome, autor, id, qnt){
        this.nome = nome
        this.autor = autor
        this.#id = id
        this.#qnt = qnt
    }
    mostrarDados(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Autor: ${this.autor}`)
        console.log(`Quantidade: ${this.#qnt}`)
        console.log(`Identificador: ${this.#id}`)
    }
    retornaId(){
        return this.#id
    }
}
export class Usuario{
    #cpf
    constructor(nome, cpf, idade){
        this.nome = nome
        this.idade = idade
        this.#cpf = cpf
        this.emprestados = []
    }
    mostrarDados(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(`CPF: ${this.#cpf}`)
        console.log("Emprestimos:")
        for(let i = 0; i < this.emprestados.length; i++){
            this.emprestados[i].mostrarDados()
            console.log("------------------------------------------")
        }
    }
    retornaCpf(){
        return this.#cpf
    }
}
export class Biblioteca{
    constructor(){
        this.livros = []
        this.usuarios = []
    }
    cadastrarLivro(){
        let id = prompt("informe o id do livo: ")
        for(let i = 0; i < length.this.livros; i++){
            if(id == this.livros[i].retornaId){
                console.log("livro já existe no acervo")
            }
        }
        let nome = prompt("informe o nome do livro: ")
        let autor = prompt("informe o nome do autor: ")
        let qnt = prompt("informe a quantidade: ")
    }
    cadastrarUsuario(){
        let cpf = prompt("informe o CPF do usuário: ")
        let nome = prompt("informe o nome do usuário: ")
        let idade = prompt("informe a idade do usuário: ")
    }
    emprestarLivro(){
        let id = prompt("infome o id do livro que deseja: ")
        let nome = prompt("informe o id do livro que deseja: ")
        let autor = prompt("informe o autor do livro que deseja: ")
    }
    devolverLivro(){
        let cpf = prompt("infome do cpf do usuário: ")
    }
    buscarUsuário(cpf){
        for(let i = 0; i < this.usuarios[i].length; i++){
            if(cpf == this.usuarios[i].retornaCpf()){
                this.usuarios[i].mostrarDados()
                break
            }
        }
    }
}