let b = 4
let e = -1
let pot = 1
if(e > 0){
    for(let i = 1; i <= e; i++){
        pot = pot * b
    }
}
else if(e < 0){
    for(let i = 1; i <= -e; i++){
        pot = pot * (1/b)
    }
}
console.log(`potencia é: ${pot}`)