'use strict'

window.addEventListener('load', () => {
	// Formulario que permita agregar peliculas.
	let formulario = document.querySelector('#formPeliculas');
	let formularioBorrar = document.querySelector('#formPeliculasBorrar');
	let limpiarStorage = document.querySelector("#buttonClean");
	formulario.addEventListener('submit', () => {
		console.log('funcion formulario');
		let pelicula = document.querySelector("#addPelicula").value;
		if (pelicula && pelicula != 'undefined' && pelicula.trim() != '') {
			localStorage.setItem(pelicula, pelicula);
		}
	});

	// Boton limpiar el localStorage
	limpiarStorage.addEventListener('click', () => {
		console.log('limpiando Storage');
		localStorage.clear();
		location.reload();
	});

	console.log({localStorage});
	let listadoPeliculas = document.querySelector("#peliculasList");
	// Recorrer el localStorage
	for (let i in localStorage) {
		let li = document.createElement('li');
		if (typeof (localStorage[i]) == 'string') {
			li.append(localStorage[i]);
			listadoPeliculas.append(li);
		}
	};

	// Borrar películas
	formularioBorrar.addEventListener('submit', () => {
		console.log('funcion formulario borrar');
		let pelicula = document.querySelector("#deletePelicula").value;
		if (pelicula && pelicula != 'undefined' && pelicula.trim() != '') {
			localStorage.removeItem(pelicula);
		}
	});


});
