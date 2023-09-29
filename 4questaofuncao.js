//calculdo do imc 1º função

function imc(p,a){

calculo_imc = (p/(a*a))
console.log(calculo_imc)
return imc//retorno da funcão imc
}


// 2º funcao
function resultado_imc(imc){   ///o retorno da 1º função é o parametro da 2 função

if (imc < 19) {
    console.log("MAGREZA")
}
else if (imc>=19 && imc<24){
    console.log("PESO NORMAL")
}
else if (imc>=24 && imc<29){
    console.log("BARRIGA DE CHOP")
}
else if (imc>=29 && imc<35){
    console.log("OBESIDADE MUITO TORRESMO")
}
else{
    console.log("UHHH VAI MORRER,UHH VAI MORRER, VAI PRA ACADEMIA")
}

}

// CHAMANDO AS FUNÇÕES
//pra chamar a "função imc" é necessario de uma váriavel numIMC

var numIMC = imc(75,1.99) // numIMC recebeu imc

resultado_imc(numIMC) //numIMC vai ser o parametro


