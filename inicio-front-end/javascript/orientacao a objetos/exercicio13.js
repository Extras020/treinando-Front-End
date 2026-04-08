const prompt = require("prompt-sync")()
class Funcionario{
    constructor(nome, endereco){
        this.nome = nome
        this.endereco = endereco
    }
}
class Endereço{
    #rua
    #cidade
    #estado
    constructor(rua, cidade, estado){
        this.#rua = rua
        this.#cidade = cidade
        this.#estado = estado
    }
    mostrarEndereco(){
        console.log(`Rua: ${this.#rua}`)
        console.log(`Cidade: ${this.#cidade}`)
        console.log(`Estado: ${this.#estado}`)
    }
}
let nome = prompt("digite o nome do funcionario: ")
let rua = prompt("digite o nome da rua do funcionario: ")
let cidade = prompt("digite o nome da cidade do funcionario: ")
let estado = prompt("digite o nome do estado do funcionario: ")
let E1 = new Endereço(rua, cidade, estado)
let F1 = new Funcionario(nome, E1)
console.log(`Nome: ${F1.nome}`)
F1.endereco.mostrarEndereco()