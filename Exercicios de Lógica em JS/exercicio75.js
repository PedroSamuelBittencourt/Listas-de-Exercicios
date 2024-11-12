let numero  = prompt("Digite um número: ")

for (let i = 1; i <= 10; i++) {
    document.getElementById("tabuada").innerHTML += " </br> " + "    " + numero + " * " + i  + " = "  + numero * i + "    ";
}

