const prompt = require("prompt-sync")()
class Celular{
    #bateria
    constructor(){
        this.#bateria = 100
    }
    usar(appTempo){
        let carga_utilizada = (appTempo/100) * this.#bateria
        if(this.#bateria - carga_utilizada < 0){
            console.log("não há carga disponivel!")
        }
        else{
            this.#bateria = this.#bateria - carga_utilizada
        }
    }
    carregar(valor){
        if(this.#bateria + valor > 100){
            console.log("sobrecarga de bateria!")
        }
        else{
            this.#bateria = this.#bateria + valor
        }
    }
    mostrarBateria(){
        console.log(`bateria: ${this.#bateria}%`)
    }
}
let c1 = new Celular()
let valor = Number(prompt("digite um tempo de uso da bateria: "))
c1.usar(valor)
c1.mostrarBateria()
valor = Number(prompt("digite um valor para recarregar a bateria: "))
c1.carregar(valor)
c1.mostrarBateria()