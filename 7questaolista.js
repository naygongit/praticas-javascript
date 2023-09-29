var entrada = require('prompt-sync')()
var numero = entrada("Digite um numero?")
resto = numero % 3

if(resto == 0){
    console.log("O numero é multiplo de 3")

}
else{
    console.log("O numero ñ é multiplo de 3")
}
