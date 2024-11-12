let peso = prompt("Digite o peso em kg: ")
let altura = prompt("Digite a altura em metros: ")

let imc = peso / Math.pow(parseFloat(altura), 2)

document.getElementById("peso").innerHTML = `Peso: ${peso}`
document.getElementById("altura").innerHTML = `Altura: ${altura}`
document.getElementById("imc").innerHTML = `IMC: ${Math.round(imc)}`