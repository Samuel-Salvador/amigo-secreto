let amigos = [];

function adicionarAmigo() {
  let amigoInserido = document.getElementById("amigo").value;

  if (amigoInserido == "") {
    alert("Por favor, insira um nome.");
  } else amigos.push(amigoInserido);

  document.getElementById("amigo").value = "";
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

let listaAmigos = document.getElementById("listaAmigos");

function sortearAmigo() {
  let amigoSorteado = "";
  if (amigos.length > 0) {
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    amigoSorteado = amigos[indiceSorteado];
    console.log(indiceSorteado);
  }
  document.getElementById("resultado").innerHTML = amigoSorteado;
  document.querySelector(".button-draw").innerHTML =
    '<img src="assets/play_circle_outline.png" alt="Ícone para sortear">Sortear outro amigo';
}
