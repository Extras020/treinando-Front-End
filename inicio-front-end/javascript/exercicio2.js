let n = 678
let cont = 0
for(let i = 1; i <= 5; i++){
    if(n % i == 0){
        cont++
    }
}
if(cont == 2){
    console.log('eh primo')
}
else{
    console.log('nao eh primo')
}