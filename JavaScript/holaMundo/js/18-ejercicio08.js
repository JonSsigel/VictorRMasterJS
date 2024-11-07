'use strict'

/*
 * Calculadora.
 * + Pida dos números por pantalla.
 * + Validar que sean números correctos.
 * + En body de página, alert y consola el resultado de sumar, restar, multiplicar y dividir esas dos cifras.
 * */


var numero1 =parseInt(prompt('Número 01:',0));
var numero2 =parseInt(prompt('Número 02:',0));

while (isNaN(numero1) || isNaN(numero2)){
	numero1 = parseInt(prompt('Número 01:',0));
	numero2 = parseInt(prompt('Número 02:',0));
}

var resultado = `La suma es ${numero1 + numero2} <br>
La resta es ${numero1 - numero2} <br>
La multiplicación es ${numero1 * numero2} <br>
La división es ${numero1 / numero2} <br>`;

var resultadoCMD = `La suma es ${numero1 + numero2}\n 
La resta es ${numero1 - numero2} \n
La multiplicación es ${numero1 * numero2} \n 
La división es ${numero1 / numero2} \n `;



document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);
