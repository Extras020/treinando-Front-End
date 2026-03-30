const prompt = require("prompt-sync")()
class Termostato{
    #temperatura
    constructor(){
        this.#temperatura = 10
    }
    aumentarTemperatura(valor){
        if(this.#temperatura + valor > 35){
            console.log("temperatura máxima atingida!")
        }
        else{
            this.#temperatura = this.#temperatura + valor
        }
    }
}