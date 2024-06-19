let btn = document.getElementById("btnlogin")

function login(){
    let nome = ''
    document.getElementById('nome').value == ''? nome = document.getElementById('nomeR').value: nome = document.getElementById('nome').value
    let senha = ''
    document.getElementById('senha').value == ''? nome = document.getElementById('senhaR').value: nome = document.getElementById('senha').value

    console.log(`Nome: ${nome}, Senha: ${senha}`)
}

btn.addEventListener('click', login)