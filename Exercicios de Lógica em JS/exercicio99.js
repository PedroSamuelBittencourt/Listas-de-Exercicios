let soma = 0
let par = 0
let multiplo5 = 0 
let multiplo7 = 0

for (let i = 1; i <= 1000; i++) {
  
    soma += i
   
    if(i % 2 == 0){
        console.log(i)

        document.getElementById("par").innerHTML += `${i} `
    }
   
  
    
}

for (let i = 1; i <= 1000; i++) {
  
   
    
    if(i % 5 == 0 ){
        console.log(i)
        document.getElementById("multiplo5").innerHTML += `${i} `
    }
   
  
}



for (let i = 1; i <= 1000; i++) {
  

    if(i % 7 == 0 ){
        console.log(i)
        multiplo7 = i
        document.getElementById("multiplo7").innerHTML += `${multiplo7} `
    }
  
    
}





document.getElementById("soma").innerHTML += `A soma dos números de 1 até 1000 são: ${soma}`
console.log(soma)
