                // SPREAD OPERATORS
/*------------------------------------------------------ */
// Copiando arrays
// Puedes usar el operador de propagación para copiar elementos de un array en otro array. Esto es útil cuando deseas duplicar un array sin modificar el original:

// const originalArray = [1, 2, 3];
// const copiedArray = [...originalArray ,12];

// console.log(copiedArray);
// console.log(originalArray)

/*------------------------------------------------------ */
// Combinando arrays
// Puedes combinar dos o más arrays en uno solo usando el operador de propagación:

// const array1 = [1,2,3];
// const array2 = [4,5,6];

// const combinedArray = [...array1, ...array2];
// console.log(combinedArray);

/*------------------------------------------------------ */
// Copiando objetos
// El operador de propagación también se puede utilizar para copiar objetos en otros objetos. Esto permite crear una copia superficial del objeto original:

// const originalObject = {
//     nombre: 'John',
//     edad: 30
// };

// const copiedObject = {...originalObject};
// console.log(copiedObject);

/*------------------------------------------------------ */
// Combinando objetos
// Al igual que con los arrays, puedes combinar dos o más objetos en uno solo usando el operador de propagación:

// const object1 = {
//     nombre: 'John',
//     edad: 30
// };

// const object2 = {
//     nombre: 'Jose Luis',
//     edad: 44
// };

// const combineObject = {...object1, ...object2};
// console.log(combineObject);

/*------------------------------------------------------ */

// Pasando argumentos de funciones
// El operador de propagación también se utiliza a menudo para pasar un array como una lista de argumentos a una función:

// function sumar(a, b, c) {
//     return a + b + c;
// }

// const numeros = [1, 2, 3];
// const resultado = sumar(...numeros);

// console.log(resultado);

/*------------------------------------------------------ */
// Ejercicio: Combinar objetos y arrays

// Imagina que estás desarrollando una aplicación de lista de tareas. Tienes dos listas de tareas, una lista de tareas pendientes y una lista de tareas completadas. Tu objetivo es crear una nueva lista de tareas que combine ambas listas y luego eliminar las tareas duplicadas.

// const tareasPendientes = [
//     {id: 1, tarea: 'Hacer la compra'},
//     {id: 2, tarea: 'Llamar al médico'},
//     {id: 3, tarea: 'Estudiar para el examen'},

// ];

// const tareasCompletadas = [
//     {id: 2, tarea: 'Llamar al médico'},
//     {id: 4, tarea: 'Preparar la cena'},
// ];

// const listaTareas = [...tareasPendientes, ...tareasCompletadas];

// console.log(listaTareas);


/*------------------------------------------------------ */
// Ejercicio: Combinar inventarios de personajes en un videojuego

// Imagina que estás desarrollando un videojuego de rol en el que los personajes tienen inventarios. Tienes dos personajes, cada uno con su propio inventario representado como objetos. Tu objetivo es crear una función que combine los inventarios de los dos personajes en un nuevo inventario y luego elimine los objetos duplicados.

// const personaje1 = {
//     nombre: 'Aventurero1',
//     inventario: ['espada', 'poción de salud', 'armadura']
// };

// const personaje2 = {
//     nombre: 'Aventurero2',
//     inventario: ['arco', 'poción de maná', 'espada']
// };



// function combinarInventarios(personaje1, personaje2) {
//     const inventarioCombinado = [...personaje1.inventario, ...personaje2.inventario];

//     // Utiliza filter y indexOf para eliminar duplicados
//     const inventarioSinDuplicados = inventarioCombinado.filter(
//     (item, index, array) => array.indexOf(item) === index
//   );

//   return inventarioSinDuplicados;
// }

// const nuevoInventario = combinarInventarios(personaje1, personaje2);
// console.log(nuevoInventario);







/*------------------------------------------------------ */
                // DESTRUCTURING
/*------------------------------------------------------ */
            // Desestructuración de objetos:

// Desestructuración básica de objetos:
// const persona = {
//     nombre: 'Juan',
//     edad: 30
// };
// const {nombre, edad} = persona;

// console.log(nombre);
// console.log(edad);


/*------------------------------------------------------ */
// Asignación con alias:

// const persona = {
//     nombre: 'Maria',
//     edad: 25
// };

// const {nombre: nombrePersona, edad: edadPersona} = persona;

// console.log(nombrePersona + ' ' + edadPersona)

/*------------------------------------------------------ */
// Valores predeterminados:
// const persona = {
//     nombre: 'Pedro'
// };

// const { nombre, edad = 18 } = persona;

// console.log(edad);

/*------------------------------------------------------ */
                // Desestructuración de arreglos:

// Desestructuración básica de arreglos:

// const colores = ['rojo', 'verde', 'azul'];
// colores.push('Negro');

