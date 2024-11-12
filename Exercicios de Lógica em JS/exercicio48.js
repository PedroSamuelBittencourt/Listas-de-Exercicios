let alturadegrau = prompt("Digite o valor da altura do degrau: ")
let alturadesejada = prompt('Digite o valor qu deseja alcançar subindo a escada: ')

let conta = alturadesejada/ alturadegrau

document.getElementById("degrau").innerHTML = `A quantidade de degraus será: ${conta}`