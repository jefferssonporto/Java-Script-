function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value == 0 ) {
        window.alert('Por favor digite um número!') // Se o número for 0 ou nada vai aparecer a mensagem de erro.     
    } else {
        let n = Number(num.value) 
        let c = 1
        tab.innerHTML = '' //Limpa a tabuada para mostrar a próxima, substitui
        while (c <= 10) {
            let item = document.createElement('option') //criação a opção do SELECT do HTML.
                item.text = `${n} x ${c} = ${n*c}` // Calcula a operação
                item.value = `tab${c}` //Para PHP na ordem ficaria tab1,tab2, tab3, tab4....
                tab.appendChild(item)
                c++
        }
    }
    
}

