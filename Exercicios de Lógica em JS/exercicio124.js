let altura = document.getElementById('altura')
let sexo = document.getElementById('sexo')
let btn = document.getElementById('btn')
let texto1 = document.getElementById('texto1')
//let texto2 = document.getElementById('texto2')
let aux = 0
let aux1 = 0

function Cadastrar(){

   
  switch (sexo.value) {
    case 'Masculino':
        do {
            aux = (72.7 * altura.value) - 58
     
           
           } while (sexo == 'Masculino');


    
           texto1.innerHTML = `
           Altura: ${altura.value}</br>
           Sexo: ${sexo.value}</br>
           Peso ideal: ${aux}</br>`
    
        
        break;
        case 'Feminino':
            do {
                aux1 = (62.1 * altura.value) - 44.7
               
               } while (sexo == 'Feminino');
        
               texto1.innerHTML = `
               Altura: ${altura.value}</br>
               Sexo: ${sexo.value}</br>
               Peso ideal: ${aux1}</br>`
               break;
  
    default:

        break;
  }

      
}
 


btn.addEventListener('click', Cadastrar)