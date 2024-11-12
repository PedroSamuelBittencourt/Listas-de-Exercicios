
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

    numpar = 5

    numimpar = 8

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
            par.innerHTML += ` ${Number(numeros[i]) + Number(numpar)} -  `
        }

       else {
            impar.innerHTML += `${Number(numeros[i]) + Number(numimpar)}  - `
        }

        
    }
}




btn.addEventListener('click', Cadastrar)