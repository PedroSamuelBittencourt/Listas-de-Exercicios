let tipopicole = parseFloat(prompt("Escolha um tipo de picolé:  1 - 2.50 /  2 - 5.60 / 3 - 7.75 / obs: digite só o número do tipo escolhido"))
let quantidade = parseFloat(prompt("Digite a quantidade de picolés: "))

let conta = 0



switch(tipopicole){
    
    
    case 1:
     conta = (2.50 * quantidade)
        console.log(conta)
        document.getElementById("numero").innerHTML += `A quantidade vendida de picolé foi: ${quantidade}`
        document.getElementById("numero").innerHTML += `</br>O tipo de picolé foi: ${tipopicole} `
        document.getElementById("numero").innerHTML += `</br>O preço do picolé foi R$ 2.50`
        document.getElementById("numero").innerHTML += `</br><div class="text-danger">TOTAL: R$ ${conta}</div>`
    break;

    case 2:
       conta = (5.60 * quantidade)
        console.log(conta)
        document.getElementById("numero").innerHTML += `A quantidade vendida de picolé foi: ${quantidade}`
        document.getElementById("numero").innerHTML += `</br>O tipo de picolé foi: ${tipopicole} `
        document.getElementById("numero").innerHTML += `</br>O preço do picolé foi R$ 5.60`
        document.getElementById("numero").innerHTML += `</br><div class="text-danger">TOTAL: R$ ${conta}</div>`
    break;

    case 3:
        conta = (7.75 * quantidade)
         console.log(conta)
         document.getElementById("numero").innerHTML += `A quantidade vendida de picolé foi: ${quantidade}`
        document.getElementById("numero").innerHTML += `</br>O tipo de picolé foi: ${tipopicole} `
        document.getElementById("numero").innerHTML += `</br>O preço do picolé foi R$ 7.75`
        document.getElementById("numero").innerHTML += `</br><div class="text-danger">TOTAL: R$ ${conta}</div>`
     break;


    default:
        break;
}