'use strict'

// condicional if
var edad1 = 45;
var edad2 = 14;

if(edad1 > edad2){
	console.log("Edad 1 es mayor que edad 2.");
}else {
	console.log("Edad dos es mayor o igual que edad uno.");
};

var edad = 54;
var nombre = "David Suarez";

// Revisar si usuario es mayor de edad.


if(edad >= 18 ){
	console.log(nombre + " tiene " + edad + " años, es mayor de edad");

	// If anidado.
	if(edad <= 33){
		console.log("Tiene la edad de Yisus");
	}else if(edad >= 70){
		console.log("Eres anciano ya XD");
	}else {
		console.log("Pasaste la edad de Yisus pero no eres viejo");
	};

}else{
	console.log(nombre + " tiene " + edad + " años, es menor de edad");
};

// Operadores lógicos.

var year = 2018;



if(year != 2016){

	console.log("Año distinto a 2016 realmente es: " + year);

}

// And concatenado
if(year >= 2000 && year <= 2020){

	console.log("Estamos en la era actual");

}else {

	console.log("Estamos en la era post moderna.");

}

// Or concatenado
if(year == 2008 || year == 2018){
	console.log("El año finaliza en 8");
}

// Dar prioridad con paréntesis.

if(year == 2008 ||(year >= 2018 && year == 2028)){
	console.log("El año termina en 8");
}else {
	console.log("Año no registrado");
}

