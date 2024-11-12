let numero = document.getElementById('num')
let btn = document.getElementById('btn')
let texto = document.getElementById('texto')
let soma = document.getElementById('soma')

let texto1 = document.getElementById('texto1')

let num = 0

texto.innerHTML += ` Os múltiplos são: `

function Cadastrar(){

   for (let i = 1; i <= numero.value ; i++) {
    
    if (i % 5 == 0) {

        console.log(i)
        num = i + num

        texto.innerHTML += ` ${i} -  `
        soma.innerHTML = `A soma deles são:  ${num} </br>`
     
       
        
    } else {
      // texto1.innerHTML = `Digite um número positivo`
        
    }


   }
 
}

btn.addEventListener('click', Cadastrar)