let numero1 = document.getElementById('numero')
let btn = document.getElementById('btn')
let texto = document.getElementById('texto')

function Cadastrar(){

   
  
if(numero1.value < 9){
 
    texto.innerHTML = `${numero1.value}</br>`
    texto.innerHTML += `Nivel leve `

} else if(numero1.value == 9 || 10){

    texto.innerHTML = `${numero1.value}</br>`
    texto.innerHTML += `Nivel grave `
}else{
    texto.innerHTML = `Digite um número de 1 a 10`
   
}
 
   
}




btn.addEventListener('click', Cadastrar)