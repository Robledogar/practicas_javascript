//ELEMENTOS DEL HTML
const contenedorPrincipal = document.querySelector('.contenedorPrincipal');

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
    },
    transportarMaterial() {
        console.log('arrancando la cinta');
        setTimeout(() => {
            console.log('El material ha llegado a su destino');
        },this.velocidad)
    },
    crearMaquina() {
        const maquinaCreada = document.createElement('DIV');
        maquinaCreada.classList.add('maquina');

        const nombre = document.createElement('H1');
        nombre.textContent = this.nombre;

        const velocidad = document.createElement('H2');
        velocidad.textContent = this.velocidad;

        maquinaCreada.appendChild(nombre);
        maquinaCreada.appendChild(velocidad);
        contenedorPrincipal.appendChild(maquinaCreada);

        // setInterval(()=> {
        //     this.velocidad -= 200;
        //     velocidad.textContent = this.velocidad;

        // },1000)

        
    }
}

//ASIGNACIÓN DE METODOS A LAS CLASES 
Object.assign(Maquina.prototype, metodosBasicosMaquinas);





const cintaTransportadora = new Maquina('Cinta transportadora', 6000);
const rotopala = new Maquina('Rotopala', 10000);


cintaTransportadora.crearMaquina();
rotopala.crearMaquina();













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