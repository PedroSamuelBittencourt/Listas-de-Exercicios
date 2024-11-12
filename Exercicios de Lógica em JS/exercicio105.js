let numero1 = document.getElementById('num1')
let numero2 = document.getElementById('num2')
let btn = document.getElementById('btn')
let inferior = document.getElementById('inferior')
let superior = document.getElementById('superior')
let sequencia = document.getElementById('sequencia')

//let num = 0
function Cadastrar(){

   for (let i = numero1.value; i <= numero2.value; i++) {
   
  
    sequencia.innerHTML += ` ${i} -`

 
    console.log(sequencia)
   }

   inferior.innerHTML = `O número inferior da sequencia é: ${numero1.value}`
   superior.innerHTML = `O número superior da sequencia é: ${numero2.value}`
  
   console.log(inferior)
   console.log(superior)
 
}

btn.addEventListener('click', Cadastrar)