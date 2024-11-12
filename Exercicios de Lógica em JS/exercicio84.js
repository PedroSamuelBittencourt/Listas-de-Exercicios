let produto = prompt("Digite o valor do produto: ")

let reajuste = 0
let valornovo = 0

if(produto > 0 ){
     reajuste = produto * 9/100
     valornovo = produto - reajuste


    document.getElementById("numero").innerHTML = `O valor do produto com desconto de 9% é: ${valornovo} `
   }else{
       alert("Valores inválidos")
       document.getElementById("numero").innerHTML = `Valores inválidos`
   } 