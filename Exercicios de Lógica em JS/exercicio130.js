let numero = document.getElementById('numero')
let btn = document.getElementById('btn')
let texto = document.getElementById('texto')





function Cadastrar(){

   
    
   
if(numero.value > 0 && numero.value < 10){
   

    Imprimir()
}else{
    alert('Digite um número menor que 10 ou maior que 0')
}

    

 
   
}

function Imprimir(){

   

    console.log(numero.value)

    texto.innerHTML = ""
    
    texto.innerHTML += "Número digitados:  "
    
 
    let num = 100;
    while (num >=numero.value) {
        
      
             console.log(num)
     
            texto.innerHTML += `${num} -  `
            
         
         num--;


        }
    //for (let i = 1; i < numero.value; i++) {

        

      
     //   texto.innerHTML += `  ${i} - `

     //  metade.innerHTML += ` ${numeros[i]/2}`

        
 //   }

    clear()
}

function clear(){

     numero = document.getElementById('numero').value = ''
     numero = document.getElementById('numero').focus()
}



btn.addEventListener('click', Cadastrar)