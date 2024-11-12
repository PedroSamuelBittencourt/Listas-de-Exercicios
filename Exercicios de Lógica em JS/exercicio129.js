let numero = document.getElementById('numero')
let btn = document.getElementById('btn')
let texto = document.getElementById('texto')





function Cadastrar(){

   
    
   
if(numero.value > 10){
   

    Imprimir()
}else{
    alert('Digite um número maior que 10')
}

    

 
   
}

function Imprimir(){

   

    console.log(numero.value)

    texto.innerHTML = ""
    
    texto.innerHTML += "Número digitados:"
    
 
   
    for (let i = 1; i < numero.value; i++) {

        

      
        texto.innerHTML += `  ${i} - `

     //  metade.innerHTML += ` ${numeros[i]/2}`

        
    }

    clear()
}

function clear(){

     numero = document.getElementById('numero').value = ''
     numero = document.getElementById('numero').focus()
}



btn.addEventListener('click', Cadastrar)