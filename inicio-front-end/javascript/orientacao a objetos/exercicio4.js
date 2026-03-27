const prompt = require("prompt-sync")()
class contaBancaria{
    constructor(titular, saldo){
        this.titular = titular
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo = this.saldo + valor
    }
    sacar(valor){
        this.saldo = this.saldo - valor
    }
    transferir(contaDestino, valor){
        contaDestino.saldo = contaDestino.saldo + valor
        this.saldo = this.saldo - valor
        console.log("Transferência realizada!")
    }
}
let titular = prompt("Digite o nome do titular da conta 1: ")
let saldo = Number(prompt("Digite o saldo na conta do titular da conta 1: "))
let conta1 = new contaBancaria(titular, saldo)
titular = prompt("Digite o nome do titular da conta 2: ")
saldo = Number(prompt("Digite o saldo na conta do titular da conta 2: "))
let conta2 = new contaBancaria(titular, saldo)

let valor = Number(prompt("digite um valor para transferir da conta 1 para a conta 2: "))
conta1.transferir(conta2, valor)
console.log(`saldo na conta 1: ${conta1.saldo}`)
console.log(`saldo na conta 2: ${conta2.saldo}`)