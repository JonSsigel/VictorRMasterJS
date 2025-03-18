'use strict'
window.addEventListener('load', () =>{
	//alert('holis');
	// Listado de usuarios.	
	// Fetch (ajax) y peticiones a servicios/apis rest

	//let input = 'https://jsonplaceholder.typicode.com/users';// Esta le dio lata al pendejo este jajajaj
	let input = 'https://reqres.in/api/users/';
/* Esto fue como directo, en video 79, en el 80 se pasa a funciones
	fetch(input)
		.then(response => response.json())
		.then(response => {
			let usuarios = response.data;
			console.log({usuarios});
			listadoUsuarios(usuarios);
			usuarios.map((user,i) =>{
				let nombre = document.createElement('h4');
				nombre.innerHTML = `${i + 1}. ${user.first_name} ${user.last_name}`;
				users_list.append(nombre);
			});
		});
*/
	// Obtener usuarios.
	getUsers()
		.then(response => response.json())
		.then(response => {
			let usuarios = response.data;
			console.log({usuarios});
			listadoUsuarios(usuarios);
			
			return getUser(2);
 		})
		.then(response => response.json())
		.then(response =>{
			listadoIdUsuario(response.data);
		});

/* Definicion de metodos y funciones.*/
	function getUsers(){
		return fetch(input);
	}

	// funcion para obtener un usuario en concreto.
	function getUser(id){
		return fetch(`${input}${id}`);
	}

	// función para listar usuarios.
	function listadoUsuarios(usuarios) {
		usuarios.map((user, i) => {
			let users_list = document.querySelector('#users-list');
			let nombre = document.createElement('h4');
			nombre.innerHTML = `${user.id}. ${user.first_name} ${user.last_name}`;
			users_list.append(nombre);
		});

	}

	function listadoIdUsuario(user){
		let user_id = document.querySelector('#users-list-id');
		let usuario = document.createElement('h4');
		let avatar = document.createElement('img');
		usuario.innerHTML = `${user.id}. ${user.first_name} ${user.last_name}`;
		avatar.src = user.avatar;
		avatar.width = '100';
		user_id.append(usuario);
		user_id.append(avatar);
	}

});
