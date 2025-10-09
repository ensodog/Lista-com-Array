let frutas = ["Item", "Item 2"];
let lista = document.getElementById("Lista");
atlista();
function adcitem(fruta) {
  let item = document.createElement("li");
  item.classList.add("list-group-item");
  item.classList.add("elementos");
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
function procurar() {
  let pesquisa = document.getElementById("Busca").value;
  pesquisa = pesquisa.toLowerCase();

  let elements = document.getElementsByClassName("elementos");

  for (i = 0; i < elements.length; i++) {
    if (!elements[i].textContent.toLowerCase().includes(pesquisa)) {
      elements[i].style.display = "none";
    } else {
      elements[i].style.display = "flex";
    }
  }
}
