'use strict'

/*
 * Utilizando un bucle, mostrar la suma y la media de los números introducidos
 * hasta introducir un número negativo y ahí mostrar el resultado. Pinche enunciado culero, jajaja.
 * * */

var suma = 0;
var contador = 0;

do{
	var numero =parseInt(prompt('Introduce números(finaliza con número negativo)',0));
	
	if(isNaN(numero)){
		numero = 0;
	}else if(numero >= 0){
		suma += numero;
		contador ++;
	}


	console.log({suma});
	console.log({contador});


}while(numero >= 0);


alert('Suma '+ suma);
alert('Media '+(suma/contador));
