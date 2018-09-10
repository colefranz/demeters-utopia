const express = require('express');
const app = express();
const server = require('http').Server(app);
// const io = require('socket.io').listen(server);

app.use('/', express.static(__dirname + '/build'));
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
});

server.listen(process.env.PORT || 8080, () => {
    console.log(`Listening on ${server.address().port}`);
});
