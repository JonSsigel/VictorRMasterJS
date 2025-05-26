'use strict'
window.addEventListener('load', () =>{
	//alert('holis');
	// Listado de usuarios.	
	// Fetch (ajax) y peticiones a servicios/apis rest

	//let input = 'https://jsonplaceholder.typicode.com/users';// Esta le dio lata al pendejo este jajajaj
	//let input = 'https://jsonplaceholder.typicode.com/users';
	let apiKey = 'reqres-free-v1'
	let input = `https://reqres.in/api/users/`; // esta dejó de funcionar y puse la primera.
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
			listadoUsuarios(usuarios);
			
			return getInfo();
 		}).then(data => {
			let div_profesor = document.querySelector('#profesor');
			div_profesor.innerHTML = data;
			return getUser(2);
		})
		.then(response => response.json())
		.then(response =>{
			let usuario2 = response.data;
			listadoIdUsuario(usuario2);
		})
		.catch(error => {
			console.log(error);
			alert('Error en las peticiones o promesas');
		});

/* Función fetch mia para llevar el key ya*/
	function fetchMia(dir){
		return fetch(dir,{
			method : 'GET',
			headers : {
				'x-api-key': apiKey
			}
		})
	}
/* Definicion de metodos y funciones.*/
	function getUsers(){
		return fetchMia(input)
	}

	// funcion para obtener un usuario en concreto.
	function getUser(id){
		return fetchMia(`${input}${id}`);
	}

	// función para listar usuarios.
	function listadoUsuarios(usuarios) {
		usuarios.map((user) => {
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
		console.log({user});
		usuario.innerHTML = `${user.id}. ${user.first_name} ${user.last_name}`;
		avatar.src = user.avatar;
		avatar.width = '100';
		user_id.append(usuario);
		user_id.append(avatar);
	}

// Crear una promesa desde cero.
	function getInfo(){
		let profesor = {
			nombre : 'Victor',
			apellidos : 'Robles',
			url : 'https://victorroblesweb.es'
		};

		return new Promise((resolve,reject)=>{
			let profesor_string = '';
			setTimeout(() => {
				profesor_string =	JSON.stringify(profesor);
				if( typeof profesor_string !='string' || profesor_string == '') return reject('Error Mio');

				return resolve(profesor_string);
			}, 3000);

		});

	}


});
