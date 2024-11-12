let idade;
idade = prompt("Digite sua idade em anos: ")

let idadedias = idade * 365

document.getElementById("idadee").innerHTML = `A idade em anos é: ${idade}`

document.getElementById("idade").innerHTML += `A idade em dias é: ${idadedias}`
