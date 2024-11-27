# Inicio de curso
	+ Programación desde cero
	+ JavaScript moderno
	+ jQuery
	+ Maquetación web
	+ TypeScript y JS POO
	+ Angular desde cero 
	+ BackEnd NodeJS
	+ Express/REST
	+ MEAN Stack, MongoDBExpressAngularNodeJS
	+ Desarrollo web full-stack usando JS
## HTML
	+ Qué es y las etiquetas.
	+ Estructura
	+ Etiquetas para textos.
	+ Listas
	+ Imágenes
	+ Tablas
	+ Formularios
	+ Ejercicios completos y más

### Lenguaje de marcado para dar estructura a una página web.
No tiene que ver con el comportamiento.
### CSS
Para dar estilo.

Para estar chido con etiquetas es bueno o mejor ver en internet, si si

<etiqueta atributo="valor">Texto o datos></etiqueta>
Etiquetas h van hasta la seis y sirven para prioridad, el h1 siempre debe ser uno solo y ya.

Etiquetas para textos
br es para salto de linea 
hr para salto de linea pero con rayita pintada
strong pone en negritas
em pone en cursiva
span hace nada sobre el texto pero le puedes dar id's, clases y así, para dar estilos con CSS 
i texto en cursiva
blockquote para hacer referencias lo pone como con sangria y asi.


## listas.
ol - lista ordenada. Esta tiene numeritos
ul - listas no ordenadas. Deben ser las que tienen puntitos

Dentro de listas puedes poner mas listas.

## Imagen
+ Abre y cierra inmediatamente, no lleva texto
	 + propiedades
	 + Alt para poner texto que se muestra en caso de no ver la imagen.
	 + Title para poner titulo de la imagen al pasar por encima.
	 + src para poner la imagen
		 + Ruta absoluta, que es la que tiene dentro de mi maquina
		 + Ruta relativa, que es la referente al index
	 + width, height para modificar el size de la imagen y va en 100px y asi. Xpx

## Tablas
+ Etiquetas
	+ table, atributo border para ver el borde de la tabla, se le puso un 1 pero es ver que tanto se le puede poner
		+ th para el encabezado de la tabla, es con td pero en negritas
		+ tr renglones
			 + td columnas, atributos: colspan es el tamaño, osea si le pongo dos es de dos columnas

## Formularios
+ Atributos
	+ action para saber a donde va y asi.
	+ method para saber el metodo que se usa, post, put y asi
+ label para poner una etiqueta y en name es bueno poner a que input va, poniendo el mismo nombre para CSS y asi.
+ input atributos type, name, placeholder
+ textarea para meter mucho texto
+ hay varios, se uso el selector e input de tipo radio.

+ input tipo submit para borrar y enviar

# Ejercicio
	Varias paginas enlazadas
	Pagina principal con encabezado, menu de listas con enlaces a otras paginas
		Subtitulo, encabezado de menor tamanio
		Parrafo, imagen, y un enlace llevara a otra pagina con el mismo encabezado y menus
			Diferencia es el subtitulo y una tabla que llevara con cada elemento un texto y abajo una imagen
		Mismo encabezado para otra página de contacto.
			Formulario, nombre, descripcion, selector y botón de enviar. Páginas enlazadas entre si.
## Etiquetas adicionales

a propiedad href para mandar a un link, puede ser una ubicacion, la propiedad title es un toolkit
	propiedad target="_blank" para que lo abra en otra ventana


# JavaScript
	+ Primeros pasos, el hola mundo y así
	+ Variables
	+ Tipos de datos
	+ Operadores
	+ Condicionales
	+ Bucles
	+ Alertas y ventanas
	+ Bloque de ejercicios 1
	+ Funciones
	+ Arrays
	+ Bloque de ejercicios 2

## Herramientas básicas.
	+ Editor de código
	+ Navegador web

## Poner código JS dentro de un html es con la etiqueta <script></script>

# Consola. 
	+ Presentó la consola y así.

# Variables. 
# Modo estricto.
	+ Buenas prácticas.
		'use strict' al inicio de todo archivo.

# Var y Let.
	+ Para definir variables, let es de TypeScript.
let para definir en el bloque de código.
	Vale y existe en el bloque donde se crea. 
var crea variables globales.

# Constantes
	+ Su contenido nunca va a cambiar. Su valor no puede ser modificado.

# Operadores y tipos de datos.
    Los clásicos + - * / % pero, el % quedó raro, dice que manda el resto de una división del primero vs el segundo pero 1 % 44 me retornó 1, no sé por qué.
    + Funciones
        + Number(string) -> Retorna un number, puede ser flotante.
        + parseInt(string) -> Retorna un número entero
        + parseFloat(string) -> Me retornó un number que puede ser flotante XD
        + String(algo) -> vuelve algo en un string
        + typeof(algo) -> Tipo de dato exacto de variables.

# Condicionales.
    + Comparar algo y ejecutar acción dependiendo del resultado de la comparación.

    + Operadores relacionales.
        + > Mayor
        + < Menor 
        + >= Mayor o igual
        + <= Menor o igual //> puse el mayor que para hacer como el scape, jaja.
        + == igual
        + != distinto
        + === Exactamente igual, incluyedo tipo
    + Operadores lógicos.
        + And:&&
        + Or:||
        + Negación:!
    + Switch
        +Para posibles casos.
Cambio para acentos.

    + For recordar que no se puede poner solo i = 1, hay que definirla con var o let i = 2

## debugger
    + El compi puso un debugger; en el for, y el código se para ahí, y en la consola, le puso en el watcher un + y numero para ver lo que tiene la variable.

    + while. No olvidar poner dentro del bucle el incremento y no se quede la página trabada. Este se ejecuta mientras la condición se cumpla.
        + Puede tener decrementos usando el -- en lugar de ++

    + do-while, este hace todo una vez por lo menos ya que evalua al final.

    + break dentro de un bucle hace que salga.

# Alertas, confirmaciones y poopUps
    + alert(). Para alertas.
    + confirm(). Para confirmaciones. Aceptar y cancelar,true false.
    + prompt(textoMostrado,valorDefecto);

# Ejercicios.
    01. Un programa que compare dos números y nos diga cuál es mayor, cuál es menor y si son iguales.


# Parámetro opcional.
    + Se definen con valores default para que no den lata.

# PARAMETRO REST Y SPREAD.
    + rest es el ...parametro, y se guarda un array de valores. Y este es al definir la función.
    + spread igual que el de arriba pero este es al mandar el parámetro.

# Cadenas
    + del 23 en adelante.
    +
# Arreglos.
    + checar el forEach
    + peliculas.splice(indice,1);// splice en arreglos permite sacar valores empezando en el índice que le dices y el segundo es el cuantos borrará/sacará





# Inicio video 60 
