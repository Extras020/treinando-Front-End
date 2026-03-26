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
    transferir(titular, valor){
        this.saldo = this.saldo - valor
        
    }
}
/// ainda vou terminar