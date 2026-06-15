//Seliciona a lista no HTML para implementar a variavael no postman
const listaClientes = document.getElementById("listaClientes")

fetch("https://crudcrud.com/api/69c1dae5eb9747689435b8f015d5cc13/cadastrados")
.then(resposta => resposta.json())
.then((listaCliente)=>{
    listaCliente.forEach(cliente => {
        const novo = document.createElement("li");
        novo.innerHTML = `${cliente.nome} - ${ecorreio.email} <button>X</button>`;
        listaClientes.appendChild(novo);
    })
})

const add = document.getElementById("add").addEventListener("click", () =>{
    const nome = document.getElementById("cliente").value;
    const ecorreio = document.getElementById("email").value;

    fetch("https://crudcrud.com/api/69c1dae5eb9747689435b8f015d5cc13/cadastrados", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({nome: nome, ecorreio: ecorreio})
})
.then(resposta => resposta.json())
.then((cliente) =>{
    console.log(cliente);
    const novo = document.createElement("li");
    novo.innerHTML = `${cliente.nome} - ${ecorreio.email} <button></button>`;
    listaClientes.appendChild(novo);
})
})