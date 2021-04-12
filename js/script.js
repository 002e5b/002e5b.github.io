let x = parseInt(prompt('Ano de nascimento'))

function inutil(x) {
    let idade = x - 2021
    idade = idade * -1
    return idade
}

function alerta() {
    alert(inutil(x))
}

function dado20(){
    let dado = Math.floor(Math.random() * 20) + 1 
    console.log(dado)
    if (dado === 1){
        $('#d1').modal('show')
       } else if(dado >= 2 && dado <= 5){
        $('#d6').modal('show')
       } else if(dado >= 6 && dado <= 12){
        $('#d12').modal('show')
      } else if(dado >= 13 && dado <= 19){
        $('#d19').modal('show')
      } else if(dado = 20){
        $('#d20').modal('show')
      }
}

