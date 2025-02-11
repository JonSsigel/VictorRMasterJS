'use strict'
window.addEventListener('load', () =>{
	//alert('holis');
	// Listado de usuarios.	
	// Fetch (ajax) y peticiones a servicios/apis rest

	//let input = 'https://jsonplaceholder.typicode.com/users';// Esta le dio lata al pendejo este jajajaj
	let input = 'https://reqres.in/api/users';
	fetch(input)
		.then(response => response.json())
		.then(response => {
			let users_list = document.querySelector('#users-list');
			let usuarios = response.data;
			console.log({usuarios});
			usuarios.map((user,i) =>{
				let nombre = document.createElement('h4');
				nombre.innerHTML = `${i + 1}. ${user.first_name} ${user.last_name}`;
				users_list.append(nombre);
			});
		});

	

});
