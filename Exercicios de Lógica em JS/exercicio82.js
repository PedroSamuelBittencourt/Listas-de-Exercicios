let diagonalmenor = prompt("Digite a diagonal menor: ")
let diagonalmaior = prompt("Digite a diagonal maior: ")
let area = 0

if(diagonalmaior > 0 && diagonalmenor > 0 ){
 area = (diagonalmaior * diagonalmenor) / 2
 document.getElementById("numero").innerHTML = `A área do losango é: ${area} `
}else{
    alert("Valores inválidos")
    document.getElementById("numero").innerHTML = `Valores inválidos`
}