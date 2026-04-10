class Biblioteca{
    constructor(){
        this.livros = []
        this.usuarios = []
    }
    adicionarLivro(id){
        let cont = 0
        for(let i = 0; i < length.livros; i++){
            if(id == this.livros[i].retornaId){
                cont++
            }
        }
    }
}
class Livro{
    #id
    #qnt
    constructor(nome, autor, id, data_publi, qnt){
        this.nome = nome
        this.autor = autor
        this.#id = id
        this.data_publi = data_publi
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
class Usuario{
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
        for(let i = 0; i < length.emprestados; i++){
            console.log(`Nome: ${this.emprestados[i].mostrarDados()}`)
            console.log("------------------------------------------")
        }
    }
}
class Data_Publi{
    construcutor(dia, mes, ano){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}