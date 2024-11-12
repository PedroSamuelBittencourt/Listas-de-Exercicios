let numero1 = prompt("Digite o primeiro número: ")
let numero2 = prompt("Digite o segundo número: ")
let numero3 = prompt("Digite o terceiro número: ")



if(numero1 > 0 ){

  document.getElementById("numero1").innerHTML = `O número ${numero1} é positivo`

}else if(numero1 == 0){
    document.getElementById("numero1").innerHTML += `O número ${numero1} é nulo`

}else{
    document.getElementById("numero1").innerHTML += `O número ${numero1} é negativo`

}

if(numero2 > 0 ){

    document.getElementById("numero2").innerHTML = `O número ${numero2} é positivo`
  
  }else if(numero2 == 0){
      document.getElementById("numero2").innerHTML += `O número ${numero2} é nulo`
  
  }else{
      document.getElementById("numero2").innerHTML += `O número ${numero2} é negativo`
  
  }

  if(numero3 > 0 ){

    document.getElementById("numero3").innerHTML = `O número ${numero3} é positivo`
  
  }else if(numero3 == 0){
      document.getElementById("numero3").innerHTML += `O número ${numero3} é nulo`
  
  }else{
      document.getElementById("numero3").innerHTML += `O número ${numero3} é negativo`
  
  }

 document.getElementById("numeromaior").innerHTML = `O número maior é ${Math.max(numero1, numero2, numero3)}`
 
  console.log(Math.max(numero1, numero2, numero3))