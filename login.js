document.body.onload = addElement;

function addElement() {
    // create a new div element 
    // and give it popup content 
    const newDiv = document.createElement("div");
    newDiv.classList.add('position-absolute', 'z-3')
    newDiv.setAttribute('id','popup');
    newDiv.style.display = 'none';
    newDiv.style.width = '100vw';
    newDiv.style.height = '100vh';
    newDiv.style.alignItems = 'center';
    newDiv.style.justifyContent = 'center';
    newDiv.style.backgroundColor = 'rgb(0 0 0 / .3)';
    newDiv.innerHTML += '<div class="card shadow-lg p-4"><h3 class="mb-5">¿Desea ayudarnos completando un pequeño formulario? Este no le tomará mucho tiempo :)</h3> <div class="d-flex gap-3"> <button type="button" class="btn btn-primary w-100 fw-bold fs-4" onclick="irDemografica()">De acuerdo!</button> <button type="button" class="btn btn-danger w-100 fw-bold fs-4" onclick="irGracias()">Tal vez después</button> </div> </div>';

    // add the newly created element and its content into the DOM 
    const currentDiv = document.getElementById("main_container");
    document.body.insertBefore(newDiv, currentDiv);
}

function openPopup() {
    const el = document.getElementById('popup');
    el.style.display = 'flex';

    // Updates: set window background color black
    document.body.style.background = '#353333';
}

function closePopup() {
    const el = document.getElementById('popup');
    el.style.display = 'none';
}

function login() {
    console.log(token);
    const numero = document.getElementById('numero').value;
    const contrasena = document.getElementById('contrasena').value;

    fetch(`${url}/api/login/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ numero_celular: numero, contrasena })
    })
        .then(response => response.json())
        .then(body => {
            if (body.message === 'Usuario creado correctamente') {
                localStorage.setItem('numero', numero);
                openPopup();
            } else {
                alert(body.message);
            }
        })
        .catch(error => alert('Error de conexión: ' + error));
}

function irDemografica() {
    window.location.href = 'demografica.html';
}

function irGracias() {
    window.location.href = 'gracias.html';
}
