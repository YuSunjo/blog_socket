var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog_mongo');

var db = mongoose.connection;

var mongo_chat = mongoose.Schema({
    userId: 'number',
    name : 'string',
    message : 'string',
    date : 'string'
});

var chat = mongoose.model('Schema', mongo_chat);

module.exports = {
    mongoDB: db,
    chat
}