let numero1 = parseFloat(prompt("Digite o primeiro número: "))
let numero2 = parseFloat(prompt("Digite o segundo número: "))
let numero3 = parseFloat(prompt("Digite o terceiro número: "))
let numero4 = parseFloat(prompt("Digite o quarto número: "))
let numero5 = parseFloat(prompt("Digite o quinto número: "))

document.getElementById("numero").innerHTML = `O primeiro número elevado ao quadrado é: ${Math.pow(numero1, 2)}`
document.getElementById("numero").innerHTML += `</br> O segundo número elevado ao quadrado é: ${Math.pow(numero2, 2)}`
document.getElementById("numero").innerHTML += `</br> O terceiro número elevado ao quadrado é: ${Math.pow(numero3, 2)}`
document.getElementById("numero").innerHTML += `</br> O quarto número elevado ao quadrado é: ${Math.pow(numero4, 2)}`
document.getElementById("numero").innerHTML += `</br> O quinto número elevado ao quadrado é: ${Math.pow(numero5, 2)}`

