let valor = prompt("Digite o valor da conta: ")
let gorjeta = prompt("Digite o valor da gorjeta: ")

let valorgorjeta = (parseFloat(valor) * gorjeta/100) + parseFloat(valor)

document.getElementById("gorjeta").innerHTML = `Valor da gorjeta: ${gorjeta}` 
document.getElementById("valor").innerHTML = `Valor com gorjeta: ${valorgorjeta}` 