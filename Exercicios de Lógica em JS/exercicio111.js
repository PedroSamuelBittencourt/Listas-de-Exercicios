let numero1 = document.getElementById('numero1')
let btn = document.getElementById('btn')
let texto = document.getElementById('texto')
let soma = document.getElementById('soma')




let numeros = []

function Cadastrar(){

    let calculo = 0
  


    let aux1 = numero1.value

   numeros.push(aux1.value)
    
    
   texto.innerHTML += `  ${aux1} `
  
   document.getElementById('qtd').innerHTML = `Quantidade de números: ${numeros.length}`

   

   for (let i = 0; i <= aux1; i++) {
    
   calculo += numeros[i] ;

   console.log(calculo)
   }

soma.innerHTML = `Soma: ${Number(calculo)}`

   
}


    
    btn.addEventListener('click', Cadastrar)
            
        