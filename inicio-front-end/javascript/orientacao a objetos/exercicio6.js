const prompt = require("prompt-sync")()
class Produto{
    constructor(nome, preco, qnt){
        this.nome = nome
        this.preco = preco
        this.qnt = qnt
    }
    valorTotal(){
        return this.qnt * this.preco
    }
    aplicarDesconto(porcentagem){
        this.preco = this.preco - (this.preco * (porcentagem/100))
    }
}
let n = Number(prompt("digite a quantidade de produtos que deseja cadastrar: "))
let produtos = [], nome, preco, qnt
for(let i = 0; i < n; i++){
    nome = prompt(`digite o nome do ${i+1}° produto: `)
    preco = Number(prompt(`digite o preco do ${i+1}° produto: `))
    qnt = Number(prompt(`digite a quantidade do ${i+1}° produto: `))
    produtos.push(new Produto(nome, preco, qnt))
}
let porcentagem = Number(prompt("digite o pecentual de desconto nos produtos: "))
for(let i = 0; i < n; i++){
    produtos[i].aplicarDesconto(porcentagem)
    console.log(`nome: ${produtos[i].nome}`)
    console.log(`preço final: R$ ${produtos[i].preco.toFixed(2)}`)
    console.log(`valor total em estoque: R$ ${produtos[i].valorTotal().toFixed(2)}`)
}