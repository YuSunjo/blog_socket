const {chat} = require('./mongo.js')

function socketEvent(io) {
    io.on('connection', (socket) => {
        console.log('sdf')

        socket.on('USER_CHAT', (response) => {
            console.log(response)

            new chat(response).save((err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log("saved")
                }
            })

            io.emit('USER_CHAT', response)
        })

        socket.on('ADMIN_CHAT', (response) => {
            console.log(response)

            new chat(response).save((err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log("saved")
                }
            })

            io.emit('ADMIN_CHAT', response)
        })
    })
}

module.exports = {
    socketEvent
}