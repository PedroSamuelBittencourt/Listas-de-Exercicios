let tipolanche = parseFloat(prompt("Escolha o código do lanche:  100 - 10.00 /  101 - 11.50 / 102 - 15.50 / 103 - 16.50 / 104 - 5.50 obs: digite só o número do tipo escolhido"))
let quantidade = parseFloat(prompt("Digite a quantidade de lanche: "))

let conta = 0



switch(tipolanche){
    
    
    case 100:
     conta = (10 * quantidade)
        console.log(conta)
        document.getElementById("numero").innerHTML += `A quantidade vendida de lanche foi: ${quantidade}`
        document.getElementById("numero").innerHTML += `</br>O código do pedido foi: ${tipolanche} - Cachorro quente`
        document.getElementById("numero").innerHTML += `</br>O preço unitário do produto é: R$ 10.00`
        document.getElementById("numero").innerHTML += `</br><div class="text-danger">TOTAL: R$ ${conta}</div>`
    break;

    case 101:
       conta = (11.50 * quantidade)
        console.log(conta)
        document.getElementById("numero").innerHTML += `A quantidade vendida de lanche foi: ${quantidade}`
        document.getElementById("numero").innerHTML += `</br>O código do pedido foi: ${tipolanche} - Bauru Simples`
        document.getElementById("numero").innerHTML += `</br>O preço unitário do produto é: R$ 11.50`
        document.getElementById("numero").innerHTML += `</br><div class="text-danger">TOTAL: R$ ${conta}</div>`
    break;

    case 102:
        conta = (15.50 * quantidade)
         console.log(conta)
         document.getElementById("numero").innerHTML += `A quantidade vendida de lanche foi: ${quantidade}`
         document.getElementById("numero").innerHTML += `</br>O código do pedido foi: ${tipolanche} - Bauru c/ovo `
         document.getElementById("numero").innerHTML += `</br>O preço unitário do produto é: R$ 15.50`
         document.getElementById("numero").innerHTML += `</br><div class="text-danger">TOTAL: R$ ${conta}</div>`
       
     break;

     case 103:
        conta = (16.50 * quantidade)
         console.log(conta)
         document.getElementById("numero").innerHTML += `A quantidade vendida de lanche foi: ${quantidade}`
         document.getElementById("numero").innerHTML += `</br>O código do pedido foi: ${tipolanche} - Hambúrguer  `
         document.getElementById("numero").innerHTML += `</br>O preço unitário do produto é: R$ 16.50`
         document.getElementById("numero").innerHTML += `</br><div class="text-danger">TOTAL: R$ ${conta}</div>`
        
      
     break;

     case 104:
        conta = (5.50 * quantidade)
         console.log(conta)
         document.getElementById("numero").innerHTML += `A quantidade vendida de lanche foi: ${quantidade}`
         document.getElementById("numero").innerHTML += `</br>O código do pedido foi: ${tipolanche} - Refrigerante  `
         document.getElementById("numero").innerHTML += `</br>O preço unitário do produto é: R$ 5.50`
         document.getElementById("numero").innerHTML += `</br><div class="text-danger">TOTAL: R$ ${conta}</div>`
        
      
     break;

    default:
        break;
}