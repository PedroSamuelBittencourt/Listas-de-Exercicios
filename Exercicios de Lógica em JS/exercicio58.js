let cateto1 = prompt("Digite o cateto 1: ")
let cateto2 = prompt("Digite o cateto 2: ")

let area = (cateto1 * cateto2) / 2
let hipotenusa = Math.sqrt(Math.pow(cateto1,2) + Math.pow(cateto2,2))
   

if(cateto1>=0 && cateto2>=0){

    document.getElementById("area").innerHTML = `A área do triângulo retângulo é: ${area}`
    document.getElementById("hipotenusa").innerHTML = `A hipotenusa do triângulo retângulo é: ${hipotenusa}`
}else{
    document.getElementById("area").innerHTML += `Digite um número maior que zero para funcionar o programa`
}

