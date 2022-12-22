const {chat} = require('./mongo.js')

function socketEvent(io) {
    io.on('connection', (socket) => {
        console.log('sdf')

        socket.on('AUCTION_END', (response) => {
            console.log(response)
            console.log("hello")

        })
    })
}

module.exports = {
    socketEvent
}