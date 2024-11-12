let numeroFinal = prompt("Digite um número") //digitar



if (numeroFinal >= 20) {
    
    let i = 20 //start na variavel

    while (i <= numeroFinal) {
        document.getElementById('resultado').innerHTML += i + ' ' 
        i++
    }

}else{
    document.getElementById('resultado').innerHTML += "Digite um número maior que 20"
}

