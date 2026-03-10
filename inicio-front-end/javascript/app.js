const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Digite o primeiro numero: ", function(n1) {
    rl.question("Digite o segundo numero: ", function(n2) {
        n1 = Number(n1)
        n2 = Number(n2)

        if(n1 > n2){
            console.log(`maior numero: ${n1}`)
        }
        else if(n2 > n1){
            console.log(`maior numero: ${n2}`)
        }
        else{
            console.log("os numeros são iguais")
        }
        rl.close()
    })
})