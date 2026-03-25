const prompt = require("prompt-sync")()
class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    apresentar(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos!!!`)
    }
}
let nome = prompt("digite um nome: ")
let idade = Number(prompt("digite uma idade: "))

let p1 = new Pessoa(nome, idade)

p1.apresentar()