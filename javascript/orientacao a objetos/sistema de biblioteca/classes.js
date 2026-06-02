import fs from 'fs'

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
        console.log(`Quantidade no acervo: ${this.#qnt}`)
        console.log(`Identificador: ${this.#id}`)
    }
    get Id(){
        return this.#id
    }
    get quantidade(){
        return this.#qnt
    }
    menosUm(){
        this.#qnt--
    }
    maisUm(){
        this.#qnt++
    }
    toJSON(){
        return {
            nome: this.nome,
            autor: this.autor,
            id: this.#id,
            qnt: this.#qnt
        }
    }
}
export class Usuario{
    #cpf
    constructor(nome, cpf, idade, contato){
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
        if(this.emprestados.length == 0){
            console.log("nenhum emprestimo realizado por esse usuário")
        }
        else{
           for(let i = 0; i < this.emprestados.length; i++){
                console.log(`${this.emprestados[i]}`)
                console.log("--------------------------------------------")
            }
        }
    }
    get cpf(){
        return this.#cpf
    }
    toJSON(){
        return {
            nome: this.nome,
            idade: this.idade,
            cpf: this.#cpf,
            emprestados: this.emprestados
        }
    }
}
export class Biblioteca{
    constructor(){
        this.acervo = []
        this.usuarios = []
    }
    cadastrarLivro(livro){
        let busca_livro = this.buscarLivro(livro.Id)
        if(busca_livro == undefined){
            this.acervo.push(new Livro(livro.nome, livro.autor, livro.Id, livro.quantidade))
            this.salvarAcervo()
            console.log("livro cadastrado!")
        }
        else{
            console.log("livro já existe no sistema!")
            return
        }
    }
    cadastrarUsuario(usuario){
        let busca_usuario = this.buscarUsuario(usuario.cpf)
        if(busca_usuario == undefined){
            this.usuarios.push(new Usuario(usuario.nome, usuario.cpf, usuario.idade))
            this.salvarUsuario()
            console.log("usuário cadastrado!")
        }
        else{
            console.log("usuário já existe no sistema!")
            return
        }
    }
    emprestarLivro(dados){
        let pos_user = this.buscarUsuario(dados.cpf)
        let pos_book = this.buscarLivro(dados.id)
        if(pos_user == undefined){
            console.log("usuário não encontrado, tente novamente!")
            return
        }
        if(pos_book == undefined){
            console.log("livro não encontrado, tente novamente!")
            return
        }
        if(this.usuarios[pos_user].emprestados.length == 5){
            console.log("usuário já atingiu o limite de emprestimos, operação não pode ser realizada!")
            return
        }
        else if(this.usuarios[pos_user].emprestados.length < 5){
            if(this.acervo[pos_book].quantidade == 0){
                console.log(`livro não disponível!`)
                return
            }
            else{
                this.usuarios[pos_user].emprestados.push(this.acervo[pos_book].Id)
                this.acervo[pos_book].menosUm()
            }
        }
        this.salvarUsuario()
        this.salvarAcervo()
        console.log("empréstimo realizado!")
    }
    devolverLivro(dados){
        let pos_user = this.buscarUsuario(dados.cpf)
        let pos_book
        if(pos_user == undefined){
                console.log("usuário não encontrado, tente novamente!")
                return
        }
        for(let i = 0; i < this.usuarios[pos_user].emprestados.length; i++){
            if(dados.id == this.usuarios[pos_user].emprestados[i]){
                pos_book = i
                break
            }
        }
        if(pos_book == undefined){
            console.log("livro não pertence ao usuário, tente novamente!")
            return
        }
        this.usuarios[pos_user].emprestados.splice(pos_book, 1)
        for(let i = 0; i < this.acervo.length; i++){
            if(dados.id == this.acervo[i].Id){
                this.acervo[i].maisUm()
                this.salvarAcervo()
                this.salvarUsuario()
                console.log("devolução realizada!")
                return
            }
        }
    }
    buscarUsuario(cpf){
        for(let i = 0; i < this.usuarios.length; i++){
            if(cpf == this.usuarios[i].cpf){
                this.usuarios[i].mostrarDados()
                return i
            }
        }
        return
    }
    buscarLivro(id){
        for(let i = 0; i < this.acervo.length; i++){
            if(id == this.acervo[i].Id){
                this.acervo[i].mostrarDados()
                return i
            }
        }
        return
    }
    listarUsuarios(){
        for(let i = 0; i < this.usuarios.length; i++){
            this.usuarios[i].mostrarDados()
            console.log("--------------------------------------------")
        }
    }
    listarAcervo(){
        for(let i = 0; i < this.acervo.length; i++){
            this.acervo[i].mostrarDados()
            console.log("--------------------------------------------")
        }
    }
    removerUsuario(cpf){
        let pos_user = this.buscarUsuario(cpf)
        if(pos_user == undefined){
            console.log("usuário não encontrado, tente novamente!")
            return
        }
        else{
            if(this.usuarios[pos_user].emprestados.length > 0){
                console.log("usuário possui empréstimos pendentes, por favor regularize!")
                return
            }
            else{
                this.usuarios.splice(pos_user, 1)
                console.log("usuário removido!")
            }
        }
    }
    removerLivro(id){
        let pos_book = this.buscarLivro(id)
        let u, l, i, cont = 0
        if(pos_book == undefined){
            console.log("livro não encontrado, tente novamente!")
            return
        }
        else{
            for(u = 0; u < this.usuarios.length; u++){
                for(l = 0; l < this.usuarios[u].emprestados.length; l++){
                    if(this.usuarios[u].emprestados[l] == id){
                        cont++
                        break
                    }
                }
            }
            if(cont != 0){
                console.log(`ainda há ${cont} emprestimos ativos para esse livro, operação não pode ser realizada!`)
                return
            }
            else{
                this.acervo.splice(pos_book, 1)
                console.log("livro removido!")
            }
        }
    }
    salvarUsuario(){
        let dados = JSON.stringify(this.usuarios, null, 4)
        fs.writeFileSync(
            "usuarios.json",
            dados
        )
    }
    salvarAcervo(){
        let dados = JSON.stringify(this.acervo, null, 4)
        fs.writeFileSync(
            "acervo.json",
            dados
        )
    }
}