let quantidadepopulacional = prompt('Digite a quantidade da população inicial: ')
let taxa = prompt('Digite a taxa de crescimento anual:  ')

let calculo  = quantidadepopulacional * (taxa/100) + parseFloat(quantidadepopulacional)


document.getElementById("calculo").innerHTML = `População futura: ${calculo}` 