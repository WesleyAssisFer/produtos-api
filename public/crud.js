let idAtualizando = null;

async function cadastrar() {

    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const quantidade = document.getElementById("quantidade").value;

    await fetch("/produtos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome,
            preco,
            quantidade
        })
    });

    limparCampos();
    listar();
}

async function listar() {

    const resposta = await fetch("/produtos");
    const produtos = await resposta.json();

    let html = "";

    produtos.forEach(produto => {
        html += `
            <p> Id: ${produto.id}
                |${produto.nome}
                | R$ ${produto.preco}
                | Quantidade: ${produto.quantidade}

                <button onclick="prepararAtualizacao(${produto.id}, '${produto.nome}', ${produto.preco}, ${produto.quantidade})">
                    Atualizar
                </button>

                <button onclick="excluir(${produto.id})">
                    Excluir
                </button>
            </p>
        `;
    });

    document.getElementById("resultado").innerHTML = html;
}

function prepararAtualizacao(id, nome, preco, quantidade) {

    idAtualizando = id;

    document.getElementById("nome").value = nome;
    document.getElementById("preco").value = preco;
    document.getElementById("quantidade").value = quantidade;
}

async function atualizar() {

    if (idAtualizando === null) {
        alert("Selecione um produto para atualizar.");
        return;
    }

    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const quantidade = document.getElementById("quantidade").value;

    await fetch(`/produtos/${idAtualizando}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome,
            preco,
            quantidade
        })
    });

    idAtualizando = null;

    limparCampos();
    listar();
}

async function buscarPorId() {

    const id = document.getElementById("buscarId").value;

    const resposta = await fetch(`/produtos/${id}`);

    if (!resposta.ok) {
        alert("Produto não encontrado!");
        return;
    }

    const produto = await resposta.json();

    document.getElementById("resultado").innerHTML = `
        <p>
            Id:${produto.id}
            |${produto.nome}
            | R$ ${produto.preco}
            | Quantidade: ${produto.quantidade}

            <button onclick="prepararAtualizacao(${produto.id}, '${produto.nome}', ${produto.preco}, ${produto.quantidade})">
                Atualizar
            </button>

            <button onclick="excluir(${produto.id})">
                Excluir
            </button>
        </p>
    `;
}

async function excluir(id) {

    await fetch(`/produtos/${id}`, {
        method: "DELETE"
    });

    listar();
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("quantidade").value = "";
}