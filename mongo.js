var mongoose = require('mongoose');
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL);

var db = mongoose.connection;

mongoose.set('strictQuery', false)
var mongo_chat = mongoose.Schema({
    type: 'string',
    memberId: 'number',
    name : 'string',
    message : 'string',
    date : 'string'
});

var chat = mongoose.model('chat', mongo_chat);

module.exports = {
    mongoDB: db,
    chat
}