let numero = document.getElementById('numero')
let btn = document.getElementById('btn')
let texto = document.getElementById('texto')





function Cadastrar(){

   

    Imprimir()


}

function Imprimir(){

   

    console.log(numero.value)

    texto.innerHTML = ""
    
    texto.innerHTML += "Número digitados:"
    
 
   
    for (let i = 1; i < numero.value; i++) {

        
if (i % 2 == 1) {

    texto.innerHTML += `  ${i} - `
    
}
      
       

     //  metade.innerHTML += ` ${numeros[i]/2}`

        
    }

    
}




btn.addEventListener('click', Cadastrar)