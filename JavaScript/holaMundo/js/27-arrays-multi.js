'use strict'

// Arrays multidimensionales.
// Arreglos dentro de arreglos.
var lenguajes = new Array('PHP','js','go','java','C','C++');

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
/*do {*/
	/*elemento = prompt('Agrega un elemento nuevo(salir:ACABAR)');*/
	/*if(elemento != 'ACABAR'){*/
		/*peliculas.push(elemento);// ingresa valor*/
	/*}*/

/*}while (elemento !='ACABAR');*/

//console.log({peliculas});
//setTimeout(10000);
//peliculas.pop();// Elimina el último elemento del arreglo.
//console.log('pop ',peliculas);

// eliminar un elemento específico.

var index = peliculas.indexOf('Gran torino');// Retorna -1 si no encuentra.

//console.log({index});

var sacadito;
if (index > -1){
		sacadito = peliculas.splice(index,2);// splice en arreglos permite sacar valores empezando en el índice que le dices y el segundo es el cuantos borrará/sacará
}

//console.log({sacadito});
//console.log('torino ',peliculas);


// Array a texto.

var peliculasString = peliculas.join();// lo convierte a string separado por comas.

//console.log(peliculasString);


var cadena = 'Texto,Texto1,Texto2';
// cadena en array.
var cadena_array = cadena.split(",");// convertir una cadena en array usando un delimitador.

//console.log({cadena_array});



// ordenar un array.

//console.log(peliculas.sort()); // default lo ordena alfabético.
//console.log(peliculas.reverse());// le da la vuelta a un array.


console.log(categorias.sort());
console.log(categorias.reverse());


for (let lenguaje in lenguajes){
	document.write(`${lenguajes[lenguaje]}. </br>`);
}


// Busquedas.
//

let busqueda = lenguajes.find(function(lenguaje){// esta es una función que recibe un lenguaje en este caso
	return lenguaje == "GO";// retorna cuando lenguaje sea igual a GO, es una condición de retorno. en este caso es caseSensitive
});

console.log({busqueda});

var busquedaFlecha = lenguajes.find(lenguaje => lenguaje =="PHP"); // esta es lo mismo que la de arriba pero con función de flecha.

console.log({busquedaFlecha});

busquedaFlecha = lenguajes.findIndex(lenguaje => lenguaje =="PHP"); // para sacar el índice del elemento. 

console.log({busquedaFlecha});

let precios = [12,13,14,15];

let busquedaNumeros = precios.some(precio => precio >16); // true si se cumple la condición en algún momento, false si no

console.log({busquedaNumeros});

