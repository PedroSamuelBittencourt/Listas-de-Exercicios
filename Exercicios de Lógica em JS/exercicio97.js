let nota = parseFloat(prompt("Digite a 1º nota: "))
let nota1 = parseFloat(prompt("Digite a 2º nota: "))
let nota2 = parseFloat(prompt("Digite a 3º nota: "))

let tipomedia = parseFloat(prompt("Escolha o tipo de média: (1 - aritmetica / 2 - ponderada) "))

let conta  = 0


switch (tipomedia) {
    case 1:
        conta = (nota + nota1 + nota2)/3
        document.getElementById("media").innerHTML += `A média aritmética das notas é:  ${conta} `
        break;
    case 2:
        conta = ((nota * 3) + (nota1 * 3) + (nota2 * 4))/10
        document.getElementById("media").innerHTML += `A média ponderada das notas é:  ${conta} `
        break;


    default:
        break;
}



