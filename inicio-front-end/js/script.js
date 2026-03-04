let num = parseInt(prompt("digite um numero"))
let i
let ultimo, fibonacci
for(i = 1; i <= num; i++){
    if(i == 1 || i == 2){
        alert(1)
        fibonacci = 2
    }
    else{
        fibonacci = ultimo + i
        alert(fibonacci)
        ultimo = i
    }
}