let numero1 = parseFloat(prompt("Digite o primeiro número: "))
let numero2 = parseFloat(prompt("Digite o segundo número: "))

let soma = 0
   for(let i = numero1; i <= numero2; i++){
       soma += i
   }

   console.log(soma)
   document.getElementById("soma").innerHTML += `A soma do primeiro número até o segundo número é: ${soma}`