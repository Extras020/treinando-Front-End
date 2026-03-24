const prompt = require("prompt-sync")()
let aluno = {
    nome: "Esdras",
    idade: 23,

    endereco: {
        rua: "Tancredo Neves",
        cidade: "Natal",
        estado: "Rio Grande do Norte"
    },
    mostrarEndereco: function(){
        console.log(`${this.nome} tem ${this.idade} anos, mora em ${this.endereco.cidade}`)
    }
}