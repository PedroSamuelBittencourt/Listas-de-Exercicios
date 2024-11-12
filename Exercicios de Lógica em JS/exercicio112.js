
let texto = document.getElementById('texto')
let soma = document.getElementById('soma')

let num = 0



let contador = 1000;
while (contador >= 0) {
    
  

    if (contador % 3 == 0  && contador % 5 == 0 ) {
        
         console.log(contador)
 
        texto.innerHTML += `${contador} -  `
        num += contador

        soma.innerHTML = `A soma dos números múltiplos de 3 e 5 são: ${num}  `
     }
     contador--;

}



   


