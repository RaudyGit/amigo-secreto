// Array para almacenar los nombres de amigos 
let amigos = [];

// Función para agregar un amigo 
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    // Validar que el campo no está vacío
    if (nombreAmigo === "") {
        alert("Por favor, inserta un nombre.");
        return; 
    }

    // Validar que el nombre no esté duplicado 
    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} ya está en la lista.`);
        return;
    }

    // Agregar el amigo al array
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada 
    inputAmigo.value = "";

    // Actualizar la lista en el HTML 
    actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz 
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos'); // Asegúrate de que este ID coincide en tu HTML

    // Limpiar el contenido actual de la lista 
    listaAmigos.innerHTML = "";

    // Recorrer el array con un ciclo for 
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
        return;
    }

    // Generar un índice aleatorio 
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
