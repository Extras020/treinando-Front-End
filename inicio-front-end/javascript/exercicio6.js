const prompt = require("prompt-sync")()
let menor
let numero
let cont = 0
while(numero != -1){
    if(numero % 2 != 0){
        if(numero < menor){
            menor = numero
        }
    }
    numero = Number(prompt("digite um numero(-1 para encerrar): "))
    if(numero % 2 != 0 && cont == 0){
        cont++
        menor = numero
    }
}
console.log(`menor impar é: ${menor}`)
// DA PRA MELHORAR!!!