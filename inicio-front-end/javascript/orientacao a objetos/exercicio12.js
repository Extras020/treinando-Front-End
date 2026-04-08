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
let funcionarios = []
let escolha = 0
let nome = "qualquer", salario = 0, bonus = 0, projetos = 0
for(let i = 0; i < 4; i++){
    escolha = Number(prompt("digite 1 para adicionar gerente ou 2 para adicionar desenvolvedor: "))
    if(escolha == 1){
        nome = prompt("digite o nome do gerente: ")
        salario = Number(prompt("digite o salario do gerente: "))
        bonus = Number(prompt("digite o bonus"))
        funcionarios.push(new Gerente(nome, salario, bonus))
    }
    else if(escolha == 2){
        nome = prompt("digite o nome do desenvolvedor: ")
        salario = Number(prompt("digite o salario do desenvolvedor: "))
        projetos = Number(prompt("digite a quantidade de projetos até agora: "))
        funcionarios.push(new Desenvolvedor(nome, salario, projetos))
    }
}
console.log("relação de funcionários:")
for(let i = 0; i < funcionarios.length; i++){
    funcionarios[i].mostrarDados()
    console.log(`salário final: R$ ${funcionarios[i].calcularSalarioFinal()}`)
}