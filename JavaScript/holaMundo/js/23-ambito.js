'use strict'

var texto = 'hola mundo. Soy una variable global.';

function holaMundo(texto){
	var hola_mundo = 'Texto dentro de función.';
	console.log(texto);
	console.log(numero.toString());// esto va a dar error según yo. Que siempre si se puede por que es global y está definida antes de invocar la función.
	console.log(hola_mundo);

}

var numero = 12;

holaMundo(texto);

//console.log(hola_mundo);
