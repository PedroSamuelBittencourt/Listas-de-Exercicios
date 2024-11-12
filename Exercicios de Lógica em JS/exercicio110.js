let numero1 = document.getElementById('numero1')
let numero2 = document.getElementById('numero2')
let btn = document.getElementById('btn')
let texto = document.getElementById('texto')
let minimo = document.getElementById('minimo')

let numeros1 = []
let numeros2 = []

function Cadastrar(){
    

    numeros1.push(numero1.value)
    numeros2.push(numero2.value)
  
   
    Imprimir() 
}

function Imprimir(){

console.log(numeros1)
console.log(numeros2)


texto.innerHTML = ""


for(let i = 0; i < numeros2.length; i++){
    
  
   
    texto.innerHTML += `Minimo: ${numeros1[i]} </br> Maximo: ${numeros2[i]} </br></br>`
    

}
}
    
    btn.addEventListener('click', Cadastrar)
            
        