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

const personaje1 = {
    nombre: 'Aventurero1',
    inventario: ['espada', 'poción de salud', 'armadura']
};

const personaje2 = {
    nombre: 'Aventurero2',
    inventario: ['arco', 'poción de maná', 'espada']
};



function combinarInventarios(personaje1, personaje2) {
    const inventarioCombinado = [...personaje1.inventario, ...personaje2.inventario];

    // Utiliza filter y indexOf para eliminar duplicados
    const inventarioSinDuplicados = inventarioCombinado.filter(
    (item, index, array) => array.indexOf(item) === index
  );

  return inventarioSinDuplicados;
}

const nuevoInventario = combinarInventarios(personaje1, personaje2);
console.log(nuevoInventario);

