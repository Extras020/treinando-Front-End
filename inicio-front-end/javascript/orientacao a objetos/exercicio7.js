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
        console.log(`saldo na conta de ${this.titular}: R$ ${this.saldo.toFixed(2)}`)
    }
}
let n = Number(prompt("digite o numero de contas: "))
let titular, saldo, contas = [], i = 0
for(i = 0; i < n; i++){
    titular = prompt(`digite o nome do titular ${i+1}: `)
    saldo = Number(prompt(`digite o saldo do titular ${i+1}: `))
    contas.push(new ContaBancaria(titular, saldo))
}
let valor = Number(prompt("digite um valor a ser depositado na conta com menos dinheiro: "))
let menor = contas[0].saldo, pos = 0
for(i = 1; i < n; i++){
    if(contas[i].saldo < menor){
        menor = contas[i].saldo
        pos = i
    }
}
contas[pos].depositar(valor)
contas[pos].mostrarSaldo()
valor = Number(prompt("digite um valor a ser sacado da conta com mais dinheiro: "))
let maior = contas[0].saldo
for(i = 1; i < n; i++){
    if(contas[i].saldo > maior){
        maior = contas[i].saldo
        pos = i
    }
}
contas[pos].sacar(valor)
contas[pos].mostrarSaldo()
valor = Number(prompt("digite um valor para ser transferido da conta 1 para a conta 3: "))
contas[0].transferir(contas[2], valor)
contas[0].mostrarSaldo()
contas[2].mostrarSaldo()