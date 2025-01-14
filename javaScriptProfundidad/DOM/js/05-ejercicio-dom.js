'use strict'

window.addEventListener('load', () => {
	console.log('DOM Cargado!');
	let formulario = document.querySelector("#formulario");
	let box_dashed = document.querySelector(".dashed");
	box_dashed.style.display = "none";

	formulario.addEventListener('submit', () => {
		console.log(`Evento capturado.`);

		let nombre = document.querySelector("#nombre").value;
		let apellidos = document.querySelector("#apellidos").value;
		let edad = parseInt(document.querySelector("#edad").value);
		/*Validar información del formulario con js puro*/
		if(nombre.trim() == null || nombre.length == 0 ){
			document.querySelector("#errorNombre").innerHTML = "Error en nombre";
			return false;

		}else {
			document.querySelector("#errorNombre").style.display = 'none';
		}
		if(apellidos.trim() == null || apellidos.length == 0 ){
			console.log('Apellido incorrecto.');
			return false;

		}
		if(edad == null || nombre <= 0 || isNaN(edad) ){
			alert('Edad inválida');
			return false;

		}

		box_dashed.style.display = "block";
		console.log(`nombre: ${nombre}, apellidos: ${apellidos}, edad: ${edad}`);
		let datos_usuario = [nombre, apellidos, edad];

		for (let indice in datos_usuario) {

			let parrafo = document.createElement("p");
			parrafo.append(datos_usuario[indice]);
			box_dashed.append(parrafo);
		}
		/*Se puede con hacer usando etiquetas en el html pero se me hace más culero, que puede ser útil.*/
		/*
			*
			* let p_nombre = document.querySelector("#p_nombre span");// esto para tener en una etiqueta con ese valor en el id y un span dentro
			* p_nombre.innerHTML = nombre; // esto pondría en el span que está dentro de la etiqueta p con id p_nombre el valor que capturamos.
			*
			* */

	});
});
