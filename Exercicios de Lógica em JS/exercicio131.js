let numero1 = document.getElementById('numero1')
let numero2 = document.getElementById('numero2')
let btn = document.getElementById('btn')
let texto = document.getElementById('texto')
let texto1 = document.getElementById('texto1')





function Cadastrar(){

   
    
   
if(numero1.value > 0 || numero2 > 0 ){
   

    Imprimir()
}else{
    alert('Digite um número maior que 0 e diferente do outro')
}

    

 
   
}

function Imprimir(){

   let mensagem = 0
 
    console.log(numero1.value)

    texto.innerHTML = ""
    
    texto.innerHTML += "Número digitados:  "
    
    mensagem += "Não existem números múltiplos de 5"
 
   
    for (let i = numero1.value; i <= numero2.value; i++) {

        
    if (i % 5 == 0) {
        texto.innerHTML += `  ${i} - `

    } //else {
   
     //   texto.innerHTML = `  ${mensagem} `
      
   // }
      
      
        
    }



}





btn.addEventListener('click', Cadastrar)