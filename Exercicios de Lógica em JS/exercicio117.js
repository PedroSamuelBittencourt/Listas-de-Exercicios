
let btn = document.getElementById('btn')
let tabela = document.getElementById('table')

let polegada = 25.4

let conversao = (25.4 / 10)

let arr = []


function Cadastrar(){

    let numero = document.getElementById('numero').value
   
    if(numero <= 20){

        let obj ={
            numero: numero
    
        }
        arr.push(obj)
    }else{
       // texto.innerHTML = "Digite um número menor que 20"
       alert("Digite um número menor que 20")
    }

   
   
    CriarTabela()
}

function CriarTabela(){

    

    console.log(arr)

    tabela.innerHTML = ''

   
        

           
        for (let i = 0; i < arr.length; i++) {
          tabela.innerHTML += `
             <tr>
                <th scope="row">${arr[i].numero}</th>
                                
             <td>  ${(arr[i].numero * conversao)} <td>
                   </tr>`
             }
                 
             clear()
}

function clear(){

    
    document.getElementById('numero').value = ''

document.getElementById('numero').focus()

}

btn.addEventListener('click', Cadastrar)