let numero1 = parseFloat(prompt("Digite o primeiro número: "))
let numero2 = parseFloat(prompt("Digite o segundo número: "))

let soma = numero1 + numero2

if( soma > 10 ){
    document.getElementById("numero").innerHTML = `Os números digitados são ${numero1} e ${numero2}`
    document.getElementById("numero").innerHTML += `</br>A soma dos números digitados é ${soma}`
    document.getElementById("numero").innerHTML += `</br>A raiz cúbica da soma dos números digitados é ${Math.cbrt(soma)}`
    


}else{
    document.getElementById("numero").innerHTML = `Os números digitados são ${numero1} e ${numero2}`
    document.getElementById("numero").innerHTML += `</br>A soma dos números digitados é ${soma}`
}