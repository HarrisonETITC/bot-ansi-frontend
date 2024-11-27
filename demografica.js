function guardarDemografica() {
    const primer_nombre = document.getElementById('primer_nombre').value;
    const segundo_nombre = document.getElementById('segundo_nombre').value;
    const primer_apellido = document.getElementById('primer_apellido').value;
    const segundo_apellido = document.getElementById('segundo_apellido').value;
    const email = document.getElementById('email').value;
    const edad = document.getElementById('edad').value;
    const ocupacion = document.getElementById('ocupacion').value;
    const ciudad = document.getElementById('ciudad').value;
    const etnia = document.getElementById('etnia').value;
    const estado_civil = document.getElementById('estado_civil').value;
    const celular = localStorage.getItem('numero');

    const data = {
        email,
        nombres: primer_nombre + ((segundo_nombre != undefined && segundo_nombre.trim() != '')? (" " + segundo_nombre) : ""),
        apellidos: primer_apellido + ((segundo_apellido != undefined && segundo_apellido.trim() != '')? (" " + segundo_apellido) : ""),
        edad,
        ocupacion,
        estado_civil,
        ciudad,
        etnia,
        celular
    }

    fetch(`${url}/api/infodemo/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            ...data
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.statusCode >= 300) {
            throw new Error(data.message)
        }
        if (data.message === `Información del usuario ${celular} creada correctamente`)
            alert('Se ha registrado su información. Gracias!')
        window.location.href = 'gracias.html';
    })
    .catch(error => {
        alert('Hubo un error al realizar la petición: ' + error.message);
    });
}
