const prompt = require("prompt-sync")()
class Cofre{
    #senha
    #aberto
    constructor(senha){
        this.#senha = senha
        this.#aberto = false
    }
    abrir(tentativa){
        if(tentativa == this.#senha){
            this.#aberto = true
        }
        else{
            console.log("senha incorreta!")
        }
    }
    fechar(){
        this.#aberto = false
    }
    status(){
        if(this.#aberto == true){
            console.log("cofre aberto!")
            return true
        }
        else{
            console.log("cofre fechado!")
            return false
        }
    }
}
let senha = prompt("digite uma senha para o seu cofre: ")
let c1 = new Cofre(senha)
let tentativa = prompt("digite uma senha para abrir o cofre: ")
c1.abrir(tentativa)
let estado = c1.status()
if(estado == true){
    let escolha = Number(prompt("gostaria de fechar o cofre?(digite 1 para sim)"))
    if(escolha == 1){
        c1.fechar()
        c1.status()
    }
    else{
        c1.status()
    }
}