// const [primerColor, segundoColor, tercerColor, cuartoColor = 'naranja'] = colores;

// const nuevoArray = [...colores]

// console.log(cuartoColor);

/*------------------------------------------------------ */
// Desestructuración básica de arreglos:
// const numeros = [1,2,3,4,5];

// const [, , tercerNumero, , quintoNumero] = numeros;

// console.log(tercerNumero);


/*------------------------------------------------------ */
// Rest parameter con arreglos:

// const frutas = ['Manzana', 'Banana', 'Uva', 'Kiwi'];
// const [primeraFruta, ...restoDeFrutas] = frutas;

// console.log(restoDeFrutas)




/*------------------------------------------------------ */
                        // JSON
/*------------------------------------------------------ */

// Creación de un objeto JSON:
// const persona = {
//     nombre: 'Juan',
//     edad: 30,
//     ciudad: 'Nueva York'
// };
// console.log(persona)

/*------------------------------------------------------ */
// Serialización y deserialización:
// Puedes convertir objetos JavaScript en JSON y viceversa utilizando JSON.stringify() y JSON.parse():

//Convertir un objeto JavaScript a Json
// const persona = {
//     nombre: 'Juan',
//     edad: 30,
//     ciudad: 'Nueva York'
// };

// const personaJSON = JSON.stringify(persona); //Serializada
// console.log(personaJSON);

// // Convertir JSON a un objeto JavaScript
// const personaDeserializada = JSON.parse(personaJSON);
// console.log(personaDeserializada)

/*------------------------------------------------------ */
// Acceder a propiedades de un objeto JSON:
// Puedes acceder a las propiedades de un objeto JSON de la misma manera que lo harías con un objeto JavaScript normal:

// const persona = {
//     nombre: 'Juan',
//     edad: 30,
//     ciudad: 'Nueva York'
// };

// const {ciudad } = persona;

// console.log(persona.ciudad);
// console.log(persona.edad)
// console.log(ciudad)


/*------------------------------------------------------ */
// Iterar sobre un arreglo de objetos JSON:

// const libros = [
//     {titulo: 'Libro 1', autor: 'Autor 1'}
// ];

// // Generar y agregar 50 objetos más al array
// for (let i = 2; i <= 10; i++) {
//     libros.push({ titulo: `Libro ${i}`, autor: `Autor ${i}` });
// };

// Iterando
// libros.forEach(libro => {
//     console.log(libro);
// });

// libros.forEach((libro, index) => {
//     console.log(`Libro ${index + 1}: ${libro.titulo} - ${libro.autor}`);
//   });


/*------------------------------------------------------ */
// Manipular datos JSON:
// Puedes agregar, modificar y eliminar propiedades en objetos JSON:

// const producto = {
//     nombre: 'Laptop',
//     precio: 1000
// };

// // Agregar una propiedad
// producto.stock = 50;

// // Modificar una propiedad
// producto.precio = 1200;

// // Eliminar una propiedad
// delete producto.stock;


// console.log(producto)
// console.log(producto.stock)  //undefined






/*------------------------------------------------------ */
                        // METODOS ARRAY
/*------------------------------------------------------ */
// Método map:
// El método map se utiliza para transformar cada elemento de un arreglo y crear un nuevo arreglo con los resultados de aplicar una función a cada elemento. La función que proporcionas como argumento se ejecutará una vez por cada elemento del arreglo original, y el valor devuelto se incluirá en el nuevo arreglo resultante. Aquí tienes un ejemplo:

// const numeros = [1,2,3,4,5,6,7];

// const cuadrados = numeros.map((numero) => numero * numero );

// console.log(cuadrados);


/*------------------------------------------------------ */
// Método filter:
// El método filter se utiliza para crear un nuevo arreglo que contiene solo los elementos que cumplan con cierta condición o criterio. La función que proporcionas como argumento se ejecutará en cada elemento del arreglo original, y solo los elementos que devuelvan true se incluirán en el nuevo arreglo. Aquí tienes un ejemplo:

// const numeros = [1,2,3,4,5];
// const pares = numeros.filter((numero) => numero % 2 === 0);

// console.log(pares);


/*------------------------------------------------------ */
// Método reduce:
// El método reduce se utiliza para reducir un arreglo a un solo valor. Toma una función que se ejecuta en cada elemento del arreglo y acumula un valor resultante mientras itera sobre los elementos. El valor acumulado se pasa de una iteración a la siguiente. Aquí tienes un ejemplo:

// const numeros = [1,2,3,4,5];
// const suma = numeros.reduce((total, numero) => total + numero, 0); 

// console.log(suma)



/*------------------------------------------------------ */
                        // MODULOS
/*------------------------------------------------------ */
// import { suma, PI, persona } from '/modulo.js';

// console.log(suma(5, 3));
// console.log(PI);
// console.log(persona);