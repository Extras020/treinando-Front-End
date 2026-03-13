function filtrarpositivos(arr){
    let quociente = 0
    for(let i = 0; i < arr.length; i++){
        quociente = quociente + arr[i]
    }
    quociente = quociente / arr.length
    return quociente
}
let numeros = [5, -2, 7, -3, 9]
console.log(filtrarpositivos(numeros))
