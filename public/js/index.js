var socket = io();
socket.on('connect', function() {
    console.log('Connected to server.');
});

socket.on('disconnect', function() {
    console.log('Disconnected from server.');
});

socket.on('newMessage', function(message) {
    console.log('Message received.', message);
});

socket.emit('createMessage', {
    from: "Dipak",
    text: "Hi"
}, function(data) {
    console.log('Got it.', data);
});
