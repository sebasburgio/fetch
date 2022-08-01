//API Rest - BackEnd que devuelve datos en JSON
//Fetch - Petición a API Rest

const image = document.querySelector('#image');
const nombre = document.querySelector('#nombre');
const cita = document.querySelector('#cita');

let quote = [];

fetch('https://thesimpsonsquoteapi.glitch.me/quotes')//Promesa
	.then(function (info){
		return info.json();
	})//Capturamos los datos y los convertimos a JSON

	.then(info =>{
		quote = info;
		let personaje = quote[0];
		console.log(personaje);
		nombre.innerHTML = '<b>'+personaje.character+'<b><br>';
		cita.innerHTML = personaje.quote + '<b>';
		image.src = personaje.image;
	});