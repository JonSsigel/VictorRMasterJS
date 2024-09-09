'use strict';

// Prueba con var
var numero = 40;
console.log(numero);// 40

if(true){
	var numero = 50;
	console.log(numero);// debe valre 50
}

console.log(numero);// 50

// Prueba con let

let texto = 'Puta!';
console.log(texto);

if (true){
	let texto = 'Re puta!';
	console.log(texto);
}

console.log(texto);
