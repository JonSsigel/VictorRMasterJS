'use strict'

window.addEventListener('load', () => {
	/* localStorage
	 * Comprobar si el localStorage es compatible hacemos un if
	*/	
	if(typeof(Storage) !== 'undefined'){
		console.log(`Local Storage disponible`);
	}else {
		console.log(`Local Storage NO disponible`);
	}
	
	// Guardar datos.
	localStorage.setItem('titulo', 'Curso de Symfony de VictorRobles');
	localStorage.setItem('anio', 4);

	// Recuperar elemento y ponerlo en alguna etiqueta.
	let titulo = localStorage.getItem('titulo');
	console.log(titulo);
	document.querySelector('#peliculas').innerHTML = titulo;

	// Guardar un objeto en Local
	
	let usuario = {
		nombre : 'Jons',
		email : 'jons@jons.com',
		web : 'jons.com'
	}

	localStorage.setItem('usuario', JSON.stringify(usuario));

	// Recuperar objeto del localStorage
	let usuarioJson = localStorage.getItem('usuario');
	console.log(usuarioJson);// esto es un string, hay que pasarlo a json otra vez.

	let userJs = JSON.parse(usuarioJson);
	console.log(userJs);

	document.querySelector('#peliculas').append(` ${userJs.web} nombre: ${userJs.nombre}`);

	let datos = document.querySelector('#datos');

	datos.append(` ${userJs.web} nombre: ${userJs.nombre}`);

	// borrar cosas del localStorage
	localStorage.removeItem('usuario');
	// vaciar el localStorage
	localStorage.clear();
});
