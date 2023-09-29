const scanf = require('prompt-sync')()
var regiao,condicao

console.log("\n              TABELA DE PREÇO                    ")
console.log(" __________________________________________________")
console.log("|   REGIÃO        |    1- IDA    |  2- IDA E VOLTA |")
console.log("----------------------------------------------------")
console.log("| 1- NORTE        |   500,00 R$  |      950,00 R$  |")
console.log("| 2- NORDESTE     |   450,00 R$  |      850,00 R$  |")
console.log("| 3- SUDESTE      |   400,00 R$  |      750,00 R$  |")
console.log("| 4- CENTRO-OESTE |   450,00 R$  |      850,00 R$  |")
console.log("| 5- SUDESTE      |   400,00 R$  |      750,00 R$  |")
console.log("----------------------------------------------------")
console.log("")

regiao  = scanf("ESCOLHA A REGIÃO: ")
condicao= scanf("ESCOLHA A CONDIÇÃO: ")

if ((regiao==1) && (condicao ==1)){
    console.log("REGIÃO NORTE VIAGEM APENAS DE IDA")
}
else if((regiao==1) && (condicao==2)){
    console.log("REGIÃO NORTE VIAGEM DE IDA E VOLTA")
}
else if((regiao==2) && (condicao==1)){
    console.log("REGIÃO NORDESTE VIAGEM DE IDA") 
}
else if((regiao==2) && (condicao==2)){
    console.log("REGIÃO NORDESTE VIAGEM DE IDA E VOLTA")
}
else if((regiao==3) && (condicao==1)){
    console.log("REGIÃO SUDESTE VIAGEM DE IDA")
}
else if((regiao==3) && (condicao==2)){
    console.log("REGIÃO SUDESTE VIAGEM DE IDA E VOLTA")
}
else if((regiao==4) && (condicao==1)){
    console.log("REGIÃO CENTRO-OESTE VIAGEM DE IDA")
}
else if((regiao==4) && (condicao==2)){
    console.log("REGIÃO CENTRO-OESTE VIAGEM DE IDA E VOLTA")
}
else if((regiao==5) && (condicao==1)){
    console.log("REGIÃO SUDESTE VIAGEM DE IDA")
}
else if((regiao==5) && (condicao==2)) {
    console.log("REGIÃO SUDESTE VIAGEM DE IDA E VOLTA")
}
else{
    console.log("SELEÇÃO INCORRETA , DIGITE A REGIÃO E A CONDIÇÃO CORRETA")
}

