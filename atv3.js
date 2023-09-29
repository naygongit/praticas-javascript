var entrada = require('prompt-sync')()
var salario_old = entrada("Qual é seu salario?")
var salario_novo

var salario_novo = ((salario_old*0.15) + salario_old)



console.log(salario_old,", ",salario_novo)