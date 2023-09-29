console.log()
const notas = [7,8.5,9,10,6]
console.log("MEU VETOR:",notas)

console.log()
console.log("Elemento da 3º posição do vetor:",notas[3])
console.log()

console.log("Primeira Execucao")
for(let i = 0; i< notas.length; i++){
    console.log(notas[i])

}

//outra maneira
console.log("Segunda Execucao multiplcado por 2")
for(let nota of notas){
   console.log(nota*2)
}

