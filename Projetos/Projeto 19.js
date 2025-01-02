/*Exemplos com Vetores e Arrays */

/*Utilizando o IN. Para cada posição em valores, na variavel composta, eu vou mostrar o valores[pos] */ 
let valores = [8, 1, 7, 4, 2, 9]
console.log(valores)
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}



/* Percurso para exibição do vetor forma tradicional 
let valores = [8, 1, 7, 4, 2, 9]
console.log(valores)
for (let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

/* let num = [5,8,2,9,3]
num.push(1) //Vai acrescenta o vetor 1 no final
num.sort() //Colocar o vetor em ordem crescente
console.log(num) // mostra todos os vetores na tela 
console.log(`O vetor tem ${num.length} posições`) // mostra quantas posições tem
console.log(`O primeiro valor do vetor é ${num[0]}`) //mostra o valor do primeiro vetor
//console.log(num[0]) - Mostra o num na posição 0. */