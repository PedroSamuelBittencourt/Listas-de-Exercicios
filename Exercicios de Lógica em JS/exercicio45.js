let salario = prompt("Digite o valor do salário: ")
let quantidade = prompt("Digite a quantidade de quilowatts: ")

let umkw = (salario/7) / 100

let valortotal = umkw * quantidade

let valordesc = valortotal - (valortotal * 10/100)

document.getElementById('umkm').innerHTML = `Valor de 1 quilowatt: ${umkw}`
document.getElementById('valortotal').innerHTML = `Valor total: ${valortotal}`
document.getElementById('desconto').innerHTML = `Valor total com desconto de 10%: ${valordesc}`