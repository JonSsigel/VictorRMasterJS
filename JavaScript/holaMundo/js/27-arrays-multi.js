'use strict'

// Arrays multidimensionales.
// Arreglos dentro de arreglos.

var categorias = ['Accion','Terror','Comedias'];

var peliculas = ['La verdad duele','La vida es bella','Gran torino'];


var cine = [categorias,peliculas];
//console.log('Holis');
//console.log('cine',cine);

/*console.log('categorias',cine[0][1]);*/

/*console.log(cine[1][2]);*/

// Operaciones con arrays.


// Agregar elemento a un array.

//peliculas[]='Batman';// Esto es en php
var elemento;
do {
	elemento = prompt('Agrega un elemento nuevo(salir:ACABAR)');
	if(elemento != 'ACABAR'){
		peliculas.push(elemento);// ingresa valor
	}

}while (elemento !='ACABAR');

console.log({peliculas});
//setTimeout(10000);
//peliculas.pop();// Elimina el último elemento del arreglo.
console.log('pop ',peliculas);

// eliminar un elemento específico.

var index = peliculas.indexOf('Gran torino');

console.log({index});

var sacadito;
if (index > -1){
		sacadito = peliculas.splice(index,2);// splice en arreglos permite sacar valores empezando en el índice que le dices y el segundo es el cuantos borrará/sacará
}

console.log({sacadito});
console.log('torino ',peliculas);
