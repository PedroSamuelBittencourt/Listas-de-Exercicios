
let soma = 0



for (let i = 0 ; i <= 50; i++) {
  
    if (i % 2 == 0 ) {
        soma += i
       
   
    }
    
   
}
document.getElementById("soma").innerHTML += `A soma dos 50 primeiros números pares positivos é:  ${soma} `

console.log(soma)