"use strict"

//alert("Tipos de datos");
// Operadores

var numero1 = 1;
var numero2 = 44;

var operacion = numero1 % numero2;

//alert("El resultado de la operación es: "+ operacion);

//Tipos de datos
//Los clásicos + - * / % pero, el % quedó raro, dice que manda el resto de una división del primero vs el segundo pero 1 % 44 me retornó 1, no sé por qué.

var numero_entero = 44;
var cadena_texto = "Chinga 'tu' madre"; // La comilla doble tiene prioridad. a la inversa no se puede
var cadena_texto_2 = 'Chiales "que" traes';// Ja, esta también se puede, la comilla con prioridad son las inciales.
var verdadero_o_falso = true;// Dice que para los booleanos puede ser true or false o 1 y 0, al tiro con eso.

var numero_falso = "33.4";


//alert(cadena_texto);
console.log({verdadero_o_falso});// 
console.log(numero_falso);

// función number
console.log(Number(numero_falso));// Puede ser flotante
console.log(parseInt(numero_falso));// Es número entero.
console.log(parseFloat(numero_falso));

console.log(String(numero_falso));
