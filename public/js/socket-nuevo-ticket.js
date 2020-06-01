

// Comando para establecer la conexion con el servidor
var socket = io();

var label = $('#lblNuevoTicket');

// Escuchar eventos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});

socket.on('estadoActual', function(data) {
    let ticketActual = data.actual;
    
    label.text(ticketActual);
})

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);

    });

})