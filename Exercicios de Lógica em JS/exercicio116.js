let texto = document.getElementById('texto')






let num = 1000;
while (num >= 150) {
    
    if (num % 2 == 1 ) {
        
         console.log(num)
 
        texto.innerHTML += `${num} -  `
        
     }
     num--;

}