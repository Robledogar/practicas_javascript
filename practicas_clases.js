//CLASES

class Maquina {
    constructor(nombre, velocidad){
        this.nombre = nombre;
        this.velocidad = velocidad;
    }
}

//METODOS
const metodosBasicosMaquinas = {
    mostrarInfoMaquina() {
        console.log(`${this.nombre} tiene una velocidad de ${this.velocidad}`);
    }
}

//ASIGNACIÓN DE METODOS A LAS CLASES 
Object.assign(Maquina.prototype, metodosBasicosMaquinas);





const cintaTransportadora = new Maquina('Cinta transportadora', 3000);

cintaTransportadora.mostrarInfoMaquina();











// const funcionesPersona = {
//     mostrarInformacion() {
//         console.log(`Nombre persona: ${this.nombre}, Email: ${this.email}`)
//     },
//     otraFuncion() {
//         console.log('Puedo agregar todas las funciones que quiera');
//     }
// }

// // Añadir funcionesPersona a la clase Persona
// Object.assign(Persona.prototype, funcionesPersona);
// Object.assign(Cliente.prototype, funcionesPersona);