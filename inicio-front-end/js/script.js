let numero = parseInt(prompt("digite um numero"))
let i
let cont = 0
for(i = 1; i <= numero; i++){
    if(numero%i == 0){
        cont++
    }
}
if(cont != 2){
    alert("não é primo")
}
else{
    alert("é primo")
}