let frutas = [];
let lista = document.getElementById("Lista");

function adcitem(fruta) {
  let item = document.createElement("li");
  item.classList.add("list-group-item");
  item.textContent = fruta;
  lista.appendChild(item);
}

function atlista() {
  lista.innerHTML = "";
  frutas.forEach(adcitem);
}

function addFruta() {
  let fruta = document.getElementById("Valor").value;
  frutas.push(fruta);
  atlista();
}
function removerFruta() {
  frutas.pop();
  atlista();
}
