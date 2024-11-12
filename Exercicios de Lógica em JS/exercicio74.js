let valorFinal = prompt('Digite um número: ')
if (valorFinal > 0) {

    //FOR
    document.getElementById('resultado').innerHTML = ""
    //for(variavel inicial; condição de parada; incremento ou decremento)
    for (let i = 0; i <= 10; i++) {
        document.getElementById('resultado').innerHTML += i + valorFinal + ' '
    }
} else {

    document.getElementById('resultado').innerHTML += "Valor não encontrado"
}
