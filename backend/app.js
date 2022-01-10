module.exports = io => {

    io.on('connection', (socket) => {

        console.log("new connection");
        socket.emit('log message', "[new anon joined]");

        socket.on('chat message', (nickname, msg) => {
            console.log(`${nickname} : ${msg}`);
            io.emit('chat message', nickname, msg);

        });

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });

    });

}