const path = require('path');
const express = require("express");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.normalize(path.join(__dirname + '..\\..\\public')));
app.use(express.static(path.normalize(path.join(__dirname + '..\\..\\..\\public'))));

require("./routes/routes")(app);

require("./app")(io);

http.listen(port, () => {
  console.log(`server on: http://localhost:${port}/`);
});
