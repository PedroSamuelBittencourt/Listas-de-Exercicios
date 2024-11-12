let soma = 0
   for(let i = 0; i <= 100; i++){
       soma += i
   }

   console.log(soma)
   document.getElementById("soma").innerHTML += `A soma de 1 à 100 é: ${soma}`