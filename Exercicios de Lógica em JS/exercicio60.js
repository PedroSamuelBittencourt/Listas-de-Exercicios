let numero = prompt("Digite um número maior que zero: ")

let escrita = document.getElementById("numero")

if(numero % 2 == 0 ){
    escrita.innerHTML = `O número digitado foi: ${numero}`
    escrita.innerHTML += `</br>Seu valor elevado ao quadrado é: ${Math.pow(numero, 2)}`
    escrita.innerHTML += `</br>Seu valor elevado ao cubo é: ${Math.pow(numero, 3)}`
    escrita.innerHTML += `</br>Seu valor elevado a sétima é: ${Math.pow(numero, 7)}`
}else if(numero % 2 == 1){
    escrita.innerHTML = `O número digitado foi: ${numero}`
    escrita.innerHTML += `</br>Sua raiz quadrada é: ${Math.sqrt(numero)}`
    escrita.innerHTML += `</br>Sua raiz cúbica é: ${Math.cbrt(numero)}`
    escrita.innerHTML += `</br>Sua raiz sétima é : ${Math.pow(numero,1/7)}`
}else{
    document.getElementById("numero").innerHTML += `Digite um número inteiro maior que zero`
}