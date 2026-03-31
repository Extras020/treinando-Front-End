const prompt = require("prompt-sync")()
class Termostato{
    #temperatura
    #temperaturainicial
    constructor(valor){
        this.#temperatura = valor
        this.#temperaturainicial = valor
    }
    aumentarTemperatura(valor){
        if(this.#temperatura + valor > this.#temperaturainicial*1.20){
            console.log("temperatura máxima atingida!")
        }
        else{
            this.#temperatura = this.#temperatura + valor
        }
    }
    diminuirTemperatura(valor){
        if(this.#temperatura - valor < this.#temperaturainicial*0.80){
            console.log("temperatura mínima atingida!")
        }
        else{
            this.#temperatura = this.#temperatura - valor
        }
    }
    mostrartemperatura(){
        console.log(`temperatura atual: ${this.#temperatura}°C`)
    }
}
let valor = Number(prompt("digite a temperatura inicial do termostato: "))
let t1 = new Termostato(valor)
valor = Number(prompt("digite um valor para aumentar a temperatura: "))
t1.aumentarTemperatura(valor)
valor = Number(prompt("digite um valor para diminuir a temperatura: "))
t1.diminuirTemperatura(valor)
t1.mostrartemperatura()