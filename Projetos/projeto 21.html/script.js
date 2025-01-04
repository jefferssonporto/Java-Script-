let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

//selenção dos numeros de 1 a 100
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}
//identifcando numeros que sejam diferente de 1 a 100
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false 
    }   
}


function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
       valores.push(Number(num.value)) 
       let item = document.createElement('option')  // criação do OPTION para add os itens a lista 
       item.text = `Valor ${num.value} adicionado. ` // texto da lista 
       lista.appendChild(item) // retorno visual da lista
       res.innerHTML = '' //zerar o valor ao att a pagina 
    } else {
        window.alert('Valor inválido ou já encontrado na lista.') //mensagem de error caso o numero seja diferente de 1 a 100
    }
    num.value = '' //zerar o valor ao att a pagina 
    num.focus() //voltar ao foco da caixa de resposta ao att a pagina
}

function finalizar () {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0 
       
        for (let pos in valores ) { 
            //soma dos valores
            soma += valores[pos]
             //Vai Analisar qual deles é maior ou menor
            if (valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/ tot //média 
        // Respsota da Verificação
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior} </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor} </p>`
        res.innerHTML += `<p> Somando todos os valores temos ${soma} </p>`
        res.innerHTML += `<p> A média dos valores digitados é  ${media} </p>`
    }
}

