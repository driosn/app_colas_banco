var socket = io();

// Escuchar eventos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar eventos
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Enviar información
// socket.emit('enviarMensaje', {  
//     usuario: 'David',
//     mensaje: 'Hola mundo'
// }, function(resp) {
//     console.log('Respuesta server: ', resp)
// });

// Escuchar informacion
socket.on('enviarMensaje', function(message) {
    console.log('Servidor', message);
})

