
let btn = document.getElementById('btn')
let menor = document.getElementById('menor')

function Cadastrar(){

    let numero1 = document.getElementById('numero1').value
    let numero2 = document.getElementById('numero2').value

    if( numero1 != 0 && numero2 > 0 ){

        Imprimir()
    }else{

        alert('Digite um número maior que 0 e menor que 100 nos dois campos')
    }



}


function Imprimir(){

    console.log(numero1.value, numero2.value)

    let aux1 = numero1.value
    let aux2 = numero2.value

    menor.innerHTML = ''

    if (aux1 < aux2) {
        
       
            menor.innerHTML = `O menor número é:  ${aux1}`
            
        

    }else if(aux1 > aux2){
       
       
            menor.innerHTML = `O menor número é:  ${aux2}`
            
        
   
    }
    
   
}

btn.addEventListener('click', Cadastrar)