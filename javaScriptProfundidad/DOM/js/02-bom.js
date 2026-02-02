"use strict";
// BOM para las opciones de la ventana del navegador.

console.log(window.innerWidth);
console.log(window.innerHeight);

// ver el objeto screen, va a ser total de la pantalla y no de la ventana
console.log(screen.width);
console.log(screen.height);

//

console.log(window.location); // locación del archivo en la computadora, eso no está chido. que al parecer es la url más que donde esta el archivo.
// y hasta solo cambiando desde consola.
function redirecion(url) {
  // Esto se invoca desde consola y te manda a donde quieras, jo jo, no no no me gusta esto.
  window.location.href = url;
}

function abrirVentana(url) {
  window.open(url, "", "whidth=400,height=300"); // Este abre una nueva pestaña en el navegador. y puede tener propiedades, con esas propiedades abre otra ventana como popup
}
