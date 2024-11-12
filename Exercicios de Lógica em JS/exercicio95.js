let numero1 = parseFloat(prompt("Digite um número: "))
let numero2 = parseFloat(prompt("Digite outro número: "))

let sequencia = 0

for (let i = numero1 + 1 ; i < numero2; i++) {
    
    sequencia = i
 
    console.log(sequencia)
    document.getElementById("sequencia").innerHTML += ` ${sequencia} `
}

