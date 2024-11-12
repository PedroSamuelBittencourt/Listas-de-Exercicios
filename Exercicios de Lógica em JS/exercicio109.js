let numero = document.getElementById('num')
let btn = document.getElementById('btn')
let texto = document.getElementById('texto')


let num = 0

function Cadastrar(){

   for (let i = 1; i <= numero.value  ; i++) {
    
    if (i % 3 == 0  && i % 5 == 0 ) {
        
        console.log(i)

        texto.innerHTML += `${i} -  `

    }


      
   }

   
}

btn.addEventListener('click', Cadastrar)