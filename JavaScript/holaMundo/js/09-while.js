'use strict'

// Bucle while.

var year = 2024;

while(year <= 2051){
	// Bloque que se ejecuta.
	console.log("Estamos en el año "+ year);
	year++;
	if(year === 2030){
		break;
	}
}

// Do-While 

var anios = 10;
do{
	alert("Sólo cuando sea diferente de 20")
	anios++;
	console.log(anios)
}while(anios != 20);
