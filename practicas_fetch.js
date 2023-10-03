
obtenerDatos();


function obtenerDatos(){
    fetch('/ejemplo_libros.json')
        .then (respuesta => {
            return respuesta.json()
        })
        .then (resultado => {
            mostrarDatos(resultado)
        })

        
}


function mostrarDatos(libros) {
    libros.forEach(libro => {
        const { titulo, autor, año_publicacion, publicado } = libro
    })
}




