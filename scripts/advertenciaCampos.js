function hizoClick() {
    var nombre = document.getElementById("Nombre").value;
    var apellido = document.getElementById("Apellido").value;
    var correo = document.getElementById("Correo").value;
    var telefono = document.getElementById("Telefono").value;
    if (nombre == "" || apellido == "" || correo == "" || correo == "" || telefono == "") {
        alert("Debes compeltar los campos obligatorios marcados con un (*)"); 
    } else {
    alert("Enviado");
    }
}

function enviado() {
    alert("Tu seleccion fue procesada. Nos pondremos en contacto con vos para continuar.");
}

function personalizarMate() {
    var correo = document.getElementById("Correo").value;
    if (correo == "") {
        alert("Debes compeltar el campo 'Correo'"); 
    } else {
    alert("Tu seleccion fue procesada. Nos pondremos en contacto con vos para continuar.");
    }
}
