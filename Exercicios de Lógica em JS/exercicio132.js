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
 
   
    let num = numero2.value;
while (num >= numero1.value) {
    
  
    if (num % 3 == 0 && num % 7 == 0 ) {
        
         console.log(num)
 
        texto.innerHTML += `${num} -  `
        
     }//else{

       // texto.innerHTML += `Não existem números múltiplos de 3 e 7 `
    // }
     num--;

}



}





btn.addEventListener('click', Cadastrar)