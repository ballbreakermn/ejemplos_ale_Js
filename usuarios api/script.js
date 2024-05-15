const boton = document.getElementById('llamar');
boton.addEventListener('click', llamarAPI)

function llamarAPI() {
    const json =
        fetch('https://reqres.in/api/users?page=1')
            .then(response => response.json())//respuesta convertida a Json
            // .then(data => console.log(data))
            .then(data => dibujarDatos(data));

    console.log(json);
}

function dibujarDatos(json) {
    const filas = json.data.map(obj => Fila(obj));

    document.getElementById('datos').innerHTML = filas.join('');

}

function Fila(obj) {
    return `
            <tr>    
                <th>${obj.id}</th>
                <th>${obj.email}</th>
                <th>${obj.first_name}</th>
                <th>${obj.last_name}</th>
                <th><img src="${obj.avatar}" alt="${obj.first_name}"></th>
            </tr>
    `
}

