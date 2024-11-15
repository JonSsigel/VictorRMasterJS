'use strict'
//Parámetros.

function porConsola(numero1,numero2,mostrar){
		console.log('Suma '+(numero1+numero2));
		console.log('Resta '+(numero1-numero2));
		console.log('Multiplicacion '+(numero1*numero2));
		console.log('Division '+(numero1/numero2));
		console.log(mostrar);
		console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')

};
function porPantalla(numero1,numero2,mostrar){
		document.write('Suma '+(numero1+numero2)+'<br/>');
		document.write('Resta '+(numero1-numero2)+'<br/>');
		document.write('Multiplicacion '+(numero1*numero2)+'<br/>');
		document.write('Division '+(numero1/numero2)+'<br/>');
		document.write(mostrar+'<br/>');
		document.write('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
		document.write('<br/>');

};

function calculadora(numero1, numero2, mostrar = false){

	if(mostrar == false){
		porConsola(numero1, numero2,mostrar);
	}else {
		porPantalla(numero1, numero2,mostrar);
	}
	
	return true;
}

calculadora(12,8,true);
calculadora(42,8);

/*for(var i = 1;i<11;i++){*/
	/*console.log(i);*/
	/*calculadora(i,8);*/
/*}*/

// Parametros opcionales.
 
