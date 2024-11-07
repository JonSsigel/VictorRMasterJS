'use strict'

/*
 * Tabla de multiplicar de un número introducido por pantalla.
 * */

var numero = parseInt(prompt('Introduce un número: ',1));

while (isNaN(numero)){
	numero = parseInt(prompt('Introduce un número: ',1));
}

document.write(`<h1>Tabla del número: ${numero} </h1><br>`);

for (let i = 1; i <= 10; i++){
	document.write(`${numero} x ${i} =  ${i*numero} <br>`);
}
