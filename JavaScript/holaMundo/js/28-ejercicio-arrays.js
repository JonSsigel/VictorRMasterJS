'use strict'

/*1. PROGRAMA QUE PIDA SEIS NÚMEROS POR PANTALLA Y LOS META EN UN ARRAY.*/
/*2. Mostrar todos sus elementos en el cuerpo de la página y en la consola*/
/*3. Ordenar el array y mostrarlo.*/
/*4. Invertir su orden y mostrarlo.*/
/*5. Mostrar cuantos elementos tiene el array.*/
/*6. Búsqueda de un valor introducido por el usuario y que nos diga si está en el array y su posición.*/

// 1. Forma uno y la que parece más chida es la dos
/*let numeros = new Array(6);*/

/*for( let i = 0; i< numeros.length; i++ ){*/
	/*numeros[i] = parseInt(prompt(`Introduce número(${i+1}):`,0));*/
/*};*/
let numeros = [];
const numerosOriginal = [];
for (let i = 0; i< 6; i++ ){
	numeros.push(parseInt(prompt(`Introduce número(${i+1}):`,0)));
	numerosOriginal[i] = numeros[i];
}

console.log({numeros});
// 2.
document.write('<h1>Arreglo de números.</h1></br>');
for(let numero in numeros){
	document.write(`${parseInt(numero) + 1}. <strong>${numeros[numero]} </strong></br>`);
	console.log(`posición[${numero}]: valor[${numeros[numero]}]`);
};

let numerosOrdenados = numeros.sort();

console.log({numerosOrdenados});

// 3.
let ordenarAsc = (a,b)=>{
	return a-b;
};

let ordenarDesc = (a,b)=>{
	return b-a;
};

//let numerosOrdenadosChido = numeros.sort(ordenarAsc);
let numerosOrdenadosChido = numeros.sort(ordenarDesc);

console.log({numerosOrdenadosChido});

// 4. 
console.log('Arreglo antes de invertir ',numerosOriginal); // al tiro con esto, no sirve ya que no guarda el valor si no que apunta a números, si cambias numeros, cambia este. 
let arrayInvertido = numerosOriginal.reverse();
console.log({arrayInvertido});

// 5. 
console.log('Número de elementos: ',numerosOriginal.length);

// 6. 

var busqueda = parseInt(prompt("Buscar numero: ",0));

var posicion = numerosOriginal.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1) {
	console.log('Posicion de la búsqueda: ',posicion);
} else {
	console.log('Numero no encontrado');
}

