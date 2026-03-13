function segundoMaior(arr){
    let maior = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > maior){
            maior = arr[i]
        }
    }
    return cont
}
let numeros = [10, 5, 8, 20, 3]
console.log(segundoMaior(numeros))
//ainda não terminei esse exercicio