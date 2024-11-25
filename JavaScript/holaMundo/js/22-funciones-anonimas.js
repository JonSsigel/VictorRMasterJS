'use strict'
// Funciones anónimas.
// Funciones que no tienen nombre y se guarda en una variable.
// Se usa para hacer callbacks, que son funciones ejecutadas dentro de otras.
//

var pelicula = function (nombre){
	return `La pelicula es ${nombre}`;
}


// callback. Función que se ejecuta dentro de otra.
//

function sumame(num1,num2,sumaYmuestra,sumaPorDos){
	var sumar = num1 + num2;
	sumaYmuestra(sumar);
	sumaPorDos(sumar);
	return sumar;
}

sumame(1,4,function(dato){
	console.log(`La suma es ${dato}`)
},function(dato){
	console.log(`La suma por dos es ${dato*2}`);
});

// Funciones flecha. lo mismo pero sin la palabra function. dice el compa que sin paréntesis, supongo por que va un solo dato pero estaría más chido así:
// (parametros) =>{}
sumame(1,4,dato =>{
	console.log(`La suma es ${dato}`)
},dato=>{
	console.log(`La suma por dos es ${dato*2}`);
});


