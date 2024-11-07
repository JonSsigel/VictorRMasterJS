'use strict'

/*
 * Si un número es par o impart.
 * Si no es un número válido que nos vuelva a pedir
 * */

var numero = parseInt(prompt('Introduce un número:',0));

while(isNaN(numero)){
	numero = parseInt(prompt('Introduce un número:',0));
}

if(numero%2 === 0){
	alert('Numero '+ numero + ' es par.')
}else {
	alert('Numero '+ numero + ' es impar.')
}
