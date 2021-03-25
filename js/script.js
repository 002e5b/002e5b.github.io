let x = parseInt(prompt('Ano de nascimento'))

function inutil(x) {
    let idade = x - 2021
    idade = idade * -1
    return idade
}

function alerta() {
    alert(inutil(x))
}
