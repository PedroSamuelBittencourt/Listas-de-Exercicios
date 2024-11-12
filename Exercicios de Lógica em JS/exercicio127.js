
let btn = document.getElementById('btn')
let texto = document.getElementById('texto')



let numeros = []

function Cadastrar(){

    let numero = document.getElementById('numero').value
   
  numeros.push(numero)

 Imprimir()
   
}

function Imprimir(){

   

    console.log(numeros)

    texto.innerHTML = ""
    
    
 
   
    for (let i = 0; i < numeros.length; i++) {
      
        texto.innerHTML += ` Número digitado: ${numeros[i]} </br>
        Metade do número digitado:  ${numeros[i]/2} </br></br>`

     //  metade.innerHTML += ` ${numeros[i]/2}`

        
    }
}




btn.addEventListener('click', Cadastrar)