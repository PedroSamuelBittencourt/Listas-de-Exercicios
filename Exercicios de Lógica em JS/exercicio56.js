let nota1 = prompt('Digite a nota 1: ')
let nota2 = prompt('Digite a nota 2: ')
let nota3 = prompt('Digite a nota 3: ')

let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3

document.getElementById('media').innerHTML = `A média do aluno é: ${media}`

if(media >= 7.5 ){
    document.getElementById('resultado').innerHTML = `Aprovado`

}else{ 
    document.getElementById('resultado').innerHTML = `Reprovado`

}

