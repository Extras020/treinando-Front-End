const prompt = require("prompt-sync")()
class Celular{
    #bateria
    constructor(){
        this.#bateria = 100
    }
    usar(appTempo){
        if(this.#bateria - appTempo < 0){
            console.log("não há carga disponivel!")
        }
        else{
            this.#bateria = this.#bateria - appTempo
        }
    }
    carregar(valor){
        if(this.#bateria + valor > 0){
            console.log("sobrecarga de bateria!")
        }
        else{
            this.#bateria + valor
        }
    }
    mostrarBateria(){
        console.log(`bateria: ${this.#bateria}%`)
    }
}