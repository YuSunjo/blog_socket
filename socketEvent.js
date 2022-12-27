const {chat} = require('./mongo.js')

function currentRoom(userId) {
    return userId + "_room"
}
function socketEvent(io) {
    io.on('connection', (socket) => {
        console.log('sdf')

        socket.on('JOIN_ROOM', async (response) => {
            const roomName = response.userId + "_room";
            socket.join(roomName);
        })

        socket.on('USER_CHAT', (response) => {
            console.log(response)

            new chat(response).save((err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log("saved")
                }
            })
            let roomName = currentRoom(response.userId);
            io.to(roomName).emit('USER_CHAT', response)
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

            let roomName = currentRoom(response.userId);
            io.to(roomName).emit('ADMIN_CHAT', response)
        })
    })
}

module.exports = {
    socketEvent
}