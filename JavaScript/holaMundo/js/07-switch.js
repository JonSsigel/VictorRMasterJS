"use strict"

//Switch


console.log("Switch");

var edad = 25;
var imprime = "";

switch(edad){
case 18:
		//console.log(`Tienes ${edad} años de edad`);
		imprime = "Acabas de cumplir la mayoria de edad";
	break;
	case 25: 
		//console.log(`Tienes ${edad} años de edad`);
		imprime = "Ya eres un adulto";
	break;

	case 40:
		//console.log(`Tienes ${edad} años de edad`);
		imprime = "Crisis de los cuarenta";
	break;
	case 75:
		//console.log(`Tienes ${edad} años de edad`);
		imprime = "Eres ya un anciano";
	break;
	default:
		imprime = "Nada de lo anterior";
	break;
}

console.log(imprime);
	


