function Removeduplicados(arr){
    let u = 1
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == arr[u]){
            arr[u]
        }
    }
    return arr
}
let numeros = [5, 2, 8, 2, 9, 5, 1]
console.log(Removeduplicados(numeros))
//terminar amanhã
