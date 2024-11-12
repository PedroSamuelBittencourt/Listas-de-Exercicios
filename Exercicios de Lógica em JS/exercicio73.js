let numero = parseFloat(prompt("Digite um número:"))

if(numero >= 0 ){
    for (let i = numero - 1; i >= 1; i--) {

        numero = numero * i
        document.getElementById("fatorial").innerHTML = `O fatorial do número digitado é: ${numero}`
    }
}else{
    document.getElementById("fatorial").innerHTML += `Digite um número maior que zero`
}


console.log(numero)
