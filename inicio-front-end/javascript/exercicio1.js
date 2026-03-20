let n = 10 
let vet = [2, 6, 9, 4, 7, 12, 14, 15, 95, 87] 
let maior = vet[0] 
for(let i = 1; i < vet.length; i++){ 
    if(vet[i] > maior){ 
        maior = vet[i] 
    } 
} 
console.log(`maior valor: ${maior}`)