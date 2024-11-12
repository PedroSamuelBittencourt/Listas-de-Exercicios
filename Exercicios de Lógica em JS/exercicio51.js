let nota1 = prompt("Digite a nota 1: ")
let nota2 = prompt("Digite a nota 2: ")
let nota3 = prompt("Digite a nota 3: ")
let nota4 = prompt("Digite a nota 4: ")
let nota5 = prompt("Digite a nota 5: ")

let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5)) / 5


document.getElementById("media").innerHTML = `Média Aritmética: ${media}` 