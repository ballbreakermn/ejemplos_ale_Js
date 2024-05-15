// Obtener el formulario
const formulario = document.getElementById('formulario');

// Agregar un evento de escucha para cuando se envíe el formulario
formulario.addEventListener('submit', function (evento) {
    // Detener el envío del formulario
    evento.preventDefault();

    // Validar los campos del formulario
    if (validarFormulario()) {
        // Si todos los campos son válidos, enviar el formulario
        formulario.submit();
    }
});


// Función para validar los campos del formulario
function validarFormulario() {
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    // Validar cada campo
    if (nombre === '') {
        mostrarError('nombre', 'Por favor ingresa tu nombre');
        return false;
    }

    if (email === '') {
        mostrarError('email', 'Por favor ingresa tu correo electrónico');
        return false;
    }

    if (!validarEmail(email)) {
        mostrarError('email', 'Por favor ingresa un correo electrónico válido');
        return false;
    }

    if (telefono === '') {
        mostrarError('telefono', 'Por favor ingresa tu número de teléfono');
        return false;
    }

    // Si todos los campos son válidos, devolver true
    return true;
}


// ------------------------------------------------------------------------------
// Función para mostrar un mensaje de error debajo de un campo del formulario
function mostrarError(campo, mensaje) {
    const campoError = document.getElementById(`${campo}-error`);
    campoError.innerText = mensaje;
}

// Función para validar un correo electrónico utilizando una expresión regular
function validarEmail(email) {
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(email);
    // método de JavaScript que se utiliza con expresiones regulares para verificar si una cadena de texto cumple con un patrón específico
}