'use strict'

/*
 * Muestre todos los números divisores de un número que introduce el prompt
 * */


var numero = parseInt(prompt('Introduce un número',1));


for (let i = 1; i < numero; i++){
	if(numero%i === 0){
		console.log("Divisor "+ i);
	}
}
