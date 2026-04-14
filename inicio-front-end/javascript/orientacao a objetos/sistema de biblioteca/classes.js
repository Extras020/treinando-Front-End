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
    retornaQnt(){
        return this.#qnt
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
        this.acervo = []
        this.usuarios = []
    }
    cadastrarLivro(livro){
        for(let i = 0; i < this.acervo.length; i++){
            if(livro.retornaId() == this.acervo[i].retornaId()){
                console.log("livro já existe no acervo!")
                return
            }
        }
        this.acervo.push(new Livro(livro.nome, livro.autor, livro.retornaId, livro.retornaQnt))
    }
    cadastrarUsuario(usuario){
        for(let i = 0; i < this.usuarios.length; i++){
            if(usuario.retornaCpf() == this.usuarios[i].retornaCpf()){
                console.log("usuário já existe no sistema!")
                return
            }
        }
        this.usuarios.push(new Usuario(usuario.nome, usuario.retornaCpf, usuario.idade))
    }
    emprestarLivro(livro, usuario){
        let id = prompt("infome o id do livro que deseja: ")
        let nome = prompt("informe o nome do livro que deseja: ")
        let autor = prompt("informe o autor do livro que deseja: ")
    }
    devolverLivro(livro, usuario){
        let cpf = prompt("infome do cpf do usuário: ")
        this.buscarUsuário()

    }
    buscarUsuário(cpf){
        for(let i = 0; i < this.usuarios.length; i++){
            if(cpf == this.usuarios[i].retornaCpf()){
                this.usuarios[i].mostrarDados()
                break
            }
        }
    }
    buscarLivro(id){
        for(let i = 0; i < this.acervo.length; i++){
            if(id == this.acervo[i].retornaId()){
                this.acervo[i].mostrarDados()
                break
            }
        }
    }
}