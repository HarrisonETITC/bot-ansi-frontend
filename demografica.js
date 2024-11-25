function guardarDemografica() {
    const tipo_documento = document.getElementById('tipo_documento').value;
    const primer_nombre = document.getElementById('primer_nombre').value;
    const segundo_nombre = document.getElementById('segundo_nombre').value;
    const primer_apellido = document.getElementById('primer_apellido').value;
    const segundo_apellido = document.getElementById('segundo_apellido').value;
    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('contraseña').value;
    const numero_celular = document.getElementById('numero_celular').value;

    fetch('http://localhost:3000/api/demografica', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            tipo_documento,
            primer_nombre,
            segundo_nombre,
            primer_apellido,
            segundo_apellido,
            email,
            contraseña,
            numero_celular
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Datos guardados correctamente');
        } else {
            alert('Error al guardar los datos');
        }
    })
    .catch(error => {
        alert('Error de conexión: ' + error);
    });
}
