let diagonalmenor = prompt("Digite a diagonal menor: ")
let diagonalmaior = prompt("Digite a diagonal maior: ")
let aux1 = 0
let aux2 = 0
let lado = 0

if(diagonalmaior > 0 && diagonalmenor > 0 ){
 aux1 = diagonalmenor/2
 aux2 = diagonalmaior/2
 lado = Math.pow(aux1, 2) + Math.pow(aux2, 2)
 document.getElementById("numero").innerHTML = `O lado do losango é: ${Math.sqrt(lado)} `
}else{
    alert("Valores inválidos")
    document.getElementById("numero").innerHTML = `Valores inválidos`
}