function postData() {
    // Obtener los datos del formulario
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const fnac = document.getElementById("fecha-nacimiento").value;

    // Crear un objeto JSON con los datos
    const data = {
        name: name,
        apellido: surname,
        fecha: fnac,
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        alert('Datos enviados exitosamente');
    })
    .catch(error => {
        console.error('Error al enviar los datos:', error);
        alert('Error al enviar los datos');
    });
}