function entrar(){
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    if (nome === "pedro" && senha === "123"){    
        window.location.href = 'crud.html'
    }else{
        mensagem.innerHTML = "Nome ou senha incorretos";
        mensagem.style.color = "red";
    }
}