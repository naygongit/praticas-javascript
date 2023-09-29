var entrada = require('prompt-sync')()

var n1 = entrada("Qual primeiro numero? ")
var n2 = entrada("Qual segundo numero? ")

soma = parseInt(n1) + parseInt(n2)

console.log("A soma dos numeros é ,",soma)