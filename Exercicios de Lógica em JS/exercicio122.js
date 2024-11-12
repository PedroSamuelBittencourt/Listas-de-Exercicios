
let btn = document.getElementById('btn')
let texto = document.getElementById('texto')
let par = document.getElementById('par')
let impar = document.getElementById('impar')

let numeros = []

function Cadastrar(){

    let numero = document.getElementById('numero').value
   
  numeros.push(numero)

 Imprimir()
   
}

function Imprimir(){

    console.log(numeros)

    texto.innerHTML = ""
    par.innerHTML= ""
    impar.innerHTML= ""

    texto.innerHTML += "Números digitados: "
    par.innerHTML += "Números pares digitados: "
    impar.innerHTML += "Números impares digitados: "

    for (let i = 0; i < numeros.length; i++) {
      
        texto.innerHTML += ` ${numeros[i]} - `

        if (i % 2 == 0) {
            par.innerHTML += ` ${numeros[i]} - `
        }

       else if (i % 2 == 1) {
            impar.innerHTML += ` ${numeros[i]} - `
        }

        
    }
}




btn.addEventListener('click', Cadastrar)