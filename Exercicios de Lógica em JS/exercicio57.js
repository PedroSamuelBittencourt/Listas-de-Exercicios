let numero = prompt('Digite um número: ')

if( numero%2 ==0 ){
    document.getElementById("numero").innerHTML = `O número é:  ${numero} e o resultado elevado ao quadrado é: ${Math.pow(numero, 2)}`
}else{
    document.getElementById("numero").innerHTML += `O número é:  ${numero} e o resultado elevado ao cubo é: ${Math.pow(numero, 3)}`
}