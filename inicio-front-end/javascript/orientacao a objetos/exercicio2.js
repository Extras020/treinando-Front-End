const prompt = require("prompt-sync")()
class Produto{
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }

    aplicarDesconto(porcentagem){
        this.preco = this.preco - (this.preco * (porcentagem/100))
    }
}
let nome = prompt("digite o nome do produto: ")
let preco = Number(prompt("digite o preço do produto: "))

let p1 = new Produto(nome, preco)

let porcentagem = Number(prompt("digite o percentual de desconto: "))
p1.aplicarDesconto(porcentagem)
console.log(`Preço após o desconto: R$ ${p1.preco.toFixed(2)}`)