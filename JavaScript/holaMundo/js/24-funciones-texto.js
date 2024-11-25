'use strict'

// Transformación de textos.

var numero = 444;
var texto = 'Esto es esparta! pero no esparta';
var texto2 = 'No sé que putas poner XD';

/*var dato = numero.toString();*/

/*dato = texto.toUpperCase();// a mayúsculas*/
/*dato = texto.toLowerCase();// a minúsculas.*/


/*//console.log(dato);*/

/*// Calcular longitud del texto. Para saber si existe y si tiene algo dentro*/

/*var nombre = '';// si no existe, si es null o un tipo distinto a un string, da undefined, 0 o error directo. */
/*var nombre = ['hola','perro'];*/

/*dato = nombre.length;// número de caracteres y número de elementos.*/

/*//console.log(dato);*/


/*// Concatenar.*/
 
/*var textoTotal = texto +' '+ texto2;*/

/*textoTotal = texto.concat(' '+ texto2);*/

/*console.log(textoTotal);*/

var busqueda = texto.indexOf('esparta');// en qué caracter empieza la palabra deseada.

var busqueda1 = texto.lastIndexOf('esparta');// última aparición 

console.log(busqueda);
console.log(busqueda1);

var busqueda2 = texto.search('Esparta');// -1 cuando no aparece y es caseSensitive, funciona igual o similar a indexOf

console.log('search ',busqueda2);

var busqueda3 = texto.match('esparta');// Este da más detalle, devuelve un array con la palabra a buscar, la posición y el texto donde se está buscanco.
busqueda3 = texto.match(/esparta/gi);// busca todo, con esto como expresión regular y la g es global. pero no me regresa el detalle del anterior, creo me gusta más el anterior.

console.log('busqueda3 ',busqueda3);

var busqueda4 = texto.substring(4,8);// para extraer del caracter 4 al 8, pero puede ir sin fin.

console.log({busqueda4});

var busqueda5 = texto.charAt(14);// letra concreta de un string.

console.log({busqueda5});

var busqueda6 = texto.startsWith('esparta');// Es que empiece.
var busqueda6 = texto.endsWith('esparta');// al final.

var busqueda6 = texto.includes('esparta');// Este es caseSensitive, al tiro.
console.log({busqueda6});

// Reemplazar, separa, colocar text.
var busqueda7 = texto.replace('esparta','Italia');
busqueda7 = texto.slice(8);// muestra cadena desde donde cides, es como el substring y puede tener dos parámetros. Justo cono substring
busqueda7 = texto.split(' ');// recibe el separador para dividir en arrays, aqui dividirá la cadena por palabra por que usa el espacio para dividir.
// el split está chido, y el includes
busqueda7 = texto.trim();// quitar espacios delanteros y traseros de una cadena.

console.log('Siete ',busqueda7);

// Plantillas.


