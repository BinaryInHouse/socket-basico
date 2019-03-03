var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor');
});

//Escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexion con el servidor');
});

//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Alexander', //Comentar para activar el error cundo no se envia datos
    mensaje: 'Hola Alex',
    descripcion: 'Mensaje del cliente'
}, function(resp) {
    console.log('Respuesta del servidor', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Saludo del servidor:', mensaje);

});