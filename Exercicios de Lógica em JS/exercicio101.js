let numero = document.getElementById('num')
let btn = document.getElementById('btn')
let texto = document.getElementById('texto')

let num = 0

function Cadastrar(){

   for (let i = 2; i <= numero.value * 2 ; i++) {
    
    if (i % 2 == 0) {
        
        console.log(i)

        texto.innerHTML += `${i} -  `

    }
    
   
   }
}

btn.addEventListener('click', Cadastrar)