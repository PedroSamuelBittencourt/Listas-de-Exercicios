let numero = document.getElementById('num')
let btn = document.getElementById('btn')
let texto = document.getElementById('texto')
let produto = document.getElementById('produto')

let num = 1

function Cadastrar(){

   for (let i = 1; i <= numero.value ; i++) {
    
    
        console.log(i)

        num = i * num


    
    texto.innerHTML += ` ${i}  `
   

   }
   produto.innerHTML += ` ${num} `
}

btn.addEventListener('click', Cadastrar)