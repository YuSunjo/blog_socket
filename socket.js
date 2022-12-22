const {app} = require('./app.js')
const {mongoDB} = require('./mongo.js')
const { Server } = require('socket.io');
const {socketEvent} = require("./socketEvent");
const {mongo} = require("mongoose");

// express 서버
const port = 3030;
const server = app.listen( port, function(){
    console.log('Express listening on port', port);
});

const io = new Server(server);

mongoDB.on('mongo db error', console.error);

mongoDB.once('open', function() {
    console.log('Connected to mongod server');
});

socketEvent(io)