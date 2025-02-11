'use strict'
// json - javascript object Notation
window.addEventListener('load', () =>{
	let pelicula = {
		titulo: 'Batman vs Superman',
		year: 2017,
		pais: 'Estados Unidos'
	};

	console.log(pelicula.titulo);
	pelicula.titulo = 'Flash';
	console.log(pelicula);


	let arrayPeliculas = [
		{titulo: "La verdad duele", year: 2016, pais: 'Francia'},
		pelicula
	];

	console.log(arrayPeliculas);

	var cajaPeliculas = document.querySelector("#peliculas");
	for (let index in arrayPeliculas) {
		let p = document.createElement("p");
		p.append(`${arrayPeliculas[index].titulo} ${arrayPeliculas[index].year}`);
		cajaPeliculas.append(p);
	}
})

