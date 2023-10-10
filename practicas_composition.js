//Estos son los metodos disponibles
const obtenerAño = info => ({ //Función que tiene dentro otra función
    mostrarAño() {
        console.log(`El año de fabricación es ${info.año}`);
    }
});





//Creamos el objeto coche
function Coche(marca, año, precio) {
    let infoCoche = {
        marca,
        año,
        precio
    }

    return Object.assign(//Esto es lo que retorna (toda la infoCoche en un array junto con los métodos que acepta)
        infoCoche,
        obtenerAño(infoCoche)//Método que le incluimos
        
    )
}

const miCoche = Coche('Ferrari', '1950', 20.000);//Creamos un nuevo coche
miCoche.mostrarAño(); //Llamamos uno de sus métodos

const otroCoche = Coche('Renault', '2006', 5000);//Creamos otro coche
otroCoche.mostrarAño(); //Llamamos uno de sus métodos
