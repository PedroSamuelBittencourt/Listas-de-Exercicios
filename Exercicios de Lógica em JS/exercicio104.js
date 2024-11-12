// Criar uma aplicação que leia um número que servirá para controlar os primeiros números 
// ímpares. Deverá ser impressa a soma desses números. Suponha que número será maior que 
// zero. 
// Exemplo:
// Quantos: 5
// Primeiros ímpares: 1, 3, 5, 7, 9
// Saída: 25

let numero = document.getElementById('num')
let btn = document.getElementById('btn')
let texto = document.getElementById('texto')
let soma = document.getElementById('soma')


let num = 0

function Cadastrar(){

   for (let i = 0; i <= numero.value * 2  ; i++) {
    
    if (i % 2 == 1 ) {
        
        console.log(i)

        num = i + num
        texto.innerHTML += `${i} -  `

    }
      
   }

   soma.innerHTML += `SOMA: ${num} `
}

btn.addEventListener('click', Cadastrar)