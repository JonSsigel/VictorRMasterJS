'use strict'

// DOM - Document Object Model
// conseguir elementos por id 
var caja = document.getElementById('miCaja');

function cambiaColor(color,elemento){// Esta función la puedo invocar desde la consola y hago lo que chingados quiera, eso está con madres!
	elemento.style.background = color;
}

//console.log(caja);
var caja2 = document.getElementById('miCaja').innerHTML;// comentado por que devuelve null
//console.log('caja 2',caja2);
//console.log('caja.inner ',caja.innerHTML);// esto esta chido por que accedo a todas las propiedades de document.getElementById

caja.innerHTML='Cambio de texto desde JS';// Al tiro por que el texto del html sigue siendo el que está en el archivo pero yo lo cambio en el front, ok ok.

//console.log('caja 2',caja2);

caja.style.background = "red";// Los estilos pueden cambiar también.
caja.style.padding = '20px';
caja.style.color = "white";
caja.className = "Hola";

// querySelector

//var caja3 = document.querySelector("#miCaja");// con # es id y con . es clase, sin nada para el nombre de la etiqueta, esto es como opción a getElementById
// Conseguir elementos por etiqueta
var todosLosDivs = document.getElementsByTagName('div');

console.log('todos los div ',todosLosDivs);
// ahora, para modificar alguno se hace como acceder a un array

var contenidoTexto = todosLosDivs[1];// se puede sacar el textContent pero solo obtiene el valor, con innerHTML puedes cambiar el texto

contenidoTexto.innerHTML = 'Cambio de texto en front';
console.log('contenido texto',contenidoTexto);// cambia el valor ya del texto con innerHTML. Con textContent no se cambia, sólo se obtiene

// se puede hacer todo lo que quiero una vez obtengo un valor

contenidoTexto.style.background = 'yellow';

//todosLosDivs.forEach((valor,indice) =>{ // Este no se puede por que el forEach sirve para arreglos normales, y todosLosDivs son htlmCollection
var seccion = document.querySelector('#miSeccion');
for (var valor in todosLosDivs) {
	if (typeof todosLosDivs[valor].textContent == 'string') {
	var parrafo = document.createElement('p');
		var texto = document.createTextNode(todosLosDivs[valor].textContent);
		//parrafo.appendChild(texto);// hay que ver que es el prepend y append, yo diría 
		parrafo.append(texto);
		seccion.prepend(parrafo);
		//document.querySelector('#miSeccion').appendChild(parrafo);
	}
}
//});

// Conseguir elementos por su clase

