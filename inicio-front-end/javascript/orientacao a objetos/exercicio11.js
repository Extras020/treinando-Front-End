const prompt = require("prompt-sync")()
class Funcionario{
    #salario
    constructor(nome, salario){
        this.nome = nome
        this.#salario = salario
    }
    aumentarSalario(valor){
        if(valor > 0){
            this.#salario = this.#salario + valor
        }
    }
    mostrarDados(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Salário: R$ ${this.#salario.toFixed(2)}`)
    }
    retornaSalario(){
        return Number(this.#salario.toFixed(2))
    }
}
class Gerente extends Funcionario{
    constructor(nome, salario, bonus){
        super(nome, salario)
        this.bonus = bonus
    }
    calcularSalarioFinal(){
        return (this.retornaSalario() + this.bonus).toFixed(2)
    }
}
class Desenvolvedor extends Funcionario{
    constructor(nome, salario, projetos){
        super(nome, salario)
        this.projetos = projetos
    }
    calcularSalarioFinal(){
        return (this.retornaSalario() + this.projetos * 575).toFixed(2)
    }
}
let nome = prompt("digite o nome do funcionario(gerente): ")
let salario = Number(prompt("digite o Salário(do gerente): "))
let bonus = Number(prompt("digite o bonus do gerente: "))
let G1 = new Gerente(nome, salario, bonus)
nome = prompt("digite o nome do funcionario(Desenvolvedor): ")
salario = Number(prompt("digite o Sálario do desenvolvedor: "))
let projetos = Number(prompt("digite a quantidade de projetos do desenvolvedor ate agora: "))
let D1 = new Desenvolvedor(nome, salario, projetos)
console.log(`Gerente: `)
G1.mostrarDados()
console.log(`Salário final: R$ ${G1.calcularSalarioFinal()}`)
console.log(`Desenvolvedor: `)
D1.mostrarDados()
console.log(`Salário final: R$ ${D1.calcularSalarioFinal()}`)