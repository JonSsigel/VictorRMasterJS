'use strict'


/*
 * Mostrar todos los números impares entre dos números introducidos por el usuario.
 * */


var numero1 = parseInt(prompt('Introduce numero inicial',0));
var numero2 = parseInt(prompt('Introduce numero final',0));

while (numero1 < numero2){
	numero1++;
	if(numero1%2 != 0){
		console.log(numero1 +  " es impar");
	}
}
