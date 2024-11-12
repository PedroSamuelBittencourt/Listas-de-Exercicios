let peso = parseFloat(prompt("Digite o seu peso: "))
let altura = parseFloat(prompt("Digite a sua altura: "))

let conta = 0

if (peso > 0 && altura > 0) {

conta = peso/(Math.pow(altura, 2))
    
} else {
    document.getElementById("imc").innerHTML = `Digite valores positivos `
}

if (conta < 17) {
    document.getElementById("imc").innerHTML += `Peso:  ${peso}  e Altura:  ${altura} `
    document.getElementById("imc").innerHTML += `</br>Valor do IMC:  ${conta} `
    document.getElementById("imc").innerHTML += `</br><div class = "text-dark"> Muito abaixo do peso </div> `

} else if(conta <= 18.49) {
    document.getElementById("imc").innerHTML += `Peso:  ${peso}  e Altura:  ${altura} `
    document.getElementById("imc").innerHTML += `</br>Valor do IMC:  ${conta} `
    document.getElementById("imc").innerHTML += `</br><div class = "text-secondary"> Abaixo do peso </div>`
    
}else if(conta <= 24.99) {
    document.getElementById("imc").innerHTML += `Peso:  ${peso}  e Altura:  ${altura} `
    document.getElementById("imc").innerHTML += `</br>Valor do IMC:  ${conta} `
    document.getElementById("imc").innerHTML += `</br><div class = "text-success">Peso normal </div> `
    
}else if(conta <= 29.99) {
    document.getElementById("imc").innerHTML += `Peso:  ${peso}  e Altura:  ${altura} `
    document.getElementById("imc").innerHTML += `</br>Valor do IMC:  ${conta} `
    document.getElementById("imc").innerHTML += `</br><div class = "text-primary">Acima do peso </div>  `
    
}else if(conta <= 34.99) {
    document.getElementById("imc").innerHTML += `Peso:  ${peso}  e Altura:  ${altura} `
    document.getElementById("imc").innerHTML += `</br>Valor do IMC:  ${conta} `
    document.getElementById("imc").innerHTML += `</br><div class = "text-info">Obesidade I </div>   `
    
} else if(conta <= 39.99) {
    document.getElementById("imc").innerHTML += `Peso:  ${peso}  e Altura:  ${altura} `
    document.getElementById("imc").innerHTML += `</br>Valor do IMC:  ${conta} `
    document.getElementById("imc").innerHTML += `</br><div class = "text-warning">Obesidade II (severa) </div>   `
    
} else if(conta >= 40) {
    document.getElementById("imc").innerHTML += `Peso:  ${peso}  e Altura:  ${altura} `
    document.getElementById("imc").innerHTML += `</br>Valor do IMC:  ${conta} `
    document.getElementById("imc").innerHTML += `</br><div class = "text-danger">Obesidade III (mórbida)  </div> `
    
} 