// Exportar una función
function suma(a,b) {
    return a + b;
}

// Exportar una variable
const PI = 3.14159265;

// Exportar un objeto
const persona = {
    nombre: 'Juan',
    edad: 30
};

// Función para elegir al azar un elemento de un array
    function elegirElementoAlAzar(array) {
        // Generar un índice aleatorio dentro del rango del array
        const indiceAleatorio = Math.floor(Math.random() * array.length);
    
        // Devolver el elemento correspondiente al índice aleatorio
        // return array[indiceAleatorio];
        console.log(array[indiceAleatorio])
    }

export {suma, PI, persona, elegirElementoAlAzar};