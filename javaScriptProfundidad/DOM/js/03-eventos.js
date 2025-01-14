'use strict'

//funciones que se ejecutan cuando el usuario hace algo.

// Eventos del ratón.
// Cuando damos click, pasar por el elemento y al salir del elemento
window.addEventListener('load', () => {
	var boton = document.querySelector('#boton');

	function cambiarColor() {
		console.log('Click color')
		var bg = boton.style.background;
		if (bg == 'green') {
			boton.style.background = 'red';
		} else {
			boton.style.background = 'green';
		}
		boton.style.padding = '10px';
		boton.style.border = '1px solid #ccc';

	}

	// Se agregará un escuchador de eventos
	//
	// Evento click

	boton.addEventListener('click', function () {
		cambiarColor();
		console.log(this);
		this.style.border = '10px solid black';
	});

	// mouse over

	boton.addEventListener('mouseover', () => {
		boton.style.background = 'yellow';
	});

	// mouse out
	boton.addEventListener('mouseout', () => {
		boton.style.background = 'grey';
	});

	// Evento focus
	var input = document.querySelector("#campo_nombre");
	input.addEventListener('focus', () => {
		console.log('[focus]Estas dentro del input');
	});

	// Evento blur
	input.addEventListener('blur', () => {
		console.log('[blur]Estas fuera del input');
	});

	/*// Evento keydown al pulsar una tecla*/
	input.addEventListener('keydown', (event) => {
		console.log('[keydown]pulsando una tecla', String.fromCharCode(event.keyCode));
	});


	/*// Evento keypress*/
	input.addEventListener('keypress', (event) => {
		console.log('[keypress]Tecla presionada', String.fromCharCode(event.keyCode));
	});


	/*// Evento keyup*/
	input.addEventListener('keyup', () => {
		console.log('[keyup]Tecla soltada');
	});


});

