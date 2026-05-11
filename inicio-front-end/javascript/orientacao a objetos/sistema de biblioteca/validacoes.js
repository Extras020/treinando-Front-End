export function lerNumero(){
    let validacao = false
    while(validacao == false){
        let entrada = prompt()
        entrada = entrada.trim()
        while(entrada == ''){
            console.log("entrada inválida, tente novamente!")
            let entrada = prompt()
            entrada = entrada.trim()
        }
        for(let i = 0; i < entrada.length; i++){
            if(entrada[i] < '0' || entrada[i] > '9'){
                console.log("entrada inválida, digite apenas letras!")
                break
            }
        }
        entrada = Number(entrada)
        validacao = true
    }
}
//falta terminar essa parte