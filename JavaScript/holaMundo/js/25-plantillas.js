'use strict'

// Plantillas de texto.

var nombre = prompt('Inserta un nombre: ');

var apellidos = prompt('Inserta apellidos: ')

//var texto = `Mi nombre es ${nombre}. </br>Mis apellidos son: ${apellidos}`;

var texto = `
	<h1>Hola que tal</h1>
	<h2>Mi Nombre es: ${nombre}</h2>
	<h3>Mis apellidos son: ${apellidos}</h3>
`;


// básicamente las plantillas son lo del pesitos, esa está chida, si si.
document.write(texto);
