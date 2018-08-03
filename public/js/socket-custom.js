var socket = io();

// Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos la conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Yaco',
    mensaje: 'Hola servidor'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

socket.on('enviarMensaje', function(mensaje, callback) {
    console.log('Servidor: ', mensaje);
});