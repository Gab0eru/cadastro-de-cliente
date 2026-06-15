//Seliciona a lista no HTML para implementar a variavael no postman
const listaClientes = document.getElementById("listaClientes")

fetch("https://crudcrud.com/api/54d810a84a60451a8242102c46085398/cadastrados")
.then(resposta => resposta.json())
.then((listaCliente)=>{
    listaCliente.forEach(cliente => {
        const novo = document.createElement("li");
        novo.innerHTML = `${cliente.nome} - ${cliente.ecorreio} <button onclick="deletaCliente('${cliente._id}', this)">X</button>`;
        listaClientes.appendChild(novo);
    })
})

const add = document.getElementById("add").addEventListener("click", () =>{
    const nome = document.getElementById("cliente").value;
    const ecorreio = document.getElementById("email").value;

    fetch("https://crudcrud.com/api/54d810a84a60451a8242102c46085398/cadastrados", {
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
    novo.innerHTML = `${cliente.nome} - ${cliente.ecorreio} <button onclick="deletaCliente('${cliente._id}', this)">X</button>`;
    listaClientes.appendChild(novo);
})
})

function deletaCliente(id, botao){
    fetch(`https://crudcrud.com/api/54d810a84a60451a8242102c46085398/cadastrados/${id}`,{
        method: "DELETE"
    })
.then(()=>{
    botao.parentElement.remove();
})
.catch(error =>{
    console.error("erro ao excluir", error);
});
}