let salario = prompt("Digite o valor do salário: ")

let aumento = (parseFloat(salario) * 25/100) +  parseFloat(salario)


document.getElementById("salario").innerHTML = `Valor do salário: R$ ${salario}`
document.getElementById("conversao").innerHTML = `Valor do salário com aumento: R$ ${aumento}`