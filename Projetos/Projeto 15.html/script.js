/* Função em JS que troca as imagens da pasta */
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
     if (fano.value == 0 || fano.value > ano ) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
 
        if (fsex[0].checked)    {
            gênero =   'Homem'
            if (idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'criança menino.jpg')
            } else if (idade <21)  {
                //jovem
                img.setAttribute('src', 'jovem homem.jpg')
            } else if (idade <50){
                //adulto
                img.setAttribute('src', 'homem adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'criança menina.jpg')
            } else if (idade <21)  {
                //jovem
                img.setAttribute('src', 'jovem mulher.jpg')
            } else if (idade <50){
                //adulto
                img.setAttribute('src', 'mulher adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }  
        res.style.testAling = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        }
}
        


