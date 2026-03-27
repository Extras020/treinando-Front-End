const prompt = require("prompt-sync")()
class Aluno{
    constructor(nome, nota1, nota2){
        this.nome = nome
        this.nota1 = nota1
        this.nota2 = nota2
    }
    calcularMedia(){
        return (this.nota1 + this.nota2)/2
    }
}
let n = Number(prompt("digite a quantidade de alunos: "))
let alunos = [], nome, nota1, nota2
for(let i = 0; i < n; i++){
    nome = prompt(`digite o nome do ${i+1}° aluno: `)
    nota1 = Number(prompt(`digite a nota 1 do ${i+1}° aluno: `))
    nota2 = Number(prompt(`digite a nota 2 do ${i+1}° aluno: `))
    alunos.push(new Aluno(nome, nota1, nota2))
}
for(let i = 0; i < n; i++){
    console.log(alunos[i].nome)
    console.log(`media do aluno: ${alunos[i].calcularMedia().toFixed(1)}`)
}