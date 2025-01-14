'use strict'

window.addEventListener('load', () => {
	// timers
	// set interval

	function intervalo() {
		var tiempo = setInterval(() => {
			//var tiempo = setTimeout(()=>{
			console.log(`Set interval ejecutado, para ejecutar cada que se cumple el tiempo`);
			//console.log(`Set timeOut es para ejecutar una sola vez`);

			var encabezado = document.querySelector("h1");
			if (encabezado.style.fontSize == "50px") {
				encabezado.style.fontSize = "30px";
			} else {
				encabezado.style.fontSize = "50px";
			}
		}, 1000);

		return tiempo;
	};
	var tiempo = intervalo();
	var stop = document.querySelector("#stop");
	stop.addEventListener('click', () => {
		alert(`Has parado el tiempo`);
		clearInterval(tiempo);
	});

	var start = document.querySelector("#start");
	start.addEventListener("click", () => {
		alert(`Tiempo iniciado`);
		intervalo(tiempo);
	});
	// set callback
});
