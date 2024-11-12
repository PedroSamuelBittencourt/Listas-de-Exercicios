let celsius = prompt("Digite o valor em graus celsius: ")

let conversao = (1.8 * celsius) + 32

document.getElementById("celsius").innerHTML = `Celsius: ${celsius} °C`
document.getElementById("conversao").innerHTML += `Fahrenheit: ${conversao} °F`
