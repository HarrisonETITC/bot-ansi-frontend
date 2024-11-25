function login() {
    const numero = document.getElementById('numero').value;
    const contrasena = document.getElementById('contrasena').value;

    fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tel, contrasena })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Login exitoso') {
            localStorage.setItem('userId', data.user.id_usuario);
            window.location.href = 'demografica.html'; 
        } else {
            alert(data.message);
        }
    })
    .catch(error => alert('Error de conexión: ' + error));
}
