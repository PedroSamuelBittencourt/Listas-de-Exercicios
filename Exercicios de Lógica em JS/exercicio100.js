let numero = document.getElementById('numero');
let btn = document.getElementById('btn');
let texto = document.getElementById('texto');

let num = 0

function cadastrar(){

    //console.log(numero.value);
    
    for (let i = 0; i < numero.value; i++) {
        
        if (i % 2 == 1) {
            
            console.log(i)

            texto.innerHTML += ` ${i} -  `
           
            

        }
        
    }

    
}




btn.addEventListener('click', cadastrar)