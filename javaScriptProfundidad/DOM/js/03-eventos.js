'use strict'

//funciones que se ejecutan cuando el usuario hace algo.

// Eventos del ratón.
// Cuando damos click, pasar por el elemento y al salir del elemento

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

boton.addEventListener('click', function(){
	cambiarColor();
});

// mouse over

boton.addEventListener('mouseover', ()=>{
	boton.style.background = 'yellow';
});

// mouse out
boton.addEventListener('mouseout', ()=>{
	boton.style.background='grey';
});

