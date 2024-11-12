let texto = document.getElementById('texto')
let soma = document.getElementById('soma')

let num = 0



for (let i = 1; i < 200; i++) {
    
    if (i % 2 == 1) {
        
         
 
        texto.innerHTML += `${i} -  `
        num += i

        soma.innerHTML = `A soma dos números ímpares de 1 a 200 são:  ${num}  `
     }
    



}
   
    




