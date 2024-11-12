let numero1 = document.getElementById('num1')
let numero2 = document.getElementById('num2')
let btn = document.getElementById('btn')
let inferior = document.getElementById('inferior')
let superior = document.getElementById('superior')
let sequencia = document.getElementById('sequencia')


function Cadastrar(){


    let aux1 = numero1.value
    let aux2 = numero2.value


if(aux1 < aux2){

    for (let i = aux1; i <= aux2; i++) {

        if (i % 2 == 0 && i % 7 == 0) {
            
           
            sequencia.innerHTML += ` ${i} -`
            console.log(i)
    
    
        }

    
       }

}else if(aux1 > aux2) {
    for (let i = aux2; i <= aux1; i++) {

        if (i % 2 == 0 && i % 7 == 0) {
            
           
            sequencia.innerHTML += ` ${i} -`
            console.log(i)
    
    
        }

    
       }


}


  


   


  
}

btn.addEventListener('click', Cadastrar)