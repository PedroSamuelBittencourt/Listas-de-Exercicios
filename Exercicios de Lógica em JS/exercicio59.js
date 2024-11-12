let numero = prompt("Digite um número: ")

if(numero % 2 == 0 ){
    document.getElementById("numero").innerHTML = `Par`
}else if(numero % 2 == 1){
    document.getElementById("numero").innerHTML += `Impar`
}else{
    document.getElementById("numero").innerHTML += `Digite um número inteiro maior que zero`
}