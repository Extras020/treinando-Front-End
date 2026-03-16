function removerDuplicados(arr){
    let temp
    for(let i = 0; i < arr.length; i++){
        for(u = i + 1; u < arr.length; u++){
            if(arr[u] == arr[i]){
                arr[u] = arr[u + 1]
            }
        }
    }
    return arr
}
let numeros = [1, 2, 2, 3, 4, 4, 5]
console.log(removerDuplicados(numeros))
