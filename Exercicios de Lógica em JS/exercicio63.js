let numero1 = parseFloat(prompt("Digite o primeiro número: "))
let numero2 = parseFloat(prompt("Digite o segundo número: "))
let numero3 = parseFloat(prompt("Digite o terceiro número: "))

let soma = Math.pow(numero1, 2) + Math.pow(numero2, 2)  + Math.pow(numero3, 2) 

if(soma % 2 == 0 ){
    document.getElementById("numero").innerHTML = `A soma dos números digitados é ${soma}`
    document.getElementById("numero").innerHTML += `</br>Par`
}else if(soma % 2 == 1){
    document.getElementById("numero").innerHTML += `A soma dos números digitados é ${soma}`
    document.getElementById("numero").innerHTML += `</br>Impar`
}else{
    document.getElementById("numero").innerHTML += `Digite um número inteiro maior que zero`
}