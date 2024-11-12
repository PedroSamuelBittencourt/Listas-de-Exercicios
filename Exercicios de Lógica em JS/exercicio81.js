let numero = parseFloat(prompt("Digite um número: "))

if(numero >= 0){
    document.getElementById("numero").innerHTML = `Número digitado: ${numero}`
    document.getElementById("numero").innerHTML += `</br>A raiz quadrada do número digitado é: ${Math.sqrt(numero)}`
}else{
    document.getElementById("numero").innerHTML += `Número digitado: ${numero}`
    document.getElementById("numero").innerHTML += `</br>O número digitado elevado ao quadrado é: ${Math.pow(numero, 2)}`
}