'use strict'

// Parametros REST y SPREAD, resto y otra cosa XD

function listadoFrutas(fruta1,fruta2,...restoFrutas){
	console.log("Fruta 1: "+ fruta1);
	console.log("Fruta 2: "+ fruta2);
	console.log({restoFrutas});// el resto lo mete en un array.
}

listadoFrutas('Naranja', 'Manzana');

listadoFrutas('Naranja', 'Manzana','Pera','Melon','Coco');

var frutas = [];
listadoFrutas('Naranja', 'Manzana','Pera','Melon','Coco');
