let btn = document.getElementById('btn')
let superior = document.getElementById('superior')

let sequencia = document.getElementById('sequencia')

//let numeros = []

function Cadastrar(){

    let numero = document.getElementById("numero").value
    let incremento = document.getElementById('incremento').value

if (numero > 0 && incremento > 0) {

    Imprimir()
    
} else {

    alert('Digite um número maio que 0 nos dois campos')
    
}

 



}

function Imprimir(){


    console.log(numero.value)

    superior.innerHTML = ''
    soma.innerHTML = ''
    sequencia.innerHTML =''

 sequencia.innerHTML += 'A sequencia é: '
    
    for (let i = 0; i <= numero.value; i++) {


        
    superior.innerHTML = `Número superior: ${Math.max(i)} ` 
    soma.innerHTML = `Incremento: ${incremento.value}`

    
    if(i % incremento.value == 0){
        sequencia.innerHTML += ` ${i} - `
    }
 
        
    }
}

btn.addEventListener('click', Cadastrar)