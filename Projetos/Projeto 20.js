/* Recursividade 
function fatorial(n){
  if (n == 1) {
    return 1 
  } else {
    return n * fatorial(n-1)
  }
}
console.log(fatorial(5))
*/

/* Mostrar o Fatorial de um numero 
function fatorial(n) {
  let fat = 1 
  for (let c=n; c >1; c--)  {
    fat*=c
  }
  return fat 
}
console.log(fatorial(10))
*/


/* Função dentro de uma variável
let v = function(x) {
    return x*2
}
console.log(v(5))
*/


/*Soma de n1 + n2, se não tiver valor ficará em 0   
function soma(n1=0, n2=0) {
  return n1 + n2
}
console.log(soma(2, 5))
*/





/* Se N dividido por 2 for resto 0 então é par, se não impar.
function  parimp(n) {
    if (n%2 == 0) {
    return 'par!' 
  } else {
    return 'impar!'
   }
}
   console.log(parimp(4))
*/
