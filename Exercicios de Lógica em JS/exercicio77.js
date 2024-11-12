let nota1 = parseFloat(prompt("Digite a nota 1: "))
let nota2 = parseFloat(prompt("Digite a nota 2: "))
let nota3 = parseFloat(prompt("Digite a nota 3: "))
let nota4 = parseFloat(prompt("Digite a nota 4: "))
let nota5 = parseFloat(prompt("Digite a nota 5: "))

let media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5

document.getElementById("numero").innerHTML = `A média das notas é: ${media}`