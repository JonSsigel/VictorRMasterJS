'use strict'

// Arrays. Colección de tipos de valores que puede tener un dato, algo así dijo, jajaja.
// Tienen índices que empiezan en cero.

var nombre = 'Jona Gutierrez';
var nombres = ['Jona Gutierrez','Joshua Gutierrez','Marcos Gutierrez',4,true];// Puede haber arrays dentro de arrays.

var lenguajes = new Array('php','js','go','java','C','C++');

/*console.log({lenguajes});*/
/*console.log({nombres});*/

/*console.log(nombres[2]);*/

// Longitud de un array
//
 //console.log(lenguajes.length);

// Sacar un valor de un índice.
//

/*var elemento = parseInt(prompt('Qué elemento deseas: ',0));*/
/*// Falta la validación chida, que haga ciclo por que esto es par auna vez nomás.*/
/*if (elemento > lenguajes.length-1){*/
	/*alert(`Índice incorrecto, valores entre 0 y ${lenguajes.length - 1}`);*/
	/*elemento = parseInt(prompt('Qué elemento deseas: ',0));*/

/*} else {*/

	/*alert(lenguajes[elemento]);*/

/*}*/

// Versión mía.

/*document.write(`*/
	/*<h1>Lenguajes de programación del 2018</h1>*/
/*`);*/

/*for (var i = 0; i<lenguajes.length;i++){*/
	/*document.write(`${i+1}. ${lenguajes[i]}</br>`);*/
/*}*/


/*document.write(`*/
	/*<h1>Lenguajes de programación del 2018</h1>*/
	/*<ul>*/
/*`);*/

/*for (var i = 0; i<lenguajes.length;i++){*/
	/*document.write(`<li> ${lenguajes[i]}</li>`);*/
/*}*/

/*document.write(`</ul>`);*/


document.write(`
	<h1>Lenguajes de programación del 2018</h1>
	<ul>
`);

// foreach.

//lenguajes.forEach((elemento,index,data) =>{ // para esto es revisar la definición de forEach por que los otros no son obligatorios.
lenguajes.forEach((elemento,index,data) =>{
document.write(`<li> ${elemento}</li>`);// el índice ya lo define.
	console.log(index);
	console.log(data);// Este es en realidad el arreglo, ok ok, eso está chido para cuando quiera recorrer un array en js.
});

document.write(`</ul>`);
