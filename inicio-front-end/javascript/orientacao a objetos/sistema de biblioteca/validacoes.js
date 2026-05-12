import promptSync from 'prompt-sync'
const prompt = promptSync()
export function lerNumero(intervalo){
    let validacao = false
    let entrada_valida
    let entrada
    while(validacao == false){
        entrada_valida = true
        entrada = prompt()
        entrada = entrada.trim()
        while(entrada == ''){
            console.log("entrada inválida, tente novamente!")
            entrada = prompt()
            entrada = entrada.trim()
        }
        for(let i = 0; i < entrada.length; i++){
            if(entrada[i] < '0' || entrada[i] > '9'){
                console.log("entrada inválida, digite apenas números!")
                entrada_valida = false
                break
            }
        }
        if(entrada_valida == true){
            if(Number(entrada) < 0 || Number(entrada) > intervalo){
                console.log("Intervalo de entrada incorreto, tente novamente!")
                validacao = false
            }
            else{
                validacao = true
                return Number(entrada)
            }
        }
    }
}