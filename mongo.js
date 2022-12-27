var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog_mongo');

var db = mongoose.connection;

mongoose.set('strictQuery', false)
var mongo_chat = mongoose.Schema({
    type: 'string',
    userId: 'number',
    name : 'string',
    message : 'string',
    date : 'string'
});

var chat = mongoose.model('chat', mongo_chat);

module.exports = {
    mongoDB: db,
    chat
}