const prompt = require("prompt-sync")() 
class Retangulo{ 
    constructor(largura, altura){ 
        this.largura = largura 
        this.altura = altura 
    } 
    area(){ 
        return this.largura * this.altura 
    } 
    perimetro(){ return 2 * (this.largura + this.altura) 
    } 
} 
let largura = Number(prompt("digite a largura do retângulo: ")) 
let altura = Number(prompt("digite a altura do retângulo: ")) 
let r1 = new Retangulo(largura, altura) 
console.log(`a área do retângulo é: ${r1.area()}`) 
console.log(`p perímetro do retângulo é: ${r1.perimetro()}`)
