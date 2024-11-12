
let texto = document.getElementById('texto')


let num = 0



let contador = 300;
while (contador >= 30) {
    
  

    if (contador % 3 == 0  && contador % 5 == 0 ) {
        
         console.log(contador)
 
        texto.innerHTML += `${contador} -  `
        
     }
     contador--;

}



   


