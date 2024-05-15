var boton = document.getElementById('agregaImagen');
boton.addEventListener('click', agregarImagen);

function agregarImagen() {
    // obtenemos referencia de los elementos
    var url = document.getElementById('imagenURL').value;
    var pie = document.getElementById('pieFoto').value;
    var galeria = document.getElementById('galeriaImagenes');


    // condicion por si los campos son vacios
    if (url && pie) {
        // creamos los elementos
        var div = document.createElement('div');
        var img = document.createElement('img');
        var p = document.createElement('p');

        // agregamos los valores que capturamos
        img.src = url
        p.textContent = pie;
        // modificamos width/height (si se requiere)
        img.width = 300;
        img.height = 250;

        //construimos el contenedor con los elementos
        div.appendChild(img);
        div.appendChild(p);
        galeria.appendChild(div);//agregamos el div con imagen y parrafo
        
    } else {
        alert("INGRESE LOS CAMPOS PEDIDOS")
    }



}
