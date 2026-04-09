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
    }
}
class Data_Publi{
    construcutor(dia, mes, ano){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}