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
    menosUm(){
        this.#qnt--
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
        this.acervo.push(new Livro(livro.nome, livro.autor, livro.retornaId(), livro.retornaQnt))
    }
    cadastrarUsuario(usuario){
        for(let i = 0; i < this.usuarios.length; i++){
            if(usuario.retornaCpf() == this.usuarios[i].retornaCpf()){
                console.log("usuário já existe no sistema!")
                return
            }
        }
        this.usuarios.push(new Usuario(usuario.nome, usuario.retornaCpf(), usuario.idade))
    }
    emprestarLivro(dados){
        let pos_user
        let pos_book
        for(let i = 0; i < this.usuarios.length; i++){
            if(dados.cpf == this.usuarios[i].retornaCpf()){
                pos_user = i
                break
            }
        }
        for(let u = 0; u < this.acervo.length; u++){
            if(dados.id == this.acervo[u].retornaId()){
                pos_book = u
                break
            }
        }
        if(pos_user == undefined || pos_book == undefined){
            console.log(`informações inconsistentes, tente novamente!`)
            return
        }
        if(this.usuarios[pos_user].emprestados.length == 5){
            console.log("usuário já atingiu o limite de emprestimos, operação não pode ser realizada!")
            return
        }
        else if(this.usuarios[pos_user].emprestados.length < 5){
            if(this.acervo[pos_book].retornaQnt() == 0){
                console.log(`livro não disponível!`)
            }
            else{
                this.usuarios[pos_user].emprestados.push(this.acervo[pos_book])
                this.acervo[pos_book].menosUm()
            }
        }
    }
    devolverLivro(dados){
        let pos_user
        let pos_book
        for(let i = 0; i < this.usuarios.length; i++){
            if(dados.cpf == this.usuarios[i].retornaCpf()){
                pos_user = i
                break
            }
        }
        for(let u = 0; u < this.acervo.length; i++){
            if(dados.id == this.acervo[i].retornaId()){
                pos_book = u
                break
            }
        }
        if(pos_user == undefined || pos_book == undefined){
            console.log("informações inconsistentes, tente novamente!")
            return
        }
        
    }
    buscarUsuario(cpf){
        for(let i = 0; i < this.usuarios.length; i++){
            if(cpf == this.usuarios[i].retornaCpf()){
                console.log(`${this.usuarios[i].mostrarDados()}`)
                return
            }
        }
        console.log("usuário não encontrado!")
    }
    buscarLivro(id){
        for(let i = 0; i < this.acervo.length; i++){
            if(id == this.acervo[i].retornaId()){
                console.log(`${this.acervo[i].mostrarDados()}`)
                return
            }
        }
        console.log("livro não encontrado!")
    }
}