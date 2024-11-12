let produto1 = prompt("Digite o valor do produto 1: ")
let produto2 = prompt("Digite o valor do produto 2: ")
let produto3 = prompt("Digite o valor do produto 3: ")

let total = parseFloat(produto1) + parseFloat(produto2) + parseFloat(produto3)

let desconto10 = total -  (total * 10/100)
let desconto20 = total -  (total * 20/100)
let desconto30 = total -  (total * 30/100)
let desconto40 = total -  (total * 40/100)
let desconto50 = total -  (total * 50/100)

document.getElementById("total").innerHTML = `Total sem desconto: ${total}`
document.getElementById("desconto10").innerHTML = `Total com 10% de desconto : ${desconto10}`
document.getElementById("desconto20").innerHTML = `Total com 20% de desconto : ${desconto20}`
document.getElementById("desconto30").innerHTML = `Total com 30% de desconto : ${desconto30}`
document.getElementById("desconto40").innerHTML = `Total com 40% de desconto : ${desconto40}`
document.getElementById("desconto50").innerHTML = `Total com 50% de desconto : ${desconto50}`