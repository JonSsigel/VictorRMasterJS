'use strict'

window.addEventListener('load',() => {
   let fecha = new Date();
   console.log({fecha}); 

   let year = fecha.getFullYear();
   let month = fecha.getMonth();// Enero es el mes 0
   let day = fecha.getDate();
   let hour = fecha.getHours();
   let minute = fecha.getMinutes();
   let second = fecha.getSeconds();

   let textoHora = `
        El año es: ${year} 
        El mes es: ${month}
        El día es: ${day}
        La hora es: ${hour}
        Los minutos son: ${minute}
        Los segundos son: ${second}
   `;

   console.log(textoHora);
});