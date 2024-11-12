let texto = document.getElementById('texto')
let par = document.getElementById('par')

let num = 0



for (let i = 25; i <= 200; i++) {
    

if (i % 2 == 0) {
    
  
   
    texto.innerHTML += `${i} - `

   num += i

}
 
par.innerHTML = `Soma dos números pares:  ${num}`

 }
       
        

        
     
    




   
    




