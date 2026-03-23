const prompt = require("prompt-sync")() 
let cont = 0 
let media = 0 
let numero = Number(prompt("digite um numero (9999 para encerrar): ")) 
cont++ 
if(numero == 9999){ 
    console.log('nenhum valor digitado') 
} 
while(numero != 9999){ 
    media = media + numero 
    numero = Number(prompt("digite um numero (9999 para encerrar): ")) 
    cont++ 
    if(numero == 9999){ 
        cont-- 
    } 
} 
if(cont > 0){ 
    media = media / cont 
    console.log(`a media é: ${media}`) 
}