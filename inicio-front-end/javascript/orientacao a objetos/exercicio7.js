const prompt = require("prompt-sync")()
class ContaBancaria{
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
    }
    mostrarSaldo(){
        console.log(`saldo na conta: R$ ${this.saldo.toFixed(2)}`)
    }
}
let n = Number