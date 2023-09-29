var entrada = require('prompt-sync')()
var nome = entrada("Qual é seu nome?")
var idade = entrada("Qual é sua idade?")
console.log(nome,", VC JÁ VIVEU",idade*365,"DIAS")