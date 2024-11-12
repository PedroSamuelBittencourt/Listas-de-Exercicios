let btn = document.getElementById('btn')
let texto = document.getElementById('texto')


function Cadastrar(){
    let nome = document.getElementById('nome').value;

    texto.innerHTML = `Palavra digitada: ${nome}`

    

    document.getElementById('palavraseparada').innerHTML = "Palavra Separada: "
    for (let i = 0; i < nome.length; i++) {
            document.getElementById('palavraseparada').innerHTML += `${nome[i]} - `
        
    }

}


btn.addEventListener('click', Cadastrar)