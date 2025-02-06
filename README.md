Sorteo de Amigos

Este proyecto es una simple aplicación en JavaScript que permite agregar nombres de amigos a una lista y realizar un sorteo aleatorio entre ellos.

Características

Agregar amigos a una lista sin duplicados.

Mostrar la lista de amigos en la interfaz.

Realizar un sorteo aleatorio entre los amigos agregados.

Tecnologías utilizadas

JavaScript

HTML (se requiere un documento HTML con los elementos de entrada y salida correspondientes)

CSS (opcional para mejorar la apariencia)

Cómo usar

Ingresar el nombre de un amigo en el campo de entrada.

Hacer clic en el botón "Agregar" para incluirlo en la lista.

Una vez agregados los amigos, presionar el botón "Sortear" para seleccionar un amigo aleatorio.

El nombre del amigo seleccionado se mostrará en la interfaz.

Funciones principales

agregarAmigo()

Agrega un nombre a la lista de amigos si no está vacío ni duplicado.

Actualiza la lista mostrada en la interfaz.

actualizarLista()

Muestra en pantalla la lista actual de amigos.

sortearAmigo()

Selecciona aleatoriamente un amigo de la lista y muestra el resultado en la interfaz.

Requisitos

Un archivo HTML con elementos de entrada, lista de amigos y un área para mostrar el resultado.

Ejemplo de estructura HTML necesaria

<input type="text" id="amigo" placeholder="Nombre del amigo">
<button onclick="agregarAmigo()">Agregar Amigo</button>
<ul id="listaAmigos"></ul>
<button onclick="sortearAmigo()">Sortear Amigo</button>
<p id="resultado"></p>

Autor

Desarrollado por [Tu Nombre]
