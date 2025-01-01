

function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById ('txtf')
    let passo = document.getElementById ('txtp')
    let res = document.getElementById('res')

    if (ini.value == 0 || fim.value == 0 || passo.value == 0 ) {
        window.alert ('[ERRO] Faltam Dados!') //Se a variável ini, fim e passo forem igual a 0, vai aparecer o alerta de ERROR
    } else {
        res.innerHTML = 'Contando: <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0 ) {
            window.alert('Passo Inválido! Considerando passo 1! ') // Se a variável P for menor igual a 0 vai aparecer a mensagem.
        }
        if (i < f) {
            // Contagem Crescente
            for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p){
                 res.innerHTML += ` ${c} \u{1F449}`
            }
        }
         res.innerHTML += `\u{1F3C1}` // Emoji ao final da contagem
       
    }
}

