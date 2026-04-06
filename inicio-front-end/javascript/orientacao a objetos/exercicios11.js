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
        return this.#salario.toFixed(2)
    }
}
class Gerente extends Funcionario{
    constructor(nome, salario, bonus){
        super(nome, salario)
        this.bonus = bonus
    }
    calcularSalarioFinal(){
        return this.mostrarDados() + this.bonus
    }
}
class Desenvolvedor extends Funcionario{
    constructor(nome, salario, projetos){
        super(nome, salario)
        this.projetos = projetos
    }
    calcularSalarioFinal(){
        return this.mostrarDados() + this.projetos * 575
    }
}
// falta acabar