let peso = 70;
let altura = 1.75;
let imc = peso / (altura * altura);
if (imc >= 18.5 && imc <= 24.9) {
 console.log("IMC saudável");
} else {
 console.log("IMC não saudável");
}

//resposta
//A) O código está correto. Ele vai imprimir "IMC saudável" quando o IMC estiver entre
//18.5 e 24.9 (inclusive), caso contrário, imprimirá "IMC não saudável".