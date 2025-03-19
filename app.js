// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];
let amigo = 0;
let lista = 0;
let elegido = 0;

//Agragar amigos
function agregarAmigo() {
    let input = document.getElementById("amigo");
    amigo = input.value.trim();
    if (amigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    if (!nombres.includes(amigo)) {
        nombres.push(amigo);
        actualizarLista();
        input.value = "";
    }
}

//Generar y Actualizar Lista
function actualizarLista() {
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    nombres.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//Sorteo del amigo secreto
function sortearAmigo() {
    if (nombres.length > 0) {
        elegido = nombres[Math.floor(Math.random() * nombres.length)];
        document.getElementById("resultado").textContent = "Amigo Secreto: " + elegido;
    }
}