'use strict'

/*
 * Programa que pida dos números y nos diga cuál es menor, cuál es mayor y si son iguales.
 * Plus: Si los números no son un número NaN o son iguales o menores a cero, que los vuelva a pedir.
 * */


var numero1 =parseInt(prompt('Número 01:',0));
var numero2 =parseInt(prompt('Número 02:',0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
	alert('Números incorrectos. Intenta de nuevo.')
	var numero1 =parseInt(prompt('Número 01:',0));
	var numero2 =parseInt(prompt('Número 02:',0));

}
// Comparación.

	if (numero1 > numero2){
			alert('Número mayor: '+ numero1);
			alert('Número menor: '+ numero2);
	} else if(numero2 > numero1){

		alert('Numero mayor: '+ numero2);
		alert('Numero mayor: '+ numero1);

	}else if(numero1 === numero2) {
		alert('Números iguales.');

	}else {
		alert('Introduce un número correcto.')
	}


