let nota1 = prompt('Digite a nota 1: ')
let nota2 = prompt('Digite a nota 2: ')
let nota3 = prompt('Digite a nota 3: ')
let nota4 = prompt('Digite a nota 4: ')

let mediaponderada = ((nota1*3) + (nota2*5) + (nota3*6) + (nota4*6)) / 20

document.getElementById('media').innerHTML = `A média do aluno será: ${mediaponderada}`

if(mediaponderada > 6){
    
    document.getElementById('resultado').innerHTML = `Aprovado`

}else{ 
    document.getElementById('resultado').innerHTML = `Reprovado`

}
