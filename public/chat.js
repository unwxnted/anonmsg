var socket = io();

var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');
var nickname = document.getElementById('nickname');

nickname.value = 'anon';

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value) {
        fetch('/api/chat', {
            headers: new Headers({
                'author': nickname.value,
                'message': input.value
            }),
            method: "POST"
        })

        socket.emit('chat message', nickname.value, input.value);
        input.value = '';
    }
});

socket.on('chat message', function (nickname, msg) {
    var item = document.createElement('li');
    item.textContent = nickname + " : " + msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

socket.on('log message', function (msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});