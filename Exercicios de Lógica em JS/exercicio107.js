let numero1 = document.getElementById('num1')
let numero2 = document.getElementById('num2')
let btn = document.getElementById('btn')
let inferior = document.getElementById('inferior')
let superior = document.getElementById('superior')
let sequencia = document.getElementById('sequencia')


function Cadastrar(){


    let aux1 = numero1.value
    let aux2 = numero2.value



   for (let i = aux1; i <= aux2; i++) {

    
   

    if (i % aux1 == 0) {
        
       
        sequencia.innerHTML += ` ${i} -`
        console.log(i)


    }



   }

   inferior.innerHTML = `O número inferior da sequencia é: ${numero1.value}`
   superior.innerHTML = `O número superior da sequencia é: ${numero2.value}`


  
}

btn.addEventListener('click', Cadastrar)