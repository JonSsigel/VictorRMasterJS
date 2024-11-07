'use strict'

/*
 *
 * Mostrar números entre los dos que introduce el usuario.
 * 	
 * */

var numero1 = parseInt(prompt('Valor 01',0));
var numero2 = parseInt(prompt('Valor 02',0));
// Falta validación de valor más pequeño por que si los das invertidos esto se rompe.
if (isNaN(numero1) || isNaN(numero2)){
	alert('Introduce valores chidos puta!');
} else{
	document.write("<h1>Valores entre "+ numero1 +" y "+  numero2 + "</h1>");
	let i = numero1;
	while(i <= numero2)
	{
		document.write(i+"<br>");
		i++;
	}
}
