let nomealuno = prompt("Digite o nome do aluno: ")
let nota1 = parseFloat(prompt("Digite a 1º nota: "))
let nota2 = parseFloat(prompt("Digite a 2º nota: "))
let media = 0

if(nota1 >=0 && nota2 >= 0){
    media = (nota1 + nota2) / 2

    if(media >= 7){
        document.getElementById("numero").innerHTML += `Nome do aluno: ${nomealuno}`
        document.getElementById("numero").innerHTML += `</br>Notas do aluno: ${nota1} e ${nota2}`
        document.getElementById("numero").innerHTML += `</br> ${media} - Aprovado`
    }else if(media <= 5){
        document.getElementById("numero").innerHTML += `Nome do aluno: ${nomealuno}`
        document.getElementById("numero").innerHTML += `</br>Notas do aluno: ${nota1} e ${nota2}`
        document.getElementById("numero").innerHTML += `</br>${media} - Retido`
    
    }else{
        document.getElementById("numero").innerHTML += `Nome do aluno: ${nomealuno}`
        document.getElementById("numero").innerHTML += `</br>Notas do aluno: ${nota1} e ${nota2}`
        document.getElementById("numero").innerHTML += `</br>${media} - Recuperação`
    }
}else{
   
    document.getElementById("numero").innerHTML = `Digite um valor positivo`
}








